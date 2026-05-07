"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"required":["id","callback"],"additionalProperties":false,"properties":{"id":{"type":"string","description":"Id of the listener","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-SUB-[a-zA-Z0-9_-]{1,112}$","example":"CWX-DEU-001-SUB-20190240141155"},"callback":{"type":"string","description":"The callback being registered","maxLength":4096,"example":"http://testsrv.fsmcdeu.selfhost.eu:80/SMC/troubleTicketManagement/v4.0/listener"},"query":{"type":"string","nullable":true,"description":"additional data to be passed","maxLength":4096,"example":"id.regex=.*"}}};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-SUB-[a-zA-Z0-9_-]{1,112}$", "u");

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
if(data.callback === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "callback"},message:"must have required property '"+"callback"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
for(const key0 in data){
if(!(((key0 === "id") || (key0 === "callback")) || (key0 === "query"))){
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
if(func2(data0) > 64){
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
const err4 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-SUB-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-SUB-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
if(data.callback !== undefined){
let data1 = data.callback;
if(typeof data1 === "string"){
if(func2(data1) > 4096){
const err6 = {instancePath:instancePath+"/callback",schemaPath:"#/properties/callback/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err7 = {instancePath:instancePath+"/callback",schemaPath:"#/properties/callback/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(data.query !== undefined){
let data2 = data.query;
if((typeof data2 !== "string") && (data2 !== null)){
const err8 = {instancePath:instancePath+"/query",schemaPath:"#/properties/query/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(typeof data2 === "string"){
if(func2(data2) > 4096){
const err9 = {instancePath:instancePath+"/query",schemaPath:"#/properties/query/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
}
}
validate10.errors = vErrors;
return errors === 0;
}
