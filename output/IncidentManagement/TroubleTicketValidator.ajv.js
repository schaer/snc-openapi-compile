"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"x-custom-comment":"This definition is not directly used (by reference). Instead, it alows the easy comparison for each property of 'TroubleTicket' between the original specification and the federated SMC extensions. To be consistent, each property used in this specification should be copied from this 'master' definition.","type":"object","properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"correlationId":{"x-custom-comment":"Not applicable","type":"string"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"creationDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","description":"Creation date of incident.","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"statusChangeReason":{"x-custom-comment":"Not applicable","type":"string"},"statusChangeDate":{"x-custom-comment":"Not applicable","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},"relatedObject":{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern1 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
const pattern5 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$", "u");
const pattern6 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern7 = new RegExp("[1-5]", "u");
const pattern8 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern9 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern10 = new RegExp("^data:;base64,.*", "u");
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id !== undefined){
let data0 = data.id;
if(typeof data0 === "string"){
if(func2(data0) > 64){
const err0 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(!pattern0.test(data0)){
const err1 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
else {
const err2 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
if(data.correlationId !== undefined){
if(typeof data.correlationId !== "string"){
const err3 = {instancePath:instancePath+"/correlationId",schemaPath:"#/properties/correlationId/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err4 = {instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(data.severity !== undefined){
let data3 = data.severity;
if(typeof data3 !== "string"){
const err5 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(!(((((data3 === "critical") || (data3 === "high")) || (data3 === "medium")) || (data3 === "low")) || (data3 === "none"))){
const err6 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data.type !== undefined){
let data4 = data.type;
if(typeof data4 === "string"){
if(func2(data4) > 50){
const err7 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
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
const err8 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data.creationDate !== undefined){
let data5 = data.creationDate;
if(typeof data5 === "string"){
if(!pattern1.test(data5)){
const err9 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(!(formats0.validate(data5))){
const err10 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err11 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
if(data.targetResolutionDate !== undefined){
let data6 = data.targetResolutionDate;
if(typeof data6 === "string"){
if(!pattern1.test(data6)){
const err12 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
if(!(formats0.validate(data6))){
const err13 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
else {
const err14 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
if(data.status !== undefined){
let data7 = data.status;
if(typeof data7 !== "string"){
const err15 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
if(!(((((((data7 === "Submitted") || (data7 === "Rejected")) || (data7 === "Acknowledged")) || (data7 === "InProgress")) || (data7 === "Resolved")) || (data7 === "Closed")) || (data7 === "Cancelled"))){
const err16 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(data.subStatus !== undefined){
let data8 = data.subStatus;
if(typeof data8 !== "string"){
const err17 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
if(!((data8 === "Held") || (data8 === "Pending"))){
const err18 = {instancePath:instancePath+"/subStatus",schemaPath:"#/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(data.statusChangeReason !== undefined){
if(typeof data.statusChangeReason !== "string"){
const err19 = {instancePath:instancePath+"/statusChangeReason",schemaPath:"#/properties/statusChangeReason/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(data.statusChangeDate !== undefined){
let data10 = data.statusChangeDate;
if(typeof data10 === "string"){
if(!pattern1.test(data10)){
const err20 = {instancePath:instancePath+"/statusChangeDate",schemaPath:"#/properties/statusChangeDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
if(!(formats0.validate(data10))){
const err21 = {instancePath:instancePath+"/statusChangeDate",schemaPath:"#/properties/statusChangeDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
else {
const err22 = {instancePath:instancePath+"/statusChangeDate",schemaPath:"#/properties/statusChangeDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
if(data.resolutionDate !== undefined){
let data11 = data.resolutionDate;
if(typeof data11 === "string"){
if(!pattern1.test(data11)){
const err23 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
if(!(formats0.validate(data11))){
const err24 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err25 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data12 = data.relatedParty;
if(Array.isArray(data12)){
if(data12.length > 4){
const err26 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
const len0 = data12.length;
for(let i0=0; i0<len0; i0++){
let data13 = data12[i0];
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.href !== undefined){
if(typeof data13.href !== "string"){
const err27 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
}
if(data13.role !== undefined){
if(typeof data13.role !== "string"){
const err28 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
}
else {
const err29 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
for(const key0 in data13){
if(!((((key0 === "role") || (key0 === "id")) || (key0 === "href")) || (key0 === "name"))){
const err30 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
}
if(data13.role !== undefined){
let data16 = data13.role;
if(typeof data16 === "string"){
if(func2(data16) > 64){
const err31 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
}
else {
const err32 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
}
if(data13.id !== undefined){
let data17 = data13.id;
if(typeof data17 === "string"){
if(func2(data17) > 64){
const err33 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
else {
const err34 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
}
if(data13.href !== undefined){
let data18 = data13.href;
if(typeof data18 === "string"){
if(func2(data18) > 4096){
const err35 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
}
else {
const err36 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
}
if(data13.name !== undefined){
let data19 = data13.name;
if(typeof data19 === "string"){
if(func2(data19) > 100){
const err37 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err38 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/properties/relatedParty/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
}
}
const _errs46 = errors;
let valid6 = false;
let passing0 = null;
const _errs47 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data20 = data13.role;
if(typeof data20 !== "string"){
const err39 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
if(!((data20 === "originator") || (data20 === "owner"))){
const err40 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
}
if(data13.id !== undefined){
let data21 = data13.id;
if(typeof data21 === "string"){
if(!pattern5.test(data21)){
const err41 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
}
else {
const err42 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
}
}
var _valid0 = _errs47 === errors;
if(_valid0){
valid6 = true;
passing0 = 0;
}
const _errs52 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data22 = data13.role;
if(typeof data22 !== "string"){
const err43 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
if(!(data22 === "assigneeGroup")){
const err44 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
}
if(data13.id !== undefined){
let data23 = data13.id;
if(typeof data23 === "string"){
if(func2(data23) > 64){
const err45 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
}
else {
const err46 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
}
}
var _valid0 = _errs52 === errors;
if(_valid0 && valid6){
valid6 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid6 = true;
passing0 = 1;
}
const _errs57 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data24 = data13.role;
if(typeof data24 !== "string"){
const err47 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
if(!(data24 === "reportingPerson")){
const err48 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedParty.items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
}
if(data13.id !== undefined){
let data25 = data13.id;
if(typeof data25 === "string"){
if(func2(data25) > 256){
const err49 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err50 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid0 = _errs57 === errors;
if(_valid0 && valid6){
valid6 = false;
passing0 = [passing0, 2];
}
else {
if(_valid0){
valid6 = true;
passing0 = 2;
}
}
}
if(!valid6){
const err51 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
else {
errors = _errs46;
if(vErrors !== null){
if(_errs46){
vErrors.length = _errs46;
}
else {
vErrors = null;
}
}
}
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role === undefined){
const err52 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
if(data13.id === undefined){
const err53 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err54 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/properties/relatedParty/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
}
let i1 = data12.length;
let j0;
if(i1 > 1){
outer0:
for(;i1--;){
for(j0 = i1; j0--;){
if(func0(data12[i1], data12[j0])){
const err55 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
break outer0;
}
}
}
}
}
else {
const err56 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/properties/relatedParty/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data26 = data.relatedObject;
if(Array.isArray(data26)){
if(data26.length < 4){
const err57 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
const len1 = data26.length;
for(let i2=0; i2<len1; i2++){
let data27 = data26[i2];
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
if(typeof data27.involvement !== "string"){
const err58 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
}
if(data27.href !== undefined){
if(typeof data27.href !== "string"){
const err59 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
}
else {
const err60 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
for(const key1 in data27){
if(!((((key1 === "involvement") || (key1 === "id")) || (key1 === "href")) || (key1 === "name"))){
const err61 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data27.involvement !== undefined){
let data30 = data27.involvement;
if(typeof data30 === "string"){
if(func2(data30) > 64){
const err62 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err63 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
}
if(data27.id !== undefined){
let data31 = data27.id;
if(typeof data31 === "string"){
if(func2(data31) > 64){
const err64 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
else {
const err65 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
}
if(data27.href !== undefined){
if(typeof data27.href !== "string"){
const err66 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
if(data27.name !== undefined){
let data33 = data27.name;
if(typeof data33 === "string"){
if(func2(data33) > 100){
const err67 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err68 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const _errs83 = errors;
let valid16 = false;
let passing1 = null;
const _errs84 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data34 = data27.involvement;
if(typeof data34 !== "string"){
const err69 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
if(!((data34 === "securityPolicy") || (data34 === "securityClassification"))){
const err70 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
}
if(data27.id !== undefined){
let data35 = data27.id;
if(typeof data35 === "string"){
if(func2(data35) > 32){
const err71 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
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
const err72 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
}
if(data27.href !== undefined){
let data36 = data27.href;
if(typeof data36 === "string"){
if(func2(data36) > 4096){
const err73 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err74 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs84 === errors;
if(_valid1){
valid16 = true;
passing1 = 0;
}
const _errs91 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data37 = data27.involvement;
if(typeof data37 !== "string"){
const err75 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
if(!(data37 === "releasabilityCommunity")){
const err76 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
if(data27.id !== undefined){
let data38 = data27.id;
if(typeof data38 === "string"){
if(func2(data38) > 256){
const err77 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err78 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
}
if(data27.href !== undefined){
let data39 = data27.href;
if(typeof data39 === "string"){
if(func2(data39) > 4096){
const err79 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err80 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs91 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid16 = true;
passing1 = 1;
}
const _errs98 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data40 = data27.involvement;
if(typeof data40 !== "string"){
const err81 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
if(!(data40 === "urgency")){
const err82 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
}
if(data27.id !== undefined){
let data41 = data27.id;
if(typeof data41 !== "string"){
const err83 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
if(!(((data41 === "high") || (data41 === "medium")) || (data41 === "low"))){
const err84 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
}
if(data27.href !== undefined){
let data42 = data27.href;
if(typeof data42 === "string"){
if(func2(data42) > 4096){
const err85 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err86 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs98 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid16 = true;
passing1 = 2;
}
const _errs105 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data43 = data27.involvement;
if(typeof data43 !== "string"){
const err87 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
if(!(data43 === "csirLabel")){
const err88 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
}
if(data27.id !== undefined){
let data44 = data27.id;
if(typeof data44 === "string"){
if(!pattern6.test(data44)){
const err89 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
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
const err90 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
}
if(data27.href !== undefined){
let data45 = data27.href;
if(typeof data45 === "string"){
if(func2(data45) > 4096){
const err91 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err92 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs105 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 3];
}
else {
if(_valid1){
valid16 = true;
passing1 = 3;
}
const _errs112 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data46 = data27.involvement;
if(typeof data46 !== "string"){
const err93 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
if(!(data46 === "impactedLocation")){
const err94 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
}
if(data27.id !== undefined){
let data47 = data27.id;
if(typeof data47 === "string"){
if(func2(data47) > 64){
const err95 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err96 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
}
if(data27.href !== undefined){
let data48 = data27.href;
if(typeof data48 === "string"){
if(func2(data48) > 4096){
const err97 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
}
else {
const err98 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
}
}
var _valid1 = _errs112 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 4];
}
else {
if(_valid1){
valid16 = true;
passing1 = 4;
}
const _errs119 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data49 = data27.involvement;
if(typeof data49 !== "string"){
const err99 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
if(!(data49 === "serviceImpact")){
const err100 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
}
if(data27.id !== undefined){
let data50 = data27.id;
if(typeof data50 === "string"){
if(!pattern7.test(data50)){
const err101 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
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
const err102 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
}
if(data27.href !== undefined){
let data51 = data27.href;
if(typeof data51 === "string"){
if(func2(data51) > 4096){
const err103 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
}
else {
const err104 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
}
}
var _valid1 = _errs119 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 5];
}
else {
if(_valid1){
valid16 = true;
passing1 = 5;
}
const _errs126 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data52 = data27.involvement;
if(typeof data52 !== "string"){
const err105 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
if(!((data52 === "isMajorIncident") || (data52 === "isCyberSecurityIncident"))){
const err106 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
}
if(data27.id !== undefined){
let data53 = data27.id;
if(typeof data53 !== "string"){
const err107 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err107];
}
else {
vErrors.push(err107);
}
errors++;
}
if(!((data53 === "true") || (data53 === "false"))){
const err108 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
}
if(data27.href !== undefined){
let data54 = data27.href;
if(typeof data54 === "string"){
if(func2(data54) > 4096){
const err109 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
}
else {
const err110 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
}
}
var _valid1 = _errs126 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 6];
}
else {
if(_valid1){
valid16 = true;
passing1 = 6;
}
const _errs133 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data55 = data27.involvement;
if(typeof data55 !== "string"){
const err111 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
if(!((((((data55 === "impactedService") || (data55 === "relatedEvent")) || (data55 === "relatedIncident")) || (data55 === "relatedProblem")) || (data55 === "relatedServiceRequest")) || (data55 === "relatedFederatedConfigurationItem"))){
const err112 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err112];
}
else {
vErrors.push(err112);
}
errors++;
}
}
if(data27.id !== undefined){
let data56 = data27.id;
if(typeof data56 === "string"){
if(func2(data56) > 64){
const err113 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
if(!pattern8.test(data56)){
const err114 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err115 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
}
if(data27.href !== undefined){
let data57 = data27.href;
if(typeof data57 === "string"){
if(func2(data57) > 4096){
const err116 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err117 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
}
}
var _valid1 = _errs133 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 7];
}
else {
if(_valid1){
valid16 = true;
passing1 = 7;
}
const _errs140 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data58 = data27.involvement;
if(typeof data58 !== "string"){
const err118 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
if(!(data58 === "relatedAttachment")){
const err119 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
}
if(data27.id !== undefined){
let data59 = data27.id;
if(typeof data59 === "string"){
if(!pattern9.test(data59)){
const err120 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
}
else {
const err121 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
}
if(data27.name !== undefined){
if(typeof data27.name !== "string"){
const err122 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
}
if(data27.href !== undefined){
let data61 = data27.href;
if(typeof data61 === "string"){
if(func2(data61) > 5592421){
const err123 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
if(!pattern10.test(data61)){
const err124 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
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
const err125 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
}
var _valid1 = _errs140 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 8];
}
else {
if(_valid1){
valid16 = true;
passing1 = 8;
}
const _errs149 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data62 = data27.involvement;
if(typeof data62 !== "string"){
const err126 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
if(!(data62 === "fsmRecordClass")){
const err127 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
}
if(data27.id !== undefined){
let data63 = data27.id;
if(typeof data63 !== "string"){
const err128 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
if(!(data63 === "INCIDENT")){
const err129 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.properties.relatedObject.items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
}
if(data27.href !== undefined){
let data64 = data27.href;
if(typeof data64 === "string"){
if(func2(data64) > 4096){
const err130 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
}
else {
const err131 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
}
}
var _valid1 = _errs149 === errors;
if(_valid1 && valid16){
valid16 = false;
passing1 = [passing1, 9];
}
else {
if(_valid1){
valid16 = true;
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
if(!valid16){
const err132 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
else {
errors = _errs83;
if(vErrors !== null){
if(_errs83){
vErrors.length = _errs83;
}
else {
vErrors = null;
}
}
}
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement === undefined){
const err133 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
if(data27.id === undefined){
const err134 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err135 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/properties/relatedObject/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
}
let i3 = data26.length;
let j1;
if(i3 > 1){
outer1:
for(;i3--;){
for(j1 = i3; j1--;){
if(func0(data26[i3], data26[j1])){
const err136 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
break outer1;
}
}
}
}
}
else {
const err137 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/properties/relatedObject/type",keyword:"type",params:{type: "array"},message:"must be array"};
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
let data65 = data.note;
if(Array.isArray(data65)){
const len2 = data65.length;
for(let i4=0; i4<len2; i4++){
let data66 = data65[i4];
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date !== undefined){
let data67 = data66.date;
if(typeof data67 === "string"){
if(!pattern1.test(data67)){
const err138 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
if(!(formats0.validate(data67))){
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
if(data66.author !== undefined){
if(typeof data66.author !== "string"){
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
if(data66.text !== undefined){
if(typeof data66.text !== "string"){
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
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date === undefined){
const err144 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
if(data66.author === undefined){
const err145 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
if(data66.text === undefined){
const err146 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
for(const key2 in data66){
if(!(((key2 === "date") || (key2 === "author")) || (key2 === "text"))){
const err147 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
}
if(data66.date !== undefined){
let data70 = data66.date;
if(typeof data70 === "string"){
if(!pattern1.test(data70)){
const err148 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
if(!(formats0.validate(data70))){
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
if(data66.author !== undefined){
let data71 = data66.author;
if(typeof data71 === "string"){
if(func2(data71) > 100){
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
if(data66.text !== undefined){
if(typeof data66.text !== "string"){
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
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date === undefined){
const err154 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
if(data66.author === undefined){
const err155 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
if(data66.text === undefined){
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
let i5 = data65.length;
let j2;
if(i5 > 1){
outer2:
for(;i5--;){
for(j2 = i5; j2--;){
if(func0(data65[i5], data65[j2])){
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
