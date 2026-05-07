"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Attributes for updating a existing incident (PATCH-method).","type":"object","required":["id","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}};
const func2 = Object.prototype.hasOwnProperty;
const func3 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern1 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
const pattern3 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$", "u");
const pattern4 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern5 = new RegExp("[1-5]", "u");
const pattern6 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern7 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern8 = new RegExp("^data:;base64,.*", "u");
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
if(data.status === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
for(const key0 in data){
if(!(func2.call(schema11.properties, key0))){
const err2 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
if(data.id !== undefined){
let data0 = data.id;
if(typeof data0 === "string"){
if(func3(data0) > 64){
const err3 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(!pattern0.test(data0)){
const err4 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
else {
const err5 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err6 = {instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data.severity !== undefined){
let data2 = data.severity;
if(typeof data2 !== "string"){
const err7 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
if(!(((((data2 === "critical") || (data2 === "high")) || (data2 === "medium")) || (data2 === "low")) || (data2 === "none"))){
const err8 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data.type !== undefined){
let data3 = data.type;
if(typeof data3 === "string"){
if(func3(data3) > 50){
const err9 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
else {
const err10 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data.targetResolutionDate !== undefined){
let data4 = data.targetResolutionDate;
if(typeof data4 === "string"){
if(!pattern1.test(data4)){
const err11 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(!(formats0.validate(data4))){
const err12 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err13 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data.status !== undefined){
let data5 = data.status;
if(typeof data5 !== "string"){
const err14 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
if(!(((((((data5 === "Submitted") || (data5 === "Rejected")) || (data5 === "Acknowledged")) || (data5 === "InProgress")) || (data5 === "Resolved")) || (data5 === "Closed")) || (data5 === "Cancelled"))){
const err15 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(data.subStatus !== undefined){
let data6 = data.subStatus;
if(typeof data6 !== "string"){
const err16 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
if(!((data6 === "Held") || (data6 === "Pending"))){
const err17 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
if(data.resolutionDate !== undefined){
let data7 = data.resolutionDate;
if(typeof data7 === "string"){
if(!pattern1.test(data7)){
const err18 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
if(!(formats0.validate(data7))){
const err19 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
else {
const err20 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data8 = data.relatedParty;
if(Array.isArray(data8)){
if(data8.length > 4){
const err21 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
const len0 = data8.length;
for(let i0=0; i0<len0; i0++){
let data9 = data8[i0];
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
if(data9.href !== undefined){
if(typeof data9.href !== "string"){
const err22 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
if(data9.role !== undefined){
if(typeof data9.role !== "string"){
const err23 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
}
else {
const err24 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
for(const key1 in data9){
if(!((((key1 === "role") || (key1 === "id")) || (key1 === "href")) || (key1 === "name"))){
const err25 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
}
if(data9.role !== undefined){
let data12 = data9.role;
if(typeof data12 === "string"){
if(func3(data12) > 64){
const err26 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
}
else {
const err27 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
}
if(data9.id !== undefined){
let data13 = data9.id;
if(typeof data13 === "string"){
if(func3(data13) > 64){
const err28 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err29 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
}
if(data9.href !== undefined){
let data14 = data9.href;
if(typeof data14 === "string"){
if(func3(data14) > 4096){
const err30 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
}
else {
const err31 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
}
if(data9.name !== undefined){
let data15 = data9.name;
if(typeof data15 === "string"){
if(func3(data15) > 100){
const err32 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err33 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
}
const _errs40 = errors;
let valid7 = false;
let passing0 = null;
const _errs41 = errors;
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
if(data9.role !== undefined){
let data16 = data9.role;
if(typeof data16 !== "string"){
const err34 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
if(!((data16 === "originator") || (data16 === "owner"))){
const err35 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
}
if(data9.id !== undefined){
let data17 = data9.id;
if(typeof data17 === "string"){
if(!pattern3.test(data17)){
const err36 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
}
else {
const err37 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
}
}
var _valid0 = _errs41 === errors;
if(_valid0){
valid7 = true;
passing0 = 0;
}
const _errs46 = errors;
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
if(data9.role !== undefined){
let data18 = data9.role;
if(typeof data18 !== "string"){
const err38 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
if(!(data18 === "assigneeGroup")){
const err39 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
}
if(data9.id !== undefined){
let data19 = data9.id;
if(typeof data19 === "string"){
if(func3(data19) > 64){
const err40 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
}
else {
const err41 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid0 = _errs46 === errors;
if(_valid0 && valid7){
valid7 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid7 = true;
passing0 = 1;
}
const _errs51 = errors;
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
if(data9.role !== undefined){
let data20 = data9.role;
if(typeof data20 !== "string"){
const err42 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
if(!(data20 === "reportingPerson")){
const err43 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
}
if(data9.id !== undefined){
let data21 = data9.id;
if(typeof data21 === "string"){
if(func3(data21) > 256){
const err44 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err45 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
}
}
var _valid0 = _errs51 === errors;
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
const err46 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
else {
errors = _errs40;
if(vErrors !== null){
if(_errs40){
vErrors.length = _errs40;
}
else {
vErrors = null;
}
}
}
if(data9 && typeof data9 == "object" && !Array.isArray(data9)){
if(data9.role === undefined){
const err47 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
if(data9.id === undefined){
const err48 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
}
else {
const err49 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
}
let i1 = data8.length;
let j0;
if(i1 > 1){
outer0:
for(;i1--;){
for(j0 = i1; j0--;){
if(func0(data8[i1], data8[j0])){
const err50 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
break outer0;
}
}
}
}
}
else {
const err51 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
if(Array.isArray(data8)){
if(data8.length > 3){
const err52 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 3},message:"must NOT have more than 3 items"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
if(data8.length < 2){
const err53 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
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
const err54 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data22 = data.relatedObject;
if(Array.isArray(data22)){
if(data22.length < 4){
const err55 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
const len1 = data22.length;
for(let i2=0; i2<len1; i2++){
let data23 = data22[i2];
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
if(typeof data23.involvement !== "string"){
const err56 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
}
if(data23.href !== undefined){
if(typeof data23.href !== "string"){
const err57 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
}
}
else {
const err58 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
for(const key2 in data23){
if(!((((key2 === "involvement") || (key2 === "id")) || (key2 === "href")) || (key2 === "name"))){
const err59 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
if(data23.involvement !== undefined){
let data26 = data23.involvement;
if(typeof data26 === "string"){
if(func3(data26) > 64){
const err60 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
}
else {
const err61 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data23.id !== undefined){
let data27 = data23.id;
if(typeof data27 === "string"){
if(func3(data27) > 64){
const err62 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err62];
}
else {
vErrors.push(err62);
}
errors++;
}
}
else {
const err63 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
}
if(data23.href !== undefined){
if(typeof data23.href !== "string"){
const err64 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
if(data23.name !== undefined){
let data29 = data23.name;
if(typeof data29 === "string"){
if(func3(data29) > 100){
const err65 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
}
else {
const err66 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
}
const _errs80 = errors;
let valid18 = false;
let passing1 = null;
const _errs81 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data30 = data23.involvement;
if(typeof data30 !== "string"){
const err67 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
}
if(!((data30 === "securityPolicy") || (data30 === "securityClassification"))){
const err68 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
}
if(data23.id !== undefined){
let data31 = data23.id;
if(typeof data31 === "string"){
if(func3(data31) > 32){
const err69 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
}
else {
const err70 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
}
if(data23.href !== undefined){
let data32 = data23.href;
if(typeof data32 === "string"){
if(func3(data32) > 4096){
const err71 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err72 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
}
}
var _valid1 = _errs81 === errors;
if(_valid1){
valid18 = true;
passing1 = 0;
}
const _errs88 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data33 = data23.involvement;
if(typeof data33 !== "string"){
const err73 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
if(!(data33 === "releasabilityCommunity")){
const err74 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
}
if(data23.id !== undefined){
let data34 = data23.id;
if(typeof data34 === "string"){
if(func3(data34) > 256){
const err75 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
else {
const err76 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
if(data23.href !== undefined){
let data35 = data23.href;
if(typeof data35 === "string"){
if(func3(data35) > 4096){
const err77 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err78 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
}
}
var _valid1 = _errs88 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid18 = true;
passing1 = 1;
}
const _errs95 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data36 = data23.involvement;
if(typeof data36 !== "string"){
const err79 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
if(!(data36 === "urgency")){
const err80 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err80];
}
else {
vErrors.push(err80);
}
errors++;
}
}
if(data23.id !== undefined){
let data37 = data23.id;
if(typeof data37 !== "string"){
const err81 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
if(!(((data37 === "high") || (data37 === "medium")) || (data37 === "low"))){
const err82 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
}
if(data23.href !== undefined){
let data38 = data23.href;
if(typeof data38 === "string"){
if(func3(data38) > 4096){
const err83 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err84 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
}
}
var _valid1 = _errs95 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid18 = true;
passing1 = 2;
}
const _errs102 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data39 = data23.involvement;
if(typeof data39 !== "string"){
const err85 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
if(!(data39 === "csirLabel")){
const err86 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
}
if(data23.id !== undefined){
let data40 = data23.id;
if(typeof data40 === "string"){
if(!pattern4.test(data40)){
const err87 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
}
else {
const err88 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
}
if(data23.href !== undefined){
let data41 = data23.href;
if(typeof data41 === "string"){
if(func3(data41) > 4096){
const err89 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
}
else {
const err90 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
}
}
var _valid1 = _errs102 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 3];
}
else {
if(_valid1){
valid18 = true;
passing1 = 3;
}
const _errs109 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data42 = data23.involvement;
if(typeof data42 !== "string"){
const err91 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
if(!(data42 === "impactedLocation")){
const err92 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err92];
}
else {
vErrors.push(err92);
}
errors++;
}
}
if(data23.id !== undefined){
let data43 = data23.id;
if(typeof data43 === "string"){
if(func3(data43) > 64){
const err93 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
}
else {
const err94 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
}
if(data23.href !== undefined){
let data44 = data23.href;
if(typeof data44 === "string"){
if(func3(data44) > 4096){
const err95 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
}
}
else {
const err96 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
}
}
var _valid1 = _errs109 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 4];
}
else {
if(_valid1){
valid18 = true;
passing1 = 4;
}
const _errs116 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data45 = data23.involvement;
if(typeof data45 !== "string"){
const err97 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
if(!(data45 === "serviceImpact")){
const err98 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
}
if(data23.id !== undefined){
let data46 = data23.id;
if(typeof data46 === "string"){
if(!pattern5.test(data46)){
const err99 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
}
else {
const err100 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
}
if(data23.href !== undefined){
let data47 = data23.href;
if(typeof data47 === "string"){
if(func3(data47) > 4096){
const err101 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
}
else {
const err102 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
}
}
var _valid1 = _errs116 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 5];
}
else {
if(_valid1){
valid18 = true;
passing1 = 5;
}
const _errs123 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data48 = data23.involvement;
if(typeof data48 !== "string"){
const err103 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
if(!((data48 === "isMajorIncident") || (data48 === "isCyberSecurityIncident"))){
const err104 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
}
if(data23.id !== undefined){
let data49 = data23.id;
if(typeof data49 !== "string"){
const err105 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
if(!((data49 === "true") || (data49 === "false"))){
const err106 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
}
if(data23.href !== undefined){
let data50 = data23.href;
if(typeof data50 === "string"){
if(func3(data50) > 4096){
const err107 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err107];
}
else {
vErrors.push(err107);
}
errors++;
}
}
else {
const err108 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
}
}
var _valid1 = _errs123 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 6];
}
else {
if(_valid1){
valid18 = true;
passing1 = 6;
}
const _errs130 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data51 = data23.involvement;
if(typeof data51 !== "string"){
const err109 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
if(!((((((data51 === "impactedService") || (data51 === "relatedEvent")) || (data51 === "relatedIncident")) || (data51 === "relatedProblem")) || (data51 === "relatedServiceRequest")) || (data51 === "relatedFederatedConfigurationItem"))){
const err110 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
}
if(data23.id !== undefined){
let data52 = data23.id;
if(typeof data52 === "string"){
if(func3(data52) > 64){
const err111 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
if(!pattern6.test(data52)){
const err112 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err113 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
}
if(data23.href !== undefined){
let data53 = data23.href;
if(typeof data53 === "string"){
if(func3(data53) > 4096){
const err114 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
}
else {
const err115 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
}
}
var _valid1 = _errs130 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 7];
}
else {
if(_valid1){
valid18 = true;
passing1 = 7;
}
const _errs137 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data54 = data23.involvement;
if(typeof data54 !== "string"){
const err116 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
if(!(data54 === "relatedAttachment")){
const err117 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
}
if(data23.id !== undefined){
let data55 = data23.id;
if(typeof data55 === "string"){
if(!pattern7.test(data55)){
const err118 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
}
else {
const err119 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
}
if(data23.name !== undefined){
if(typeof data23.name !== "string"){
const err120 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
}
if(data23.href !== undefined){
let data57 = data23.href;
if(typeof data57 === "string"){
if(func3(data57) > 5592421){
const err121 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
if(!pattern8.test(data57)){
const err122 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
}
else {
const err123 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
}
}
var _valid1 = _errs137 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 8];
}
else {
if(_valid1){
valid18 = true;
passing1 = 8;
}
const _errs146 = errors;
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement !== undefined){
let data58 = data23.involvement;
if(typeof data58 !== "string"){
const err124 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
if(!(data58 === "fsmRecordClass")){
const err125 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
if(data23.id !== undefined){
let data59 = data23.id;
if(typeof data59 !== "string"){
const err126 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
if(!(data59 === "INCIDENT")){
const err127 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
}
if(data23.href !== undefined){
let data60 = data23.href;
if(typeof data60 === "string"){
if(func3(data60) > 4096){
const err128 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
}
else {
const err129 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
}
}
var _valid1 = _errs146 === errors;
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
const err130 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
else {
errors = _errs80;
if(vErrors !== null){
if(_errs80){
vErrors.length = _errs80;
}
else {
vErrors = null;
}
}
}
if(data23 && typeof data23 == "object" && !Array.isArray(data23)){
if(data23.involvement === undefined){
const err131 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
if(data23.id === undefined){
const err132 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
}
else {
const err133 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
}
let i3 = data22.length;
let j1;
if(i3 > 1){
outer1:
for(;i3--;){
for(j1 = i3; j1--;){
if(func0(data22[i3], data22[j1])){
const err134 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
break outer1;
}
}
}
}
}
else {
const err135 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
if(Array.isArray(data22)){
if(data22.length < 4){
const err136 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
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
const err137 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err137];
}
else {
vErrors.push(err137);
}
errors++;
}
}
if(data.note !== undefined){
let data61 = data.note;
if(Array.isArray(data61)){
const len2 = data61.length;
for(let i4=0; i4<len2; i4++){
let data62 = data61[i4];
if(data62 && typeof data62 == "object" && !Array.isArray(data62)){
if(data62.date !== undefined){
let data63 = data62.date;
if(typeof data63 === "string"){
if(!pattern1.test(data63)){
const err138 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
if(!(formats0.validate(data63))){
const err139 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
}
}
else {
const err140 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
}
if(data62.author !== undefined){
if(typeof data62.author !== "string"){
const err141 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err141];
}
else {
vErrors.push(err141);
}
errors++;
}
}
if(data62.text !== undefined){
if(typeof data62.text !== "string"){
const err142 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
}
}
else {
const err143 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
}
if(data62 && typeof data62 == "object" && !Array.isArray(data62)){
if(data62.date === undefined){
const err144 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
if(data62.author === undefined){
const err145 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
if(data62.text === undefined){
const err146 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
for(const key3 in data62){
if(!(((key3 === "date") || (key3 === "author")) || (key3 === "text"))){
const err147 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
}
if(data62.date !== undefined){
let data66 = data62.date;
if(typeof data66 === "string"){
if(!pattern1.test(data66)){
const err148 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
if(!(formats0.validate(data66))){
const err149 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
}
else {
const err150 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
}
if(data62.author !== undefined){
let data67 = data62.author;
if(typeof data67 === "string"){
if(func3(data67) > 100){
const err151 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err151];
}
else {
vErrors.push(err151);
}
errors++;
}
}
else {
const err152 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
}
if(data62.text !== undefined){
if(typeof data62.text !== "string"){
const err153 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
}
}
if(data62 && typeof data62 == "object" && !Array.isArray(data62)){
if(data62.date === undefined){
const err154 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
if(data62.author === undefined){
const err155 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
if(data62.text === undefined){
const err156 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err156];
}
else {
vErrors.push(err156);
}
errors++;
}
}
else {
const err157 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
}
let i5 = data61.length;
let j2;
if(i5 > 1){
outer2:
for(;i5--;){
for(j2 = i5; j2--;){
if(func0(data61[i5], data61[j2])){
const err158 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"};
if(vErrors === null){
vErrors = [err158];
}
else {
vErrors.push(err158);
}
errors++;
break outer2;
}
}
}
}
}
else {
const err159 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
}
}
else {
const err160 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
