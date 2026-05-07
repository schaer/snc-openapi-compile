"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern1 = new RegExp("[1-5]", "u");
const pattern2 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern3 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern4 = new RegExp("^data:;base64,.*", "u");

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
if(typeof data.involvement !== "string"){
const err0 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
if(data.href !== undefined){
if(typeof data.href !== "string"){
const err1 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
}
else {
const err2 = {instancePath,schemaPath:"#/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data && typeof data == "object" && !Array.isArray(data)){
for(const key0 in data){
if(!((((key0 === "involvement") || (key0 === "id")) || (key0 === "href")) || (key0 === "name"))){
const err3 = {instancePath,schemaPath:"#/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data.involvement !== undefined){
let data2 = data.involvement;
if(typeof data2 === "string"){
if(func2(data2) > 64){
const err4 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err5 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
let data3 = data.id;
if(typeof data3 === "string"){
if(func2(data3) > 64){
const err6 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err7 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(data.href !== undefined){
if(typeof data.href !== "string"){
const err8 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data.name !== undefined){
let data5 = data.name;
if(typeof data5 === "string"){
if(func2(data5) > 100){
const err9 = {instancePath:instancePath+"/name",schemaPath:"#/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err10 = {instancePath:instancePath+"/name",schemaPath:"#/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
}
const _errs18 = errors;
let valid3 = false;
let passing0 = null;
const _errs19 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data6 = data.involvement;
if(typeof data6 !== "string"){
const err11 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(!((data6 === "securityPolicy") || (data6 === "securityClassification"))){
const err12 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
if(data.id !== undefined){
let data7 = data.id;
if(typeof data7 === "string"){
if(func2(data7) > 32){
const err13 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
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
const err14 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
if(data.href !== undefined){
let data8 = data.href;
if(typeof data8 === "string"){
if(func2(data8) > 4096){
const err15 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err16 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
}
var _valid0 = _errs19 === errors;
if(_valid0){
valid3 = true;
passing0 = 0;
}
const _errs26 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data9 = data.involvement;
if(typeof data9 !== "string"){
const err17 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
if(!(data9 === "releasabilityCommunity")){
const err18 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(data.id !== undefined){
let data10 = data.id;
if(typeof data10 === "string"){
if(func2(data10) > 256){
const err19 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err20 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
if(data.href !== undefined){
let data11 = data.href;
if(typeof data11 === "string"){
if(func2(data11) > 4096){
const err21 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err22 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
}
var _valid0 = _errs26 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid3 = true;
passing0 = 1;
}
const _errs33 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data12 = data.involvement;
if(typeof data12 !== "string"){
const err23 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
if(!(data12 === "urgency")){
const err24 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
}
if(data.id !== undefined){
let data13 = data.id;
if(typeof data13 !== "string"){
const err25 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
if(!(((data13 === "high") || (data13 === "medium")) || (data13 === "low"))){
const err26 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
}
if(data.href !== undefined){
let data14 = data.href;
if(typeof data14 === "string"){
if(func2(data14) > 4096){
const err27 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
}
else {
const err28 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid0 = _errs33 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 2];
}
else {
if(_valid0){
valid3 = true;
passing0 = 2;
}
const _errs40 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data15 = data.involvement;
if(typeof data15 !== "string"){
const err29 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
if(!(data15 === "csirLabel")){
const err30 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
}
if(data.id !== undefined){
let data16 = data.id;
if(typeof data16 === "string"){
if(!pattern0.test(data16)){
const err31 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
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
const err32 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
}
if(data.href !== undefined){
let data17 = data.href;
if(typeof data17 === "string"){
if(func2(data17) > 4096){
const err33 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err34 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
}
}
var _valid0 = _errs40 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 3];
}
else {
if(_valid0){
valid3 = true;
passing0 = 3;
}
const _errs47 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data18 = data.involvement;
if(typeof data18 !== "string"){
const err35 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
if(!(data18 === "impactedLocation")){
const err36 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
}
if(data.id !== undefined){
let data19 = data.id;
if(typeof data19 === "string"){
if(func2(data19) > 64){
const err37 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err38 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
}
if(data.href !== undefined){
let data20 = data.href;
if(typeof data20 === "string"){
if(func2(data20) > 4096){
const err39 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
}
else {
const err40 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
}
}
var _valid0 = _errs47 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 4];
}
else {
if(_valid0){
valid3 = true;
passing0 = 4;
}
const _errs54 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data21 = data.involvement;
if(typeof data21 !== "string"){
const err41 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
if(!(data21 === "serviceImpact")){
const err42 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
}
if(data.id !== undefined){
let data22 = data.id;
if(typeof data22 === "string"){
if(!pattern1.test(data22)){
const err43 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
}
else {
const err44 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
}
if(data.href !== undefined){
let data23 = data.href;
if(typeof data23 === "string"){
if(func2(data23) > 4096){
const err45 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err46 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid0 = _errs54 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 5];
}
else {
if(_valid0){
valid3 = true;
passing0 = 5;
}
const _errs61 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data24 = data.involvement;
if(typeof data24 !== "string"){
const err47 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
if(!((data24 === "isMajorIncident") || (data24 === "isCyberSecurityIncident"))){
const err48 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
}
if(data.id !== undefined){
let data25 = data.id;
if(typeof data25 !== "string"){
const err49 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
if(!((data25 === "true") || (data25 === "false"))){
const err50 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
}
if(data.href !== undefined){
let data26 = data.href;
if(typeof data26 === "string"){
if(func2(data26) > 4096){
const err51 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
}
else {
const err52 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
}
}
var _valid0 = _errs61 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 6];
}
else {
if(_valid0){
valid3 = true;
passing0 = 6;
}
const _errs68 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data27 = data.involvement;
if(typeof data27 !== "string"){
const err53 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
if(!((((((data27 === "impactedService") || (data27 === "relatedEvent")) || (data27 === "relatedIncident")) || (data27 === "relatedProblem")) || (data27 === "relatedServiceRequest")) || (data27 === "relatedFederatedConfigurationItem"))){
const err54 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
}
if(data.id !== undefined){
let data28 = data.id;
if(typeof data28 === "string"){
if(func2(data28) > 64){
const err55 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
if(!pattern2.test(data28)){
const err56 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
}
else {
const err57 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
}
if(data.href !== undefined){
let data29 = data.href;
if(typeof data29 === "string"){
if(func2(data29) > 4096){
const err58 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err59 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid0 = _errs68 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 7];
}
else {
if(_valid0){
valid3 = true;
passing0 = 7;
}
const _errs75 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data30 = data.involvement;
if(typeof data30 !== "string"){
const err60 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
if(!(data30 === "relatedAttachment")){
const err61 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data.id !== undefined){
let data31 = data.id;
if(typeof data31 === "string"){
if(!pattern3.test(data31)){
const err62 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err63 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
}
if(data.name !== undefined){
if(typeof data.name !== "string"){
const err64 = {instancePath:instancePath+"/name",schemaPath:"#/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
if(data.href !== undefined){
let data33 = data.href;
if(typeof data33 === "string"){
if(func2(data33) > 5592421){
const err65 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
if(!pattern4.test(data33)){
const err66 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
else {
const err67 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
}
}
}
var _valid0 = _errs75 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 8];
}
else {
if(_valid0){
valid3 = true;
passing0 = 8;
}
const _errs84 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
let data34 = data.involvement;
if(typeof data34 !== "string"){
const err68 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
if(!(data34 === "fsmRecordClass")){
const err69 = {instancePath:instancePath+"/involvement",schemaPath:"#/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
}
if(data.id !== undefined){
let data35 = data.id;
if(typeof data35 !== "string"){
const err70 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
if(!(data35 === "INCIDENT")){
const err71 = {instancePath:instancePath+"/id",schemaPath:"#/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
}
if(data.href !== undefined){
let data36 = data.href;
if(typeof data36 === "string"){
if(func2(data36) > 4096){
const err72 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
}
else {
const err73 = {instancePath:instancePath+"/href",schemaPath:"#/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
}
var _valid0 = _errs84 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 9];
}
else {
if(_valid0){
valid3 = true;
passing0 = 9;
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
if(!valid3){
const err74 = {instancePath,schemaPath:"#/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
else {
errors = _errs18;
if(vErrors !== null){
if(_errs18){
vErrors.length = _errs18;
}
else {
vErrors = null;
}
}
}
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement === undefined){
const err75 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
if(data.id === undefined){
const err76 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err77 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
