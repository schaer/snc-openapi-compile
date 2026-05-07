/**
 * Converts an arbitrary string into a valid PascalCase JavaScript class name.
 * Non-alphanumeric word separators are removed and the following letter is capitalised.
 * Leading non-letter characters are stripped; the first character is uppercased.
 *
 * @param {string} str
 * @returns {string}
 */
export function toClassName(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[^a-zA-Z]+/, '')
    .replace(/^./, s => s.toUpperCase())
}
