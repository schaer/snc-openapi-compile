"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"description":"Attributes for updating or appending to a existing incident (PATCH-method).","type":"object","x-custom-comment":"Following 'oneOf' ensures, that only one of the epcefications fits","oneOf":[{"description":"Attributes for appending a note to an existing incident (PATCH-method).","type":"object","required":["id"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":2}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4,"maxItems":5}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"description":"For all states without 'Resolved' and 'Cancelled' without additional mandatory attributes","allOf":[{"description":"Attributes for updating a existing incident (PATCH-method).","type":"object","required":["id","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"type":"object","properties":{"status":{"description":"ToDo","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Closed"]}}}]},{"description":"For the states 'Resolved' and 'Cancelled' with additional mandatory attributes","allOf":[{"description":"Attributes for updating a existing incident (PATCH-method).","type":"object","required":["id","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"type":"object","required":["description","severity","type","resolutionDate"],"properties":{"status":{"description":"ToDo","type":"string","enum":["Resolved","Cancelled"]}}}]}]};
const func2 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const func30 = Object.prototype.hasOwnProperty;
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
if(!(data && typeof data == "object" && !Array.isArray(data))){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
const _errs1 = errors;
let valid0 = false;
let passing0 = null;
const _errs2 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id === undefined){
const err1 = {instancePath,schemaPath:"#/oneOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
for(const key0 in data){
if(!((((key0 === "id") || (key0 === "relatedParty")) || (key0 === "relatedObject")) || (key0 === "note"))){
const err2 = {instancePath,schemaPath:"#/oneOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
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
const err3 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(!pattern0.test(data0)){
const err4 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err5 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data1 = data.relatedParty;
if(Array.isArray(data1)){
if(data1.length > 4){
const err6 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
const len0 = data1.length;
for(let i0=0; i0<len0; i0++){
let data2 = data1[i0];
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.href !== undefined){
if(typeof data2.href !== "string"){
const err7 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(data2.role !== undefined){
if(typeof data2.role !== "string"){
const err8 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
}
else {
const err9 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
for(const key1 in data2){
if(!((((key1 === "role") || (key1 === "id")) || (key1 === "href")) || (key1 === "name"))){
const err10 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data2.role !== undefined){
let data5 = data2.role;
if(typeof data5 === "string"){
if(func2(data5) > 64){
const err11 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err12 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
if(data2.id !== undefined){
let data6 = data2.id;
if(typeof data6 === "string"){
if(func2(data6) > 64){
const err13 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err14 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
if(data2.href !== undefined){
let data7 = data2.href;
if(typeof data7 === "string"){
if(func2(data7) > 4096){
const err15 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err16 = {instancePath:instancePath+"/relatedParty/" + i0+"/href",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(data2.name !== undefined){
let data8 = data2.name;
if(typeof data8 === "string"){
if(func2(data8) > 100){
const err17 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
else {
const err18 = {instancePath:instancePath+"/relatedParty/" + i0+"/name",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
}
const _errs29 = errors;
let valid8 = false;
let passing1 = null;
const _errs30 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data9 = data2.role;
if(typeof data9 !== "string"){
const err19 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
if(!((data9 === "originator") || (data9 === "owner"))){
const err20 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
if(data2.id !== undefined){
let data10 = data2.id;
if(typeof data10 === "string"){
if(!pattern1.test(data10)){
const err21 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
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
const err22 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs30 === errors;
if(_valid1){
valid8 = true;
passing1 = 0;
}
const _errs35 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data11 = data2.role;
if(typeof data11 !== "string"){
const err23 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
if(!(data11 === "assigneeGroup")){
const err24 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
}
if(data2.id !== undefined){
let data12 = data2.id;
if(typeof data12 === "string"){
if(func2(data12) > 64){
const err25 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err26 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
}
}
var _valid1 = _errs35 === errors;
if(_valid1 && valid8){
valid8 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid8 = true;
passing1 = 1;
}
const _errs40 = errors;
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role !== undefined){
let data13 = data2.role;
if(typeof data13 !== "string"){
const err27 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
if(!(data13 === "reportingPerson")){
const err28 = {instancePath:instancePath+"/relatedParty/" + i0+"/role",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
if(data2.id !== undefined){
let data14 = data2.id;
if(typeof data14 === "string"){
if(func2(data14) > 256){
const err29 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
}
else {
const err30 = {instancePath:instancePath+"/relatedParty/" + i0+"/id",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
}
}
var _valid1 = _errs40 === errors;
if(_valid1 && valid8){
valid8 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid8 = true;
passing1 = 2;
}
}
}
if(!valid8){
const err31 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
else {
errors = _errs29;
if(vErrors !== null){
if(_errs29){
vErrors.length = _errs29;
}
else {
vErrors = null;
}
}
}
if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
if(data2.role === undefined){
const err32 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
if(data2.id === undefined){
const err33 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err34 = {instancePath:instancePath+"/relatedParty/" + i0,schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
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
const err35 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
break outer0;
}
}
}
}
}
else {
const err36 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
if(Array.isArray(data1)){
if(data1.length > 2){
const err37 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 2},message:"must NOT have more than 2 items"};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
if(data1.length < 2){
const err38 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
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
const err39 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data15 = data.relatedObject;
if(Array.isArray(data15)){
if(data15.length < 4){
const err40 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
const len1 = data15.length;
for(let i2=0; i2<len1; i2++){
let data16 = data15[i2];
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
if(typeof data16.involvement !== "string"){
const err41 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
}
if(data16.href !== undefined){
if(typeof data16.href !== "string"){
const err42 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
else {
const err43 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
for(const key2 in data16){
if(!((((key2 === "involvement") || (key2 === "id")) || (key2 === "href")) || (key2 === "name"))){
const err44 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
}
if(data16.involvement !== undefined){
let data19 = data16.involvement;
if(typeof data19 === "string"){
if(func2(data19) > 64){
const err45 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err46 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
}
if(data16.id !== undefined){
let data20 = data16.id;
if(typeof data20 === "string"){
if(func2(data20) > 64){
const err47 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
}
else {
const err48 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
}
if(data16.href !== undefined){
if(typeof data16.href !== "string"){
const err49 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
}
if(data16.name !== undefined){
let data22 = data16.name;
if(typeof data22 === "string"){
if(func2(data22) > 100){
const err50 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err51 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const _errs69 = errors;
let valid19 = false;
let passing2 = null;
const _errs70 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data23 = data16.involvement;
if(typeof data23 !== "string"){
const err52 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
if(!((data23 === "securityPolicy") || (data23 === "securityClassification"))){
const err53 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
}
if(data16.id !== undefined){
let data24 = data16.id;
if(typeof data24 === "string"){
if(func2(data24) > 32){
const err54 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
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
const err55 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
}
if(data16.href !== undefined){
let data25 = data16.href;
if(typeof data25 === "string"){
if(func2(data25) > 4096){
const err56 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err57 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs70 === errors;
if(_valid2){
valid19 = true;
passing2 = 0;
}
const _errs77 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data26 = data16.involvement;
if(typeof data26 !== "string"){
const err58 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
if(!(data26 === "releasabilityCommunity")){
const err59 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
if(data16.id !== undefined){
let data27 = data16.id;
if(typeof data27 === "string"){
if(func2(data27) > 256){
const err60 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err61 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data16.href !== undefined){
let data28 = data16.href;
if(typeof data28 === "string"){
if(func2(data28) > 4096){
const err62 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err63 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
}
}
var _valid2 = _errs77 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 1];
}
else {
if(_valid2){
valid19 = true;
passing2 = 1;
}
const _errs84 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data29 = data16.involvement;
if(typeof data29 !== "string"){
const err64 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
if(!(data29 === "urgency")){
const err65 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
}
if(data16.id !== undefined){
let data30 = data16.id;
if(typeof data30 !== "string"){
const err66 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
if(!(((data30 === "high") || (data30 === "medium")) || (data30 === "low"))){
const err67 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
}
}
if(data16.href !== undefined){
let data31 = data16.href;
if(typeof data31 === "string"){
if(func2(data31) > 4096){
const err68 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
}
else {
const err69 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
}
}
var _valid2 = _errs84 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 2];
}
else {
if(_valid2){
valid19 = true;
passing2 = 2;
}
const _errs91 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data32 = data16.involvement;
if(typeof data32 !== "string"){
const err70 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
if(!(data32 === "csirLabel")){
const err71 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
}
if(data16.id !== undefined){
let data33 = data16.id;
if(typeof data33 === "string"){
if(!pattern2.test(data33)){
const err72 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
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
const err73 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
if(data16.href !== undefined){
let data34 = data16.href;
if(typeof data34 === "string"){
if(func2(data34) > 4096){
const err74 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err75 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
}
var _valid2 = _errs91 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 3];
}
else {
if(_valid2){
valid19 = true;
passing2 = 3;
}
const _errs98 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data35 = data16.involvement;
if(typeof data35 !== "string"){
const err76 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
if(!(data35 === "impactedLocation")){
const err77 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
}
if(data16.id !== undefined){
let data36 = data16.id;
if(typeof data36 === "string"){
if(func2(data36) > 64){
const err78 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
}
else {
const err79 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
}
if(data16.href !== undefined){
let data37 = data16.href;
if(typeof data37 === "string"){
if(func2(data37) > 4096){
const err80 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err81 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
}
}
var _valid2 = _errs98 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 4];
}
else {
if(_valid2){
valid19 = true;
passing2 = 4;
}
const _errs105 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data38 = data16.involvement;
if(typeof data38 !== "string"){
const err82 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
if(!(data38 === "serviceImpact")){
const err83 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
}
if(data16.id !== undefined){
let data39 = data16.id;
if(typeof data39 === "string"){
if(!pattern3.test(data39)){
const err84 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
}
else {
const err85 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
}
if(data16.href !== undefined){
let data40 = data16.href;
if(typeof data40 === "string"){
if(func2(data40) > 4096){
const err86 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
}
else {
const err87 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
}
}
var _valid2 = _errs105 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 5];
}
else {
if(_valid2){
valid19 = true;
passing2 = 5;
}
const _errs112 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data41 = data16.involvement;
if(typeof data41 !== "string"){
const err88 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
if(!((data41 === "isMajorIncident") || (data41 === "isCyberSecurityIncident"))){
const err89 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
}
if(data16.id !== undefined){
let data42 = data16.id;
if(typeof data42 !== "string"){
const err90 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
if(!((data42 === "true") || (data42 === "false"))){
const err91 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
}
if(data16.href !== undefined){
let data43 = data16.href;
if(typeof data43 === "string"){
if(func2(data43) > 4096){
const err92 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err93 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
}
}
var _valid2 = _errs112 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 6];
}
else {
if(_valid2){
valid19 = true;
passing2 = 6;
}
const _errs119 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data44 = data16.involvement;
if(typeof data44 !== "string"){
const err94 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
if(!((((((data44 === "impactedService") || (data44 === "relatedEvent")) || (data44 === "relatedIncident")) || (data44 === "relatedProblem")) || (data44 === "relatedServiceRequest")) || (data44 === "relatedFederatedConfigurationItem"))){
const err95 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
}
}
if(data16.id !== undefined){
let data45 = data16.id;
if(typeof data45 === "string"){
if(func2(data45) > 64){
const err96 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
if(!pattern4.test(data45)){
const err97 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err98 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
}
if(data16.href !== undefined){
let data46 = data16.href;
if(typeof data46 === "string"){
if(func2(data46) > 4096){
const err99 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err100 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
}
}
var _valid2 = _errs119 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 7];
}
else {
if(_valid2){
valid19 = true;
passing2 = 7;
}
const _errs126 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data47 = data16.involvement;
if(typeof data47 !== "string"){
const err101 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
if(!(data47 === "relatedAttachment")){
const err102 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
}
if(data16.id !== undefined){
let data48 = data16.id;
if(typeof data48 === "string"){
if(!pattern5.test(data48)){
const err103 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err104 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
}
if(data16.name !== undefined){
if(typeof data16.name !== "string"){
const err105 = {instancePath:instancePath+"/relatedObject/" + i2+"/name",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
}
if(data16.href !== undefined){
let data50 = data16.href;
if(typeof data50 === "string"){
if(func2(data50) > 5592421){
const err106 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
if(!pattern6.test(data50)){
const err107 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
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
const err108 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs126 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 8];
}
else {
if(_valid2){
valid19 = true;
passing2 = 8;
}
const _errs135 = errors;
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement !== undefined){
let data51 = data16.involvement;
if(typeof data51 !== "string"){
const err109 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
if(!(data51 === "fsmRecordClass")){
const err110 = {instancePath:instancePath+"/relatedObject/" + i2+"/involvement",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
}
if(data16.id !== undefined){
let data52 = data16.id;
if(typeof data52 !== "string"){
const err111 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
if(!(data52 === "INCIDENT")){
const err112 = {instancePath:instancePath+"/relatedObject/" + i2+"/id",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err112];
}
else {
vErrors.push(err112);
}
errors++;
}
}
if(data16.href !== undefined){
let data53 = data16.href;
if(typeof data53 === "string"){
if(func2(data53) > 4096){
const err113 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
}
else {
const err114 = {instancePath:instancePath+"/relatedObject/" + i2+"/href",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
}
}
var _valid2 = _errs135 === errors;
if(_valid2 && valid19){
valid19 = false;
passing2 = [passing2, 9];
}
else {
if(_valid2){
valid19 = true;
passing2 = 9;
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
if(!valid19){
const err115 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
else {
errors = _errs69;
if(vErrors !== null){
if(_errs69){
vErrors.length = _errs69;
}
else {
vErrors = null;
}
}
}
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
if(data16.involvement === undefined){
const err116 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
if(data16.id === undefined){
const err117 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err118 = {instancePath:instancePath+"/relatedObject/" + i2,schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
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
const err119 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
break outer1;
}
}
}
}
}
else {
const err120 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
if(Array.isArray(data15)){
if(data15.length > 5){
const err121 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/1/maxItems",keyword:"maxItems",params:{limit: 5},message:"must NOT have more than 5 items"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
if(data15.length < 4){
const err122 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
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
const err123 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
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
const err124 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
if(!(formats0.validate(data56))){
const err125 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
else {
const err126 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
}
if(data55.author !== undefined){
if(typeof data55.author !== "string"){
const err127 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/oneOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
}
if(data55.text !== undefined){
if(typeof data55.text !== "string"){
const err128 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/oneOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
else {
const err129 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
if(data55 && typeof data55 == "object" && !Array.isArray(data55)){
if(data55.date === undefined){
const err130 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
if(data55.author === undefined){
const err131 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
if(data55.text === undefined){
const err132 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
for(const key3 in data55){
if(!(((key3 === "date") || (key3 === "author")) || (key3 === "text"))){
const err133 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
}
if(data55.date !== undefined){
let data59 = data55.date;
if(typeof data59 === "string"){
if(!pattern7.test(data59)){
const err134 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
}
if(!(formats0.validate(data59))){
const err135 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
}
else {
const err136 = {instancePath:instancePath+"/note/" + i4+"/date",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
}
if(data55.author !== undefined){
let data60 = data55.author;
if(typeof data60 === "string"){
if(func2(data60) > 100){
const err137 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err138 = {instancePath:instancePath+"/note/" + i4+"/author",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
}
if(data55.text !== undefined){
if(typeof data55.text !== "string"){
const err139 = {instancePath:instancePath+"/note/" + i4+"/text",schemaPath:"#/oneOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
}
}
}
if(data55 && typeof data55 == "object" && !Array.isArray(data55)){
if(data55.date === undefined){
const err140 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
if(data55.author === undefined){
const err141 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err141];
}
else {
vErrors.push(err141);
}
errors++;
}
if(data55.text === undefined){
const err142 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
}
else {
const err143 = {instancePath:instancePath+"/note/" + i4,schemaPath:"#/oneOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
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
const err144 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
break outer2;
}
}
}
}
}
else {
const err145 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
}
}
else {
const err146 = {instancePath,schemaPath:"#/oneOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
var _valid0 = _errs2 === errors;
if(_valid0){
valid0 = true;
passing0 = 0;
}
const _errs164 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id === undefined){
const err147 = {instancePath,schemaPath:"#/oneOf/1/allOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
if(data.status === undefined){
const err148 = {instancePath,schemaPath:"#/oneOf/1/allOf/0/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
for(const key4 in data){
if(!(func30.call(schema11.oneOf[1].allOf[0].properties, key4))){
const err149 = {instancePath,schemaPath:"#/oneOf/1/allOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key4},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
}
if(data.id !== undefined){
let data62 = data.id;
if(typeof data62 === "string"){
if(func2(data62) > 64){
const err150 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
if(!pattern0.test(data62)){
const err151 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err152 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err153 = {instancePath:instancePath+"/description",schemaPath:"#/oneOf/1/allOf/0/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
}
if(data.severity !== undefined){
let data64 = data.severity;
if(typeof data64 !== "string"){
const err154 = {instancePath:instancePath+"/severity",schemaPath:"#/oneOf/1/allOf/0/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
if(!(((((data64 === "critical") || (data64 === "high")) || (data64 === "medium")) || (data64 === "low")) || (data64 === "none"))){
const err155 = {instancePath:instancePath+"/severity",schemaPath:"#/oneOf/1/allOf/0/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
}
if(data.type !== undefined){
let data65 = data.type;
if(typeof data65 === "string"){
if(func2(data65) > 50){
const err156 = {instancePath:instancePath+"/type",schemaPath:"#/oneOf/1/allOf/0/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
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
const err157 = {instancePath:instancePath+"/type",schemaPath:"#/oneOf/1/allOf/0/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
}
if(data.targetResolutionDate !== undefined){
let data66 = data.targetResolutionDate;
if(typeof data66 === "string"){
if(!pattern7.test(data66)){
const err158 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err158];
}
else {
vErrors.push(err158);
}
errors++;
}
if(!(formats0.validate(data66))){
const err159 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
}
else {
const err160 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
}
if(data.status !== undefined){
let data67 = data.status;
if(typeof data67 !== "string"){
const err161 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/1/allOf/0/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err161];
}
else {
vErrors.push(err161);
}
errors++;
}
if(!(((((((data67 === "Submitted") || (data67 === "Rejected")) || (data67 === "Acknowledged")) || (data67 === "InProgress")) || (data67 === "Resolved")) || (data67 === "Closed")) || (data67 === "Cancelled"))){
const err162 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/1/allOf/0/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err162];
}
else {
vErrors.push(err162);
}
errors++;
}
}
if(data.subStatus !== undefined){
let data68 = data.subStatus;
if(typeof data68 !== "string"){
const err163 = {instancePath:instancePath+"/subStatus",schemaPath:"#/oneOf/1/allOf/0/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err163];
}
else {
vErrors.push(err163);
}
errors++;
}
if(!((data68 === "Held") || (data68 === "Pending"))){
const err164 = {instancePath:instancePath+"/subStatus",schemaPath:"#/oneOf/1/allOf/0/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err164];
}
else {
vErrors.push(err164);
}
errors++;
}
}
if(data.resolutionDate !== undefined){
let data69 = data.resolutionDate;
if(typeof data69 === "string"){
if(!pattern7.test(data69)){
const err165 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err165];
}
else {
vErrors.push(err165);
}
errors++;
}
if(!(formats0.validate(data69))){
const err166 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err166];
}
else {
vErrors.push(err166);
}
errors++;
}
}
else {
const err167 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/1/allOf/0/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err167];
}
else {
vErrors.push(err167);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data70 = data.relatedParty;
if(Array.isArray(data70)){
if(data70.length > 4){
const err168 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err168];
}
else {
vErrors.push(err168);
}
errors++;
}
const len3 = data70.length;
for(let i6=0; i6<len3; i6++){
let data71 = data70[i6];
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
if(data71.href !== undefined){
if(typeof data71.href !== "string"){
const err169 = {instancePath:instancePath+"/relatedParty/" + i6+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err169];
}
else {
vErrors.push(err169);
}
errors++;
}
}
if(data71.role !== undefined){
if(typeof data71.role !== "string"){
const err170 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err170];
}
else {
vErrors.push(err170);
}
errors++;
}
}
}
else {
const err171 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err171];
}
else {
vErrors.push(err171);
}
errors++;
}
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
for(const key5 in data71){
if(!((((key5 === "role") || (key5 === "id")) || (key5 === "href")) || (key5 === "name"))){
const err172 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key5},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err172];
}
else {
vErrors.push(err172);
}
errors++;
}
}
if(data71.role !== undefined){
let data74 = data71.role;
if(typeof data74 === "string"){
if(func2(data74) > 64){
const err173 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err173];
}
else {
vErrors.push(err173);
}
errors++;
}
}
else {
const err174 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err174];
}
else {
vErrors.push(err174);
}
errors++;
}
}
if(data71.id !== undefined){
let data75 = data71.id;
if(typeof data75 === "string"){
if(func2(data75) > 64){
const err175 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err175];
}
else {
vErrors.push(err175);
}
errors++;
}
}
else {
const err176 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err176];
}
else {
vErrors.push(err176);
}
errors++;
}
}
if(data71.href !== undefined){
let data76 = data71.href;
if(typeof data76 === "string"){
if(func2(data76) > 4096){
const err177 = {instancePath:instancePath+"/relatedParty/" + i6+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err177];
}
else {
vErrors.push(err177);
}
errors++;
}
}
else {
const err178 = {instancePath:instancePath+"/relatedParty/" + i6+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err178];
}
else {
vErrors.push(err178);
}
errors++;
}
}
if(data71.name !== undefined){
let data77 = data71.name;
if(typeof data77 === "string"){
if(func2(data77) > 100){
const err179 = {instancePath:instancePath+"/relatedParty/" + i6+"/name",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err179];
}
else {
vErrors.push(err179);
}
errors++;
}
}
else {
const err180 = {instancePath:instancePath+"/relatedParty/" + i6+"/name",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err180];
}
else {
vErrors.push(err180);
}
errors++;
}
}
}
const _errs206 = errors;
let valid45 = false;
let passing3 = null;
const _errs207 = errors;
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
if(data71.role !== undefined){
let data78 = data71.role;
if(typeof data78 !== "string"){
const err181 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err181];
}
else {
vErrors.push(err181);
}
errors++;
}
if(!((data78 === "originator") || (data78 === "owner"))){
const err182 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err182];
}
else {
vErrors.push(err182);
}
errors++;
}
}
if(data71.id !== undefined){
let data79 = data71.id;
if(typeof data79 === "string"){
if(!pattern1.test(data79)){
const err183 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err183];
}
else {
vErrors.push(err183);
}
errors++;
}
}
else {
const err184 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err184];
}
else {
vErrors.push(err184);
}
errors++;
}
}
}
var _valid3 = _errs207 === errors;
if(_valid3){
valid45 = true;
passing3 = 0;
}
const _errs212 = errors;
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
if(data71.role !== undefined){
let data80 = data71.role;
if(typeof data80 !== "string"){
const err185 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err185];
}
else {
vErrors.push(err185);
}
errors++;
}
if(!(data80 === "assigneeGroup")){
const err186 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err186];
}
else {
vErrors.push(err186);
}
errors++;
}
}
if(data71.id !== undefined){
let data81 = data71.id;
if(typeof data81 === "string"){
if(func2(data81) > 64){
const err187 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err187];
}
else {
vErrors.push(err187);
}
errors++;
}
}
else {
const err188 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err188];
}
else {
vErrors.push(err188);
}
errors++;
}
}
}
var _valid3 = _errs212 === errors;
if(_valid3 && valid45){
valid45 = false;
passing3 = [passing3, 1];
}
else {
if(_valid3){
valid45 = true;
passing3 = 1;
}
const _errs217 = errors;
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
if(data71.role !== undefined){
let data82 = data71.role;
if(typeof data82 !== "string"){
const err189 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err189];
}
else {
vErrors.push(err189);
}
errors++;
}
if(!(data82 === "reportingPerson")){
const err190 = {instancePath:instancePath+"/relatedParty/" + i6+"/role",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err190];
}
else {
vErrors.push(err190);
}
errors++;
}
}
if(data71.id !== undefined){
let data83 = data71.id;
if(typeof data83 === "string"){
if(func2(data83) > 256){
const err191 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err191];
}
else {
vErrors.push(err191);
}
errors++;
}
}
else {
const err192 = {instancePath:instancePath+"/relatedParty/" + i6+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err192];
}
else {
vErrors.push(err192);
}
errors++;
}
}
}
var _valid3 = _errs217 === errors;
if(_valid3 && valid45){
valid45 = false;
passing3 = [passing3, 2];
}
else {
if(_valid3){
valid45 = true;
passing3 = 2;
}
}
}
if(!valid45){
const err193 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing3},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err193];
}
else {
vErrors.push(err193);
}
errors++;
}
else {
errors = _errs206;
if(vErrors !== null){
if(_errs206){
vErrors.length = _errs206;
}
else {
vErrors = null;
}
}
}
if(data71 && typeof data71 == "object" && !Array.isArray(data71)){
if(data71.role === undefined){
const err194 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err194];
}
else {
vErrors.push(err194);
}
errors++;
}
if(data71.id === undefined){
const err195 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err195];
}
else {
vErrors.push(err195);
}
errors++;
}
}
else {
const err196 = {instancePath:instancePath+"/relatedParty/" + i6,schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err196];
}
else {
vErrors.push(err196);
}
errors++;
}
}
let i7 = data70.length;
let j3;
if(i7 > 1){
outer3:
for(;i7--;){
for(j3 = i7; j3--;){
if(func0(data70[i7], data70[j3])){
const err197 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i7, j: j3},message:"must NOT have duplicate items (items ## "+j3+" and "+i7+" are identical)"};
if(vErrors === null){
vErrors = [err197];
}
else {
vErrors.push(err197);
}
errors++;
break outer3;
}
}
}
}
}
else {
const err198 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err198];
}
else {
vErrors.push(err198);
}
errors++;
}
if(Array.isArray(data70)){
if(data70.length > 3){
const err199 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 3},message:"must NOT have more than 3 items"};
if(vErrors === null){
vErrors = [err199];
}
else {
vErrors.push(err199);
}
errors++;
}
if(data70.length < 2){
const err200 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
if(vErrors === null){
vErrors = [err200];
}
else {
vErrors.push(err200);
}
errors++;
}
}
else {
const err201 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/1/allOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err201];
}
else {
vErrors.push(err201);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data84 = data.relatedObject;
if(Array.isArray(data84)){
if(data84.length < 4){
const err202 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err202];
}
else {
vErrors.push(err202);
}
errors++;
}
const len4 = data84.length;
for(let i8=0; i8<len4; i8++){
let data85 = data84[i8];
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
if(typeof data85.involvement !== "string"){
const err203 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err203];
}
else {
vErrors.push(err203);
}
errors++;
}
}
if(data85.href !== undefined){
if(typeof data85.href !== "string"){
const err204 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err204];
}
else {
vErrors.push(err204);
}
errors++;
}
}
}
else {
const err205 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err205];
}
else {
vErrors.push(err205);
}
errors++;
}
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
for(const key6 in data85){
if(!((((key6 === "involvement") || (key6 === "id")) || (key6 === "href")) || (key6 === "name"))){
const err206 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key6},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err206];
}
else {
vErrors.push(err206);
}
errors++;
}
}
if(data85.involvement !== undefined){
let data88 = data85.involvement;
if(typeof data88 === "string"){
if(func2(data88) > 64){
const err207 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err207];
}
else {
vErrors.push(err207);
}
errors++;
}
}
else {
const err208 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err208];
}
else {
vErrors.push(err208);
}
errors++;
}
}
if(data85.id !== undefined){
let data89 = data85.id;
if(typeof data89 === "string"){
if(func2(data89) > 64){
const err209 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err209];
}
else {
vErrors.push(err209);
}
errors++;
}
}
else {
const err210 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err210];
}
else {
vErrors.push(err210);
}
errors++;
}
}
if(data85.href !== undefined){
if(typeof data85.href !== "string"){
const err211 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err211];
}
else {
vErrors.push(err211);
}
errors++;
}
}
if(data85.name !== undefined){
let data91 = data85.name;
if(typeof data91 === "string"){
if(func2(data91) > 100){
const err212 = {instancePath:instancePath+"/relatedObject/" + i8+"/name",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err212];
}
else {
vErrors.push(err212);
}
errors++;
}
}
else {
const err213 = {instancePath:instancePath+"/relatedObject/" + i8+"/name",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err213];
}
else {
vErrors.push(err213);
}
errors++;
}
}
}
const _errs246 = errors;
let valid56 = false;
let passing4 = null;
const _errs247 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data92 = data85.involvement;
if(typeof data92 !== "string"){
const err214 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err214];
}
else {
vErrors.push(err214);
}
errors++;
}
if(!((data92 === "securityPolicy") || (data92 === "securityClassification"))){
const err215 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err215];
}
else {
vErrors.push(err215);
}
errors++;
}
}
if(data85.id !== undefined){
let data93 = data85.id;
if(typeof data93 === "string"){
if(func2(data93) > 32){
const err216 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err216];
}
else {
vErrors.push(err216);
}
errors++;
}
}
else {
const err217 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err217];
}
else {
vErrors.push(err217);
}
errors++;
}
}
if(data85.href !== undefined){
let data94 = data85.href;
if(typeof data94 === "string"){
if(func2(data94) > 4096){
const err218 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err218];
}
else {
vErrors.push(err218);
}
errors++;
}
}
else {
const err219 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err219];
}
else {
vErrors.push(err219);
}
errors++;
}
}
}
var _valid4 = _errs247 === errors;
if(_valid4){
valid56 = true;
passing4 = 0;
}
const _errs254 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data95 = data85.involvement;
if(typeof data95 !== "string"){
const err220 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err220];
}
else {
vErrors.push(err220);
}
errors++;
}
if(!(data95 === "releasabilityCommunity")){
const err221 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err221];
}
else {
vErrors.push(err221);
}
errors++;
}
}
if(data85.id !== undefined){
let data96 = data85.id;
if(typeof data96 === "string"){
if(func2(data96) > 256){
const err222 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err222];
}
else {
vErrors.push(err222);
}
errors++;
}
}
else {
const err223 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err223];
}
else {
vErrors.push(err223);
}
errors++;
}
}
if(data85.href !== undefined){
let data97 = data85.href;
if(typeof data97 === "string"){
if(func2(data97) > 4096){
const err224 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err224];
}
else {
vErrors.push(err224);
}
errors++;
}
}
else {
const err225 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err225];
}
else {
vErrors.push(err225);
}
errors++;
}
}
}
var _valid4 = _errs254 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 1];
}
else {
if(_valid4){
valid56 = true;
passing4 = 1;
}
const _errs261 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data98 = data85.involvement;
if(typeof data98 !== "string"){
const err226 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err226];
}
else {
vErrors.push(err226);
}
errors++;
}
if(!(data98 === "urgency")){
const err227 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err227];
}
else {
vErrors.push(err227);
}
errors++;
}
}
if(data85.id !== undefined){
let data99 = data85.id;
if(typeof data99 !== "string"){
const err228 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err228];
}
else {
vErrors.push(err228);
}
errors++;
}
if(!(((data99 === "high") || (data99 === "medium")) || (data99 === "low"))){
const err229 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err229];
}
else {
vErrors.push(err229);
}
errors++;
}
}
if(data85.href !== undefined){
let data100 = data85.href;
if(typeof data100 === "string"){
if(func2(data100) > 4096){
const err230 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err230];
}
else {
vErrors.push(err230);
}
errors++;
}
}
else {
const err231 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err231];
}
else {
vErrors.push(err231);
}
errors++;
}
}
}
var _valid4 = _errs261 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 2];
}
else {
if(_valid4){
valid56 = true;
passing4 = 2;
}
const _errs268 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data101 = data85.involvement;
if(typeof data101 !== "string"){
const err232 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err232];
}
else {
vErrors.push(err232);
}
errors++;
}
if(!(data101 === "csirLabel")){
const err233 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err233];
}
else {
vErrors.push(err233);
}
errors++;
}
}
if(data85.id !== undefined){
let data102 = data85.id;
if(typeof data102 === "string"){
if(!pattern2.test(data102)){
const err234 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err234];
}
else {
vErrors.push(err234);
}
errors++;
}
}
else {
const err235 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err235];
}
else {
vErrors.push(err235);
}
errors++;
}
}
if(data85.href !== undefined){
let data103 = data85.href;
if(typeof data103 === "string"){
if(func2(data103) > 4096){
const err236 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err236];
}
else {
vErrors.push(err236);
}
errors++;
}
}
else {
const err237 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err237];
}
else {
vErrors.push(err237);
}
errors++;
}
}
}
var _valid4 = _errs268 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 3];
}
else {
if(_valid4){
valid56 = true;
passing4 = 3;
}
const _errs275 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data104 = data85.involvement;
if(typeof data104 !== "string"){
const err238 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err238];
}
else {
vErrors.push(err238);
}
errors++;
}
if(!(data104 === "impactedLocation")){
const err239 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err239];
}
else {
vErrors.push(err239);
}
errors++;
}
}
if(data85.id !== undefined){
let data105 = data85.id;
if(typeof data105 === "string"){
if(func2(data105) > 64){
const err240 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err240];
}
else {
vErrors.push(err240);
}
errors++;
}
}
else {
const err241 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err241];
}
else {
vErrors.push(err241);
}
errors++;
}
}
if(data85.href !== undefined){
let data106 = data85.href;
if(typeof data106 === "string"){
if(func2(data106) > 4096){
const err242 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err242];
}
else {
vErrors.push(err242);
}
errors++;
}
}
else {
const err243 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err243];
}
else {
vErrors.push(err243);
}
errors++;
}
}
}
var _valid4 = _errs275 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 4];
}
else {
if(_valid4){
valid56 = true;
passing4 = 4;
}
const _errs282 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data107 = data85.involvement;
if(typeof data107 !== "string"){
const err244 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err244];
}
else {
vErrors.push(err244);
}
errors++;
}
if(!(data107 === "serviceImpact")){
const err245 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err245];
}
else {
vErrors.push(err245);
}
errors++;
}
}
if(data85.id !== undefined){
let data108 = data85.id;
if(typeof data108 === "string"){
if(!pattern3.test(data108)){
const err246 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err246];
}
else {
vErrors.push(err246);
}
errors++;
}
}
else {
const err247 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err247];
}
else {
vErrors.push(err247);
}
errors++;
}
}
if(data85.href !== undefined){
let data109 = data85.href;
if(typeof data109 === "string"){
if(func2(data109) > 4096){
const err248 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err248];
}
else {
vErrors.push(err248);
}
errors++;
}
}
else {
const err249 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err249];
}
else {
vErrors.push(err249);
}
errors++;
}
}
}
var _valid4 = _errs282 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 5];
}
else {
if(_valid4){
valid56 = true;
passing4 = 5;
}
const _errs289 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data110 = data85.involvement;
if(typeof data110 !== "string"){
const err250 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err250];
}
else {
vErrors.push(err250);
}
errors++;
}
if(!((data110 === "isMajorIncident") || (data110 === "isCyberSecurityIncident"))){
const err251 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err251];
}
else {
vErrors.push(err251);
}
errors++;
}
}
if(data85.id !== undefined){
let data111 = data85.id;
if(typeof data111 !== "string"){
const err252 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err252];
}
else {
vErrors.push(err252);
}
errors++;
}
if(!((data111 === "true") || (data111 === "false"))){
const err253 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err253];
}
else {
vErrors.push(err253);
}
errors++;
}
}
if(data85.href !== undefined){
let data112 = data85.href;
if(typeof data112 === "string"){
if(func2(data112) > 4096){
const err254 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err254];
}
else {
vErrors.push(err254);
}
errors++;
}
}
else {
const err255 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err255];
}
else {
vErrors.push(err255);
}
errors++;
}
}
}
var _valid4 = _errs289 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 6];
}
else {
if(_valid4){
valid56 = true;
passing4 = 6;
}
const _errs296 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data113 = data85.involvement;
if(typeof data113 !== "string"){
const err256 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err256];
}
else {
vErrors.push(err256);
}
errors++;
}
if(!((((((data113 === "impactedService") || (data113 === "relatedEvent")) || (data113 === "relatedIncident")) || (data113 === "relatedProblem")) || (data113 === "relatedServiceRequest")) || (data113 === "relatedFederatedConfigurationItem"))){
const err257 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err257];
}
else {
vErrors.push(err257);
}
errors++;
}
}
if(data85.id !== undefined){
let data114 = data85.id;
if(typeof data114 === "string"){
if(func2(data114) > 64){
const err258 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err258];
}
else {
vErrors.push(err258);
}
errors++;
}
if(!pattern4.test(data114)){
const err259 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err259];
}
else {
vErrors.push(err259);
}
errors++;
}
}
else {
const err260 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err260];
}
else {
vErrors.push(err260);
}
errors++;
}
}
if(data85.href !== undefined){
let data115 = data85.href;
if(typeof data115 === "string"){
if(func2(data115) > 4096){
const err261 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err261];
}
else {
vErrors.push(err261);
}
errors++;
}
}
else {
const err262 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err262];
}
else {
vErrors.push(err262);
}
errors++;
}
}
}
var _valid4 = _errs296 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 7];
}
else {
if(_valid4){
valid56 = true;
passing4 = 7;
}
const _errs303 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data116 = data85.involvement;
if(typeof data116 !== "string"){
const err263 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err263];
}
else {
vErrors.push(err263);
}
errors++;
}
if(!(data116 === "relatedAttachment")){
const err264 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err264];
}
else {
vErrors.push(err264);
}
errors++;
}
}
if(data85.id !== undefined){
let data117 = data85.id;
if(typeof data117 === "string"){
if(!pattern5.test(data117)){
const err265 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err265];
}
else {
vErrors.push(err265);
}
errors++;
}
}
else {
const err266 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err266];
}
else {
vErrors.push(err266);
}
errors++;
}
}
if(data85.name !== undefined){
if(typeof data85.name !== "string"){
const err267 = {instancePath:instancePath+"/relatedObject/" + i8+"/name",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err267];
}
else {
vErrors.push(err267);
}
errors++;
}
}
if(data85.href !== undefined){
let data119 = data85.href;
if(typeof data119 === "string"){
if(func2(data119) > 5592421){
const err268 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err268];
}
else {
vErrors.push(err268);
}
errors++;
}
if(!pattern6.test(data119)){
const err269 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err269];
}
else {
vErrors.push(err269);
}
errors++;
}
}
else {
const err270 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err270];
}
else {
vErrors.push(err270);
}
errors++;
}
}
}
var _valid4 = _errs303 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 8];
}
else {
if(_valid4){
valid56 = true;
passing4 = 8;
}
const _errs312 = errors;
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement !== undefined){
let data120 = data85.involvement;
if(typeof data120 !== "string"){
const err271 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err271];
}
else {
vErrors.push(err271);
}
errors++;
}
if(!(data120 === "fsmRecordClass")){
const err272 = {instancePath:instancePath+"/relatedObject/" + i8+"/involvement",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err272];
}
else {
vErrors.push(err272);
}
errors++;
}
}
if(data85.id !== undefined){
let data121 = data85.id;
if(typeof data121 !== "string"){
const err273 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err273];
}
else {
vErrors.push(err273);
}
errors++;
}
if(!(data121 === "INCIDENT")){
const err274 = {instancePath:instancePath+"/relatedObject/" + i8+"/id",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err274];
}
else {
vErrors.push(err274);
}
errors++;
}
}
if(data85.href !== undefined){
let data122 = data85.href;
if(typeof data122 === "string"){
if(func2(data122) > 4096){
const err275 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err275];
}
else {
vErrors.push(err275);
}
errors++;
}
}
else {
const err276 = {instancePath:instancePath+"/relatedObject/" + i8+"/href",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err276];
}
else {
vErrors.push(err276);
}
errors++;
}
}
}
var _valid4 = _errs312 === errors;
if(_valid4 && valid56){
valid56 = false;
passing4 = [passing4, 9];
}
else {
if(_valid4){
valid56 = true;
passing4 = 9;
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
if(!valid56){
const err277 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing4},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err277];
}
else {
vErrors.push(err277);
}
errors++;
}
else {
errors = _errs246;
if(vErrors !== null){
if(_errs246){
vErrors.length = _errs246;
}
else {
vErrors = null;
}
}
}
if(data85 && typeof data85 == "object" && !Array.isArray(data85)){
if(data85.involvement === undefined){
const err278 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err278];
}
else {
vErrors.push(err278);
}
errors++;
}
if(data85.id === undefined){
const err279 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err279];
}
else {
vErrors.push(err279);
}
errors++;
}
}
else {
const err280 = {instancePath:instancePath+"/relatedObject/" + i8,schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err280];
}
else {
vErrors.push(err280);
}
errors++;
}
}
let i9 = data84.length;
let j4;
if(i9 > 1){
outer4:
for(;i9--;){
for(j4 = i9; j4--;){
if(func0(data84[i9], data84[j4])){
const err281 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i9, j: j4},message:"must NOT have duplicate items (items ## "+j4+" and "+i9+" are identical)"};
if(vErrors === null){
vErrors = [err281];
}
else {
vErrors.push(err281);
}
errors++;
break outer4;
}
}
}
}
}
else {
const err282 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err282];
}
else {
vErrors.push(err282);
}
errors++;
}
if(Array.isArray(data84)){
if(data84.length < 4){
const err283 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err283];
}
else {
vErrors.push(err283);
}
errors++;
}
}
else {
const err284 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/1/allOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err284];
}
else {
vErrors.push(err284);
}
errors++;
}
}
if(data.note !== undefined){
let data123 = data.note;
if(Array.isArray(data123)){
const len5 = data123.length;
for(let i10=0; i10<len5; i10++){
let data124 = data123[i10];
if(data124 && typeof data124 == "object" && !Array.isArray(data124)){
if(data124.date !== undefined){
let data125 = data124.date;
if(typeof data125 === "string"){
if(!pattern7.test(data125)){
const err285 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err285];
}
else {
vErrors.push(err285);
}
errors++;
}
if(!(formats0.validate(data125))){
const err286 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err286];
}
else {
vErrors.push(err286);
}
errors++;
}
}
else {
const err287 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err287];
}
else {
vErrors.push(err287);
}
errors++;
}
}
if(data124.author !== undefined){
if(typeof data124.author !== "string"){
const err288 = {instancePath:instancePath+"/note/" + i10+"/author",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err288];
}
else {
vErrors.push(err288);
}
errors++;
}
}
if(data124.text !== undefined){
if(typeof data124.text !== "string"){
const err289 = {instancePath:instancePath+"/note/" + i10+"/text",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err289];
}
else {
vErrors.push(err289);
}
errors++;
}
}
}
else {
const err290 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err290];
}
else {
vErrors.push(err290);
}
errors++;
}
if(data124 && typeof data124 == "object" && !Array.isArray(data124)){
if(data124.date === undefined){
const err291 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err291];
}
else {
vErrors.push(err291);
}
errors++;
}
if(data124.author === undefined){
const err292 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err292];
}
else {
vErrors.push(err292);
}
errors++;
}
if(data124.text === undefined){
const err293 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err293];
}
else {
vErrors.push(err293);
}
errors++;
}
for(const key7 in data124){
if(!(((key7 === "date") || (key7 === "author")) || (key7 === "text"))){
const err294 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key7},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err294];
}
else {
vErrors.push(err294);
}
errors++;
}
}
if(data124.date !== undefined){
let data128 = data124.date;
if(typeof data128 === "string"){
if(!pattern7.test(data128)){
const err295 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err295];
}
else {
vErrors.push(err295);
}
errors++;
}
if(!(formats0.validate(data128))){
const err296 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err296];
}
else {
vErrors.push(err296);
}
errors++;
}
}
else {
const err297 = {instancePath:instancePath+"/note/" + i10+"/date",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err297];
}
else {
vErrors.push(err297);
}
errors++;
}
}
if(data124.author !== undefined){
let data129 = data124.author;
if(typeof data129 === "string"){
if(func2(data129) > 100){
const err298 = {instancePath:instancePath+"/note/" + i10+"/author",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err298];
}
else {
vErrors.push(err298);
}
errors++;
}
}
else {
const err299 = {instancePath:instancePath+"/note/" + i10+"/author",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err299];
}
else {
vErrors.push(err299);
}
errors++;
}
}
if(data124.text !== undefined){
if(typeof data124.text !== "string"){
const err300 = {instancePath:instancePath+"/note/" + i10+"/text",schemaPath:"#/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err300];
}
else {
vErrors.push(err300);
}
errors++;
}
}
}
if(data124 && typeof data124 == "object" && !Array.isArray(data124)){
if(data124.date === undefined){
const err301 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err301];
}
else {
vErrors.push(err301);
}
errors++;
}
if(data124.author === undefined){
const err302 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err302];
}
else {
vErrors.push(err302);
}
errors++;
}
if(data124.text === undefined){
const err303 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err303];
}
else {
vErrors.push(err303);
}
errors++;
}
}
else {
const err304 = {instancePath:instancePath+"/note/" + i10,schemaPath:"#/oneOf/1/allOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err304];
}
else {
vErrors.push(err304);
}
errors++;
}
}
let i11 = data123.length;
let j5;
if(i11 > 1){
outer5:
for(;i11--;){
for(j5 = i11; j5--;){
if(func0(data123[i11], data123[j5])){
const err305 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/1/allOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i11, j: j5},message:"must NOT have duplicate items (items ## "+j5+" and "+i11+" are identical)"};
if(vErrors === null){
vErrors = [err305];
}
else {
vErrors.push(err305);
}
errors++;
break outer5;
}
}
}
}
}
else {
const err306 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/1/allOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err306];
}
else {
vErrors.push(err306);
}
errors++;
}
}
}
else {
const err307 = {instancePath,schemaPath:"#/oneOf/1/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err307];
}
else {
vErrors.push(err307);
}
errors++;
}
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.status !== undefined){
let data131 = data.status;
if(typeof data131 !== "string"){
const err308 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/1/allOf/1/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err308];
}
else {
vErrors.push(err308);
}
errors++;
}
if(!(((((data131 === "Submitted") || (data131 === "Rejected")) || (data131 === "Acknowledged")) || (data131 === "InProgress")) || (data131 === "Closed"))){
const err309 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/1/allOf/1/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[1].allOf[1].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err309];
}
else {
vErrors.push(err309);
}
errors++;
}
}
}
else {
const err310 = {instancePath,schemaPath:"#/oneOf/1/allOf/1/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err310];
}
else {
vErrors.push(err310);
}
errors++;
}
var _valid0 = _errs164 === errors;
if(_valid0 && valid0){
valid0 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid0 = true;
passing0 = 1;
}
const _errs345 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id === undefined){
const err311 = {instancePath,schemaPath:"#/oneOf/2/allOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err311];
}
else {
vErrors.push(err311);
}
errors++;
}
if(data.status === undefined){
const err312 = {instancePath,schemaPath:"#/oneOf/2/allOf/0/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err312];
}
else {
vErrors.push(err312);
}
errors++;
}
for(const key8 in data){
if(!(func30.call(schema11.oneOf[2].allOf[0].properties, key8))){
const err313 = {instancePath,schemaPath:"#/oneOf/2/allOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key8},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err313];
}
else {
vErrors.push(err313);
}
errors++;
}
}
if(data.id !== undefined){
let data132 = data.id;
if(typeof data132 === "string"){
if(func2(data132) > 64){
const err314 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err314];
}
else {
vErrors.push(err314);
}
errors++;
}
if(!pattern0.test(data132)){
const err315 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err315];
}
else {
vErrors.push(err315);
}
errors++;
}
}
else {
const err316 = {instancePath:instancePath+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err316];
}
else {
vErrors.push(err316);
}
errors++;
}
}
if(data.description !== undefined){
if(typeof data.description !== "string"){
const err317 = {instancePath:instancePath+"/description",schemaPath:"#/oneOf/2/allOf/0/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err317];
}
else {
vErrors.push(err317);
}
errors++;
}
}
if(data.severity !== undefined){
let data134 = data.severity;
if(typeof data134 !== "string"){
const err318 = {instancePath:instancePath+"/severity",schemaPath:"#/oneOf/2/allOf/0/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err318];
}
else {
vErrors.push(err318);
}
errors++;
}
if(!(((((data134 === "critical") || (data134 === "high")) || (data134 === "medium")) || (data134 === "low")) || (data134 === "none"))){
const err319 = {instancePath:instancePath+"/severity",schemaPath:"#/oneOf/2/allOf/0/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err319];
}
else {
vErrors.push(err319);
}
errors++;
}
}
if(data.type !== undefined){
let data135 = data.type;
if(typeof data135 === "string"){
if(func2(data135) > 50){
const err320 = {instancePath:instancePath+"/type",schemaPath:"#/oneOf/2/allOf/0/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err320];
}
else {
vErrors.push(err320);
}
errors++;
}
}
else {
const err321 = {instancePath:instancePath+"/type",schemaPath:"#/oneOf/2/allOf/0/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err321];
}
else {
vErrors.push(err321);
}
errors++;
}
}
if(data.targetResolutionDate !== undefined){
let data136 = data.targetResolutionDate;
if(typeof data136 === "string"){
if(!pattern7.test(data136)){
const err322 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err322];
}
else {
vErrors.push(err322);
}
errors++;
}
if(!(formats0.validate(data136))){
const err323 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err323];
}
else {
vErrors.push(err323);
}
errors++;
}
}
else {
const err324 = {instancePath:instancePath+"/targetResolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err324];
}
else {
vErrors.push(err324);
}
errors++;
}
}
if(data.status !== undefined){
let data137 = data.status;
if(typeof data137 !== "string"){
const err325 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/2/allOf/0/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err325];
}
else {
vErrors.push(err325);
}
errors++;
}
if(!(((((((data137 === "Submitted") || (data137 === "Rejected")) || (data137 === "Acknowledged")) || (data137 === "InProgress")) || (data137 === "Resolved")) || (data137 === "Closed")) || (data137 === "Cancelled"))){
const err326 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/2/allOf/0/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err326];
}
else {
vErrors.push(err326);
}
errors++;
}
}
if(data.subStatus !== undefined){
let data138 = data.subStatus;
if(typeof data138 !== "string"){
const err327 = {instancePath:instancePath+"/subStatus",schemaPath:"#/oneOf/2/allOf/0/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err327];
}
else {
vErrors.push(err327);
}
errors++;
}
if(!((data138 === "Held") || (data138 === "Pending"))){
const err328 = {instancePath:instancePath+"/subStatus",schemaPath:"#/oneOf/2/allOf/0/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err328];
}
else {
vErrors.push(err328);
}
errors++;
}
}
if(data.resolutionDate !== undefined){
let data139 = data.resolutionDate;
if(typeof data139 === "string"){
if(!pattern7.test(data139)){
const err329 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err329];
}
else {
vErrors.push(err329);
}
errors++;
}
if(!(formats0.validate(data139))){
const err330 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err330];
}
else {
vErrors.push(err330);
}
errors++;
}
}
else {
const err331 = {instancePath:instancePath+"/resolutionDate",schemaPath:"#/oneOf/2/allOf/0/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err331];
}
else {
vErrors.push(err331);
}
errors++;
}
}
if(data.relatedParty !== undefined){
let data140 = data.relatedParty;
if(Array.isArray(data140)){
if(data140.length > 4){
const err332 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err332];
}
else {
vErrors.push(err332);
}
errors++;
}
const len6 = data140.length;
for(let i12=0; i12<len6; i12++){
let data141 = data140[i12];
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
if(data141.href !== undefined){
if(typeof data141.href !== "string"){
const err333 = {instancePath:instancePath+"/relatedParty/" + i12+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err333];
}
else {
vErrors.push(err333);
}
errors++;
}
}
if(data141.role !== undefined){
if(typeof data141.role !== "string"){
const err334 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err334];
}
else {
vErrors.push(err334);
}
errors++;
}
}
}
else {
const err335 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err335];
}
else {
vErrors.push(err335);
}
errors++;
}
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
for(const key9 in data141){
if(!((((key9 === "role") || (key9 === "id")) || (key9 === "href")) || (key9 === "name"))){
const err336 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key9},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err336];
}
else {
vErrors.push(err336);
}
errors++;
}
}
if(data141.role !== undefined){
let data144 = data141.role;
if(typeof data144 === "string"){
if(func2(data144) > 64){
const err337 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err337];
}
else {
vErrors.push(err337);
}
errors++;
}
}
else {
const err338 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err338];
}
else {
vErrors.push(err338);
}
errors++;
}
}
if(data141.id !== undefined){
let data145 = data141.id;
if(typeof data145 === "string"){
if(func2(data145) > 64){
const err339 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err339];
}
else {
vErrors.push(err339);
}
errors++;
}
}
else {
const err340 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err340];
}
else {
vErrors.push(err340);
}
errors++;
}
}
if(data141.href !== undefined){
let data146 = data141.href;
if(typeof data146 === "string"){
if(func2(data146) > 4096){
const err341 = {instancePath:instancePath+"/relatedParty/" + i12+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err341];
}
else {
vErrors.push(err341);
}
errors++;
}
}
else {
const err342 = {instancePath:instancePath+"/relatedParty/" + i12+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err342];
}
else {
vErrors.push(err342);
}
errors++;
}
}
if(data141.name !== undefined){
let data147 = data141.name;
if(typeof data147 === "string"){
if(func2(data147) > 100){
const err343 = {instancePath:instancePath+"/relatedParty/" + i12+"/name",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err343];
}
else {
vErrors.push(err343);
}
errors++;
}
}
else {
const err344 = {instancePath:instancePath+"/relatedParty/" + i12+"/name",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err344];
}
else {
vErrors.push(err344);
}
errors++;
}
}
}
const _errs387 = errors;
let valid83 = false;
let passing5 = null;
const _errs388 = errors;
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
if(data141.role !== undefined){
let data148 = data141.role;
if(typeof data148 !== "string"){
const err345 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err345];
}
else {
vErrors.push(err345);
}
errors++;
}
if(!((data148 === "originator") || (data148 === "owner"))){
const err346 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err346];
}
else {
vErrors.push(err346);
}
errors++;
}
}
if(data141.id !== undefined){
let data149 = data141.id;
if(typeof data149 === "string"){
if(!pattern1.test(data149)){
const err347 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err347];
}
else {
vErrors.push(err347);
}
errors++;
}
}
else {
const err348 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err348];
}
else {
vErrors.push(err348);
}
errors++;
}
}
}
var _valid5 = _errs388 === errors;
if(_valid5){
valid83 = true;
passing5 = 0;
}
const _errs393 = errors;
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
if(data141.role !== undefined){
let data150 = data141.role;
if(typeof data150 !== "string"){
const err349 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err349];
}
else {
vErrors.push(err349);
}
errors++;
}
if(!(data150 === "assigneeGroup")){
const err350 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err350];
}
else {
vErrors.push(err350);
}
errors++;
}
}
if(data141.id !== undefined){
let data151 = data141.id;
if(typeof data151 === "string"){
if(func2(data151) > 64){
const err351 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err351];
}
else {
vErrors.push(err351);
}
errors++;
}
}
else {
const err352 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err352];
}
else {
vErrors.push(err352);
}
errors++;
}
}
}
var _valid5 = _errs393 === errors;
if(_valid5 && valid83){
valid83 = false;
passing5 = [passing5, 1];
}
else {
if(_valid5){
valid83 = true;
passing5 = 1;
}
const _errs398 = errors;
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
if(data141.role !== undefined){
let data152 = data141.role;
if(typeof data152 !== "string"){
const err353 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err353];
}
else {
vErrors.push(err353);
}
errors++;
}
if(!(data152 === "reportingPerson")){
const err354 = {instancePath:instancePath+"/relatedParty/" + i12+"/role",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err354];
}
else {
vErrors.push(err354);
}
errors++;
}
}
if(data141.id !== undefined){
let data153 = data141.id;
if(typeof data153 === "string"){
if(func2(data153) > 256){
const err355 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err355];
}
else {
vErrors.push(err355);
}
errors++;
}
}
else {
const err356 = {instancePath:instancePath+"/relatedParty/" + i12+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err356];
}
else {
vErrors.push(err356);
}
errors++;
}
}
}
var _valid5 = _errs398 === errors;
if(_valid5 && valid83){
valid83 = false;
passing5 = [passing5, 2];
}
else {
if(_valid5){
valid83 = true;
passing5 = 2;
}
}
}
if(!valid83){
const err357 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing5},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err357];
}
else {
vErrors.push(err357);
}
errors++;
}
else {
errors = _errs387;
if(vErrors !== null){
if(_errs387){
vErrors.length = _errs387;
}
else {
vErrors = null;
}
}
}
if(data141 && typeof data141 == "object" && !Array.isArray(data141)){
if(data141.role === undefined){
const err358 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err358];
}
else {
vErrors.push(err358);
}
errors++;
}
if(data141.id === undefined){
const err359 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err359];
}
else {
vErrors.push(err359);
}
errors++;
}
}
else {
const err360 = {instancePath:instancePath+"/relatedParty/" + i12,schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err360];
}
else {
vErrors.push(err360);
}
errors++;
}
}
let i13 = data140.length;
let j6;
if(i13 > 1){
outer6:
for(;i13--;){
for(j6 = i13; j6--;){
if(func0(data140[i13], data140[j6])){
const err361 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i13, j: j6},message:"must NOT have duplicate items (items ## "+j6+" and "+i13+" are identical)"};
if(vErrors === null){
vErrors = [err361];
}
else {
vErrors.push(err361);
}
errors++;
break outer6;
}
}
}
}
}
else {
const err362 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err362];
}
else {
vErrors.push(err362);
}
errors++;
}
if(Array.isArray(data140)){
if(data140.length > 3){
const err363 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 3},message:"must NOT have more than 3 items"};
if(vErrors === null){
vErrors = [err363];
}
else {
vErrors.push(err363);
}
errors++;
}
if(data140.length < 2){
const err364 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
if(vErrors === null){
vErrors = [err364];
}
else {
vErrors.push(err364);
}
errors++;
}
}
else {
const err365 = {instancePath:instancePath+"/relatedParty",schemaPath:"#/oneOf/2/allOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err365];
}
else {
vErrors.push(err365);
}
errors++;
}
}
if(data.relatedObject !== undefined){
let data154 = data.relatedObject;
if(Array.isArray(data154)){
if(data154.length < 4){
const err366 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err366];
}
else {
vErrors.push(err366);
}
errors++;
}
const len7 = data154.length;
for(let i14=0; i14<len7; i14++){
let data155 = data154[i14];
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
if(typeof data155.involvement !== "string"){
const err367 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err367];
}
else {
vErrors.push(err367);
}
errors++;
}
}
if(data155.href !== undefined){
if(typeof data155.href !== "string"){
const err368 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err368];
}
else {
vErrors.push(err368);
}
errors++;
}
}
}
else {
const err369 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err369];
}
else {
vErrors.push(err369);
}
errors++;
}
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
for(const key10 in data155){
if(!((((key10 === "involvement") || (key10 === "id")) || (key10 === "href")) || (key10 === "name"))){
const err370 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key10},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err370];
}
else {
vErrors.push(err370);
}
errors++;
}
}
if(data155.involvement !== undefined){
let data158 = data155.involvement;
if(typeof data158 === "string"){
if(func2(data158) > 64){
const err371 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err371];
}
else {
vErrors.push(err371);
}
errors++;
}
}
else {
const err372 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err372];
}
else {
vErrors.push(err372);
}
errors++;
}
}
if(data155.id !== undefined){
let data159 = data155.id;
if(typeof data159 === "string"){
if(func2(data159) > 64){
const err373 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err373];
}
else {
vErrors.push(err373);
}
errors++;
}
}
else {
const err374 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err374];
}
else {
vErrors.push(err374);
}
errors++;
}
}
if(data155.href !== undefined){
if(typeof data155.href !== "string"){
const err375 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err375];
}
else {
vErrors.push(err375);
}
errors++;
}
}
if(data155.name !== undefined){
let data161 = data155.name;
if(typeof data161 === "string"){
if(func2(data161) > 100){
const err376 = {instancePath:instancePath+"/relatedObject/" + i14+"/name",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err376];
}
else {
vErrors.push(err376);
}
errors++;
}
}
else {
const err377 = {instancePath:instancePath+"/relatedObject/" + i14+"/name",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err377];
}
else {
vErrors.push(err377);
}
errors++;
}
}
}
const _errs427 = errors;
let valid94 = false;
let passing6 = null;
const _errs428 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data162 = data155.involvement;
if(typeof data162 !== "string"){
const err378 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err378];
}
else {
vErrors.push(err378);
}
errors++;
}
if(!((data162 === "securityPolicy") || (data162 === "securityClassification"))){
const err379 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err379];
}
else {
vErrors.push(err379);
}
errors++;
}
}
if(data155.id !== undefined){
let data163 = data155.id;
if(typeof data163 === "string"){
if(func2(data163) > 32){
const err380 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err380];
}
else {
vErrors.push(err380);
}
errors++;
}
}
else {
const err381 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err381];
}
else {
vErrors.push(err381);
}
errors++;
}
}
if(data155.href !== undefined){
let data164 = data155.href;
if(typeof data164 === "string"){
if(func2(data164) > 4096){
const err382 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err382];
}
else {
vErrors.push(err382);
}
errors++;
}
}
else {
const err383 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err383];
}
else {
vErrors.push(err383);
}
errors++;
}
}
}
var _valid6 = _errs428 === errors;
if(_valid6){
valid94 = true;
passing6 = 0;
}
const _errs435 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data165 = data155.involvement;
if(typeof data165 !== "string"){
const err384 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err384];
}
else {
vErrors.push(err384);
}
errors++;
}
if(!(data165 === "releasabilityCommunity")){
const err385 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err385];
}
else {
vErrors.push(err385);
}
errors++;
}
}
if(data155.id !== undefined){
let data166 = data155.id;
if(typeof data166 === "string"){
if(func2(data166) > 256){
const err386 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err386];
}
else {
vErrors.push(err386);
}
errors++;
}
}
else {
const err387 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err387];
}
else {
vErrors.push(err387);
}
errors++;
}
}
if(data155.href !== undefined){
let data167 = data155.href;
if(typeof data167 === "string"){
if(func2(data167) > 4096){
const err388 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err388];
}
else {
vErrors.push(err388);
}
errors++;
}
}
else {
const err389 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err389];
}
else {
vErrors.push(err389);
}
errors++;
}
}
}
var _valid6 = _errs435 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 1];
}
else {
if(_valid6){
valid94 = true;
passing6 = 1;
}
const _errs442 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data168 = data155.involvement;
if(typeof data168 !== "string"){
const err390 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err390];
}
else {
vErrors.push(err390);
}
errors++;
}
if(!(data168 === "urgency")){
const err391 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err391];
}
else {
vErrors.push(err391);
}
errors++;
}
}
if(data155.id !== undefined){
let data169 = data155.id;
if(typeof data169 !== "string"){
const err392 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err392];
}
else {
vErrors.push(err392);
}
errors++;
}
if(!(((data169 === "high") || (data169 === "medium")) || (data169 === "low"))){
const err393 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err393];
}
else {
vErrors.push(err393);
}
errors++;
}
}
if(data155.href !== undefined){
let data170 = data155.href;
if(typeof data170 === "string"){
if(func2(data170) > 4096){
const err394 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err394];
}
else {
vErrors.push(err394);
}
errors++;
}
}
else {
const err395 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err395];
}
else {
vErrors.push(err395);
}
errors++;
}
}
}
var _valid6 = _errs442 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 2];
}
else {
if(_valid6){
valid94 = true;
passing6 = 2;
}
const _errs449 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data171 = data155.involvement;
if(typeof data171 !== "string"){
const err396 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err396];
}
else {
vErrors.push(err396);
}
errors++;
}
if(!(data171 === "csirLabel")){
const err397 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err397];
}
else {
vErrors.push(err397);
}
errors++;
}
}
if(data155.id !== undefined){
let data172 = data155.id;
if(typeof data172 === "string"){
if(!pattern2.test(data172)){
const err398 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err398];
}
else {
vErrors.push(err398);
}
errors++;
}
}
else {
const err399 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err399];
}
else {
vErrors.push(err399);
}
errors++;
}
}
if(data155.href !== undefined){
let data173 = data155.href;
if(typeof data173 === "string"){
if(func2(data173) > 4096){
const err400 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err400];
}
else {
vErrors.push(err400);
}
errors++;
}
}
else {
const err401 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err401];
}
else {
vErrors.push(err401);
}
errors++;
}
}
}
var _valid6 = _errs449 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 3];
}
else {
if(_valid6){
valid94 = true;
passing6 = 3;
}
const _errs456 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data174 = data155.involvement;
if(typeof data174 !== "string"){
const err402 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err402];
}
else {
vErrors.push(err402);
}
errors++;
}
if(!(data174 === "impactedLocation")){
const err403 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err403];
}
else {
vErrors.push(err403);
}
errors++;
}
}
if(data155.id !== undefined){
let data175 = data155.id;
if(typeof data175 === "string"){
if(func2(data175) > 64){
const err404 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err404];
}
else {
vErrors.push(err404);
}
errors++;
}
}
else {
const err405 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err405];
}
else {
vErrors.push(err405);
}
errors++;
}
}
if(data155.href !== undefined){
let data176 = data155.href;
if(typeof data176 === "string"){
if(func2(data176) > 4096){
const err406 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err406];
}
else {
vErrors.push(err406);
}
errors++;
}
}
else {
const err407 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err407];
}
else {
vErrors.push(err407);
}
errors++;
}
}
}
var _valid6 = _errs456 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 4];
}
else {
if(_valid6){
valid94 = true;
passing6 = 4;
}
const _errs463 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data177 = data155.involvement;
if(typeof data177 !== "string"){
const err408 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err408];
}
else {
vErrors.push(err408);
}
errors++;
}
if(!(data177 === "serviceImpact")){
const err409 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err409];
}
else {
vErrors.push(err409);
}
errors++;
}
}
if(data155.id !== undefined){
let data178 = data155.id;
if(typeof data178 === "string"){
if(!pattern3.test(data178)){
const err410 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err410];
}
else {
vErrors.push(err410);
}
errors++;
}
}
else {
const err411 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err411];
}
else {
vErrors.push(err411);
}
errors++;
}
}
if(data155.href !== undefined){
let data179 = data155.href;
if(typeof data179 === "string"){
if(func2(data179) > 4096){
const err412 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err412];
}
else {
vErrors.push(err412);
}
errors++;
}
}
else {
const err413 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err413];
}
else {
vErrors.push(err413);
}
errors++;
}
}
}
var _valid6 = _errs463 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 5];
}
else {
if(_valid6){
valid94 = true;
passing6 = 5;
}
const _errs470 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data180 = data155.involvement;
if(typeof data180 !== "string"){
const err414 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err414];
}
else {
vErrors.push(err414);
}
errors++;
}
if(!((data180 === "isMajorIncident") || (data180 === "isCyberSecurityIncident"))){
const err415 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err415];
}
else {
vErrors.push(err415);
}
errors++;
}
}
if(data155.id !== undefined){
let data181 = data155.id;
if(typeof data181 !== "string"){
const err416 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err416];
}
else {
vErrors.push(err416);
}
errors++;
}
if(!((data181 === "true") || (data181 === "false"))){
const err417 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err417];
}
else {
vErrors.push(err417);
}
errors++;
}
}
if(data155.href !== undefined){
let data182 = data155.href;
if(typeof data182 === "string"){
if(func2(data182) > 4096){
const err418 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err418];
}
else {
vErrors.push(err418);
}
errors++;
}
}
else {
const err419 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err419];
}
else {
vErrors.push(err419);
}
errors++;
}
}
}
var _valid6 = _errs470 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 6];
}
else {
if(_valid6){
valid94 = true;
passing6 = 6;
}
const _errs477 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data183 = data155.involvement;
if(typeof data183 !== "string"){
const err420 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err420];
}
else {
vErrors.push(err420);
}
errors++;
}
if(!((((((data183 === "impactedService") || (data183 === "relatedEvent")) || (data183 === "relatedIncident")) || (data183 === "relatedProblem")) || (data183 === "relatedServiceRequest")) || (data183 === "relatedFederatedConfigurationItem"))){
const err421 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err421];
}
else {
vErrors.push(err421);
}
errors++;
}
}
if(data155.id !== undefined){
let data184 = data155.id;
if(typeof data184 === "string"){
if(func2(data184) > 64){
const err422 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err422];
}
else {
vErrors.push(err422);
}
errors++;
}
if(!pattern4.test(data184)){
const err423 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err423];
}
else {
vErrors.push(err423);
}
errors++;
}
}
else {
const err424 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err424];
}
else {
vErrors.push(err424);
}
errors++;
}
}
if(data155.href !== undefined){
let data185 = data155.href;
if(typeof data185 === "string"){
if(func2(data185) > 4096){
const err425 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err425];
}
else {
vErrors.push(err425);
}
errors++;
}
}
else {
const err426 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err426];
}
else {
vErrors.push(err426);
}
errors++;
}
}
}
var _valid6 = _errs477 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 7];
}
else {
if(_valid6){
valid94 = true;
passing6 = 7;
}
const _errs484 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data186 = data155.involvement;
if(typeof data186 !== "string"){
const err427 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err427];
}
else {
vErrors.push(err427);
}
errors++;
}
if(!(data186 === "relatedAttachment")){
const err428 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err428];
}
else {
vErrors.push(err428);
}
errors++;
}
}
if(data155.id !== undefined){
let data187 = data155.id;
if(typeof data187 === "string"){
if(!pattern5.test(data187)){
const err429 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err429];
}
else {
vErrors.push(err429);
}
errors++;
}
}
else {
const err430 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err430];
}
else {
vErrors.push(err430);
}
errors++;
}
}
if(data155.name !== undefined){
if(typeof data155.name !== "string"){
const err431 = {instancePath:instancePath+"/relatedObject/" + i14+"/name",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err431];
}
else {
vErrors.push(err431);
}
errors++;
}
}
if(data155.href !== undefined){
let data189 = data155.href;
if(typeof data189 === "string"){
if(func2(data189) > 5592421){
const err432 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err432];
}
else {
vErrors.push(err432);
}
errors++;
}
if(!pattern6.test(data189)){
const err433 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err433];
}
else {
vErrors.push(err433);
}
errors++;
}
}
else {
const err434 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err434];
}
else {
vErrors.push(err434);
}
errors++;
}
}
}
var _valid6 = _errs484 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 8];
}
else {
if(_valid6){
valid94 = true;
passing6 = 8;
}
const _errs493 = errors;
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement !== undefined){
let data190 = data155.involvement;
if(typeof data190 !== "string"){
const err435 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err435];
}
else {
vErrors.push(err435);
}
errors++;
}
if(!(data190 === "fsmRecordClass")){
const err436 = {instancePath:instancePath+"/relatedObject/" + i14+"/involvement",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err436];
}
else {
vErrors.push(err436);
}
errors++;
}
}
if(data155.id !== undefined){
let data191 = data155.id;
if(typeof data191 !== "string"){
const err437 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err437];
}
else {
vErrors.push(err437);
}
errors++;
}
if(!(data191 === "INCIDENT")){
const err438 = {instancePath:instancePath+"/relatedObject/" + i14+"/id",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err438];
}
else {
vErrors.push(err438);
}
errors++;
}
}
if(data155.href !== undefined){
let data192 = data155.href;
if(typeof data192 === "string"){
if(func2(data192) > 4096){
const err439 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err439];
}
else {
vErrors.push(err439);
}
errors++;
}
}
else {
const err440 = {instancePath:instancePath+"/relatedObject/" + i14+"/href",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err440];
}
else {
vErrors.push(err440);
}
errors++;
}
}
}
var _valid6 = _errs493 === errors;
if(_valid6 && valid94){
valid94 = false;
passing6 = [passing6, 9];
}
else {
if(_valid6){
valid94 = true;
passing6 = 9;
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
if(!valid94){
const err441 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing6},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err441];
}
else {
vErrors.push(err441);
}
errors++;
}
else {
errors = _errs427;
if(vErrors !== null){
if(_errs427){
vErrors.length = _errs427;
}
else {
vErrors = null;
}
}
}
if(data155 && typeof data155 == "object" && !Array.isArray(data155)){
if(data155.involvement === undefined){
const err442 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err442];
}
else {
vErrors.push(err442);
}
errors++;
}
if(data155.id === undefined){
const err443 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err443];
}
else {
vErrors.push(err443);
}
errors++;
}
}
else {
const err444 = {instancePath:instancePath+"/relatedObject/" + i14,schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err444];
}
else {
vErrors.push(err444);
}
errors++;
}
}
let i15 = data154.length;
let j7;
if(i15 > 1){
outer7:
for(;i15--;){
for(j7 = i15; j7--;){
if(func0(data154[i15], data154[j7])){
const err445 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i15, j: j7},message:"must NOT have duplicate items (items ## "+j7+" and "+i15+" are identical)"};
if(vErrors === null){
vErrors = [err445];
}
else {
vErrors.push(err445);
}
errors++;
break outer7;
}
}
}
}
}
else {
const err446 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err446];
}
else {
vErrors.push(err446);
}
errors++;
}
if(Array.isArray(data154)){
if(data154.length < 4){
const err447 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err447];
}
else {
vErrors.push(err447);
}
errors++;
}
}
else {
const err448 = {instancePath:instancePath+"/relatedObject",schemaPath:"#/oneOf/2/allOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err448];
}
else {
vErrors.push(err448);
}
errors++;
}
}
if(data.note !== undefined){
let data193 = data.note;
if(Array.isArray(data193)){
const len8 = data193.length;
for(let i16=0; i16<len8; i16++){
let data194 = data193[i16];
if(data194 && typeof data194 == "object" && !Array.isArray(data194)){
if(data194.date !== undefined){
let data195 = data194.date;
if(typeof data195 === "string"){
if(!pattern7.test(data195)){
const err449 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err449];
}
else {
vErrors.push(err449);
}
errors++;
}
if(!(formats0.validate(data195))){
const err450 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err450];
}
else {
vErrors.push(err450);
}
errors++;
}
}
else {
const err451 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err451];
}
else {
vErrors.push(err451);
}
errors++;
}
}
if(data194.author !== undefined){
if(typeof data194.author !== "string"){
const err452 = {instancePath:instancePath+"/note/" + i16+"/author",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err452];
}
else {
vErrors.push(err452);
}
errors++;
}
}
if(data194.text !== undefined){
if(typeof data194.text !== "string"){
const err453 = {instancePath:instancePath+"/note/" + i16+"/text",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err453];
}
else {
vErrors.push(err453);
}
errors++;
}
}
}
else {
const err454 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err454];
}
else {
vErrors.push(err454);
}
errors++;
}
if(data194 && typeof data194 == "object" && !Array.isArray(data194)){
if(data194.date === undefined){
const err455 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err455];
}
else {
vErrors.push(err455);
}
errors++;
}
if(data194.author === undefined){
const err456 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err456];
}
else {
vErrors.push(err456);
}
errors++;
}
if(data194.text === undefined){
const err457 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err457];
}
else {
vErrors.push(err457);
}
errors++;
}
for(const key11 in data194){
if(!(((key11 === "date") || (key11 === "author")) || (key11 === "text"))){
const err458 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key11},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err458];
}
else {
vErrors.push(err458);
}
errors++;
}
}
if(data194.date !== undefined){
let data198 = data194.date;
if(typeof data198 === "string"){
if(!pattern7.test(data198)){
const err459 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err459];
}
else {
vErrors.push(err459);
}
errors++;
}
if(!(formats0.validate(data198))){
const err460 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err460];
}
else {
vErrors.push(err460);
}
errors++;
}
}
else {
const err461 = {instancePath:instancePath+"/note/" + i16+"/date",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err461];
}
else {
vErrors.push(err461);
}
errors++;
}
}
if(data194.author !== undefined){
let data199 = data194.author;
if(typeof data199 === "string"){
if(func2(data199) > 100){
const err462 = {instancePath:instancePath+"/note/" + i16+"/author",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err462];
}
else {
vErrors.push(err462);
}
errors++;
}
}
else {
const err463 = {instancePath:instancePath+"/note/" + i16+"/author",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err463];
}
else {
vErrors.push(err463);
}
errors++;
}
}
if(data194.text !== undefined){
if(typeof data194.text !== "string"){
const err464 = {instancePath:instancePath+"/note/" + i16+"/text",schemaPath:"#/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err464];
}
else {
vErrors.push(err464);
}
errors++;
}
}
}
if(data194 && typeof data194 == "object" && !Array.isArray(data194)){
if(data194.date === undefined){
const err465 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err465];
}
else {
vErrors.push(err465);
}
errors++;
}
if(data194.author === undefined){
const err466 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err466];
}
else {
vErrors.push(err466);
}
errors++;
}
if(data194.text === undefined){
const err467 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err467];
}
else {
vErrors.push(err467);
}
errors++;
}
}
else {
const err468 = {instancePath:instancePath+"/note/" + i16,schemaPath:"#/oneOf/2/allOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err468];
}
else {
vErrors.push(err468);
}
errors++;
}
}
let i17 = data193.length;
let j8;
if(i17 > 1){
outer8:
for(;i17--;){
for(j8 = i17; j8--;){
if(func0(data193[i17], data193[j8])){
const err469 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/2/allOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i17, j: j8},message:"must NOT have duplicate items (items ## "+j8+" and "+i17+" are identical)"};
if(vErrors === null){
vErrors = [err469];
}
else {
vErrors.push(err469);
}
errors++;
break outer8;
}
}
}
}
}
else {
const err470 = {instancePath:instancePath+"/note",schemaPath:"#/oneOf/2/allOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err470];
}
else {
vErrors.push(err470);
}
errors++;
}
}
}
else {
const err471 = {instancePath,schemaPath:"#/oneOf/2/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err471];
}
else {
vErrors.push(err471);
}
errors++;
}
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.description === undefined){
const err472 = {instancePath,schemaPath:"#/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "description"},message:"must have required property '"+"description"+"'"};
if(vErrors === null){
vErrors = [err472];
}
else {
vErrors.push(err472);
}
errors++;
}
if(data.severity === undefined){
const err473 = {instancePath,schemaPath:"#/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "severity"},message:"must have required property '"+"severity"+"'"};
if(vErrors === null){
vErrors = [err473];
}
else {
vErrors.push(err473);
}
errors++;
}
if(data.type === undefined){
const err474 = {instancePath,schemaPath:"#/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "type"},message:"must have required property '"+"type"+"'"};
if(vErrors === null){
vErrors = [err474];
}
else {
vErrors.push(err474);
}
errors++;
}
if(data.resolutionDate === undefined){
const err475 = {instancePath,schemaPath:"#/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "resolutionDate"},message:"must have required property '"+"resolutionDate"+"'"};
if(vErrors === null){
vErrors = [err475];
}
else {
vErrors.push(err475);
}
errors++;
}
if(data.status !== undefined){
let data201 = data.status;
if(typeof data201 !== "string"){
const err476 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/2/allOf/1/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err476];
}
else {
vErrors.push(err476);
}
errors++;
}
if(!((data201 === "Resolved") || (data201 === "Cancelled"))){
const err477 = {instancePath:instancePath+"/status",schemaPath:"#/oneOf/2/allOf/1/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.oneOf[2].allOf[1].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err477];
}
else {
vErrors.push(err477);
}
errors++;
}
}
}
else {
const err478 = {instancePath,schemaPath:"#/oneOf/2/allOf/1/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err478];
}
else {
vErrors.push(err478);
}
errors++;
}
var _valid0 = _errs345 === errors;
if(_valid0 && valid0){
valid0 = false;
passing0 = [passing0, 2];
}
else {
if(_valid0){
valid0 = true;
passing0 = 2;
}
}
}
if(!valid0){
const err479 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err479];
}
else {
vErrors.push(err479);
}
errors++;
}
else {
errors = _errs1;
if(vErrors !== null){
if(_errs1){
vErrors.length = _errs1;
}
else {
vErrors = null;
}
}
}
validate10.errors = vErrors;
return errors === 0;
}
