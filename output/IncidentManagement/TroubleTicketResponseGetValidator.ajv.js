"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Attributes for response when requesting an incident (GET-method).","type":"object","required":["id","description","severity","type","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"creationDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","description":"Creation date of incident.","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":8}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}};
const func2 = Object.prototype.hasOwnProperty;
const func3 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern1 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
const pattern4 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$", "u");
const pattern5 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern6 = new RegExp("[1-5]", "u");
const pattern7 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern8 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern9 = new RegExp("^data:;base64,.*", "u");
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
if(data.description === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "description"},message:"must have required property '"+"description"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.severity === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "severity"},message:"must have required property '"+"severity"+"'"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.type === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"},message:"must have required property '"+"type"+"'"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.status === undefined){
const err4 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
for(const key0 in data){
if(!(func2.call(schema11.properties, key0))){
const err5 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(data.id !== undefined){
let data0 = data.id;
if(typeof data0 === "string"){
if(func3(data0) > 64){
const err6 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
if(!pattern0.test(data0)){
const err7 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
else {
const err8 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err9 = {instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(data.severity !== undefined){
let data2 = data.severity;
if(typeof data2 !== "string"){
const err10 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
if(!(((((data2 === "critical") || (data2 === "high")) || (data2 === "medium")) || (data2 === "low")) || (data2 === "none"))){
const err11 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
if(data.type !== undefined){
let data3 = data.type;
if(typeof data3 === "string"){
if(func3(data3) > 50){
const err12 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
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
const err13 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data.creationDate !== undefined){
let data4 = data.creationDate;
if(typeof data4 === "string"){
if(!pattern1.test(data4)){
const err14 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
if(!(formats0.validate(data4))){
const err15 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
else {
const err16 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(data.targetResolutionDate !== undefined){
let data5 = data.targetResolutionDate;
if(typeof data5 === "string"){
if(!pattern1.test(data5)){
const err17 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
if(!(formats0.validate(data5))){
const err18 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
else {
const err19 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(data.status !== undefined){
let data6 = data.status;
if(typeof data6 !== "string"){
const err20 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
if(!(((((((data6 === "Submitted") || (data6 === "Rejected")) || (data6 === "Acknowledged")) || (data6 === "InProgress")) || (data6 === "Resolved")) || (data6 === "Closed")) || (data6 === "Cancelled"))){
const err21 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
if(data.subStatus !== undefined){
let data7 = data.subStatus;
if(typeof data7 !== "string"){
const err22 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
if(!((data7 === "Held") || (data7 === "Pending"))){
const err23 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(data.resolutionDate !== undefined){
let data8 = data.resolutionDate;
if(typeof data8 === "string"){
if(!pattern1.test(data8)){
const err24 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
if(!(formats0.validate(data8))){
const err25 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
}
else {
const err26 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data9 = data.relatedParty;
if(Array.isArray(data9)){
if(data9.length > 4){
const err27 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
const len0 = data9.length;
for(let i0=0; i0<len0; i0++){
let data10 = data9[i0];
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
if(data10.href !== undefined){
if(typeof data10.href !== "string"){
const err28 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
if(data10.role !== undefined){
if(typeof data10.role !== "string"){
const err29 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
else {
const err30 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
for(const key1 in data10){
if(!((((key1 === "role") || (key1 === "id")) || (key1 === "href")) || (key1 === "name"))){
const err31 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
}
if(data10.role !== undefined){
let data13 = data10.role;
if(typeof data13 === "string"){
if(func3(data13) > 64){
const err32 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err33 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
if(data10.id !== undefined){
let data14 = data10.id;
if(typeof data14 === "string"){
if(func3(data14) > 64){
const err34 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
}
else {
const err35 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
}
if(data10.href !== undefined){
let data15 = data10.href;
if(typeof data15 === "string"){
if(func3(data15) > 4096){
const err36 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err37 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
}
if(data10.name !== undefined){
let data16 = data10.name;
if(typeof data16 === "string"){
if(func3(data16) > 100){
const err38 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
}
else {
const err39 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
}
}
const _errs42 = errors;
let valid7 = false;
let passing0 = null;
const _errs43 = errors;
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
if(data10.role !== undefined){
let data17 = data10.role;
if(typeof data17 !== "string"){
const err40 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
if(!((data17 === "originator") || (data17 === "owner"))){
const err41 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
}
if(data10.id !== undefined){
let data18 = data10.id;
if(typeof data18 === "string"){
if(!pattern4.test(data18)){
const err42 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
}
else {
const err43 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
}
}
var _valid0 = _errs43 === errors;
if(_valid0){
valid7 = true;
passing0 = 0;
}
const _errs48 = errors;
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
if(data10.role !== undefined){
let data19 = data10.role;
if(typeof data19 !== "string"){
const err44 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
if(!(data19 === "assigneeGroup")){
const err45 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
}
if(data10.id !== undefined){
let data20 = data10.id;
if(typeof data20 === "string"){
if(func3(data20) > 64){
const err46 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err47 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
}
}
var _valid0 = _errs48 === errors;
if(_valid0 && valid7){
valid7 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid7 = true;
passing0 = 1;
}
const _errs53 = errors;
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
if(data10.role !== undefined){
let data21 = data10.role;
if(typeof data21 !== "string"){
const err48 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
if(!(data21 === "reportingPerson")){
const err49 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
}
if(data10.id !== undefined){
let data22 = data10.id;
if(typeof data22 === "string"){
if(func3(data22) > 256){
const err50 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
}
else {
const err51 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
}
}
var _valid0 = _errs53 === errors;
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
const err52 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
else {
errors = _errs42;
if(vErrors !== null){
if(_errs42){
vErrors.length = _errs42;
}
else {
vErrors = null;
}
}
}
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
if(data10.role === undefined){
const err53 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
if(data10.id === undefined){
const err54 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
}
else {
const err55 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
}
let i1 = data9.length;
let j0;
if(i1 > 1){
outer0:
for(;i1--;){
for(j0 = i1; j0--;){
if(func0(data9[i1], data9[j0])){
const err56 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
break outer0;
}
}
}
}
}
else {
const err57 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
if(Array.isArray(data9)){
if(data9.length < 3){
const err58 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 3},message:"must NOT have fewer than 3 items"};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
}
else {
const err59 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data23 = data.relatedObject;
if(Array.isArray(data23)){
if(data23.length < 4){
const err60 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
const len1 = data23.length;
for(let i2=0; i2<len1; i2++){
let data24 = data23[i2];
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
if(typeof data24.involvement !== "string"){
const err61 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data24.href !== undefined){
if(typeof data24.href !== "string"){
const err62 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
else {
const err63 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
for(const key2 in data24){
if(!((((key2 === "involvement") || (key2 === "id")) || (key2 === "href")) || (key2 === "name"))){
const err64 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
if(data24.involvement !== undefined){
let data27 = data24.involvement;
if(typeof data27 === "string"){
if(func3(data27) > 64){
const err65 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err66 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
if(data24.id !== undefined){
let data28 = data24.id;
if(typeof data28 === "string"){
if(func3(data28) > 64){
const err67 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err68 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
}
if(data24.href !== undefined){
if(typeof data24.href !== "string"){
const err69 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
}
if(data24.name !== undefined){
let data30 = data24.name;
if(typeof data30 === "string"){
if(func3(data30) > 100){
const err70 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
}
else {
const err71 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
}
}
const _errs82 = errors;
let valid18 = false;
let passing1 = null;
const _errs83 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data31 = data24.involvement;
if(typeof data31 !== "string"){
const err72 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
if(!((data31 === "securityPolicy") || (data31 === "securityClassification"))){
const err73 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
if(data24.id !== undefined){
let data32 = data24.id;
if(typeof data32 === "string"){
if(func3(data32) > 32){
const err74 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
}
else {
const err75 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
if(data24.href !== undefined){
let data33 = data24.href;
if(typeof data33 === "string"){
if(func3(data33) > 4096){
const err76 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
else {
const err77 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
}
}
var _valid1 = _errs83 === errors;
if(_valid1){
valid18 = true;
passing1 = 0;
}
const _errs90 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data34 = data24.involvement;
if(typeof data34 !== "string"){
const err78 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
if(!(data34 === "releasabilityCommunity")){
const err79 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
}
if(data24.id !== undefined){
let data35 = data24.id;
if(typeof data35 === "string"){
if(func3(data35) > 256){
const err80 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err80];
}
else {
vErrors.push(err80);
}
errors++;
}
}
else {
const err81 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
}
if(data24.href !== undefined){
let data36 = data24.href;
if(typeof data36 === "string"){
if(func3(data36) > 4096){
const err82 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
}
else {
const err83 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
}
}
var _valid1 = _errs90 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid18 = true;
passing1 = 1;
}
const _errs97 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data37 = data24.involvement;
if(typeof data37 !== "string"){
const err84 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
if(!(data37 === "urgency")){
const err85 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
}
if(data24.id !== undefined){
let data38 = data24.id;
if(typeof data38 !== "string"){
const err86 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
if(!(((data38 === "high") || (data38 === "medium")) || (data38 === "low"))){
const err87 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
}
if(data24.href !== undefined){
let data39 = data24.href;
if(typeof data39 === "string"){
if(func3(data39) > 4096){
const err88 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
}
else {
const err89 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
}
}
var _valid1 = _errs97 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid18 = true;
passing1 = 2;
}
const _errs104 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data40 = data24.involvement;
if(typeof data40 !== "string"){
const err90 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
if(!(data40 === "csirLabel")){
const err91 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
}
if(data24.id !== undefined){
let data41 = data24.id;
if(typeof data41 === "string"){
if(!pattern5.test(data41)){
const err92 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err92];
}
else {
vErrors.push(err92);
}
errors++;
}
}
else {
const err93 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
}
if(data24.href !== undefined){
let data42 = data24.href;
if(typeof data42 === "string"){
if(func3(data42) > 4096){
const err94 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
}
else {
const err95 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
}
}
}
var _valid1 = _errs104 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 3];
}
else {
if(_valid1){
valid18 = true;
passing1 = 3;
}
const _errs111 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data43 = data24.involvement;
if(typeof data43 !== "string"){
const err96 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
if(!(data43 === "impactedLocation")){
const err97 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
}
if(data24.id !== undefined){
let data44 = data24.id;
if(typeof data44 === "string"){
if(func3(data44) > 64){
const err98 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err99 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
}
if(data24.href !== undefined){
let data45 = data24.href;
if(typeof data45 === "string"){
if(func3(data45) > 4096){
const err100 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
}
else {
const err101 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
}
}
var _valid1 = _errs111 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 4];
}
else {
if(_valid1){
valid18 = true;
passing1 = 4;
}
const _errs118 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data46 = data24.involvement;
if(typeof data46 !== "string"){
const err102 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
if(!(data46 === "serviceImpact")){
const err103 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
}
if(data24.id !== undefined){
let data47 = data24.id;
if(typeof data47 === "string"){
if(!pattern6.test(data47)){
const err104 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
}
else {
const err105 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
}
if(data24.href !== undefined){
let data48 = data24.href;
if(typeof data48 === "string"){
if(func3(data48) > 4096){
const err106 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err107 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs118 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 5];
}
else {
if(_valid1){
valid18 = true;
passing1 = 5;
}
const _errs125 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data49 = data24.involvement;
if(typeof data49 !== "string"){
const err108 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
if(!((data49 === "isMajorIncident") || (data49 === "isCyberSecurityIncident"))){
const err109 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
}
if(data24.id !== undefined){
let data50 = data24.id;
if(typeof data50 !== "string"){
const err110 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
if(!((data50 === "true") || (data50 === "false"))){
const err111 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
}
if(data24.href !== undefined){
let data51 = data24.href;
if(typeof data51 === "string"){
if(func3(data51) > 4096){
const err112 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err113 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs125 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 6];
}
else {
if(_valid1){
valid18 = true;
passing1 = 6;
}
const _errs132 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data52 = data24.involvement;
if(typeof data52 !== "string"){
const err114 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
if(!((((((data52 === "impactedService") || (data52 === "relatedEvent")) || (data52 === "relatedIncident")) || (data52 === "relatedProblem")) || (data52 === "relatedServiceRequest")) || (data52 === "relatedFederatedConfigurationItem"))){
const err115 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
}
if(data24.id !== undefined){
let data53 = data24.id;
if(typeof data53 === "string"){
if(func3(data53) > 64){
const err116 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
if(!pattern7.test(data53)){
const err117 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
}
else {
const err118 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
}
if(data24.href !== undefined){
let data54 = data24.href;
if(typeof data54 === "string"){
if(func3(data54) > 4096){
const err119 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
}
else {
const err120 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
}
}
var _valid1 = _errs132 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 7];
}
else {
if(_valid1){
valid18 = true;
passing1 = 7;
}
const _errs139 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data55 = data24.involvement;
if(typeof data55 !== "string"){
const err121 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
if(!(data55 === "relatedAttachment")){
const err122 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
}
if(data24.id !== undefined){
let data56 = data24.id;
if(typeof data56 === "string"){
if(!pattern8.test(data56)){
const err123 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
}
else {
const err124 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
}
if(data24.name !== undefined){
if(typeof data24.name !== "string"){
const err125 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
if(data24.href !== undefined){
let data58 = data24.href;
if(typeof data58 === "string"){
if(func3(data58) > 5592421){
const err126 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
if(!pattern9.test(data58)){
const err127 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
}
else {
const err128 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
}
}
var _valid1 = _errs139 === errors;
if(_valid1 && valid18){
valid18 = false;
passing1 = [passing1, 8];
}
else {
if(_valid1){
valid18 = true;
passing1 = 8;
}
const _errs148 = errors;
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement !== undefined){
let data59 = data24.involvement;
if(typeof data59 !== "string"){
const err129 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
if(!(data59 === "fsmRecordClass")){
const err130 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
}
if(data24.id !== undefined){
let data60 = data24.id;
if(typeof data60 !== "string"){
const err131 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
if(!(data60 === "INCIDENT")){
const err132 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
}
if(data24.href !== undefined){
let data61 = data24.href;
if(typeof data61 === "string"){
if(func3(data61) > 4096){
const err133 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
}
else {
const err134 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
}
}
}
var _valid1 = _errs148 === errors;
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
const err135 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
else {
errors = _errs82;
if(vErrors !== null){
if(_errs82){
vErrors.length = _errs82;
}
else {
vErrors = null;
}
}
}
if(data24 && typeof data24 == "object" && !Array.isArray(data24)){
if(data24.involvement === undefined){
const err136 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
if(data24.id === undefined){
const err137 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err137];
}
else {
vErrors.push(err137);
}
errors++;
}
}
else {
const err138 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
}
let i3 = data23.length;
let j1;
if(i3 > 1){
outer1:
for(;i3--;){
for(j1 = i3; j1--;){
if(func0(data23[i3], data23[j1])){
const err139 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
break outer1;
}
}
}
}
}
else {
const err140 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
if(Array.isArray(data23)){
if(data23.length < 8){
const err141 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 8},message:"must NOT have fewer than 8 items"};
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
const err142 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
}
if(data.note !== undefined){
let data62 = data.note;
if(Array.isArray(data62)){
const len2 = data62.length;
for(let i4=0; i4<len2; i4++){
let data63 = data62[i4];
if(data63 && typeof data63 == "object" && !Array.isArray(data63)){
if(data63.date !== undefined){
let data64 = data63.date;
if(typeof data64 === "string"){
if(!pattern1.test(data64)){
const err143 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
}
if(!(formats0.validate(data64))){
const err144 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
}
else {
const err145 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
}
if(data63.author !== undefined){
if(typeof data63.author !== "string"){
const err146 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
}
if(data63.text !== undefined){
if(typeof data63.text !== "string"){
const err147 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
}
}
else {
const err148 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
if(data63 && typeof data63 == "object" && !Array.isArray(data63)){
if(data63.date === undefined){
const err149 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
if(data63.author === undefined){
const err150 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
if(data63.text === undefined){
const err151 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err151];
}
else {
vErrors.push(err151);
}
errors++;
}
for(const key3 in data63){
if(!(((key3 === "date") || (key3 === "author")) || (key3 === "text"))){
const err152 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
}
if(data63.date !== undefined){
let data67 = data63.date;
if(typeof data67 === "string"){
if(!pattern1.test(data67)){
const err153 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
if(!(formats0.validate(data67))){
const err154 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
}
else {
const err155 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
}
if(data63.author !== undefined){
let data68 = data63.author;
if(typeof data68 === "string"){
if(func3(data68) > 100){
const err156 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err157 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
}
if(data63.text !== undefined){
if(typeof data63.text !== "string"){
const err158 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err158];
}
else {
vErrors.push(err158);
}
errors++;
}
}
}
if(data63 && typeof data63 == "object" && !Array.isArray(data63)){
if(data63.date === undefined){
const err159 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
if(data63.author === undefined){
const err160 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
if(data63.text === undefined){
const err161 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err161];
}
else {
vErrors.push(err161);
}
errors++;
}
}
else {
const err162 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err162];
}
else {
vErrors.push(err162);
}
errors++;
}
}
let i5 = data62.length;
let j2;
if(i5 > 1){
outer2:
for(;i5--;){
for(j2 = i5; j2--;){
if(func0(data62[i5], data62[j2])){
const err163 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"};
if(vErrors === null){
vErrors = [err163];
}
else {
vErrors.push(err163);
}
errors++;
break outer2;
}
}
}
}
}
else {
const err164 = {instancePath:instancePath+"/note",schemaPath:"#/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err164];
}
else {
vErrors.push(err164);
}
errors++;
}
}
}
else {
const err165 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err165];
}
else {
vErrors.push(err165);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
