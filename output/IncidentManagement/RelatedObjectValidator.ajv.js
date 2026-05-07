"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.involvement !== undefined){
if(typeof data.involvement !== "string"){
const err0 = {instancePath:instancePath+"/involvement",schemaPath:"#/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const err1 = {instancePath:instancePath+"/href",schemaPath:"#/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
