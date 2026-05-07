// Standalone date-time validator ported from ajv-formats (RFC 3339 §5.6, strict timezone).
// Replaces require("ajv-formats/dist/formats").fullFormats["date-time"] in generated code.
const FORMAT_DATE_TIME =
  '(function(){' +
  'var DATE=/^(\\d\\d\\d\\d)-(\\d\\d)-(\\d\\d)$/;' +
  'var DAYS=[0,31,28,31,30,31,30,31,31,30,31,30,31];' +
  'var TIME=/^(\\d\\d):(\\d\\d):(\\d\\d(?:\\.\\d+)?)(z|([+-])(\\d\\d)(?::?(\\d\\d))?)?$/i;' +
  'var SEP=/t|\\s/i;' +
  'function leap(y){return y%4===0&&(y%100!==0||y%400===0)}' +
  'function date(s){' +
    'var m=DATE.exec(s);if(!m)return false;' +
    'var y=+m[1],mo=+m[2],d=+m[3];' +
    'return mo>=1&&mo<=12&&d>=1&&d<=(mo===2&&leap(y)?29:DAYS[mo])' +
  '}' +
  'function time(s){' +
    'var m=TIME.exec(s);if(!m)return false;' +
    'var hr=+m[1],min=+m[2],sec=+m[3],tz=m[4];' +
    'var tzSign=m[5]==="-"?-1:1,tzH=+(m[6]||0),tzM=+(m[7]||0);' +
    'if(tzH>23||tzM>59||!tz)return false;' +  // strict: timezone required
    'if(hr<=23&&min<=59&&sec<60)return true;' +
    'var um=min-tzM*tzSign,uh=hr-tzH*tzSign-(um<0?1:0);' +
    'return(uh===23||uh===-1)&&(um===59||um===-1)&&sec<61' +
  '}' +
  'return{validate:function(s){var p=s.split(SEP);return p.length===2&&date(p[0])&&time(p[1])}}' +
  '})()'

const UCS2LENGTH =
  'function ucs2length(r){for(var t,e=r.length,n=0,c=0;c<e;)n++,' +
  '(t=r.charCodeAt(c++))>=55296&&t<=56319&&c<e&&' +
  '56320==(64512&(t=r.charCodeAt(c)))&&c++;return n}'

const EQUAL =
  'function equal(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){' +
  'if(r.constructor!==t.constructor)return!1;var e,n,o;if(Array.isArray(r)){' +
  'if((e=r.length)!=t.length)return!1;for(n=e;0!=n--;)if(!equal(r[n],t[n]))return!1;return!0}' +
  'if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;' +
  'if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();' +
  'if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();' +
  'if((e=(o=Object.keys(r)).length)!==Object.keys(t).length)return!1;' +
  'for(n=e;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;' +
  'for(n=e;0!=n--;){var u=o[n];if(!equal(r[u],t[u]))return!1}return!0}return r!=r&&t!=t}'

export function generateScriptInclude(file) {
  const className = `${file.name}Validator`

  let code = escapeForServiceNow(file.standaloneCode)

  // Extract function name from the module.exports assignment — works with minified code
  const fnMatch = code.match(/\bmodule\.exports\s*=\s*(validate\d+)/)
  const functionName = fnMatch ? fnMatch[1] : 'validate0'

  // Remove "use strict" and fix .enum property access (ServiceNow keyword conflict)
  code = code.replaceAll('"use strict";', '')
  code = code.replaceAll('.enum', '["enum"]')

  // Remove module.exports assignments (handles minified single-line code)
  code = code.replace(/\bmodule\.exports(?:\.\w+)?\s*=[^;]*;/g, '')

  // Remove lines with only a semicolon and blank lines (formatted code only, no-op on minified)
  code = code.replace(/^\s*;$/gm, '')
  code = code.replace(/^\s*[\r\n]/gm, '')

  // Replace require() calls with inline implementations
  code = code.replace('require("ajv/dist/runtime/ucs2length").default', UCS2LENGTH)
  code = code.replace('require("ajv/dist/runtime/equal").default', EQUAL)
  code = code.replace('require("ajv-formats/dist/formats").fullFormats["date-time"]', FORMAT_DATE_TIME)
  code = code.replace("require(\"ajv-formats/dist/formats\").fullFormats['date-time']", FORMAT_DATE_TIME)

  // Prefix numbered helper identifiers with this. so they live on the class instance
  code = code.replace(/(formats\d{1,2})/gm, 'this.$1')
  code = code.replace(/(func\d{1,2})/gm, 'this.$1')
  code = code.replace(/(schema\d{1,2})/gm, 'this.$1')
  code = code.replace(/(pattern\d{1,2})/gm, 'this.$1')

  // Remove validate function self-reference prefix (e.g. "validate10.errors" -> "errors")
  code = code.replaceAll(functionName + '.', '')

  // Move error tracking variables onto the instance
  code = code.replaceAll('vErrors', 'this.vErrors')
  code = code.replace(/\berrors\b/g, 'this.errors')

  // Strip var/let/const from this.* assignments so they become plain property assignments
  // (e.g. "let this.errors = 0;" -> "this.errors = 0;" — keeps the reset each call)
  code = code.replace(/(?:var|let|const) (this\.)/g, '$1')

  // Rename to canonical _validate
  code = code.replaceAll(functionName, '_validate')

  // Remove "u" regex flag from new RegExp(...) calls (not supported by ServiceNow).
  // If stripping leaves an empty flags string, remove the second argument entirely.
  code = code.replace(/(new RegExp\([^,)]+),\s*"([^"]*)"/g, (_, regexpArg, flags) => {
    const cleaned = flags.replace(/u/g, '')
    return cleaned ? `${regexpArg}, "${cleaned}"` : regexpArg
  })

  // Remove ES6 destructuring from the _validate parameter list.
  // ServiceNow's Rhino engine may not support parameter destructuring with default values,
  // which can cause the function to fail partway through and return only the first error.
  // Since the wrapper always calls _validate(data) with no second argument, the defaults
  // (instancePath="" and rootData=data) are injected as explicit var declarations instead.
  code = code.replace(
    /function _validate\(data,\s*\{[^}]*\}\s*=\s*\{\}\)/,
    'function _validate(data)'
  )
  code = code.replace(
    'function _validate(data){',
    "function _validate(data){\nvar instancePath = '';\nvar rootData = data;"
  )

  // Replace ES6 const/let with var throughout the generated validation code.
  // ServiceNow's Rhino engine (ES5 mode) does not support const/let, which can cause
  // SyntaxErrors inside the function body — only the first error gets captured before the crash.
  code = code.replace(/\b(const|let)\b/g, 'var')

  // Split at the _validate function declaration so helpers go into initialize()
  // and the validate function becomes a sibling prototype method
  const splitMarker = 'function _validate('
  const idx = code.indexOf(splitMarker)

  const helperCode = idx >= 0 ? code.slice(0, idx).trim() : ''
  const validateBody = idx >= 0 ? code.slice(idx).trim() : code.trim()

  // Convert "function _validate(...)" to "_validate: function(...)"
  const protoMethod = validateBody.replace(/^function (_validate)/, '$1: function')

  const ind8 = s => s.split('\n').map(l => '        ' + l).join('\n')
  const ind4 = s => s.split('\n').map(l => '    ' + l).join('\n')

  const parts = [
    `// Generated by ServiceNow AJV Compile`,
    `// Source: ${file.filePath}`,
    `var ${className} = Class.create();`,
    `${className}.prototype = {`,
    `    initialize: function() {`,
  ]

  if (helperCode) {
    parts.push(ind8(helperCode))
  }

  parts.push(
    `    },`,
    ``,
    ind4(protoMethod).trimEnd() + `,`,
    ``,
    `    validate: function(data) {`,
    `        this._validate(data);`,
    `        var errs = Array.isArray(this.vErrors) ? this.vErrors : [];`,
    `        return {`,
    `            valid: errs.length === 0,`,
    `            errors: errs`,
    `        };`,
    `    },`,
    ``,
    `    type: '${className}'`,
    `};`,
    ``,
  )

  return { ...file, scriptInclude: parts.join('\n') }
}

// Fixes two known ServiceNow JS parser bugs with regex literals:
//   1. \xNN hex escapes for control characters (U+0000–U+001F) are rejected —
//      convert to \uNNNN form, which is semantically identical.
//   2. An unescaped / inside a character class [...] is misidentified as the
//      end of the regex — escape it to \/ so the parser reads it correctly.
function escapeForServiceNow(code) {
  return escapeSlashInRegexCharClasses(
    code.replace(/\\x([0-9a-fA-F]{2})/g, (match, hex) =>
      parseInt(hex, 16) < 0x20
        ? `\\u${parseInt(hex, 16).toString(16).padStart(4, '0')}`
        : match
    )
  )
}

// State-machine scanner: finds regex literals in JS source and escapes any
// bare / inside character classes [...] to prevent ServiceNow parse errors.
function escapeSlashInRegexCharClasses(code) {
  let out = ''
  let i = 0

  while (i < code.length) {
    // Single- or double-quoted string literals: copy verbatim
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i]
      out += code[i++]
      while (i < code.length && code[i] !== q) {
        if (code[i] === '\\' && i + 1 < code.length) out += code[i++]
        out += code[i++]
      }
      if (i < code.length) out += code[i++]
      continue
    }

    // Template literals: copy verbatim (simplified — no nested ${} handling needed)
    if (code[i] === '`') {
      out += code[i++]
      while (i < code.length && code[i] !== '`') {
        if (code[i] === '\\' && i + 1 < code.length) out += code[i++]
        out += code[i++]
      }
      if (i < code.length) out += code[i++]
      continue
    }

    // Line comments
    if (code[i] === '/' && code[i + 1] === '/') {
      while (i < code.length && code[i] !== '\n') out += code[i++]
      continue
    }

    // Block comments
    if (code[i] === '/' && code[i + 1] === '*') {
      out += code[i++]; out += code[i++]
      while (i < code.length && !(code[i] === '*' && code[i + 1] === '/')) out += code[i++]
      if (i < code.length) { out += code[i++]; out += code[i++] }
      continue
    }

    // Regex literal: / in a position where it cannot be the division operator
    if (code[i] === '/' && isRegexStart(out)) {
      out += code[i++] // opening /
      let inClass = false
      while (i < code.length) {
        if (code[i] === '\\' && i + 1 < code.length) {
          out += code[i++]; out += code[i++] // escaped character — pass through
          continue
        }
        if (code[i] === '[')  { inClass = true;  out += code[i++]; continue }
        if (code[i] === ']')  { inClass = false; out += code[i++]; continue }
        if (code[i] === '/' && !inClass) { out += code[i++]; break } // closing /
        if (code[i] === '/' &&  inClass) { out += '\\/'; i++; continue } // escape /
        out += code[i++]
      }
      // Regex flags (g i m s u v y) — strip 'u' (not supported by ServiceNow)
      let flags = ''
      while (i < code.length && /[gimsuyv]/.test(code[i])) flags += code[i++]
      out += flags.replace(/u/g, '')
      continue
    }

    out += code[i++]
  }

  return out
}

// Returns true when the preceding output ends with a token that means the
// next / starts a regex rather than a division operator.
function isRegexStart(preceding) {
  const trimmed = preceding.trimEnd()
  if (!trimmed.length) return true
  const last = trimmed[trimmed.length - 1]
  return '=(:,[!&|?{;~^'.includes(last) || trimmed.endsWith('=>')
}
