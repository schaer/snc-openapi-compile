"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Attributes for appending a note to an existing incident (PATCH-method).","type":"object","required":["id"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":2}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4,"maxItems":5}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern1 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$", "u");
const pattern2 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern3 = new RegExp("[1-5]", "u");
const pattern4 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern5 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern6 = new RegExp("^data:;base64,.*", "u");
const pattern7 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
for(const key0 in data){
if(!((((key0 === "id") || (key0 === "relatedParty")) || (key0 === "relatedObject")) || (key0 === "note"))){
const err1 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
if(data.id !== undefined){
let data0 = data.id;
if(typeof data0 === "string"){
if(func2(data0) > 64){
const err2 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(!pattern0.test(data0)){
const err3 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
else {
const err4 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data1 = data.relatedParty;
if(Array.isArray(data1)){
if(data1.length > 4){
const err5 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
const len0 = data1.length;
for(let i0=0; i0<len0; i0++){
let data2 = data1[i0];
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.href !== undefined){
if(typeof data2.href !== "string"){
const err6 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data2.role !== undefined){
if(typeof data2.role !== "string"){
const err7 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
}
else {
const err8 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
for(const key1 in data2){
if(!((((key1 === "role") || (key1 === "id")) || (key1 === "href")) || (key1 === "name"))){
const err9 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(data2.role !== undefined){
let data5 = data2.role;
if(typeof data5 === "string"){
if(func2(data5) > 64){
const err10 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
else {
const err11 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
if(data2.id !== undefined){
let data6 = data2.id;
if(typeof data6 === "string"){
if(func2(data6) > 64){
const err12 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
else {
const err13 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data2.href !== undefined){
let data7 = data2.href;
if(typeof data7 === "string"){
if(func2(data7) > 4096){
const err14 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
else {
const err15 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(data2.name !== undefined){
let data8 = data2.name;
if(typeof data8 === "string"){
if(func2(data8) > 100){
const err16 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
else {
const err17 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
}
const _errs26 = errors;
let valid7 = false;
let passing0 = null;
const _errs27 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data9 = data2.role;
if(typeof data9 !== "string"){
const err18 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
if(!((data9 === "originator") || (data9 === "owner"))){
const err19 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(data2.id !== undefined){
let data10 = data2.id;
if(typeof data10 === "string"){
if(!pattern1.test(data10)){
const err20 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
else {
const err21 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
}
var _valid0 = _errs27 === errors;
if(_valid0){
valid7 = true;
passing0 = 0;
}
const _errs32 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data11 = data2.role;
if(typeof data11 !== "string"){
const err22 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
if(!(data11 === "assigneeGroup")){
const err23 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(data2.id !== undefined){
let data12 = data2.id;
if(typeof data12 === "string"){
if(func2(data12) > 64){
const err24 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
}
else {
const err25 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
}
}
var _valid0 = _errs32 === errors;
if(_valid0 && valid7){
valid7 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid7 = true;
passing0 = 1;
}
const _errs37 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data13 = data2.role;
if(typeof data13 !== "string"){
const err26 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
if(!(data13 === "reportingPerson")){
const err27 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
}
if(data2.id !== undefined){
let data14 = data2.id;
if(typeof data14 === "string"){
if(func2(data14) > 256){
const err28 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
else {
const err29 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
}
}
var _valid0 = _errs37 === errors;
if(_valid0 && valid7){
valid7 = false;
passing0 = [passing0, 2];
}
else {
if(_valid0){
valid7 = true;
passing0 = 2;
}
}
}
if(!valid7){
const err30 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
else {
errors = _errs26;
if(vErrors !== null){
if(_errs26){
vErrors.length = _errs26;
}
else {
vErrors = null;
}
}
}
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role === undefined){
const err31 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
if(data2.id === undefined){
const err32 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
}
else {
const err33 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
let i1 = data1.length;
let j0;
if(i1 > 1){
outer0:
for(;i1--;){
for(j0 = i1; j0--;){
if(func0(data1[i1], data1[j0])){
const err34 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
break outer0;
}
}
}
}
}
else {
const err35 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
if(Array.isArray(data1)){
if(data1.length > 2){
const err36 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 2},message:"must NOT have more than 2 items"};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
if(data1.length < 2){
const err37 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
}
else {
const err38 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data15 = data.relatedObject;
if(Array.isArray(data15)){
if(data15.length < 4){
const err39 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
const len1 = data15.length;
for(let i2=0; i2<len1; i2++){
let data16 = data15[i2];
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
if(typeof data16.involvement !== "string"){
const err40 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
}
if(data16.href !== undefined){
if(typeof data16.href !== "string"){
const err41 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
}
}
else {
const err42 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
for(const key2 in data16){
if(!((((key2 === "involvement") || (key2 === "id")) || (key2 === "href")) || (key2 === "name"))){
const err43 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
}
if(data16.involvement !== undefined){
let data19 = data16.involvement;
if(typeof data19 === "string"){
if(func2(data19) > 64){
const err44 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
}
else {
const err45 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
}
if(data16.id !== undefined){
let data20 = data16.id;
if(typeof data20 === "string"){
if(func2(data20) > 64){
const err46 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
}
else {
const err47 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
}
if(data16.href !== undefined){
if(typeof data16.href !== "string"){
const err48 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
}
if(data16.name !== undefined){
let data22 = data16.name;
if(typeof data22 === "string"){
if(func2(data22) > 100){
const err49 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
}
else {
const err50 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
}
}
const _errs66 = errors;
let valid18 = false;
let passing1 = null;
const _errs67 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data23 = data16.involvement;
if(typeof data23 !== "string"){
const err51 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
if(!((data23 === "securityPolicy") || (data23 === "securityClassification"))){
const err52 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
}
if(data16.id !== undefined){
let data24 = data16.id;
if(typeof data24 === "string"){
if(func2(data24) > 32){
const err53 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
}
else {
const err54 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
}
if(data16.href !== undefined){
let data25 = data16.href;
if(typeof data25 === "string"){
if(func2(data25) > 4096){
const err55 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
}
else {
const err56 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
}
}
var _valid1 = _errs67 === errors;
if(_valid1){
valid18 = true;
passing1 = 0;
}
const _errs74 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data26 = data16.involvement;
if(typeof data26 !== "string"){
const err57 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
if(!(data26 === "releasabilityCommunity")){
const err58 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
}
if(data16.id !== undefined){
let data27 = data16.id;
if(typeof data27 === "string"){
if(func2(data27) > 256){
const err59 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
else {
const err60 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
}
if(data16.href !== undefined){
let data28 = data16.href;
if(typeof data28 === "string"){
if(func2(data28) > 4096){
const err61 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
else {
const err62 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err62];
}
else {
vErrors.push(err62);
}
errors++;
}
}
}
var _valid1 = _errs74 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid18 = true;
passing1 = 1;
}
const _errs81 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data29 = data16.involvement;
if(typeof data29 !== "string"){
const err63 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
if(!(data29 === "urgency")){
const err64 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
if(data16.id !== undefined){
let data30 = data16.id;
if(typeof data30 !== "string"){
const err65 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
if(!(((data30 === "high") || (data30 === "medium")) || (data30 === "low"))){
const err66 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
if(data16.href !== undefined){
let data31 = data16.href;
if(typeof data31 === "string"){
if(func2(data31) > 4096){
const err67 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
}
}
else {
const err68 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
}
}
var _valid1 = _errs81 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid18 = true;
passing1 = 2;
}
const _errs88 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data32 = data16.involvement;
if(typeof data32 !== "string"){
const err69 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
if(!(data32 === "csirLabel")){
const err70 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
}
if(data16.id !== undefined){
let data33 = data16.id;
if(typeof data33 === "string"){
if(!pattern2.test(data33)){
const err71 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
}
else {
const err72 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
}
if(data16.href !== undefined){
let data34 = data16.href;
if(typeof data34 === "string"){
if(func2(data34) > 4096){
const err73 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
else {
const err74 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
}
}
var _valid1 = _errs88 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 3];
}
else {
if(_valid1){
valid18 = true;
passing1 = 3;
}
const _errs95 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data35 = data16.involvement;
if(typeof data35 !== "string"){
const err75 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
if(!(data35 === "impactedLocation")){
const err76 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
if(data16.id !== undefined){
let data36 = data16.id;
if(typeof data36 === "string"){
if(func2(data36) > 64){
const err77 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
}
else {
const err78 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
}
if(data16.href !== undefined){
let data37 = data16.href;
if(typeof data37 === "string"){
if(func2(data37) > 4096){
const err79 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
}
else {
const err80 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err80];
}
else {
vErrors.push(err80);
}
errors++;
}
}
}
var _valid1 = _errs95 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 4];
}
else {
if(_valid1){
valid18 = true;
passing1 = 4;
}
const _errs102 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data38 = data16.involvement;
if(typeof data38 !== "string"){
const err81 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
if(!(data38 === "serviceImpact")){
const err82 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
}
if(data16.id !== undefined){
let data39 = data16.id;
if(typeof data39 === "string"){
if(!pattern3.test(data39)){
const err83 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
}
else {
const err84 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
}
if(data16.href !== undefined){
let data40 = data16.href;
if(typeof data40 === "string"){
if(func2(data40) > 4096){
const err85 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
}
else {
const err86 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
}
}
var _valid1 = _errs102 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 5];
}
else {
if(_valid1){
valid18 = true;
passing1 = 5;
}
const _errs109 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data41 = data16.involvement;
if(typeof data41 !== "string"){
const err87 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
if(!((data41 === "isMajorIncident") || (data41 === "isCyberSecurityIncident"))){
const err88 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
}
if(data16.id !== undefined){
let data42 = data16.id;
if(typeof data42 !== "string"){
const err89 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
if(!((data42 === "true") || (data42 === "false"))){
const err90 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
}
if(data16.href !== undefined){
let data43 = data16.href;
if(typeof data43 === "string"){
if(func2(data43) > 4096){
const err91 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
}
else {
const err92 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err92];
}
else {
vErrors.push(err92);
}
errors++;
}
}
}
var _valid1 = _errs109 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 6];
}
else {
if(_valid1){
valid18 = true;
passing1 = 6;
}
const _errs116 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data44 = data16.involvement;
if(typeof data44 !== "string"){
const err93 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
if(!((((((data44 === "impactedService") || (data44 === "relatedEvent")) || (data44 === "relatedIncident")) || (data44 === "relatedProblem")) || (data44 === "relatedServiceRequest")) || (data44 === "relatedFederatedConfigurationItem"))){
const err94 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
}
if(data16.id !== undefined){
let data45 = data16.id;
if(typeof data45 === "string"){
if(func2(data45) > 64){
const err95 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
}
if(!pattern4.test(data45)){
const err96 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
}
else {
const err97 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
}
if(data16.href !== undefined){
let data46 = data16.href;
if(typeof data46 === "string"){
if(func2(data46) > 4096){
const err98 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
}
else {
const err99 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
}
}
var _valid1 = _errs116 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 7];
}
else {
if(_valid1){
valid18 = true;
passing1 = 7;
}
const _errs123 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data47 = data16.involvement;
if(typeof data47 !== "string"){
const err100 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
if(!(data47 === "relatedAttachment")){
const err101 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
}
if(data16.id !== undefined){
let data48 = data16.id;
if(typeof data48 === "string"){
if(!pattern5.test(data48)){
const err102 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
}
else {
const err103 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
}
if(data16.name !== undefined){
if(typeof data16.name !== "string"){
const err104 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
}
if(data16.href !== undefined){
let data50 = data16.href;
if(typeof data50 === "string"){
if(func2(data50) > 5592421){
const err105 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
if(!pattern6.test(data50)){
const err106 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
}
else {
const err107 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err107];
}
else {
vErrors.push(err107);
}
errors++;
}
}
}
var _valid1 = _errs123 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 8];
}
else {
if(_valid1){
valid18 = true;
passing1 = 8;
}
const _errs132 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data51 = data16.involvement;
if(typeof data51 !== "string"){
const err108 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
if(!(data51 === "fsmRecordClass")){
const err109 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
}
if(data16.id !== undefined){
let data52 = data16.id;
if(typeof data52 !== "string"){
const err110 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
if(!(data52 === "INCIDENT")){
const err111 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
}
if(data16.href !== undefined){
let data53 = data16.href;
if(typeof data53 === "string"){
if(func2(data53) > 4096){
const err112 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err112];
}
else {
vErrors.push(err112);
}
errors++;
}
}
else {
const err113 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
}
}
var _valid1 = _errs132 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 9];
}
else {
if(_valid1){
valid18 = true;
passing1 = 9;
}
}
}
}
}
}
}
}
}
}
if(!valid18){
const err114 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
else {
errors = _errs66;
if(vErrors !== null){
if(_errs66){
vErrors.length = _errs66;
}
else {
vErrors = null;
}
}
}
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement === undefined){
const err115 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
if(data16.id === undefined){
const err116 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
}
else {
const err117 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
}
let i3 = data15.length;
let j1;
if(i3 > 1){
outer1:
for(;i3--;){
for(j1 = i3; j1--;){
if(func0(data15[i3], data15[j1])){
const err118 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
break outer1;
}
}
}
}
}
else {
const err119 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
if(Array.isArray(data15)){
if(data15.length > 5){
const err120 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/maxItems",keyword:"maxItems",params:{limit: 5},message:"must NOT have more than 5 items"};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
if(data15.length < 4){
const err121 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
}
else {
const err122 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
}
if(data.note !== undefined){
let data54 = data.note;
if(Array.isArray(data54)){
const len2 = data54.length;
for(let i4=0; i4<len2; i4++){
let data55 = data54[i4];
if(data55 && typeof data55 == "object" && !Array.isArray(data55)){
if(data55.date !== undefined){
let data56 = data55.date;
if(typeof data56 === "string"){
if(!pattern7.test(data56)){
const err123 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
if(!(formats0.validate(data56))){
const err124 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
}
else {
const err125 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
if(data55.author !== undefined){
if(typeof data55.author !== "string"){
const err126 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
}
if(data55.text !== undefined){
if(typeof data55.text !== "string"){
const err127 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
}
}
else {
const err128 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
if(data55 && typeof data55 == "object" && !Array.isArray(data55)){
if(data55.date === undefined){
const err129 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
if(data55.author === undefined){
const err130 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
if(data55.text === undefined){
const err131 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
for(const key3 in data55){
if(!(((key3 === "date") || (key3 === "author")) || (key3 === "text"))){
const err132 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
}
if(data55.date !== undefined){
let data59 = data55.date;
if(typeof data59 === "string"){
if(!pattern7.test(data59)){
const err133 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
if(!(formats0.validate(data59))){
const err134 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
}
}
else {
const err135 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
}
if(data55.author !== undefined){
let data60 = data55.author;
if(typeof data60 === "string"){
if(func2(data60) > 100){
const err136 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
}
else {
const err137 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err137];
}
else {
vErrors.push(err137);
}
errors++;
}
}
if(data55.text !== undefined){
if(typeof data55.text !== "string"){
const err138 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
}
}
if(data55 && typeof data55 == "object" && !Array.isArray(data55)){
if(data55.date === undefined){
const err139 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
}
if(data55.author === undefined){
const err140 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
if(data55.text === undefined){
const err141 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err141];
}
else {
vErrors.push(err141);
}
errors++;
}
}
else {
const err142 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
}
let i5 = data54.length;
let j2;
if(i5 > 1){
outer2:
for(;i5--;){
for(j2 = i5; j2--;){
if(func0(data54[i5], data54[j2])){
const err143 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
break outer2;
}
}
}
}
}
else {
const err144 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
}
}
else {
const err145 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
