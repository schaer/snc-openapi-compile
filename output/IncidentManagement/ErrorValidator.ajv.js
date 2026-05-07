"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Error representation","additionalProperties":false,"type":"object","properties":{"error":{"required":["code","reason"],"additionalProperties":false,"type":"object","properties":{"code":{"description":"Application related code (as defined in the API or from a common list)","type":"string","maxLength":7,"pattern":"^[0-9]{3}-[0-9]{3}$"},"reason":{"description":"Text that explains the reason for error. This can be shown to a client user.","type":"string","maxLength":4096},"message":{"description":"Text that provides more details and corrective actions related to the error. This can be shown to a client user.","type":"string","maxLength":4096},"status":{"description":"Http error code","type":"string","maxLength":3,"pattern":"^[0-9]{3}$"},"referenceError":{"description":"URL pointing to documentation describing the error","type":"string","maxLength":1024}}}}};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[0-9]{3}-[0-9]{3}$", "u");
const pattern1 = new RegExp("^[0-9]{3}$", "u");

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
for(const key0 in data){
if(!(key0 === "error")){
const err0 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
if(data.error !== undefined){
let data0 = data.error;
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
if(data0.code === undefined){
const err1 = {instancePath:instancePath+"/error",schemaPath:"#/properties/error/required",keyword:"required",params:{missingProperty: "code"},message:"must have required property '"+"code"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data0.reason === undefined){
const err2 = {instancePath:instancePath+"/error",schemaPath:"#/properties/error/required",keyword:"required",params:{missingProperty: "reason"},message:"must have required property '"+"reason"+"'"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
for(const key1 in data0){
if(!(((((key1 === "code") || (key1 === "reason")) || (key1 === "message")) || (key1 === "status")) || (key1 === "referenceError"))){
const err3 = {instancePath:instancePath+"/error",schemaPath:"#/properties/error/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data0.code !== undefined){
let data1 = data0.code;
if(typeof data1 === "string"){
if(func2(data1) > 7){
const err4 = {instancePath:instancePath+"/error/code",schemaPath:"#/properties/error/properties/code/maxLength",keyword:"maxLength",params:{limit: 7},message:"must NOT have more than 7 characters"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(!pattern0.test(data1)){
const err5 = {instancePath:instancePath+"/error/code",schemaPath:"#/properties/error/properties/code/pattern",keyword:"pattern",params:{pattern: "^[0-9]{3}-[0-9]{3}$"},message:"must match pattern \""+"^[0-9]{3}-[0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
else {
const err6 = {instancePath:instancePath+"/error/code",schemaPath:"#/properties/error/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data0.reason !== undefined){
let data2 = data0.reason;
if(typeof data2 === "string"){
if(func2(data2) > 4096){
const err7 = {instancePath:instancePath+"/error/reason",schemaPath:"#/properties/error/properties/reason/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err8 = {instancePath:instancePath+"/error/reason",schemaPath:"#/properties/error/properties/reason/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data0.message !== undefined){
let data3 = data0.message;
if(typeof data3 === "string"){
if(func2(data3) > 4096){
const err9 = {instancePath:instancePath+"/error/message",schemaPath:"#/properties/error/properties/message/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err10 = {instancePath:instancePath+"/error/message",schemaPath:"#/properties/error/properties/message/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data0.status !== undefined){
let data4 = data0.status;
if(typeof data4 === "string"){
if(func2(data4) > 3){
const err11 = {instancePath:instancePath+"/error/status",schemaPath:"#/properties/error/properties/status/maxLength",keyword:"maxLength",params:{limit: 3},message:"must NOT have more than 3 characters"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(!pattern1.test(data4)){
const err12 = {instancePath:instancePath+"/error/status",schemaPath:"#/properties/error/properties/status/pattern",keyword:"pattern",params:{pattern: "^[0-9]{3}$"},message:"must match pattern \""+"^[0-9]{3}$"+"\""};
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
const err13 = {instancePath:instancePath+"/error/status",schemaPath:"#/properties/error/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data0.referenceError !== undefined){
let data5 = data0.referenceError;
if(typeof data5 === "string"){
if(func2(data5) > 1024){
const err14 = {instancePath:instancePath+"/error/referenceError",schemaPath:"#/properties/error/properties/referenceError/maxLength",keyword:"maxLength",params:{limit: 1024},message:"must NOT have more than 1024 characters"};
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
const err15 = {instancePath:instancePath+"/error/referenceError",schemaPath:"#/properties/error/properties/referenceError/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
}
else {
const err16 = {instancePath:instancePath+"/error",schemaPath:"#/properties/error/type",keyword:"type",params:{type: "object"},message:"must be object"};
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
else {
const err17 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
