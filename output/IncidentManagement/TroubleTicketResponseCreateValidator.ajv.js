"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Attributes for response of creating a new incident (POST-method).","type":"object","required":["id","description","severity","type","status"],"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"creationDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","description":"Creation date of incident.","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"}}};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern1 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
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
if(data.id !== undefined){
let data0 = data.id;
if(typeof data0 === "string"){
if(func2(data0) > 64){
const err5 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(!pattern0.test(data0)){
const err6 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
else {
const err7 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err8 = {instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data.severity !== undefined){
let data2 = data.severity;
if(typeof data2 !== "string"){
const err9 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(!(((((data2 === "critical") || (data2 === "high")) || (data2 === "medium")) || (data2 === "low")) || (data2 === "none"))){
const err10 = {instancePath:instancePath+"/severity",schemaPath:"#/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data.type !== undefined){
let data3 = data.type;
if(typeof data3 === "string"){
if(func2(data3) > 50){
const err11 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
else {
const err12 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
if(data.creationDate !== undefined){
let data4 = data.creationDate;
if(typeof data4 === "string"){
if(!pattern1.test(data4)){
const err13 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
if(!(formats0.validate(data4))){
const err14 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err15 = {instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(data.status !== undefined){
let data5 = data.status;
if(typeof data5 !== "string"){
const err16 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
if(!(((((((data5 === "Submitted") || (data5 === "Rejected")) || (data5 === "Acknowledged")) || (data5 === "InProgress")) || (data5 === "Resolved")) || (data5 === "Closed")) || (data5 === "Cancelled"))){
const err17 = {instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"};
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
else {
const err18 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
