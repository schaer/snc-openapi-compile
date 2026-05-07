"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"allOf":[{"properties":{"eventType":{"type":"string"},"eventTime":{"type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z","example":"2018-07-16T12:38:27.123Z"},"eventId":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-PUB-[a-zA-Z0-9_-]{1,112}$","example":"CWX-DEU-003-PUB-1531744707827"},"event":{"type":"object"}}},{"oneOf":[{"properties":{"eventType":{"type":"string","pattern":"TicketCreationNotification","example":"TicketCreationNotification"},"event":{"additionalProperties":false,"properties":{"troubleTicket":{"description":"Attributes for creating a new incident (POST-method).","type":"object","required":["id","description","severity","type"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"creationDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","description":"Creation date of incident.","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":8}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}}}}}},{"properties":{"eventType":{"type":"string","pattern":"TicketChangeNotification","example":"TicketChangeNotification"},"event":{"additionalProperties":false,"properties":{"troubleTicket":{"description":"Attributes for updating or appending to a existing incident (PATCH-method).","type":"object","x-custom-comment":"Following 'oneOf' ensures, that only one of the epcefications fits","oneOf":[{"description":"Attributes for appending a note to an existing incident (PATCH-method).","type":"object","required":["id"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":2}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4,"maxItems":5}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"description":"For all states without 'Resolved' and 'Cancelled' without additional mandatory attributes","allOf":[{"description":"Attributes for updating a existing incident (PATCH-method).","type":"object","required":["id","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"type":"object","properties":{"status":{"description":"ToDo","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Closed"]}}}]},{"description":"For the states 'Resolved' and 'Cancelled' with additional mandatory attributes","allOf":[{"description":"Attributes for updating a existing incident (PATCH-method).","type":"object","required":["id","status"],"additionalProperties":false,"properties":{"id":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"Unique identifier of the incident.","type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$","example":"TST-MNE-001-INC-BIN1010879"},"description":{"x-custom-comment":"TODO: Still not length limitation?","description":"Description of the incident.","type":"string","example":"This is a test incident"},"severity":{"x-custom-comment":"Restricted to federated SMC specific pattern","description":"TM Forum severity corresponds to ITIL incident impact.\n- high - TM Forum severity corresponds to ITIL incident impact. Definition for high: Another MNE is affected and the overall impact is high.\n- medium - Definition for medium: Another MNE is affected and the overall impact is medium or low.\n- low - Definition for high: Another MNE is NOT affected and the local impact is high, medium or low.\n","type":"string","enum":["critical","high","medium","low","none"],"example":"medium"},"type":{"description":"Type of incident.","type":"string","maxLength":50,"example":"Failure"},"targetResolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"status":{"x-custom-comment":"Restricted to federated SMC specific status values. InProgressHeld and InProgressPending are moved to new property 'subStatus'","description":"The current status of the incident. If the status is \"InProgress\" the\nsubStatus field might be used to indicated a pending situation.\n- Submitted - The initial state of an Incident when created by a TT\noriginator.\n- Rejected - The Trouble Ticket was rejected because it:\n  - is not submitted\n  - provides invalid information\n  - fails to meet the Business Rules in respect of the Product which originator is raising a Trouble Ticket against\n  - is otherwise defective\n- Acknowledged - The Incident was accepted and allocated a unique\nIncident ID by the Incident handler.\n- InProgress - The Incident was validated by the Incident handler and is\nbeing processed.\n- Resolved - The Fault indicated in the Incident was corrected by the\nIncident handler and acknowledgement is awaited from its originator.\n- Closed - The Incident originator has acknowledged the Resolved\nstate of the Incident, or the timeframe (default value 14 days) for\nacknowledgement has passed without response from TT originator.\n- Cancelled - The Incident which was sent from the originator to the\nIncident handler was technically formatted correctly and was wherefore\nacknowledged in first place, but the content on the Incident is\ninadequate. Therefore, the Incident handler rejects to work on this\nIncident.  Reasons for Incident cancellation are:\n  - wrongly assigned\n  - information provided is inadequate.\n","type":"string","enum":["Submitted","Rejected","Acknowledged","InProgress","Resolved","Closed","Cancelled"],"example":"Submitted"},"subStatus":{"x-custom-comment":"At specification time of the SIP document it was not known, that the Open SPI specification file is the 'master' of all specification documents for TM Forum","description":"The current sub status of the incident.\n- Held - The Incident handler is awaiting further confirmation on\ndetails of a Fault from originator before it can progress the Fault. An\nexample is where Appointment information is required.\n- Pending - The Incident handler is confirming further details\ninternally before completing an Incident.  An example is where Incident\nhandler for network infrastructure spare parts to progress with the\nFault rectification.\n","type":"string","enum":["Held","Pending"],"example":"Held"},"resolutionDate":{"x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"relatedParty":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"maxItems":4,"items":{"description":"Extended objects for federated mission network operations.","type":"object","required":["role","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"href":{"type":"string"},"role":{"type":"string"}}},{"additionalProperties":false,"properties":{"role":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string","maxLength":4096},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"role":{"type":"string","enum":["originator","owner"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$","example":"TST-DEU-001"}}},{"properties":{"role":{"type":"string","enum":["assigneeGroup"]},"id":{"type":"string","maxLength":64}}},{"properties":{"role":{"type":"string","enum":["reportingPerson"]},"id":{"type":"string","maxLength":256}}}]}]}},{"type":"array","minItems":2,"maxItems":3}]},"relatedObject":{"allOf":[{"x-custom-comment":"Restricted to federated SMC specific key value pairs","description":"Extended objects for federated mission network operations.","type":"array","uniqueItems":true,"minItems":4,"items":{"description":"Extended attributes for federated mission network operations.","type":"object","required":["involvement","id"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted common smc properties are valid and c) more restricted key-specific smc property values are valid","allOf":[{"type":"object","properties":{"involvement":{"type":"string"},"href":{"type":"string"}}},{"additionalProperties":false,"properties":{"involvement":{"description":"Object type.","type":"string","maxLength":64},"id":{"description":"Contains a value. If href is filled, FSMID of the specific record\nor object otherwise the value itself.\n","type":"string","maxLength":64},"href":{"description":"URI to specific record or object.","type":"string"},"name":{"description":"Human readable value / display name.","type":"string","maxLength":100}}},{"oneOf":[{"properties":{"involvement":{"type":"string","enum":["securityPolicy","securityClassification"]},"id":{"type":"string","maxLength":32},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["releasabilityCommunity"]},"id":{"type":"string","maxLength":256,"x-custom-comment":"pattern ([A-Z]{3},)*([A-Z]{3}) does not longer fit because of i.e. 'EU EEAS only'","example":"AUS,AUT,CHE,FIN,NZL,SWE"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["urgency"]},"id":{"type":"string","enum":["high","medium","low"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["csirLabel"]},"id":{"type":"string","pattern":"^(CSIR)([1-9]|10)|None$"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedLocation"]},"id":{"type":"string","maxLength":64,"example":"BERLIN"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["serviceImpact"]},"id":{"type":"string","pattern":"[1-5]"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["isMajorIncident","isCyberSecurityIncident"]},"id":{"type":"string","enum":["true","false"]},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["impactedService","relatedEvent","relatedIncident","relatedProblem","relatedServiceRequest","relatedFederatedConfigurationItem"]},"id":{"type":"string","maxLength":64,"pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$","example":"TST-DEU-001-SRQ-BSR47859"},"href":{"type":"string","maxLength":4096}}},{"properties":{"involvement":{"type":"string","enum":["relatedAttachment"]},"id":{"type":"string","pattern":"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},"name":{"type":"string"},"href":{"description":"maxLength is prefix + max. base64 encoded data of size 4 MB (= 13 (prefix) + (4*1024 (KB) * 1024 (Byte) * 8 (bit) / 6 (bits/character)) + 2 (max padding)).","type":"string","maxLength":5592421,"pattern":"^data:;base64,.*"}}},{"properties":{"involvement":{"type":"string","enum":["fsmRecordClass"]},"id":{"type":"string","enum":["INCIDENT"]},"href":{"type":"string","maxLength":4096}}}]}]}},{"type":"array","minItems":4}]},"note":{"x-custom-comment":"Restricted to federated SMC specific notes","description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"array","uniqueItems":true,"items":{"description":"The Note object array contains numerous log entries of the incident. It\nmay contain first diagnosis, progress information and solution\ndescription as note records.\n","type":"object","required":["date","author","text"],"x-custom-comment":"Following 'allOf' ensures, that a) the original specification must be valid and b) more restricted smc properties are valid","allOf":[{"type":"object","properties":{"date":{"type":"string","x-custom-comment":"changed from 'date' to 'date-time' due to service interface profile","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"type":"string"},"text":{"type":"string"}}},{"additionalProperties":false,"properties":{"date":{"description":"Timestamp, when the note was created","type":"string","format":"date-time","pattern":"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},"author":{"description":"(Email) address of the author","type":"string","maxLength":100},"text":{"description":"Text of the note","type":"string"}},"required":["date","author","text"],"example":{"date":"2018-02-06T14:17:59.000Z","author":"somebody@organization.com","text":"Log entry for incident"}}]}}}},{"type":"object","required":["description","severity","type","resolutionDate"],"properties":{"status":{"description":"ToDo","type":"string","enum":["Resolved","Cancelled"]}}}]}]}}}}}]}],"example":{"eventType":"TicketChangeNotification","eventTime":"2014-09-27T05:46:25.0Z","eventId":"ISF-NCI-001-PUB-00000302","event":{"troubleTicket":{"id":"CWX-DEU-001-INC-20190209141244","description":"Sample incident for test with soapUI::Incident details containing more characters","severity":"high","type":"Network","targetResolutionDate":"2018-04-22T13:44:33.000Z","status":"InProgress","subStatus":"Pending","relatedParty":[{"role":"assigneeGroup","id":"CWX-DEU-002-Group"}],"relatedObject":[{"involvement":"securityPolicy","id":"CWIX18"},{"involvement":"securityClassification","id":"UNCLASSIFIED"},{"involvement":"releasabilityCommunity","id":"AUS,AUT,CHE,FIN,NZL,SWE,UKR,EU EEAS only"},{"involvement":"csirLabel","id":"CSIR9"},{"involvement":"urgency","id":"high"},{"involvement":"serviceImpact","id":"3"},{"involvement":"isMajorIncident","id":"false"},{"involvement":"isCyberSecurityIncident","id":"false"},{"involvement":"impactedLocation","id":"Bydgoszcz"},{"involvement":"relatedEvent","href":"http://testsrv.fsmcdeu.selfhost.eu/SMC/eventManagement/v4.0/event/CWX-DEU-002-EVT-00000001","id":"CWX-DEU-002-EVT-00000001"},{"involvement":"relatedIncident","href":"http://testsrv.fsmcdeu.selfhost.eu/SMC/troubleTicketManagement/v4.0/troubleTicket/CWX-DEU-001-INC-00000001","id":"CWX-DEU-001-INC-00000001"},{"involvement":"relatedProblem","href":"http://testsrv.fsmcdeu.selfhost.eu/SMC/problemManagement/v4.0/problem/CWX-DEU-002-PRB-00000001","id":"CWX-DEU-002-PRB-00000001"},{"involvement":"relatedServiceRequest","href":"http://testsrv.fsmcdeu.selfhost.eu/SMC/serviceOrderingManagement/v4.0/serviceOrder/CWX-DEU-002-SRQ-00000001","id":"CWX-DEU-002-SRQ-00000001"},{"involvement":"relatedFederatedConfigurationItem","href":"http://testsrv.fsmcdeu.selfhost.eu/SMC/configurationManagement/v4.0/configurationItem/CWX-DEU-002-FCI-00000001","id":"CWX-DEU-002-FCI-00000001"},{"involvement":"relatedFederatedConfigurationItem","id":"CWX-DEU-001-FCI-01234567890123456789"},{"involvement":"relatedAttachment","id":"CWX-DEU-001-INC-20190209141244-ATT-000001","name":"Testfile1.txt","href":"VGhpcyBpcyBvbmx5IGEgdGVzdCBmaWxlIHNlbmQgYXMgYXR0YWNobWVudCBmb3IgYW4gaW5jaWRlbnQu"},{"involvement":"relatedAttachment","id":"CWX-DEU-001-INC-20190209141244-ATT-000001","name":"Testfile2.txt","href":"VGhpcyBpcyBvbmx5IGEgdGVzdCBmaWxlIHNlbmQgYXMgYXR0YWNobWVudCBmb3IgYW4gaW5jaWRlbnQu"},{"involvement":"fsmRecordClass","id":"INCIDENT"}],"note":[{"date":"2019-02-09T11:22:33.000Z","author":"CWIX-Demo-Account","text":"Ticket created by soapUI test request"}]}}}};
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const pattern0 = new RegExp("\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z", "u");
const pattern1 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-PUB-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern2 = new RegExp("TicketCreationNotification", "u");
const pattern3 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern5 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$", "u");
const pattern6 = new RegExp("^(CSIR)([1-9]|10)|None$", "u");
const pattern7 = new RegExp("[1-5]", "u");
const pattern8 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern9 = new RegExp("^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$", "u");
const pattern10 = new RegExp("^data:;base64,.*", "u");
const pattern13 = new RegExp("TicketChangeNotification", "u");
const func2 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const func60 = Object.prototype.hasOwnProperty;

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.eventType !== undefined){
if(typeof data.eventType !== "string"){
const err0 = {instancePath:instancePath+"/eventType",schemaPath:"#/allOf/0/properties/eventType/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
if(data.eventTime !== undefined){
let data1 = data.eventTime;
if(typeof data1 === "string"){
if(!pattern0.test(data1)){
const err1 = {instancePath:instancePath+"/eventTime",schemaPath:"#/allOf/0/properties/eventTime/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(!(formats0.validate(data1))){
const err2 = {instancePath:instancePath+"/eventTime",schemaPath:"#/allOf/0/properties/eventTime/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
else {
const err3 = {instancePath:instancePath+"/eventTime",schemaPath:"#/allOf/0/properties/eventTime/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data.eventId !== undefined){
let data2 = data.eventId;
if(typeof data2 === "string"){
if(func2(data2) > 64){
const err4 = {instancePath:instancePath+"/eventId",schemaPath:"#/allOf/0/properties/eventId/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(!pattern1.test(data2)){
const err5 = {instancePath:instancePath+"/eventId",schemaPath:"#/allOf/0/properties/eventId/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-PUB-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-PUB-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err6 = {instancePath:instancePath+"/eventId",schemaPath:"#/allOf/0/properties/eventId/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data.event !== undefined){
let data3 = data.event;
if(!(data3 && typeof data3 == "object" && !Array.isArray(data3))){
const err7 = {instancePath:instancePath+"/event",schemaPath:"#/allOf/0/properties/event/type",keyword:"type",params:{type: "object"},message:"must be object"};
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
const _errs10 = errors;
let valid2 = false;
let passing0 = null;
const _errs11 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.eventType !== undefined){
let data4 = data.eventType;
if(typeof data4 === "string"){
if(!pattern2.test(data4)){
const err8 = {instancePath:instancePath+"/eventType",schemaPath:"#/allOf/1/oneOf/0/properties/eventType/pattern",keyword:"pattern",params:{pattern: "TicketCreationNotification"},message:"must match pattern \""+"TicketCreationNotification"+"\""};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
else {
const err9 = {instancePath:instancePath+"/eventType",schemaPath:"#/allOf/1/oneOf/0/properties/eventType/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(data.event !== undefined){
let data5 = data.event;
if(data5 && typeof data5 == "object" && !Array.isArray(data5)){
for(const key0 in data5){
if(!(key0 === "troubleTicket")){
const err10 = {instancePath:instancePath+"/event",schemaPath:"#/allOf/1/oneOf/0/properties/event/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data5.troubleTicket !== undefined){
let data6 = data5.troubleTicket;
if(data6 && typeof data6 == "object" && !Array.isArray(data6)){
if(data6.id === undefined){
const err11 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(data6.description === undefined){
const err12 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/required",keyword:"required",params:{missingProperty: "description"},message:"must have required property '"+"description"+"'"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
if(data6.severity === undefined){
const err13 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/required",keyword:"required",params:{missingProperty: "severity"},message:"must have required property '"+"severity"+"'"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
if(data6.type === undefined){
const err14 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/required",keyword:"required",params:{missingProperty: "type"},message:"must have required property '"+"type"+"'"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
for(const key1 in data6){
if(!((((((((key1 === "id") || (key1 === "description")) || (key1 === "severity")) || (key1 === "type")) || (key1 === "creationDate")) || (key1 === "relatedParty")) || (key1 === "relatedObject")) || (key1 === "note"))){
const err15 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(data6.id !== undefined){
let data7 = data6.id;
if(typeof data7 === "string"){
if(func2(data7) > 64){
const err16 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
if(!pattern3.test(data7)){
const err17 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err18 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(data6.description !== undefined){
if(typeof data6.description !== "string"){
const err19 = {instancePath:instancePath+"/event/troubleTicket/description",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(data6.severity !== undefined){
let data9 = data6.severity;
if(typeof data9 !== "string"){
const err20 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
if(!(((((data9 === "critical") || (data9 === "high")) || (data9 === "medium")) || (data9 === "low")) || (data9 === "none"))){
const err21 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
if(data6.type !== undefined){
let data10 = data6.type;
if(typeof data10 === "string"){
if(func2(data10) > 50){
const err22 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
else {
const err23 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(data6.creationDate !== undefined){
let data11 = data6.creationDate;
if(typeof data11 === "string"){
if(!pattern0.test(data11)){
const err24 = {instancePath:instancePath+"/event/troubleTicket/creationDate",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/creationDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
if(!(formats0.validate(data11))){
const err25 = {instancePath:instancePath+"/event/troubleTicket/creationDate",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/creationDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err26 = {instancePath:instancePath+"/event/troubleTicket/creationDate",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
}
if(data6.relatedParty !== undefined){
let data12 = data6.relatedParty;
if(Array.isArray(data12)){
if(data12.length > 4){
const err27 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
const len0 = data12.length;
for(let i0=0; i0<len0; i0++){
let data13 = data12[i0];
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.href !== undefined){
if(typeof data13.href !== "string"){
const err28 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
if(data13.role !== undefined){
if(typeof data13.role !== "string"){
const err29 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const err30 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
for(const key2 in data13){
if(!((((key2 === "role") || (key2 === "id")) || (key2 === "href")) || (key2 === "name"))){
const err31 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
}
if(data13.role !== undefined){
let data16 = data13.role;
if(typeof data16 === "string"){
if(func2(data16) > 64){
const err32 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err33 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
if(data13.id !== undefined){
let data17 = data13.id;
if(typeof data17 === "string"){
if(func2(data17) > 64){
const err34 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err35 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
}
if(data13.href !== undefined){
let data18 = data13.href;
if(typeof data18 === "string"){
if(func2(data18) > 4096){
const err36 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err37 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
}
if(data13.name !== undefined){
let data19 = data13.name;
if(typeof data19 === "string"){
if(func2(data19) > 100){
const err38 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/name",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err39 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/name",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const _errs51 = errors;
let valid12 = false;
let passing1 = null;
const _errs52 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data20 = data13.role;
if(typeof data20 !== "string"){
const err40 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
if(!((data20 === "originator") || (data20 === "owner"))){
const err41 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
}
if(data13.id !== undefined){
let data21 = data13.id;
if(typeof data21 === "string"){
if(!pattern5.test(data21)){
const err42 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
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
const err43 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs52 === errors;
if(_valid1){
valid12 = true;
passing1 = 0;
}
const _errs57 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data22 = data13.role;
if(typeof data22 !== "string"){
const err44 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
if(!(data22 === "assigneeGroup")){
const err45 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
}
if(data13.id !== undefined){
let data23 = data13.id;
if(typeof data23 === "string"){
if(func2(data23) > 64){
const err46 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err47 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs57 === errors;
if(_valid1 && valid12){
valid12 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid12 = true;
passing1 = 1;
}
const _errs62 = errors;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role !== undefined){
let data24 = data13.role;
if(typeof data24 !== "string"){
const err48 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
if(!(data24 === "reportingPerson")){
const err49 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/role",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
}
if(data13.id !== undefined){
let data25 = data13.id;
if(typeof data25 === "string"){
if(func2(data25) > 256){
const err50 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err51 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid1 = _errs62 === errors;
if(_valid1 && valid12){
valid12 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid12 = true;
passing1 = 2;
}
}
}
if(!valid12){
const err52 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
else {
errors = _errs51;
if(vErrors !== null){
if(_errs51){
vErrors.length = _errs51;
}
else {
vErrors = null;
}
}
}
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.role === undefined){
const err53 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
if(data13.id === undefined){
const err54 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err55 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
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
const err56 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"};
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
const err57 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
if(Array.isArray(data12)){
if(data12.length < 3){
const err58 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 3},message:"must NOT have fewer than 3 items"};
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
const err59 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
}
if(data6.relatedObject !== undefined){
let data26 = data6.relatedObject;
if(Array.isArray(data26)){
if(data26.length < 4){
const err60 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
const len1 = data26.length;
for(let i2=0; i2<len1; i2++){
let data27 = data26[i2];
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
if(typeof data27.involvement !== "string"){
const err61 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
}
if(data27.href !== undefined){
if(typeof data27.href !== "string"){
const err62 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const err63 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
for(const key3 in data27){
if(!((((key3 === "involvement") || (key3 === "id")) || (key3 === "href")) || (key3 === "name"))){
const err64 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
}
if(data27.involvement !== undefined){
let data30 = data27.involvement;
if(typeof data30 === "string"){
if(func2(data30) > 64){
const err65 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err66 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
}
if(data27.id !== undefined){
let data31 = data27.id;
if(typeof data31 === "string"){
if(func2(data31) > 64){
const err67 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err68 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
}
if(data27.href !== undefined){
if(typeof data27.href !== "string"){
const err69 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
}
if(data27.name !== undefined){
let data33 = data27.name;
if(typeof data33 === "string"){
if(func2(data33) > 100){
const err70 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/name",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err71 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/name",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const _errs91 = errors;
let valid23 = false;
let passing2 = null;
const _errs92 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data34 = data27.involvement;
if(typeof data34 !== "string"){
const err72 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
if(!((data34 === "securityPolicy") || (data34 === "securityClassification"))){
const err73 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
if(data27.id !== undefined){
let data35 = data27.id;
if(typeof data35 === "string"){
if(func2(data35) > 32){
const err74 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
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
const err75 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
if(data27.href !== undefined){
let data36 = data27.href;
if(typeof data36 === "string"){
if(func2(data36) > 4096){
const err76 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err77 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs92 === errors;
if(_valid2){
valid23 = true;
passing2 = 0;
}
const _errs99 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data37 = data27.involvement;
if(typeof data37 !== "string"){
const err78 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
if(!(data37 === "releasabilityCommunity")){
const err79 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
}
if(data27.id !== undefined){
let data38 = data27.id;
if(typeof data38 === "string"){
if(func2(data38) > 256){
const err80 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
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
const err81 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
}
if(data27.href !== undefined){
let data39 = data27.href;
if(typeof data39 === "string"){
if(func2(data39) > 4096){
const err82 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err83 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs99 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 1];
}
else {
if(_valid2){
valid23 = true;
passing2 = 1;
}
const _errs106 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data40 = data27.involvement;
if(typeof data40 !== "string"){
const err84 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
if(!(data40 === "urgency")){
const err85 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
}
if(data27.id !== undefined){
let data41 = data27.id;
if(typeof data41 !== "string"){
const err86 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
if(!(((data41 === "high") || (data41 === "medium")) || (data41 === "low"))){
const err87 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
}
if(data27.href !== undefined){
let data42 = data27.href;
if(typeof data42 === "string"){
if(func2(data42) > 4096){
const err88 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err89 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs106 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 2];
}
else {
if(_valid2){
valid23 = true;
passing2 = 2;
}
const _errs113 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data43 = data27.involvement;
if(typeof data43 !== "string"){
const err90 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
if(!(data43 === "csirLabel")){
const err91 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
}
if(data27.id !== undefined){
let data44 = data27.id;
if(typeof data44 === "string"){
if(!pattern6.test(data44)){
const err92 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
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
const err93 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
}
if(data27.href !== undefined){
let data45 = data27.href;
if(typeof data45 === "string"){
if(func2(data45) > 4096){
const err94 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err95 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs113 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 3];
}
else {
if(_valid2){
valid23 = true;
passing2 = 3;
}
const _errs120 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data46 = data27.involvement;
if(typeof data46 !== "string"){
const err96 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
if(!(data46 === "impactedLocation")){
const err97 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
}
if(data27.id !== undefined){
let data47 = data27.id;
if(typeof data47 === "string"){
if(func2(data47) > 64){
const err98 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err99 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
}
if(data27.href !== undefined){
let data48 = data27.href;
if(typeof data48 === "string"){
if(func2(data48) > 4096){
const err100 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err101 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs120 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 4];
}
else {
if(_valid2){
valid23 = true;
passing2 = 4;
}
const _errs127 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data49 = data27.involvement;
if(typeof data49 !== "string"){
const err102 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
if(!(data49 === "serviceImpact")){
const err103 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
}
if(data27.id !== undefined){
let data50 = data27.id;
if(typeof data50 === "string"){
if(!pattern7.test(data50)){
const err104 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
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
const err105 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
}
if(data27.href !== undefined){
let data51 = data27.href;
if(typeof data51 === "string"){
if(func2(data51) > 4096){
const err106 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err107 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs127 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 5];
}
else {
if(_valid2){
valid23 = true;
passing2 = 5;
}
const _errs134 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data52 = data27.involvement;
if(typeof data52 !== "string"){
const err108 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
if(!((data52 === "isMajorIncident") || (data52 === "isCyberSecurityIncident"))){
const err109 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
}
if(data27.id !== undefined){
let data53 = data27.id;
if(typeof data53 !== "string"){
const err110 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
if(!((data53 === "true") || (data53 === "false"))){
const err111 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
}
if(data27.href !== undefined){
let data54 = data27.href;
if(typeof data54 === "string"){
if(func2(data54) > 4096){
const err112 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err113 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs134 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 6];
}
else {
if(_valid2){
valid23 = true;
passing2 = 6;
}
const _errs141 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data55 = data27.involvement;
if(typeof data55 !== "string"){
const err114 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
if(!((((((data55 === "impactedService") || (data55 === "relatedEvent")) || (data55 === "relatedIncident")) || (data55 === "relatedProblem")) || (data55 === "relatedServiceRequest")) || (data55 === "relatedFederatedConfigurationItem"))){
const err115 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
}
if(data27.id !== undefined){
let data56 = data27.id;
if(typeof data56 === "string"){
if(func2(data56) > 64){
const err116 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
if(!pattern8.test(data56)){
const err117 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err118 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
}
if(data27.href !== undefined){
let data57 = data27.href;
if(typeof data57 === "string"){
if(func2(data57) > 4096){
const err119 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err120 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs141 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 7];
}
else {
if(_valid2){
valid23 = true;
passing2 = 7;
}
const _errs148 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data58 = data27.involvement;
if(typeof data58 !== "string"){
const err121 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
if(!(data58 === "relatedAttachment")){
const err122 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
}
if(data27.id !== undefined){
let data59 = data27.id;
if(typeof data59 === "string"){
if(!pattern9.test(data59)){
const err123 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err124 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
}
if(data27.name !== undefined){
if(typeof data27.name !== "string"){
const err125 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/name",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
}
if(data27.href !== undefined){
let data61 = data27.href;
if(typeof data61 === "string"){
if(func2(data61) > 5592421){
const err126 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
if(!pattern10.test(data61)){
const err127 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
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
const err128 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs148 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 8];
}
else {
if(_valid2){
valid23 = true;
passing2 = 8;
}
const _errs157 = errors;
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement !== undefined){
let data62 = data27.involvement;
if(typeof data62 !== "string"){
const err129 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
if(!(data62 === "fsmRecordClass")){
const err130 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/involvement",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
}
if(data27.id !== undefined){
let data63 = data27.id;
if(typeof data63 !== "string"){
const err131 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
if(!(data63 === "INCIDENT")){
const err132 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/id",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[0].properties.event.properties.troubleTicket.properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
}
if(data27.href !== undefined){
let data64 = data27.href;
if(typeof data64 === "string"){
if(func2(data64) > 4096){
const err133 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err134 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2+"/href",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid2 = _errs157 === errors;
if(_valid2 && valid23){
valid23 = false;
passing2 = [passing2, 9];
}
else {
if(_valid2){
valid23 = true;
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
if(!valid23){
const err135 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
else {
errors = _errs91;
if(vErrors !== null){
if(_errs91){
vErrors.length = _errs91;
}
else {
vErrors = null;
}
}
}
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
if(data27.involvement === undefined){
const err136 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
if(data27.id === undefined){
const err137 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err138 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i2,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
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
const err139 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
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
const err140 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
if(Array.isArray(data26)){
if(data26.length < 8){
const err141 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 8},message:"must NOT have fewer than 8 items"};
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
const err142 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
}
if(data6.note !== undefined){
let data65 = data6.note;
if(Array.isArray(data65)){
const len2 = data65.length;
for(let i4=0; i4<len2; i4++){
let data66 = data65[i4];
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date !== undefined){
let data67 = data66.date;
if(typeof data67 === "string"){
if(!pattern0.test(data67)){
const err143 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
}
if(!(formats0.validate(data67))){
const err144 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err145 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
}
if(data66.author !== undefined){
if(typeof data66.author !== "string"){
const err146 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/author",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
}
if(data66.text !== undefined){
if(typeof data66.text !== "string"){
const err147 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/text",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
const err148 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date === undefined){
const err149 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
if(data66.author === undefined){
const err150 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
if(data66.text === undefined){
const err151 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err151];
}
else {
vErrors.push(err151);
}
errors++;
}
for(const key4 in data66){
if(!(((key4 === "date") || (key4 === "author")) || (key4 === "text"))){
const err152 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key4},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
}
if(data66.date !== undefined){
let data70 = data66.date;
if(typeof data70 === "string"){
if(!pattern0.test(data70)){
const err153 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
if(!(formats0.validate(data70))){
const err154 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
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
const err155 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/date",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
}
if(data66.author !== undefined){
let data71 = data66.author;
if(typeof data71 === "string"){
if(func2(data71) > 100){
const err156 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/author",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err157 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/author",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
}
if(data66.text !== undefined){
if(typeof data66.text !== "string"){
const err158 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4+"/text",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
if(data66 && typeof data66 == "object" && !Array.isArray(data66)){
if(data66.date === undefined){
const err159 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
if(data66.author === undefined){
const err160 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
if(data66.text === undefined){
const err161 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
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
const err162 = {instancePath:instancePath+"/event/troubleTicket/note/" + i4,schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err162];
}
else {
vErrors.push(err162);
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
const err163 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"};
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
const err164 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
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
const err165 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/0/properties/event/properties/troubleTicket/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err165];
}
else {
vErrors.push(err165);
}
errors++;
}
}
}
}
}
var _valid0 = _errs11 === errors;
if(_valid0){
valid2 = true;
passing0 = 0;
}
const _errs186 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.eventType !== undefined){
let data73 = data.eventType;
if(typeof data73 === "string"){
if(!pattern13.test(data73)){
const err166 = {instancePath:instancePath+"/eventType",schemaPath:"#/allOf/1/oneOf/1/properties/eventType/pattern",keyword:"pattern",params:{pattern: "TicketChangeNotification"},message:"must match pattern \""+"TicketChangeNotification"+"\""};
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
const err167 = {instancePath:instancePath+"/eventType",schemaPath:"#/allOf/1/oneOf/1/properties/eventType/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err167];
}
else {
vErrors.push(err167);
}
errors++;
}
}
if(data.event !== undefined){
let data74 = data.event;
if(data74 && typeof data74 == "object" && !Array.isArray(data74)){
for(const key5 in data74){
if(!(key5 === "troubleTicket")){
const err168 = {instancePath:instancePath+"/event",schemaPath:"#/allOf/1/oneOf/1/properties/event/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key5},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err168];
}
else {
vErrors.push(err168);
}
errors++;
}
}
if(data74.troubleTicket !== undefined){
let data75 = data74.troubleTicket;
if(!(data75 && typeof data75 == "object" && !Array.isArray(data75))){
const err169 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err169];
}
else {
vErrors.push(err169);
}
errors++;
}
const _errs193 = errors;
let valid43 = false;
let passing3 = null;
const _errs194 = errors;
if(data75 && typeof data75 == "object" && !Array.isArray(data75)){
if(data75.id === undefined){
const err170 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err170];
}
else {
vErrors.push(err170);
}
errors++;
}
for(const key6 in data75){
if(!((((key6 === "id") || (key6 === "relatedParty")) || (key6 === "relatedObject")) || (key6 === "note"))){
const err171 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key6},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err171];
}
else {
vErrors.push(err171);
}
errors++;
}
}
if(data75.id !== undefined){
let data76 = data75.id;
if(typeof data76 === "string"){
if(func2(data76) > 64){
const err172 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err172];
}
else {
vErrors.push(err172);
}
errors++;
}
if(!pattern3.test(data76)){
const err173 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err174 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err174];
}
else {
vErrors.push(err174);
}
errors++;
}
}
if(data75.relatedParty !== undefined){
let data77 = data75.relatedParty;
if(Array.isArray(data77)){
if(data77.length > 4){
const err175 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err175];
}
else {
vErrors.push(err175);
}
errors++;
}
const len3 = data77.length;
for(let i6=0; i6<len3; i6++){
let data78 = data77[i6];
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
if(data78.href !== undefined){
if(typeof data78.href !== "string"){
const err176 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err176];
}
else {
vErrors.push(err176);
}
errors++;
}
}
if(data78.role !== undefined){
if(typeof data78.role !== "string"){
const err177 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err177];
}
else {
vErrors.push(err177);
}
errors++;
}
}
}
else {
const err178 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err178];
}
else {
vErrors.push(err178);
}
errors++;
}
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
for(const key7 in data78){
if(!((((key7 === "role") || (key7 === "id")) || (key7 === "href")) || (key7 === "name"))){
const err179 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key7},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err179];
}
else {
vErrors.push(err179);
}
errors++;
}
}
if(data78.role !== undefined){
let data81 = data78.role;
if(typeof data81 === "string"){
if(func2(data81) > 64){
const err180 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err180];
}
else {
vErrors.push(err180);
}
errors++;
}
}
else {
const err181 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err181];
}
else {
vErrors.push(err181);
}
errors++;
}
}
if(data78.id !== undefined){
let data82 = data78.id;
if(typeof data82 === "string"){
if(func2(data82) > 64){
const err182 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err182];
}
else {
vErrors.push(err182);
}
errors++;
}
}
else {
const err183 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err183];
}
else {
vErrors.push(err183);
}
errors++;
}
}
if(data78.href !== undefined){
let data83 = data78.href;
if(typeof data83 === "string"){
if(func2(data83) > 4096){
const err184 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err184];
}
else {
vErrors.push(err184);
}
errors++;
}
}
else {
const err185 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err185];
}
else {
vErrors.push(err185);
}
errors++;
}
}
if(data78.name !== undefined){
let data84 = data78.name;
if(typeof data84 === "string"){
if(func2(data84) > 100){
const err186 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err186];
}
else {
vErrors.push(err186);
}
errors++;
}
}
else {
const err187 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err187];
}
else {
vErrors.push(err187);
}
errors++;
}
}
}
const _errs221 = errors;
let valid51 = false;
let passing4 = null;
const _errs222 = errors;
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
if(data78.role !== undefined){
let data85 = data78.role;
if(typeof data85 !== "string"){
const err188 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err188];
}
else {
vErrors.push(err188);
}
errors++;
}
if(!((data85 === "originator") || (data85 === "owner"))){
const err189 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err189];
}
else {
vErrors.push(err189);
}
errors++;
}
}
if(data78.id !== undefined){
let data86 = data78.id;
if(typeof data86 === "string"){
if(!pattern5.test(data86)){
const err190 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err190];
}
else {
vErrors.push(err190);
}
errors++;
}
}
else {
const err191 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err191];
}
else {
vErrors.push(err191);
}
errors++;
}
}
}
var _valid4 = _errs222 === errors;
if(_valid4){
valid51 = true;
passing4 = 0;
}
const _errs227 = errors;
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
if(data78.role !== undefined){
let data87 = data78.role;
if(typeof data87 !== "string"){
const err192 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err192];
}
else {
vErrors.push(err192);
}
errors++;
}
if(!(data87 === "assigneeGroup")){
const err193 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err193];
}
else {
vErrors.push(err193);
}
errors++;
}
}
if(data78.id !== undefined){
let data88 = data78.id;
if(typeof data88 === "string"){
if(func2(data88) > 64){
const err194 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err194];
}
else {
vErrors.push(err194);
}
errors++;
}
}
else {
const err195 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err195];
}
else {
vErrors.push(err195);
}
errors++;
}
}
}
var _valid4 = _errs227 === errors;
if(_valid4 && valid51){
valid51 = false;
passing4 = [passing4, 1];
}
else {
if(_valid4){
valid51 = true;
passing4 = 1;
}
const _errs232 = errors;
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
if(data78.role !== undefined){
let data89 = data78.role;
if(typeof data89 !== "string"){
const err196 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err196];
}
else {
vErrors.push(err196);
}
errors++;
}
if(!(data89 === "reportingPerson")){
const err197 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err197];
}
else {
vErrors.push(err197);
}
errors++;
}
}
if(data78.id !== undefined){
let data90 = data78.id;
if(typeof data90 === "string"){
if(func2(data90) > 256){
const err198 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err198];
}
else {
vErrors.push(err198);
}
errors++;
}
}
else {
const err199 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err199];
}
else {
vErrors.push(err199);
}
errors++;
}
}
}
var _valid4 = _errs232 === errors;
if(_valid4 && valid51){
valid51 = false;
passing4 = [passing4, 2];
}
else {
if(_valid4){
valid51 = true;
passing4 = 2;
}
}
}
if(!valid51){
const err200 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing4},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err200];
}
else {
vErrors.push(err200);
}
errors++;
}
else {
errors = _errs221;
if(vErrors !== null){
if(_errs221){
vErrors.length = _errs221;
}
else {
vErrors = null;
}
}
}
if(data78 && typeof data78 == "object" && !Array.isArray(data78)){
if(data78.role === undefined){
const err201 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err201];
}
else {
vErrors.push(err201);
}
errors++;
}
if(data78.id === undefined){
const err202 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err202];
}
else {
vErrors.push(err202);
}
errors++;
}
}
else {
const err203 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i6,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err203];
}
else {
vErrors.push(err203);
}
errors++;
}
}
let i7 = data77.length;
let j3;
if(i7 > 1){
outer3:
for(;i7--;){
for(j3 = i7; j3--;){
if(func0(data77[i7], data77[j3])){
const err204 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i7, j: j3},message:"must NOT have duplicate items (items ## "+j3+" and "+i7+" are identical)"};
if(vErrors === null){
vErrors = [err204];
}
else {
vErrors.push(err204);
}
errors++;
break outer3;
}
}
}
}
}
else {
const err205 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err205];
}
else {
vErrors.push(err205);
}
errors++;
}
if(Array.isArray(data77)){
if(data77.length > 2){
const err206 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 2},message:"must NOT have more than 2 items"};
if(vErrors === null){
vErrors = [err206];
}
else {
vErrors.push(err206);
}
errors++;
}
if(data77.length < 2){
const err207 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
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
const err208 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err208];
}
else {
vErrors.push(err208);
}
errors++;
}
}
if(data75.relatedObject !== undefined){
let data91 = data75.relatedObject;
if(Array.isArray(data91)){
if(data91.length < 4){
const err209 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err209];
}
else {
vErrors.push(err209);
}
errors++;
}
const len4 = data91.length;
for(let i8=0; i8<len4; i8++){
let data92 = data91[i8];
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
if(typeof data92.involvement !== "string"){
const err210 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err210];
}
else {
vErrors.push(err210);
}
errors++;
}
}
if(data92.href !== undefined){
if(typeof data92.href !== "string"){
const err211 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err211];
}
else {
vErrors.push(err211);
}
errors++;
}
}
}
else {
const err212 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err212];
}
else {
vErrors.push(err212);
}
errors++;
}
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
for(const key8 in data92){
if(!((((key8 === "involvement") || (key8 === "id")) || (key8 === "href")) || (key8 === "name"))){
const err213 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key8},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err213];
}
else {
vErrors.push(err213);
}
errors++;
}
}
if(data92.involvement !== undefined){
let data95 = data92.involvement;
if(typeof data95 === "string"){
if(func2(data95) > 64){
const err214 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err214];
}
else {
vErrors.push(err214);
}
errors++;
}
}
else {
const err215 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err215];
}
else {
vErrors.push(err215);
}
errors++;
}
}
if(data92.id !== undefined){
let data96 = data92.id;
if(typeof data96 === "string"){
if(func2(data96) > 64){
const err216 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err217 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err217];
}
else {
vErrors.push(err217);
}
errors++;
}
}
if(data92.href !== undefined){
if(typeof data92.href !== "string"){
const err218 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err218];
}
else {
vErrors.push(err218);
}
errors++;
}
}
if(data92.name !== undefined){
let data98 = data92.name;
if(typeof data98 === "string"){
if(func2(data98) > 100){
const err219 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err219];
}
else {
vErrors.push(err219);
}
errors++;
}
}
else {
const err220 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err220];
}
else {
vErrors.push(err220);
}
errors++;
}
}
}
const _errs261 = errors;
let valid62 = false;
let passing5 = null;
const _errs262 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data99 = data92.involvement;
if(typeof data99 !== "string"){
const err221 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err221];
}
else {
vErrors.push(err221);
}
errors++;
}
if(!((data99 === "securityPolicy") || (data99 === "securityClassification"))){
const err222 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err222];
}
else {
vErrors.push(err222);
}
errors++;
}
}
if(data92.id !== undefined){
let data100 = data92.id;
if(typeof data100 === "string"){
if(func2(data100) > 32){
const err223 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err223];
}
else {
vErrors.push(err223);
}
errors++;
}
}
else {
const err224 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err224];
}
else {
vErrors.push(err224);
}
errors++;
}
}
if(data92.href !== undefined){
let data101 = data92.href;
if(typeof data101 === "string"){
if(func2(data101) > 4096){
const err225 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err225];
}
else {
vErrors.push(err225);
}
errors++;
}
}
else {
const err226 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err226];
}
else {
vErrors.push(err226);
}
errors++;
}
}
}
var _valid5 = _errs262 === errors;
if(_valid5){
valid62 = true;
passing5 = 0;
}
const _errs269 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data102 = data92.involvement;
if(typeof data102 !== "string"){
const err227 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err227];
}
else {
vErrors.push(err227);
}
errors++;
}
if(!(data102 === "releasabilityCommunity")){
const err228 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err228];
}
else {
vErrors.push(err228);
}
errors++;
}
}
if(data92.id !== undefined){
let data103 = data92.id;
if(typeof data103 === "string"){
if(func2(data103) > 256){
const err229 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err229];
}
else {
vErrors.push(err229);
}
errors++;
}
}
else {
const err230 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err230];
}
else {
vErrors.push(err230);
}
errors++;
}
}
if(data92.href !== undefined){
let data104 = data92.href;
if(typeof data104 === "string"){
if(func2(data104) > 4096){
const err231 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err231];
}
else {
vErrors.push(err231);
}
errors++;
}
}
else {
const err232 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err232];
}
else {
vErrors.push(err232);
}
errors++;
}
}
}
var _valid5 = _errs269 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 1];
}
else {
if(_valid5){
valid62 = true;
passing5 = 1;
}
const _errs276 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data105 = data92.involvement;
if(typeof data105 !== "string"){
const err233 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err233];
}
else {
vErrors.push(err233);
}
errors++;
}
if(!(data105 === "urgency")){
const err234 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err234];
}
else {
vErrors.push(err234);
}
errors++;
}
}
if(data92.id !== undefined){
let data106 = data92.id;
if(typeof data106 !== "string"){
const err235 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err235];
}
else {
vErrors.push(err235);
}
errors++;
}
if(!(((data106 === "high") || (data106 === "medium")) || (data106 === "low"))){
const err236 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err236];
}
else {
vErrors.push(err236);
}
errors++;
}
}
if(data92.href !== undefined){
let data107 = data92.href;
if(typeof data107 === "string"){
if(func2(data107) > 4096){
const err237 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err237];
}
else {
vErrors.push(err237);
}
errors++;
}
}
else {
const err238 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err238];
}
else {
vErrors.push(err238);
}
errors++;
}
}
}
var _valid5 = _errs276 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 2];
}
else {
if(_valid5){
valid62 = true;
passing5 = 2;
}
const _errs283 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data108 = data92.involvement;
if(typeof data108 !== "string"){
const err239 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err239];
}
else {
vErrors.push(err239);
}
errors++;
}
if(!(data108 === "csirLabel")){
const err240 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err240];
}
else {
vErrors.push(err240);
}
errors++;
}
}
if(data92.id !== undefined){
let data109 = data92.id;
if(typeof data109 === "string"){
if(!pattern6.test(data109)){
const err241 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err241];
}
else {
vErrors.push(err241);
}
errors++;
}
}
else {
const err242 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err242];
}
else {
vErrors.push(err242);
}
errors++;
}
}
if(data92.href !== undefined){
let data110 = data92.href;
if(typeof data110 === "string"){
if(func2(data110) > 4096){
const err243 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err243];
}
else {
vErrors.push(err243);
}
errors++;
}
}
else {
const err244 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err244];
}
else {
vErrors.push(err244);
}
errors++;
}
}
}
var _valid5 = _errs283 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 3];
}
else {
if(_valid5){
valid62 = true;
passing5 = 3;
}
const _errs290 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data111 = data92.involvement;
if(typeof data111 !== "string"){
const err245 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err245];
}
else {
vErrors.push(err245);
}
errors++;
}
if(!(data111 === "impactedLocation")){
const err246 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err246];
}
else {
vErrors.push(err246);
}
errors++;
}
}
if(data92.id !== undefined){
let data112 = data92.id;
if(typeof data112 === "string"){
if(func2(data112) > 64){
const err247 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err247];
}
else {
vErrors.push(err247);
}
errors++;
}
}
else {
const err248 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err248];
}
else {
vErrors.push(err248);
}
errors++;
}
}
if(data92.href !== undefined){
let data113 = data92.href;
if(typeof data113 === "string"){
if(func2(data113) > 4096){
const err249 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err249];
}
else {
vErrors.push(err249);
}
errors++;
}
}
else {
const err250 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err250];
}
else {
vErrors.push(err250);
}
errors++;
}
}
}
var _valid5 = _errs290 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 4];
}
else {
if(_valid5){
valid62 = true;
passing5 = 4;
}
const _errs297 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data114 = data92.involvement;
if(typeof data114 !== "string"){
const err251 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err251];
}
else {
vErrors.push(err251);
}
errors++;
}
if(!(data114 === "serviceImpact")){
const err252 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err252];
}
else {
vErrors.push(err252);
}
errors++;
}
}
if(data92.id !== undefined){
let data115 = data92.id;
if(typeof data115 === "string"){
if(!pattern7.test(data115)){
const err253 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err253];
}
else {
vErrors.push(err253);
}
errors++;
}
}
else {
const err254 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err254];
}
else {
vErrors.push(err254);
}
errors++;
}
}
if(data92.href !== undefined){
let data116 = data92.href;
if(typeof data116 === "string"){
if(func2(data116) > 4096){
const err255 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err255];
}
else {
vErrors.push(err255);
}
errors++;
}
}
else {
const err256 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err256];
}
else {
vErrors.push(err256);
}
errors++;
}
}
}
var _valid5 = _errs297 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 5];
}
else {
if(_valid5){
valid62 = true;
passing5 = 5;
}
const _errs304 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data117 = data92.involvement;
if(typeof data117 !== "string"){
const err257 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err257];
}
else {
vErrors.push(err257);
}
errors++;
}
if(!((data117 === "isMajorIncident") || (data117 === "isCyberSecurityIncident"))){
const err258 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err258];
}
else {
vErrors.push(err258);
}
errors++;
}
}
if(data92.id !== undefined){
let data118 = data92.id;
if(typeof data118 !== "string"){
const err259 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err259];
}
else {
vErrors.push(err259);
}
errors++;
}
if(!((data118 === "true") || (data118 === "false"))){
const err260 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err260];
}
else {
vErrors.push(err260);
}
errors++;
}
}
if(data92.href !== undefined){
let data119 = data92.href;
if(typeof data119 === "string"){
if(func2(data119) > 4096){
const err261 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err262 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
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
var _valid5 = _errs304 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 6];
}
else {
if(_valid5){
valid62 = true;
passing5 = 6;
}
const _errs311 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data120 = data92.involvement;
if(typeof data120 !== "string"){
const err263 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err263];
}
else {
vErrors.push(err263);
}
errors++;
}
if(!((((((data120 === "impactedService") || (data120 === "relatedEvent")) || (data120 === "relatedIncident")) || (data120 === "relatedProblem")) || (data120 === "relatedServiceRequest")) || (data120 === "relatedFederatedConfigurationItem"))){
const err264 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err264];
}
else {
vErrors.push(err264);
}
errors++;
}
}
if(data92.id !== undefined){
let data121 = data92.id;
if(typeof data121 === "string"){
if(func2(data121) > 64){
const err265 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err265];
}
else {
vErrors.push(err265);
}
errors++;
}
if(!pattern8.test(data121)){
const err266 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err266];
}
else {
vErrors.push(err266);
}
errors++;
}
}
else {
const err267 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err267];
}
else {
vErrors.push(err267);
}
errors++;
}
}
if(data92.href !== undefined){
let data122 = data92.href;
if(typeof data122 === "string"){
if(func2(data122) > 4096){
const err268 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err268];
}
else {
vErrors.push(err268);
}
errors++;
}
}
else {
const err269 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err269];
}
else {
vErrors.push(err269);
}
errors++;
}
}
}
var _valid5 = _errs311 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 7];
}
else {
if(_valid5){
valid62 = true;
passing5 = 7;
}
const _errs318 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data123 = data92.involvement;
if(typeof data123 !== "string"){
const err270 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err270];
}
else {
vErrors.push(err270);
}
errors++;
}
if(!(data123 === "relatedAttachment")){
const err271 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err271];
}
else {
vErrors.push(err271);
}
errors++;
}
}
if(data92.id !== undefined){
let data124 = data92.id;
if(typeof data124 === "string"){
if(!pattern9.test(data124)){
const err272 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err272];
}
else {
vErrors.push(err272);
}
errors++;
}
}
else {
const err273 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err273];
}
else {
vErrors.push(err273);
}
errors++;
}
}
if(data92.name !== undefined){
if(typeof data92.name !== "string"){
const err274 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err274];
}
else {
vErrors.push(err274);
}
errors++;
}
}
if(data92.href !== undefined){
let data126 = data92.href;
if(typeof data126 === "string"){
if(func2(data126) > 5592421){
const err275 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err275];
}
else {
vErrors.push(err275);
}
errors++;
}
if(!pattern10.test(data126)){
const err276 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err276];
}
else {
vErrors.push(err276);
}
errors++;
}
}
else {
const err277 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err277];
}
else {
vErrors.push(err277);
}
errors++;
}
}
}
var _valid5 = _errs318 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 8];
}
else {
if(_valid5){
valid62 = true;
passing5 = 8;
}
const _errs327 = errors;
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement !== undefined){
let data127 = data92.involvement;
if(typeof data127 !== "string"){
const err278 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err278];
}
else {
vErrors.push(err278);
}
errors++;
}
if(!(data127 === "fsmRecordClass")){
const err279 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err279];
}
else {
vErrors.push(err279);
}
errors++;
}
}
if(data92.id !== undefined){
let data128 = data92.id;
if(typeof data128 !== "string"){
const err280 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err280];
}
else {
vErrors.push(err280);
}
errors++;
}
if(!(data128 === "INCIDENT")){
const err281 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err281];
}
else {
vErrors.push(err281);
}
errors++;
}
}
if(data92.href !== undefined){
let data129 = data92.href;
if(typeof data129 === "string"){
if(func2(data129) > 4096){
const err282 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err282];
}
else {
vErrors.push(err282);
}
errors++;
}
}
else {
const err283 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err283];
}
else {
vErrors.push(err283);
}
errors++;
}
}
}
var _valid5 = _errs327 === errors;
if(_valid5 && valid62){
valid62 = false;
passing5 = [passing5, 9];
}
else {
if(_valid5){
valid62 = true;
passing5 = 9;
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
if(!valid62){
const err284 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing5},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err284];
}
else {
vErrors.push(err284);
}
errors++;
}
else {
errors = _errs261;
if(vErrors !== null){
if(_errs261){
vErrors.length = _errs261;
}
else {
vErrors = null;
}
}
}
if(data92 && typeof data92 == "object" && !Array.isArray(data92)){
if(data92.involvement === undefined){
const err285 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err285];
}
else {
vErrors.push(err285);
}
errors++;
}
if(data92.id === undefined){
const err286 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err287 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i8,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err287];
}
else {
vErrors.push(err287);
}
errors++;
}
}
let i9 = data91.length;
let j4;
if(i9 > 1){
outer4:
for(;i9--;){
for(j4 = i9; j4--;){
if(func0(data91[i9], data91[j4])){
const err288 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i9, j: j4},message:"must NOT have duplicate items (items ## "+j4+" and "+i9+" are identical)"};
if(vErrors === null){
vErrors = [err288];
}
else {
vErrors.push(err288);
}
errors++;
break outer4;
}
}
}
}
}
else {
const err289 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err289];
}
else {
vErrors.push(err289);
}
errors++;
}
if(Array.isArray(data91)){
if(data91.length > 5){
const err290 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/1/maxItems",keyword:"maxItems",params:{limit: 5},message:"must NOT have more than 5 items"};
if(vErrors === null){
vErrors = [err290];
}
else {
vErrors.push(err290);
}
errors++;
}
if(data91.length < 4){
const err291 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err291];
}
else {
vErrors.push(err291);
}
errors++;
}
}
else {
const err292 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err292];
}
else {
vErrors.push(err292);
}
errors++;
}
}
if(data75.note !== undefined){
let data130 = data75.note;
if(Array.isArray(data130)){
const len5 = data130.length;
for(let i10=0; i10<len5; i10++){
let data131 = data130[i10];
if(data131 && typeof data131 == "object" && !Array.isArray(data131)){
if(data131.date !== undefined){
let data132 = data131.date;
if(typeof data132 === "string"){
if(!pattern0.test(data132)){
const err293 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err293];
}
else {
vErrors.push(err293);
}
errors++;
}
if(!(formats0.validate(data132))){
const err294 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err294];
}
else {
vErrors.push(err294);
}
errors++;
}
}
else {
const err295 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err295];
}
else {
vErrors.push(err295);
}
errors++;
}
}
if(data131.author !== undefined){
if(typeof data131.author !== "string"){
const err296 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err296];
}
else {
vErrors.push(err296);
}
errors++;
}
}
if(data131.text !== undefined){
if(typeof data131.text !== "string"){
const err297 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err297];
}
else {
vErrors.push(err297);
}
errors++;
}
}
}
else {
const err298 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err298];
}
else {
vErrors.push(err298);
}
errors++;
}
if(data131 && typeof data131 == "object" && !Array.isArray(data131)){
if(data131.date === undefined){
const err299 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err299];
}
else {
vErrors.push(err299);
}
errors++;
}
if(data131.author === undefined){
const err300 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err300];
}
else {
vErrors.push(err300);
}
errors++;
}
if(data131.text === undefined){
const err301 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err301];
}
else {
vErrors.push(err301);
}
errors++;
}
for(const key9 in data131){
if(!(((key9 === "date") || (key9 === "author")) || (key9 === "text"))){
const err302 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key9},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err302];
}
else {
vErrors.push(err302);
}
errors++;
}
}
if(data131.date !== undefined){
let data135 = data131.date;
if(typeof data135 === "string"){
if(!pattern0.test(data135)){
const err303 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err303];
}
else {
vErrors.push(err303);
}
errors++;
}
if(!(formats0.validate(data135))){
const err304 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err304];
}
else {
vErrors.push(err304);
}
errors++;
}
}
else {
const err305 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err305];
}
else {
vErrors.push(err305);
}
errors++;
}
}
if(data131.author !== undefined){
let data136 = data131.author;
if(typeof data136 === "string"){
if(func2(data136) > 100){
const err306 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err306];
}
else {
vErrors.push(err306);
}
errors++;
}
}
else {
const err307 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err307];
}
else {
vErrors.push(err307);
}
errors++;
}
}
if(data131.text !== undefined){
if(typeof data131.text !== "string"){
const err308 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err308];
}
else {
vErrors.push(err308);
}
errors++;
}
}
}
if(data131 && typeof data131 == "object" && !Array.isArray(data131)){
if(data131.date === undefined){
const err309 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err309];
}
else {
vErrors.push(err309);
}
errors++;
}
if(data131.author === undefined){
const err310 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err310];
}
else {
vErrors.push(err310);
}
errors++;
}
if(data131.text === undefined){
const err311 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err311];
}
else {
vErrors.push(err311);
}
errors++;
}
}
else {
const err312 = {instancePath:instancePath+"/event/troubleTicket/note/" + i10,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err312];
}
else {
vErrors.push(err312);
}
errors++;
}
}
let i11 = data130.length;
let j5;
if(i11 > 1){
outer5:
for(;i11--;){
for(j5 = i11; j5--;){
if(func0(data130[i11], data130[j5])){
const err313 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i11, j: j5},message:"must NOT have duplicate items (items ## "+j5+" and "+i11+" are identical)"};
if(vErrors === null){
vErrors = [err313];
}
else {
vErrors.push(err313);
}
errors++;
break outer5;
}
}
}
}
}
else {
const err314 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err314];
}
else {
vErrors.push(err314);
}
errors++;
}
}
}
else {
const err315 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err315];
}
else {
vErrors.push(err315);
}
errors++;
}
var _valid3 = _errs194 === errors;
if(_valid3){
valid43 = true;
passing3 = 0;
}
const _errs356 = errors;
if(data75 && typeof data75 == "object" && !Array.isArray(data75)){
if(data75.id === undefined){
const err316 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err316];
}
else {
vErrors.push(err316);
}
errors++;
}
if(data75.status === undefined){
const err317 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err317];
}
else {
vErrors.push(err317);
}
errors++;
}
for(const key10 in data75){
if(!(func60.call(schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties, key10))){
const err318 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key10},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err318];
}
else {
vErrors.push(err318);
}
errors++;
}
}
if(data75.id !== undefined){
let data138 = data75.id;
if(typeof data138 === "string"){
if(func2(data138) > 64){
const err319 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err319];
}
else {
vErrors.push(err319);
}
errors++;
}
if(!pattern3.test(data138)){
const err320 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
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
const err321 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err321];
}
else {
vErrors.push(err321);
}
errors++;
}
}
if(data75.description !== undefined){
if(typeof data75.description !== "string"){
const err322 = {instancePath:instancePath+"/event/troubleTicket/description",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err322];
}
else {
vErrors.push(err322);
}
errors++;
}
}
if(data75.severity !== undefined){
let data140 = data75.severity;
if(typeof data140 !== "string"){
const err323 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err323];
}
else {
vErrors.push(err323);
}
errors++;
}
if(!(((((data140 === "critical") || (data140 === "high")) || (data140 === "medium")) || (data140 === "low")) || (data140 === "none"))){
const err324 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err324];
}
else {
vErrors.push(err324);
}
errors++;
}
}
if(data75.type !== undefined){
let data141 = data75.type;
if(typeof data141 === "string"){
if(func2(data141) > 50){
const err325 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err325];
}
else {
vErrors.push(err325);
}
errors++;
}
}
else {
const err326 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err326];
}
else {
vErrors.push(err326);
}
errors++;
}
}
if(data75.targetResolutionDate !== undefined){
let data142 = data75.targetResolutionDate;
if(typeof data142 === "string"){
if(!pattern0.test(data142)){
const err327 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err327];
}
else {
vErrors.push(err327);
}
errors++;
}
if(!(formats0.validate(data142))){
const err328 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err328];
}
else {
vErrors.push(err328);
}
errors++;
}
}
else {
const err329 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err329];
}
else {
vErrors.push(err329);
}
errors++;
}
}
if(data75.status !== undefined){
let data143 = data75.status;
if(typeof data143 !== "string"){
const err330 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err330];
}
else {
vErrors.push(err330);
}
errors++;
}
if(!(((((((data143 === "Submitted") || (data143 === "Rejected")) || (data143 === "Acknowledged")) || (data143 === "InProgress")) || (data143 === "Resolved")) || (data143 === "Closed")) || (data143 === "Cancelled"))){
const err331 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err331];
}
else {
vErrors.push(err331);
}
errors++;
}
}
if(data75.subStatus !== undefined){
let data144 = data75.subStatus;
if(typeof data144 !== "string"){
const err332 = {instancePath:instancePath+"/event/troubleTicket/subStatus",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err332];
}
else {
vErrors.push(err332);
}
errors++;
}
if(!((data144 === "Held") || (data144 === "Pending"))){
const err333 = {instancePath:instancePath+"/event/troubleTicket/subStatus",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err333];
}
else {
vErrors.push(err333);
}
errors++;
}
}
if(data75.resolutionDate !== undefined){
let data145 = data75.resolutionDate;
if(typeof data145 === "string"){
if(!pattern0.test(data145)){
const err334 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err334];
}
else {
vErrors.push(err334);
}
errors++;
}
if(!(formats0.validate(data145))){
const err335 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err335];
}
else {
vErrors.push(err335);
}
errors++;
}
}
else {
const err336 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err336];
}
else {
vErrors.push(err336);
}
errors++;
}
}
if(data75.relatedParty !== undefined){
let data146 = data75.relatedParty;
if(Array.isArray(data146)){
if(data146.length > 4){
const err337 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err337];
}
else {
vErrors.push(err337);
}
errors++;
}
const len6 = data146.length;
for(let i12=0; i12<len6; i12++){
let data147 = data146[i12];
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
if(data147.href !== undefined){
if(typeof data147.href !== "string"){
const err338 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err338];
}
else {
vErrors.push(err338);
}
errors++;
}
}
if(data147.role !== undefined){
if(typeof data147.role !== "string"){
const err339 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err339];
}
else {
vErrors.push(err339);
}
errors++;
}
}
}
else {
const err340 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err340];
}
else {
vErrors.push(err340);
}
errors++;
}
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
for(const key11 in data147){
if(!((((key11 === "role") || (key11 === "id")) || (key11 === "href")) || (key11 === "name"))){
const err341 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key11},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err341];
}
else {
vErrors.push(err341);
}
errors++;
}
}
if(data147.role !== undefined){
let data150 = data147.role;
if(typeof data150 === "string"){
if(func2(data150) > 64){
const err342 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err342];
}
else {
vErrors.push(err342);
}
errors++;
}
}
else {
const err343 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err343];
}
else {
vErrors.push(err343);
}
errors++;
}
}
if(data147.id !== undefined){
let data151 = data147.id;
if(typeof data151 === "string"){
if(func2(data151) > 64){
const err344 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err344];
}
else {
vErrors.push(err344);
}
errors++;
}
}
else {
const err345 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err345];
}
else {
vErrors.push(err345);
}
errors++;
}
}
if(data147.href !== undefined){
let data152 = data147.href;
if(typeof data152 === "string"){
if(func2(data152) > 4096){
const err346 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err346];
}
else {
vErrors.push(err346);
}
errors++;
}
}
else {
const err347 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err347];
}
else {
vErrors.push(err347);
}
errors++;
}
}
if(data147.name !== undefined){
let data153 = data147.name;
if(typeof data153 === "string"){
if(func2(data153) > 100){
const err348 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err348];
}
else {
vErrors.push(err348);
}
errors++;
}
}
else {
const err349 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err349];
}
else {
vErrors.push(err349);
}
errors++;
}
}
}
const _errs398 = errors;
let valid88 = false;
let passing6 = null;
const _errs399 = errors;
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
if(data147.role !== undefined){
let data154 = data147.role;
if(typeof data154 !== "string"){
const err350 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err350];
}
else {
vErrors.push(err350);
}
errors++;
}
if(!((data154 === "originator") || (data154 === "owner"))){
const err351 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err351];
}
else {
vErrors.push(err351);
}
errors++;
}
}
if(data147.id !== undefined){
let data155 = data147.id;
if(typeof data155 === "string"){
if(!pattern5.test(data155)){
const err352 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err352];
}
else {
vErrors.push(err352);
}
errors++;
}
}
else {
const err353 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err353];
}
else {
vErrors.push(err353);
}
errors++;
}
}
}
var _valid6 = _errs399 === errors;
if(_valid6){
valid88 = true;
passing6 = 0;
}
const _errs404 = errors;
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
if(data147.role !== undefined){
let data156 = data147.role;
if(typeof data156 !== "string"){
const err354 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err354];
}
else {
vErrors.push(err354);
}
errors++;
}
if(!(data156 === "assigneeGroup")){
const err355 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err355];
}
else {
vErrors.push(err355);
}
errors++;
}
}
if(data147.id !== undefined){
let data157 = data147.id;
if(typeof data157 === "string"){
if(func2(data157) > 64){
const err356 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err356];
}
else {
vErrors.push(err356);
}
errors++;
}
}
else {
const err357 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err357];
}
else {
vErrors.push(err357);
}
errors++;
}
}
}
var _valid6 = _errs404 === errors;
if(_valid6 && valid88){
valid88 = false;
passing6 = [passing6, 1];
}
else {
if(_valid6){
valid88 = true;
passing6 = 1;
}
const _errs409 = errors;
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
if(data147.role !== undefined){
let data158 = data147.role;
if(typeof data158 !== "string"){
const err358 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err358];
}
else {
vErrors.push(err358);
}
errors++;
}
if(!(data158 === "reportingPerson")){
const err359 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err359];
}
else {
vErrors.push(err359);
}
errors++;
}
}
if(data147.id !== undefined){
let data159 = data147.id;
if(typeof data159 === "string"){
if(func2(data159) > 256){
const err360 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err360];
}
else {
vErrors.push(err360);
}
errors++;
}
}
else {
const err361 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err361];
}
else {
vErrors.push(err361);
}
errors++;
}
}
}
var _valid6 = _errs409 === errors;
if(_valid6 && valid88){
valid88 = false;
passing6 = [passing6, 2];
}
else {
if(_valid6){
valid88 = true;
passing6 = 2;
}
}
}
if(!valid88){
const err362 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing6},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err362];
}
else {
vErrors.push(err362);
}
errors++;
}
else {
errors = _errs398;
if(vErrors !== null){
if(_errs398){
vErrors.length = _errs398;
}
else {
vErrors = null;
}
}
}
if(data147 && typeof data147 == "object" && !Array.isArray(data147)){
if(data147.role === undefined){
const err363 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err363];
}
else {
vErrors.push(err363);
}
errors++;
}
if(data147.id === undefined){
const err364 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
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
const err365 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i12,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err365];
}
else {
vErrors.push(err365);
}
errors++;
}
}
let i13 = data146.length;
let j6;
if(i13 > 1){
outer6:
for(;i13--;){
for(j6 = i13; j6--;){
if(func0(data146[i13], data146[j6])){
const err366 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i13, j: j6},message:"must NOT have duplicate items (items ## "+j6+" and "+i13+" are identical)"};
if(vErrors === null){
vErrors = [err366];
}
else {
vErrors.push(err366);
}
errors++;
break outer6;
}
}
}
}
}
else {
const err367 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err367];
}
else {
vErrors.push(err367);
}
errors++;
}
if(Array.isArray(data146)){
if(data146.length > 3){
const err368 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 3},message:"must NOT have more than 3 items"};
if(vErrors === null){
vErrors = [err368];
}
else {
vErrors.push(err368);
}
errors++;
}
if(data146.length < 2){
const err369 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
if(vErrors === null){
vErrors = [err369];
}
else {
vErrors.push(err369);
}
errors++;
}
}
else {
const err370 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err370];
}
else {
vErrors.push(err370);
}
errors++;
}
}
if(data75.relatedObject !== undefined){
let data160 = data75.relatedObject;
if(Array.isArray(data160)){
if(data160.length < 4){
const err371 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err371];
}
else {
vErrors.push(err371);
}
errors++;
}
const len7 = data160.length;
for(let i14=0; i14<len7; i14++){
let data161 = data160[i14];
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
if(typeof data161.involvement !== "string"){
const err372 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err372];
}
else {
vErrors.push(err372);
}
errors++;
}
}
if(data161.href !== undefined){
if(typeof data161.href !== "string"){
const err373 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err373];
}
else {
vErrors.push(err373);
}
errors++;
}
}
}
else {
const err374 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err374];
}
else {
vErrors.push(err374);
}
errors++;
}
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
for(const key12 in data161){
if(!((((key12 === "involvement") || (key12 === "id")) || (key12 === "href")) || (key12 === "name"))){
const err375 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key12},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err375];
}
else {
vErrors.push(err375);
}
errors++;
}
}
if(data161.involvement !== undefined){
let data164 = data161.involvement;
if(typeof data164 === "string"){
if(func2(data164) > 64){
const err376 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
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
const err377 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err377];
}
else {
vErrors.push(err377);
}
errors++;
}
}
if(data161.id !== undefined){
let data165 = data161.id;
if(typeof data165 === "string"){
if(func2(data165) > 64){
const err378 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err378];
}
else {
vErrors.push(err378);
}
errors++;
}
}
else {
const err379 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err379];
}
else {
vErrors.push(err379);
}
errors++;
}
}
if(data161.href !== undefined){
if(typeof data161.href !== "string"){
const err380 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err380];
}
else {
vErrors.push(err380);
}
errors++;
}
}
if(data161.name !== undefined){
let data167 = data161.name;
if(typeof data167 === "string"){
if(func2(data167) > 100){
const err381 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err381];
}
else {
vErrors.push(err381);
}
errors++;
}
}
else {
const err382 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err382];
}
else {
vErrors.push(err382);
}
errors++;
}
}
}
const _errs438 = errors;
let valid99 = false;
let passing7 = null;
const _errs439 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data168 = data161.involvement;
if(typeof data168 !== "string"){
const err383 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err383];
}
else {
vErrors.push(err383);
}
errors++;
}
if(!((data168 === "securityPolicy") || (data168 === "securityClassification"))){
const err384 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err384];
}
else {
vErrors.push(err384);
}
errors++;
}
}
if(data161.id !== undefined){
let data169 = data161.id;
if(typeof data169 === "string"){
if(func2(data169) > 32){
const err385 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err385];
}
else {
vErrors.push(err385);
}
errors++;
}
}
else {
const err386 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err386];
}
else {
vErrors.push(err386);
}
errors++;
}
}
if(data161.href !== undefined){
let data170 = data161.href;
if(typeof data170 === "string"){
if(func2(data170) > 4096){
const err387 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err387];
}
else {
vErrors.push(err387);
}
errors++;
}
}
else {
const err388 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err388];
}
else {
vErrors.push(err388);
}
errors++;
}
}
}
var _valid7 = _errs439 === errors;
if(_valid7){
valid99 = true;
passing7 = 0;
}
const _errs446 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data171 = data161.involvement;
if(typeof data171 !== "string"){
const err389 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err389];
}
else {
vErrors.push(err389);
}
errors++;
}
if(!(data171 === "releasabilityCommunity")){
const err390 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err390];
}
else {
vErrors.push(err390);
}
errors++;
}
}
if(data161.id !== undefined){
let data172 = data161.id;
if(typeof data172 === "string"){
if(func2(data172) > 256){
const err391 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err391];
}
else {
vErrors.push(err391);
}
errors++;
}
}
else {
const err392 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err392];
}
else {
vErrors.push(err392);
}
errors++;
}
}
if(data161.href !== undefined){
let data173 = data161.href;
if(typeof data173 === "string"){
if(func2(data173) > 4096){
const err393 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err393];
}
else {
vErrors.push(err393);
}
errors++;
}
}
else {
const err394 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err394];
}
else {
vErrors.push(err394);
}
errors++;
}
}
}
var _valid7 = _errs446 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 1];
}
else {
if(_valid7){
valid99 = true;
passing7 = 1;
}
const _errs453 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data174 = data161.involvement;
if(typeof data174 !== "string"){
const err395 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err395];
}
else {
vErrors.push(err395);
}
errors++;
}
if(!(data174 === "urgency")){
const err396 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err396];
}
else {
vErrors.push(err396);
}
errors++;
}
}
if(data161.id !== undefined){
let data175 = data161.id;
if(typeof data175 !== "string"){
const err397 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err397];
}
else {
vErrors.push(err397);
}
errors++;
}
if(!(((data175 === "high") || (data175 === "medium")) || (data175 === "low"))){
const err398 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err398];
}
else {
vErrors.push(err398);
}
errors++;
}
}
if(data161.href !== undefined){
let data176 = data161.href;
if(typeof data176 === "string"){
if(func2(data176) > 4096){
const err399 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err399];
}
else {
vErrors.push(err399);
}
errors++;
}
}
else {
const err400 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err400];
}
else {
vErrors.push(err400);
}
errors++;
}
}
}
var _valid7 = _errs453 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 2];
}
else {
if(_valid7){
valid99 = true;
passing7 = 2;
}
const _errs460 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data177 = data161.involvement;
if(typeof data177 !== "string"){
const err401 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err401];
}
else {
vErrors.push(err401);
}
errors++;
}
if(!(data177 === "csirLabel")){
const err402 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err402];
}
else {
vErrors.push(err402);
}
errors++;
}
}
if(data161.id !== undefined){
let data178 = data161.id;
if(typeof data178 === "string"){
if(!pattern6.test(data178)){
const err403 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err403];
}
else {
vErrors.push(err403);
}
errors++;
}
}
else {
const err404 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err404];
}
else {
vErrors.push(err404);
}
errors++;
}
}
if(data161.href !== undefined){
let data179 = data161.href;
if(typeof data179 === "string"){
if(func2(data179) > 4096){
const err405 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err405];
}
else {
vErrors.push(err405);
}
errors++;
}
}
else {
const err406 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err406];
}
else {
vErrors.push(err406);
}
errors++;
}
}
}
var _valid7 = _errs460 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 3];
}
else {
if(_valid7){
valid99 = true;
passing7 = 3;
}
const _errs467 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data180 = data161.involvement;
if(typeof data180 !== "string"){
const err407 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err407];
}
else {
vErrors.push(err407);
}
errors++;
}
if(!(data180 === "impactedLocation")){
const err408 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err408];
}
else {
vErrors.push(err408);
}
errors++;
}
}
if(data161.id !== undefined){
let data181 = data161.id;
if(typeof data181 === "string"){
if(func2(data181) > 64){
const err409 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err409];
}
else {
vErrors.push(err409);
}
errors++;
}
}
else {
const err410 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err410];
}
else {
vErrors.push(err410);
}
errors++;
}
}
if(data161.href !== undefined){
let data182 = data161.href;
if(typeof data182 === "string"){
if(func2(data182) > 4096){
const err411 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err411];
}
else {
vErrors.push(err411);
}
errors++;
}
}
else {
const err412 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err412];
}
else {
vErrors.push(err412);
}
errors++;
}
}
}
var _valid7 = _errs467 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 4];
}
else {
if(_valid7){
valid99 = true;
passing7 = 4;
}
const _errs474 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data183 = data161.involvement;
if(typeof data183 !== "string"){
const err413 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err413];
}
else {
vErrors.push(err413);
}
errors++;
}
if(!(data183 === "serviceImpact")){
const err414 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err414];
}
else {
vErrors.push(err414);
}
errors++;
}
}
if(data161.id !== undefined){
let data184 = data161.id;
if(typeof data184 === "string"){
if(!pattern7.test(data184)){
const err415 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err415];
}
else {
vErrors.push(err415);
}
errors++;
}
}
else {
const err416 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err416];
}
else {
vErrors.push(err416);
}
errors++;
}
}
if(data161.href !== undefined){
let data185 = data161.href;
if(typeof data185 === "string"){
if(func2(data185) > 4096){
const err417 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err417];
}
else {
vErrors.push(err417);
}
errors++;
}
}
else {
const err418 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err418];
}
else {
vErrors.push(err418);
}
errors++;
}
}
}
var _valid7 = _errs474 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 5];
}
else {
if(_valid7){
valid99 = true;
passing7 = 5;
}
const _errs481 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data186 = data161.involvement;
if(typeof data186 !== "string"){
const err419 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err419];
}
else {
vErrors.push(err419);
}
errors++;
}
if(!((data186 === "isMajorIncident") || (data186 === "isCyberSecurityIncident"))){
const err420 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err420];
}
else {
vErrors.push(err420);
}
errors++;
}
}
if(data161.id !== undefined){
let data187 = data161.id;
if(typeof data187 !== "string"){
const err421 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err421];
}
else {
vErrors.push(err421);
}
errors++;
}
if(!((data187 === "true") || (data187 === "false"))){
const err422 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err422];
}
else {
vErrors.push(err422);
}
errors++;
}
}
if(data161.href !== undefined){
let data188 = data161.href;
if(typeof data188 === "string"){
if(func2(data188) > 4096){
const err423 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
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
const err424 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err424];
}
else {
vErrors.push(err424);
}
errors++;
}
}
}
var _valid7 = _errs481 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 6];
}
else {
if(_valid7){
valid99 = true;
passing7 = 6;
}
const _errs488 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data189 = data161.involvement;
if(typeof data189 !== "string"){
const err425 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err425];
}
else {
vErrors.push(err425);
}
errors++;
}
if(!((((((data189 === "impactedService") || (data189 === "relatedEvent")) || (data189 === "relatedIncident")) || (data189 === "relatedProblem")) || (data189 === "relatedServiceRequest")) || (data189 === "relatedFederatedConfigurationItem"))){
const err426 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err426];
}
else {
vErrors.push(err426);
}
errors++;
}
}
if(data161.id !== undefined){
let data190 = data161.id;
if(typeof data190 === "string"){
if(func2(data190) > 64){
const err427 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err427];
}
else {
vErrors.push(err427);
}
errors++;
}
if(!pattern8.test(data190)){
const err428 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err428];
}
else {
vErrors.push(err428);
}
errors++;
}
}
else {
const err429 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err429];
}
else {
vErrors.push(err429);
}
errors++;
}
}
if(data161.href !== undefined){
let data191 = data161.href;
if(typeof data191 === "string"){
if(func2(data191) > 4096){
const err430 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err430];
}
else {
vErrors.push(err430);
}
errors++;
}
}
else {
const err431 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err431];
}
else {
vErrors.push(err431);
}
errors++;
}
}
}
var _valid7 = _errs488 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 7];
}
else {
if(_valid7){
valid99 = true;
passing7 = 7;
}
const _errs495 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data192 = data161.involvement;
if(typeof data192 !== "string"){
const err432 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err432];
}
else {
vErrors.push(err432);
}
errors++;
}
if(!(data192 === "relatedAttachment")){
const err433 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err433];
}
else {
vErrors.push(err433);
}
errors++;
}
}
if(data161.id !== undefined){
let data193 = data161.id;
if(typeof data193 === "string"){
if(!pattern9.test(data193)){
const err434 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err434];
}
else {
vErrors.push(err434);
}
errors++;
}
}
else {
const err435 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err435];
}
else {
vErrors.push(err435);
}
errors++;
}
}
if(data161.name !== undefined){
if(typeof data161.name !== "string"){
const err436 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err436];
}
else {
vErrors.push(err436);
}
errors++;
}
}
if(data161.href !== undefined){
let data195 = data161.href;
if(typeof data195 === "string"){
if(func2(data195) > 5592421){
const err437 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err437];
}
else {
vErrors.push(err437);
}
errors++;
}
if(!pattern10.test(data195)){
const err438 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err438];
}
else {
vErrors.push(err438);
}
errors++;
}
}
else {
const err439 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err439];
}
else {
vErrors.push(err439);
}
errors++;
}
}
}
var _valid7 = _errs495 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 8];
}
else {
if(_valid7){
valid99 = true;
passing7 = 8;
}
const _errs504 = errors;
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement !== undefined){
let data196 = data161.involvement;
if(typeof data196 !== "string"){
const err440 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err440];
}
else {
vErrors.push(err440);
}
errors++;
}
if(!(data196 === "fsmRecordClass")){
const err441 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err441];
}
else {
vErrors.push(err441);
}
errors++;
}
}
if(data161.id !== undefined){
let data197 = data161.id;
if(typeof data197 !== "string"){
const err442 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err442];
}
else {
vErrors.push(err442);
}
errors++;
}
if(!(data197 === "INCIDENT")){
const err443 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err443];
}
else {
vErrors.push(err443);
}
errors++;
}
}
if(data161.href !== undefined){
let data198 = data161.href;
if(typeof data198 === "string"){
if(func2(data198) > 4096){
const err444 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err444];
}
else {
vErrors.push(err444);
}
errors++;
}
}
else {
const err445 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err445];
}
else {
vErrors.push(err445);
}
errors++;
}
}
}
var _valid7 = _errs504 === errors;
if(_valid7 && valid99){
valid99 = false;
passing7 = [passing7, 9];
}
else {
if(_valid7){
valid99 = true;
passing7 = 9;
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
if(!valid99){
const err446 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing7},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err446];
}
else {
vErrors.push(err446);
}
errors++;
}
else {
errors = _errs438;
if(vErrors !== null){
if(_errs438){
vErrors.length = _errs438;
}
else {
vErrors = null;
}
}
}
if(data161 && typeof data161 == "object" && !Array.isArray(data161)){
if(data161.involvement === undefined){
const err447 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err447];
}
else {
vErrors.push(err447);
}
errors++;
}
if(data161.id === undefined){
const err448 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err448];
}
else {
vErrors.push(err448);
}
errors++;
}
}
else {
const err449 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i14,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err449];
}
else {
vErrors.push(err449);
}
errors++;
}
}
let i15 = data160.length;
let j7;
if(i15 > 1){
outer7:
for(;i15--;){
for(j7 = i15; j7--;){
if(func0(data160[i15], data160[j7])){
const err450 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i15, j: j7},message:"must NOT have duplicate items (items ## "+j7+" and "+i15+" are identical)"};
if(vErrors === null){
vErrors = [err450];
}
else {
vErrors.push(err450);
}
errors++;
break outer7;
}
}
}
}
}
else {
const err451 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err451];
}
else {
vErrors.push(err451);
}
errors++;
}
if(Array.isArray(data160)){
if(data160.length < 4){
const err452 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err452];
}
else {
vErrors.push(err452);
}
errors++;
}
}
else {
const err453 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err453];
}
else {
vErrors.push(err453);
}
errors++;
}
}
if(data75.note !== undefined){
let data199 = data75.note;
if(Array.isArray(data199)){
const len8 = data199.length;
for(let i16=0; i16<len8; i16++){
let data200 = data199[i16];
if(data200 && typeof data200 == "object" && !Array.isArray(data200)){
if(data200.date !== undefined){
let data201 = data200.date;
if(typeof data201 === "string"){
if(!pattern0.test(data201)){
const err454 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err454];
}
else {
vErrors.push(err454);
}
errors++;
}
if(!(formats0.validate(data201))){
const err455 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err455];
}
else {
vErrors.push(err455);
}
errors++;
}
}
else {
const err456 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err456];
}
else {
vErrors.push(err456);
}
errors++;
}
}
if(data200.author !== undefined){
if(typeof data200.author !== "string"){
const err457 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err457];
}
else {
vErrors.push(err457);
}
errors++;
}
}
if(data200.text !== undefined){
if(typeof data200.text !== "string"){
const err458 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err458];
}
else {
vErrors.push(err458);
}
errors++;
}
}
}
else {
const err459 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err459];
}
else {
vErrors.push(err459);
}
errors++;
}
if(data200 && typeof data200 == "object" && !Array.isArray(data200)){
if(data200.date === undefined){
const err460 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err460];
}
else {
vErrors.push(err460);
}
errors++;
}
if(data200.author === undefined){
const err461 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err461];
}
else {
vErrors.push(err461);
}
errors++;
}
if(data200.text === undefined){
const err462 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err462];
}
else {
vErrors.push(err462);
}
errors++;
}
for(const key13 in data200){
if(!(((key13 === "date") || (key13 === "author")) || (key13 === "text"))){
const err463 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key13},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err463];
}
else {
vErrors.push(err463);
}
errors++;
}
}
if(data200.date !== undefined){
let data204 = data200.date;
if(typeof data204 === "string"){
if(!pattern0.test(data204)){
const err464 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err464];
}
else {
vErrors.push(err464);
}
errors++;
}
if(!(formats0.validate(data204))){
const err465 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err465];
}
else {
vErrors.push(err465);
}
errors++;
}
}
else {
const err466 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err466];
}
else {
vErrors.push(err466);
}
errors++;
}
}
if(data200.author !== undefined){
let data205 = data200.author;
if(typeof data205 === "string"){
if(func2(data205) > 100){
const err467 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
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
const err468 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err468];
}
else {
vErrors.push(err468);
}
errors++;
}
}
if(data200.text !== undefined){
if(typeof data200.text !== "string"){
const err469 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err469];
}
else {
vErrors.push(err469);
}
errors++;
}
}
}
if(data200 && typeof data200 == "object" && !Array.isArray(data200)){
if(data200.date === undefined){
const err470 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err470];
}
else {
vErrors.push(err470);
}
errors++;
}
if(data200.author === undefined){
const err471 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err471];
}
else {
vErrors.push(err471);
}
errors++;
}
if(data200.text === undefined){
const err472 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err472];
}
else {
vErrors.push(err472);
}
errors++;
}
}
else {
const err473 = {instancePath:instancePath+"/event/troubleTicket/note/" + i16,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err473];
}
else {
vErrors.push(err473);
}
errors++;
}
}
let i17 = data199.length;
let j8;
if(i17 > 1){
outer8:
for(;i17--;){
for(j8 = i17; j8--;){
if(func0(data199[i17], data199[j8])){
const err474 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i17, j: j8},message:"must NOT have duplicate items (items ## "+j8+" and "+i17+" are identical)"};
if(vErrors === null){
vErrors = [err474];
}
else {
vErrors.push(err474);
}
errors++;
break outer8;
}
}
}
}
}
else {
const err475 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err475];
}
else {
vErrors.push(err475);
}
errors++;
}
}
}
else {
const err476 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err476];
}
else {
vErrors.push(err476);
}
errors++;
}
if(data75 && typeof data75 == "object" && !Array.isArray(data75)){
if(data75.status !== undefined){
let data207 = data75.status;
if(typeof data207 !== "string"){
const err477 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/1/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err477];
}
else {
vErrors.push(err477);
}
errors++;
}
if(!(((((data207 === "Submitted") || (data207 === "Rejected")) || (data207 === "Acknowledged")) || (data207 === "InProgress")) || (data207 === "Closed"))){
const err478 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/1/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[1].allOf[1].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err478];
}
else {
vErrors.push(err478);
}
errors++;
}
}
}
else {
const err479 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/1/allOf/1/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err479];
}
else {
vErrors.push(err479);
}
errors++;
}
var _valid3 = _errs356 === errors;
if(_valid3 && valid43){
valid43 = false;
passing3 = [passing3, 1];
}
else {
if(_valid3){
valid43 = true;
passing3 = 1;
}
const _errs537 = errors;
if(data75 && typeof data75 == "object" && !Array.isArray(data75)){
if(data75.id === undefined){
const err480 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err480];
}
else {
vErrors.push(err480);
}
errors++;
}
if(data75.status === undefined){
const err481 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/required",keyword:"required",params:{missingProperty: "status"},message:"must have required property '"+"status"+"'"};
if(vErrors === null){
vErrors = [err481];
}
else {
vErrors.push(err481);
}
errors++;
}
for(const key14 in data75){
if(!(func60.call(schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties, key14))){
const err482 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key14},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err482];
}
else {
vErrors.push(err482);
}
errors++;
}
}
if(data75.id !== undefined){
let data208 = data75.id;
if(typeof data208 === "string"){
if(func2(data208) > 64){
const err483 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err483];
}
else {
vErrors.push(err483);
}
errors++;
}
if(!pattern3.test(data208)){
const err484 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-INC-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err484];
}
else {
vErrors.push(err484);
}
errors++;
}
}
else {
const err485 = {instancePath:instancePath+"/event/troubleTicket/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err485];
}
else {
vErrors.push(err485);
}
errors++;
}
}
if(data75.description !== undefined){
if(typeof data75.description !== "string"){
const err486 = {instancePath:instancePath+"/event/troubleTicket/description",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err486];
}
else {
vErrors.push(err486);
}
errors++;
}
}
if(data75.severity !== undefined){
let data210 = data75.severity;
if(typeof data210 !== "string"){
const err487 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/severity/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err487];
}
else {
vErrors.push(err487);
}
errors++;
}
if(!(((((data210 === "critical") || (data210 === "high")) || (data210 === "medium")) || (data210 === "low")) || (data210 === "none"))){
const err488 = {instancePath:instancePath+"/event/troubleTicket/severity",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/severity/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.severity.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err488];
}
else {
vErrors.push(err488);
}
errors++;
}
}
if(data75.type !== undefined){
let data211 = data75.type;
if(typeof data211 === "string"){
if(func2(data211) > 50){
const err489 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/type/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"};
if(vErrors === null){
vErrors = [err489];
}
else {
vErrors.push(err489);
}
errors++;
}
}
else {
const err490 = {instancePath:instancePath+"/event/troubleTicket/type",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err490];
}
else {
vErrors.push(err490);
}
errors++;
}
}
if(data75.targetResolutionDate !== undefined){
let data212 = data75.targetResolutionDate;
if(typeof data212 === "string"){
if(!pattern0.test(data212)){
const err491 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/targetResolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err491];
}
else {
vErrors.push(err491);
}
errors++;
}
if(!(formats0.validate(data212))){
const err492 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/targetResolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err492];
}
else {
vErrors.push(err492);
}
errors++;
}
}
else {
const err493 = {instancePath:instancePath+"/event/troubleTicket/targetResolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/targetResolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err493];
}
else {
vErrors.push(err493);
}
errors++;
}
}
if(data75.status !== undefined){
let data213 = data75.status;
if(typeof data213 !== "string"){
const err494 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err494];
}
else {
vErrors.push(err494);
}
errors++;
}
if(!(((((((data213 === "Submitted") || (data213 === "Rejected")) || (data213 === "Acknowledged")) || (data213 === "InProgress")) || (data213 === "Resolved")) || (data213 === "Closed")) || (data213 === "Cancelled"))){
const err495 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err495];
}
else {
vErrors.push(err495);
}
errors++;
}
}
if(data75.subStatus !== undefined){
let data214 = data75.subStatus;
if(typeof data214 !== "string"){
const err496 = {instancePath:instancePath+"/event/troubleTicket/subStatus",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/subStatus/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err496];
}
else {
vErrors.push(err496);
}
errors++;
}
if(!((data214 === "Held") || (data214 === "Pending"))){
const err497 = {instancePath:instancePath+"/event/troubleTicket/subStatus",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/subStatus/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.subStatus.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err497];
}
else {
vErrors.push(err497);
}
errors++;
}
}
if(data75.resolutionDate !== undefined){
let data215 = data75.resolutionDate;
if(typeof data215 === "string"){
if(!pattern0.test(data215)){
const err498 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/resolutionDate/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err498];
}
else {
vErrors.push(err498);
}
errors++;
}
if(!(formats0.validate(data215))){
const err499 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/resolutionDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err499];
}
else {
vErrors.push(err499);
}
errors++;
}
}
else {
const err500 = {instancePath:instancePath+"/event/troubleTicket/resolutionDate",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/resolutionDate/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err500];
}
else {
vErrors.push(err500);
}
errors++;
}
}
if(data75.relatedParty !== undefined){
let data216 = data75.relatedParty;
if(Array.isArray(data216)){
if(data216.length > 4){
const err501 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/maxItems",keyword:"maxItems",params:{limit: 4},message:"must NOT have more than 4 items"};
if(vErrors === null){
vErrors = [err501];
}
else {
vErrors.push(err501);
}
errors++;
}
const len9 = data216.length;
for(let i18=0; i18<len9; i18++){
let data217 = data216[i18];
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
if(data217.href !== undefined){
if(typeof data217.href !== "string"){
const err502 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err502];
}
else {
vErrors.push(err502);
}
errors++;
}
}
if(data217.role !== undefined){
if(typeof data217.role !== "string"){
const err503 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err503];
}
else {
vErrors.push(err503);
}
errors++;
}
}
}
else {
const err504 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err504];
}
else {
vErrors.push(err504);
}
errors++;
}
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
for(const key15 in data217){
if(!((((key15 === "role") || (key15 === "id")) || (key15 === "href")) || (key15 === "name"))){
const err505 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key15},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err505];
}
else {
vErrors.push(err505);
}
errors++;
}
}
if(data217.role !== undefined){
let data220 = data217.role;
if(typeof data220 === "string"){
if(func2(data220) > 64){
const err506 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err506];
}
else {
vErrors.push(err506);
}
errors++;
}
}
else {
const err507 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err507];
}
else {
vErrors.push(err507);
}
errors++;
}
}
if(data217.id !== undefined){
let data221 = data217.id;
if(typeof data221 === "string"){
if(func2(data221) > 64){
const err508 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err508];
}
else {
vErrors.push(err508);
}
errors++;
}
}
else {
const err509 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err509];
}
else {
vErrors.push(err509);
}
errors++;
}
}
if(data217.href !== undefined){
let data222 = data217.href;
if(typeof data222 === "string"){
if(func2(data222) > 4096){
const err510 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err510];
}
else {
vErrors.push(err510);
}
errors++;
}
}
else {
const err511 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err511];
}
else {
vErrors.push(err511);
}
errors++;
}
}
if(data217.name !== undefined){
let data223 = data217.name;
if(typeof data223 === "string"){
if(func2(data223) > 100){
const err512 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err512];
}
else {
vErrors.push(err512);
}
errors++;
}
}
else {
const err513 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err513];
}
else {
vErrors.push(err513);
}
errors++;
}
}
}
const _errs579 = errors;
let valid126 = false;
let passing8 = null;
const _errs580 = errors;
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
if(data217.role !== undefined){
let data224 = data217.role;
if(typeof data224 !== "string"){
const err514 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err514];
}
else {
vErrors.push(err514);
}
errors++;
}
if(!((data224 === "originator") || (data224 === "owner"))){
const err515 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[0].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err515];
}
else {
vErrors.push(err515);
}
errors++;
}
}
if(data217.id !== undefined){
let data225 = data217.id;
if(typeof data225 === "string"){
if(!pattern5.test(data225)){
const err516 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$"+"\""};
if(vErrors === null){
vErrors = [err516];
}
else {
vErrors.push(err516);
}
errors++;
}
}
else {
const err517 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err517];
}
else {
vErrors.push(err517);
}
errors++;
}
}
}
var _valid8 = _errs580 === errors;
if(_valid8){
valid126 = true;
passing8 = 0;
}
const _errs585 = errors;
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
if(data217.role !== undefined){
let data226 = data217.role;
if(typeof data226 !== "string"){
const err518 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err518];
}
else {
vErrors.push(err518);
}
errors++;
}
if(!(data226 === "assigneeGroup")){
const err519 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[1].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err519];
}
else {
vErrors.push(err519);
}
errors++;
}
}
if(data217.id !== undefined){
let data227 = data217.id;
if(typeof data227 === "string"){
if(func2(data227) > 64){
const err520 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err520];
}
else {
vErrors.push(err520);
}
errors++;
}
}
else {
const err521 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err521];
}
else {
vErrors.push(err521);
}
errors++;
}
}
}
var _valid8 = _errs585 === errors;
if(_valid8 && valid126){
valid126 = false;
passing8 = [passing8, 1];
}
else {
if(_valid8){
valid126 = true;
passing8 = 1;
}
const _errs590 = errors;
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
if(data217.role !== undefined){
let data228 = data217.role;
if(typeof data228 !== "string"){
const err522 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err522];
}
else {
vErrors.push(err522);
}
errors++;
}
if(!(data228 === "reportingPerson")){
const err523 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/role",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/role/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedParty.allOf[0].items.allOf[2].oneOf[2].properties.role.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err523];
}
else {
vErrors.push(err523);
}
errors++;
}
}
if(data217.id !== undefined){
let data229 = data217.id;
if(typeof data229 === "string"){
if(func2(data229) > 256){
const err524 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err524];
}
else {
vErrors.push(err524);
}
errors++;
}
}
else {
const err525 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err525];
}
else {
vErrors.push(err525);
}
errors++;
}
}
}
var _valid8 = _errs590 === errors;
if(_valid8 && valid126){
valid126 = false;
passing8 = [passing8, 2];
}
else {
if(_valid8){
valid126 = true;
passing8 = 2;
}
}
}
if(!valid126){
const err526 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing8},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err526];
}
else {
vErrors.push(err526);
}
errors++;
}
else {
errors = _errs579;
if(vErrors !== null){
if(_errs579){
vErrors.length = _errs579;
}
else {
vErrors = null;
}
}
}
if(data217 && typeof data217 == "object" && !Array.isArray(data217)){
if(data217.role === undefined){
const err527 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err527];
}
else {
vErrors.push(err527);
}
errors++;
}
if(data217.id === undefined){
const err528 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err528];
}
else {
vErrors.push(err528);
}
errors++;
}
}
else {
const err529 = {instancePath:instancePath+"/event/troubleTicket/relatedParty/" + i18,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err529];
}
else {
vErrors.push(err529);
}
errors++;
}
}
let i19 = data216.length;
let j9;
if(i19 > 1){
outer9:
for(;i19--;){
for(j9 = i19; j9--;){
if(func0(data216[i19], data216[j9])){
const err530 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i19, j: j9},message:"must NOT have duplicate items (items ## "+j9+" and "+i19+" are identical)"};
if(vErrors === null){
vErrors = [err530];
}
else {
vErrors.push(err530);
}
errors++;
break outer9;
}
}
}
}
}
else {
const err531 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err531];
}
else {
vErrors.push(err531);
}
errors++;
}
if(Array.isArray(data216)){
if(data216.length > 3){
const err532 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/1/maxItems",keyword:"maxItems",params:{limit: 3},message:"must NOT have more than 3 items"};
if(vErrors === null){
vErrors = [err532];
}
else {
vErrors.push(err532);
}
errors++;
}
if(data216.length < 2){
const err533 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/1/minItems",keyword:"minItems",params:{limit: 2},message:"must NOT have fewer than 2 items"};
if(vErrors === null){
vErrors = [err533];
}
else {
vErrors.push(err533);
}
errors++;
}
}
else {
const err534 = {instancePath:instancePath+"/event/troubleTicket/relatedParty",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedParty/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err534];
}
else {
vErrors.push(err534);
}
errors++;
}
}
if(data75.relatedObject !== undefined){
let data230 = data75.relatedObject;
if(Array.isArray(data230)){
if(data230.length < 4){
const err535 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err535];
}
else {
vErrors.push(err535);
}
errors++;
}
const len10 = data230.length;
for(let i20=0; i20<len10; i20++){
let data231 = data230[i20];
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
if(typeof data231.involvement !== "string"){
const err536 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err536];
}
else {
vErrors.push(err536);
}
errors++;
}
}
if(data231.href !== undefined){
if(typeof data231.href !== "string"){
const err537 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err537];
}
else {
vErrors.push(err537);
}
errors++;
}
}
}
else {
const err538 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err538];
}
else {
vErrors.push(err538);
}
errors++;
}
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
for(const key16 in data231){
if(!((((key16 === "involvement") || (key16 === "id")) || (key16 === "href")) || (key16 === "name"))){
const err539 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key16},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err539];
}
else {
vErrors.push(err539);
}
errors++;
}
}
if(data231.involvement !== undefined){
let data234 = data231.involvement;
if(typeof data234 === "string"){
if(func2(data234) > 64){
const err540 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err540];
}
else {
vErrors.push(err540);
}
errors++;
}
}
else {
const err541 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err541];
}
else {
vErrors.push(err541);
}
errors++;
}
}
if(data231.id !== undefined){
let data235 = data231.id;
if(typeof data235 === "string"){
if(func2(data235) > 64){
const err542 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err542];
}
else {
vErrors.push(err542);
}
errors++;
}
}
else {
const err543 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err543];
}
else {
vErrors.push(err543);
}
errors++;
}
}
if(data231.href !== undefined){
if(typeof data231.href !== "string"){
const err544 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err544];
}
else {
vErrors.push(err544);
}
errors++;
}
}
if(data231.name !== undefined){
let data237 = data231.name;
if(typeof data237 === "string"){
if(func2(data237) > 100){
const err545 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err545];
}
else {
vErrors.push(err545);
}
errors++;
}
}
else {
const err546 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/1/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err546];
}
else {
vErrors.push(err546);
}
errors++;
}
}
}
const _errs619 = errors;
let valid137 = false;
let passing9 = null;
const _errs620 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data238 = data231.involvement;
if(typeof data238 !== "string"){
const err547 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err547];
}
else {
vErrors.push(err547);
}
errors++;
}
if(!((data238 === "securityPolicy") || (data238 === "securityClassification"))){
const err548 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[0].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err548];
}
else {
vErrors.push(err548);
}
errors++;
}
}
if(data231.id !== undefined){
let data239 = data231.id;
if(typeof data239 === "string"){
if(func2(data239) > 32){
const err549 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/maxLength",keyword:"maxLength",params:{limit: 32},message:"must NOT have more than 32 characters"};
if(vErrors === null){
vErrors = [err549];
}
else {
vErrors.push(err549);
}
errors++;
}
}
else {
const err550 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err550];
}
else {
vErrors.push(err550);
}
errors++;
}
}
if(data231.href !== undefined){
let data240 = data231.href;
if(typeof data240 === "string"){
if(func2(data240) > 4096){
const err551 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err551];
}
else {
vErrors.push(err551);
}
errors++;
}
}
else {
const err552 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/0/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err552];
}
else {
vErrors.push(err552);
}
errors++;
}
}
}
var _valid9 = _errs620 === errors;
if(_valid9){
valid137 = true;
passing9 = 0;
}
const _errs627 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data241 = data231.involvement;
if(typeof data241 !== "string"){
const err553 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err553];
}
else {
vErrors.push(err553);
}
errors++;
}
if(!(data241 === "releasabilityCommunity")){
const err554 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[1].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err554];
}
else {
vErrors.push(err554);
}
errors++;
}
}
if(data231.id !== undefined){
let data242 = data231.id;
if(typeof data242 === "string"){
if(func2(data242) > 256){
const err555 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/maxLength",keyword:"maxLength",params:{limit: 256},message:"must NOT have more than 256 characters"};
if(vErrors === null){
vErrors = [err555];
}
else {
vErrors.push(err555);
}
errors++;
}
}
else {
const err556 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err556];
}
else {
vErrors.push(err556);
}
errors++;
}
}
if(data231.href !== undefined){
let data243 = data231.href;
if(typeof data243 === "string"){
if(func2(data243) > 4096){
const err557 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err557];
}
else {
vErrors.push(err557);
}
errors++;
}
}
else {
const err558 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/1/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err558];
}
else {
vErrors.push(err558);
}
errors++;
}
}
}
var _valid9 = _errs627 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 1];
}
else {
if(_valid9){
valid137 = true;
passing9 = 1;
}
const _errs634 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data244 = data231.involvement;
if(typeof data244 !== "string"){
const err559 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err559];
}
else {
vErrors.push(err559);
}
errors++;
}
if(!(data244 === "urgency")){
const err560 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err560];
}
else {
vErrors.push(err560);
}
errors++;
}
}
if(data231.id !== undefined){
let data245 = data231.id;
if(typeof data245 !== "string"){
const err561 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err561];
}
else {
vErrors.push(err561);
}
errors++;
}
if(!(((data245 === "high") || (data245 === "medium")) || (data245 === "low"))){
const err562 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[2].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err562];
}
else {
vErrors.push(err562);
}
errors++;
}
}
if(data231.href !== undefined){
let data246 = data231.href;
if(typeof data246 === "string"){
if(func2(data246) > 4096){
const err563 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err563];
}
else {
vErrors.push(err563);
}
errors++;
}
}
else {
const err564 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/2/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err564];
}
else {
vErrors.push(err564);
}
errors++;
}
}
}
var _valid9 = _errs634 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 2];
}
else {
if(_valid9){
valid137 = true;
passing9 = 2;
}
const _errs641 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data247 = data231.involvement;
if(typeof data247 !== "string"){
const err565 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err565];
}
else {
vErrors.push(err565);
}
errors++;
}
if(!(data247 === "csirLabel")){
const err566 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[3].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err566];
}
else {
vErrors.push(err566);
}
errors++;
}
}
if(data231.id !== undefined){
let data248 = data231.id;
if(typeof data248 === "string"){
if(!pattern6.test(data248)){
const err567 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/pattern",keyword:"pattern",params:{pattern: "^(CSIR)([1-9]|10)|None$"},message:"must match pattern \""+"^(CSIR)([1-9]|10)|None$"+"\""};
if(vErrors === null){
vErrors = [err567];
}
else {
vErrors.push(err567);
}
errors++;
}
}
else {
const err568 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err568];
}
else {
vErrors.push(err568);
}
errors++;
}
}
if(data231.href !== undefined){
let data249 = data231.href;
if(typeof data249 === "string"){
if(func2(data249) > 4096){
const err569 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err569];
}
else {
vErrors.push(err569);
}
errors++;
}
}
else {
const err570 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/3/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err570];
}
else {
vErrors.push(err570);
}
errors++;
}
}
}
var _valid9 = _errs641 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 3];
}
else {
if(_valid9){
valid137 = true;
passing9 = 3;
}
const _errs648 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data250 = data231.involvement;
if(typeof data250 !== "string"){
const err571 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err571];
}
else {
vErrors.push(err571);
}
errors++;
}
if(!(data250 === "impactedLocation")){
const err572 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[4].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err572];
}
else {
vErrors.push(err572);
}
errors++;
}
}
if(data231.id !== undefined){
let data251 = data231.id;
if(typeof data251 === "string"){
if(func2(data251) > 64){
const err573 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err573];
}
else {
vErrors.push(err573);
}
errors++;
}
}
else {
const err574 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err574];
}
else {
vErrors.push(err574);
}
errors++;
}
}
if(data231.href !== undefined){
let data252 = data231.href;
if(typeof data252 === "string"){
if(func2(data252) > 4096){
const err575 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err575];
}
else {
vErrors.push(err575);
}
errors++;
}
}
else {
const err576 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/4/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err576];
}
else {
vErrors.push(err576);
}
errors++;
}
}
}
var _valid9 = _errs648 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 4];
}
else {
if(_valid9){
valid137 = true;
passing9 = 4;
}
const _errs655 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data253 = data231.involvement;
if(typeof data253 !== "string"){
const err577 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err577];
}
else {
vErrors.push(err577);
}
errors++;
}
if(!(data253 === "serviceImpact")){
const err578 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[5].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err578];
}
else {
vErrors.push(err578);
}
errors++;
}
}
if(data231.id !== undefined){
let data254 = data231.id;
if(typeof data254 === "string"){
if(!pattern7.test(data254)){
const err579 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/pattern",keyword:"pattern",params:{pattern: "[1-5]"},message:"must match pattern \""+"[1-5]"+"\""};
if(vErrors === null){
vErrors = [err579];
}
else {
vErrors.push(err579);
}
errors++;
}
}
else {
const err580 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err580];
}
else {
vErrors.push(err580);
}
errors++;
}
}
if(data231.href !== undefined){
let data255 = data231.href;
if(typeof data255 === "string"){
if(func2(data255) > 4096){
const err581 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err581];
}
else {
vErrors.push(err581);
}
errors++;
}
}
else {
const err582 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/5/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err582];
}
else {
vErrors.push(err582);
}
errors++;
}
}
}
var _valid9 = _errs655 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 5];
}
else {
if(_valid9){
valid137 = true;
passing9 = 5;
}
const _errs662 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data256 = data231.involvement;
if(typeof data256 !== "string"){
const err583 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err583];
}
else {
vErrors.push(err583);
}
errors++;
}
if(!((data256 === "isMajorIncident") || (data256 === "isCyberSecurityIncident"))){
const err584 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err584];
}
else {
vErrors.push(err584);
}
errors++;
}
}
if(data231.id !== undefined){
let data257 = data231.id;
if(typeof data257 !== "string"){
const err585 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err585];
}
else {
vErrors.push(err585);
}
errors++;
}
if(!((data257 === "true") || (data257 === "false"))){
const err586 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[6].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err586];
}
else {
vErrors.push(err586);
}
errors++;
}
}
if(data231.href !== undefined){
let data258 = data231.href;
if(typeof data258 === "string"){
if(func2(data258) > 4096){
const err587 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err587];
}
else {
vErrors.push(err587);
}
errors++;
}
}
else {
const err588 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/6/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err588];
}
else {
vErrors.push(err588);
}
errors++;
}
}
}
var _valid9 = _errs662 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 6];
}
else {
if(_valid9){
valid137 = true;
passing9 = 6;
}
const _errs669 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data259 = data231.involvement;
if(typeof data259 !== "string"){
const err589 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err589];
}
else {
vErrors.push(err589);
}
errors++;
}
if(!((((((data259 === "impactedService") || (data259 === "relatedEvent")) || (data259 === "relatedIncident")) || (data259 === "relatedProblem")) || (data259 === "relatedServiceRequest")) || (data259 === "relatedFederatedConfigurationItem"))){
const err590 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[7].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err590];
}
else {
vErrors.push(err590);
}
errors++;
}
}
if(data231.id !== undefined){
let data260 = data231.id;
if(typeof data260 === "string"){
if(func2(data260) > 64){
const err591 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"};
if(vErrors === null){
vErrors = [err591];
}
else {
vErrors.push(err591);
}
errors++;
}
if(!pattern8.test(data260)){
const err592 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-(SVC|EVT|INC|PRB|SRQ|FCI)-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err592];
}
else {
vErrors.push(err592);
}
errors++;
}
}
else {
const err593 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err593];
}
else {
vErrors.push(err593);
}
errors++;
}
}
if(data231.href !== undefined){
let data261 = data231.href;
if(typeof data261 === "string"){
if(func2(data261) > 4096){
const err594 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err594];
}
else {
vErrors.push(err594);
}
errors++;
}
}
else {
const err595 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/7/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err595];
}
else {
vErrors.push(err595);
}
errors++;
}
}
}
var _valid9 = _errs669 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 7];
}
else {
if(_valid9){
valid137 = true;
passing9 = 7;
}
const _errs676 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data262 = data231.involvement;
if(typeof data262 !== "string"){
const err596 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err596];
}
else {
vErrors.push(err596);
}
errors++;
}
if(!(data262 === "relatedAttachment")){
const err597 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[8].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err597];
}
else {
vErrors.push(err597);
}
errors++;
}
}
if(data231.id !== undefined){
let data263 = data231.id;
if(typeof data263 === "string"){
if(!pattern9.test(data263)){
const err598 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/pattern",keyword:"pattern",params:{pattern: "^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"},message:"must match pattern \""+"^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-ATT-[a-zA-Z0-9_-]{1,112}$"+"\""};
if(vErrors === null){
vErrors = [err598];
}
else {
vErrors.push(err598);
}
errors++;
}
}
else {
const err599 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err599];
}
else {
vErrors.push(err599);
}
errors++;
}
}
if(data231.name !== undefined){
if(typeof data231.name !== "string"){
const err600 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/name",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err600];
}
else {
vErrors.push(err600);
}
errors++;
}
}
if(data231.href !== undefined){
let data265 = data231.href;
if(typeof data265 === "string"){
if(func2(data265) > 5592421){
const err601 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/maxLength",keyword:"maxLength",params:{limit: 5592421},message:"must NOT have more than 5592421 characters"};
if(vErrors === null){
vErrors = [err601];
}
else {
vErrors.push(err601);
}
errors++;
}
if(!pattern10.test(data265)){
const err602 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/pattern",keyword:"pattern",params:{pattern: "^data:;base64,.*"},message:"must match pattern \""+"^data:;base64,.*"+"\""};
if(vErrors === null){
vErrors = [err602];
}
else {
vErrors.push(err602);
}
errors++;
}
}
else {
const err603 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/8/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err603];
}
else {
vErrors.push(err603);
}
errors++;
}
}
}
var _valid9 = _errs676 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 8];
}
else {
if(_valid9){
valid137 = true;
passing9 = 8;
}
const _errs685 = errors;
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement !== undefined){
let data266 = data231.involvement;
if(typeof data266 !== "string"){
const err604 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err604];
}
else {
vErrors.push(err604);
}
errors++;
}
if(!(data266 === "fsmRecordClass")){
const err605 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/involvement",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/involvement/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.involvement.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err605];
}
else {
vErrors.push(err605);
}
errors++;
}
}
if(data231.id !== undefined){
let data267 = data231.id;
if(typeof data267 !== "string"){
const err606 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err606];
}
else {
vErrors.push(err606);
}
errors++;
}
if(!(data267 === "INCIDENT")){
const err607 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/id",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/id/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[0].properties.relatedObject.allOf[0].items.allOf[2].oneOf[9].properties.id.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err607];
}
else {
vErrors.push(err607);
}
errors++;
}
}
if(data231.href !== undefined){
let data268 = data231.href;
if(typeof data268 === "string"){
if(func2(data268) > 4096){
const err608 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/maxLength",keyword:"maxLength",params:{limit: 4096},message:"must NOT have more than 4096 characters"};
if(vErrors === null){
vErrors = [err608];
}
else {
vErrors.push(err608);
}
errors++;
}
}
else {
const err609 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20+"/href",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf/9/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err609];
}
else {
vErrors.push(err609);
}
errors++;
}
}
}
var _valid9 = _errs685 === errors;
if(_valid9 && valid137){
valid137 = false;
passing9 = [passing9, 9];
}
else {
if(_valid9){
valid137 = true;
passing9 = 9;
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
if(!valid137){
const err610 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/allOf/2/oneOf",keyword:"oneOf",params:{passingSchemas: passing9},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err610];
}
else {
vErrors.push(err610);
}
errors++;
}
else {
errors = _errs619;
if(vErrors !== null){
if(_errs619){
vErrors.length = _errs619;
}
else {
vErrors = null;
}
}
}
if(data231 && typeof data231 == "object" && !Array.isArray(data231)){
if(data231.involvement === undefined){
const err611 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "involvement"},message:"must have required property '"+"involvement"+"'"};
if(vErrors === null){
vErrors = [err611];
}
else {
vErrors.push(err611);
}
errors++;
}
if(data231.id === undefined){
const err612 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err612];
}
else {
vErrors.push(err612);
}
errors++;
}
}
else {
const err613 = {instancePath:instancePath+"/event/troubleTicket/relatedObject/" + i20,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err613];
}
else {
vErrors.push(err613);
}
errors++;
}
}
let i21 = data230.length;
let j10;
if(i21 > 1){
outer10:
for(;i21--;){
for(j10 = i21; j10--;){
if(func0(data230[i21], data230[j10])){
const err614 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/uniqueItems",keyword:"uniqueItems",params:{i: i21, j: j10},message:"must NOT have duplicate items (items ## "+j10+" and "+i21+" are identical)"};
if(vErrors === null){
vErrors = [err614];
}
else {
vErrors.push(err614);
}
errors++;
break outer10;
}
}
}
}
}
else {
const err615 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/0/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err615];
}
else {
vErrors.push(err615);
}
errors++;
}
if(Array.isArray(data230)){
if(data230.length < 4){
const err616 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/1/minItems",keyword:"minItems",params:{limit: 4},message:"must NOT have fewer than 4 items"};
if(vErrors === null){
vErrors = [err616];
}
else {
vErrors.push(err616);
}
errors++;
}
}
else {
const err617 = {instancePath:instancePath+"/event/troubleTicket/relatedObject",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/relatedObject/allOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err617];
}
else {
vErrors.push(err617);
}
errors++;
}
}
if(data75.note !== undefined){
let data269 = data75.note;
if(Array.isArray(data269)){
const len11 = data269.length;
for(let i22=0; i22<len11; i22++){
let data270 = data269[i22];
if(data270 && typeof data270 == "object" && !Array.isArray(data270)){
if(data270.date !== undefined){
let data271 = data270.date;
if(typeof data271 === "string"){
if(!pattern0.test(data271)){
const err618 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err618];
}
else {
vErrors.push(err618);
}
errors++;
}
if(!(formats0.validate(data271))){
const err619 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err619];
}
else {
vErrors.push(err619);
}
errors++;
}
}
else {
const err620 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err620];
}
else {
vErrors.push(err620);
}
errors++;
}
}
if(data270.author !== undefined){
if(typeof data270.author !== "string"){
const err621 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err621];
}
else {
vErrors.push(err621);
}
errors++;
}
}
if(data270.text !== undefined){
if(typeof data270.text !== "string"){
const err622 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err622];
}
else {
vErrors.push(err622);
}
errors++;
}
}
}
else {
const err623 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err623];
}
else {
vErrors.push(err623);
}
errors++;
}
if(data270 && typeof data270 == "object" && !Array.isArray(data270)){
if(data270.date === undefined){
const err624 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err624];
}
else {
vErrors.push(err624);
}
errors++;
}
if(data270.author === undefined){
const err625 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err625];
}
else {
vErrors.push(err625);
}
errors++;
}
if(data270.text === undefined){
const err626 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err626];
}
else {
vErrors.push(err626);
}
errors++;
}
for(const key17 in data270){
if(!(((key17 === "date") || (key17 === "author")) || (key17 === "text"))){
const err627 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key17},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err627];
}
else {
vErrors.push(err627);
}
errors++;
}
}
if(data270.date !== undefined){
let data274 = data270.date;
if(typeof data274 === "string"){
if(!pattern0.test(data274)){
const err628 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/pattern",keyword:"pattern",params:{pattern: "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"},message:"must match pattern \""+"\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d{3}Z"+"\""};
if(vErrors === null){
vErrors = [err628];
}
else {
vErrors.push(err628);
}
errors++;
}
if(!(formats0.validate(data274))){
const err629 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""};
if(vErrors === null){
vErrors = [err629];
}
else {
vErrors.push(err629);
}
errors++;
}
}
else {
const err630 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/date",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err630];
}
else {
vErrors.push(err630);
}
errors++;
}
}
if(data270.author !== undefined){
let data275 = data270.author;
if(typeof data275 === "string"){
if(func2(data275) > 100){
const err631 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/author/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"};
if(vErrors === null){
vErrors = [err631];
}
else {
vErrors.push(err631);
}
errors++;
}
}
else {
const err632 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/author",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err632];
}
else {
vErrors.push(err632);
}
errors++;
}
}
if(data270.text !== undefined){
if(typeof data270.text !== "string"){
const err633 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22+"/text",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/allOf/1/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err633];
}
else {
vErrors.push(err633);
}
errors++;
}
}
}
if(data270 && typeof data270 == "object" && !Array.isArray(data270)){
if(data270.date === undefined){
const err634 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "date"},message:"must have required property '"+"date"+"'"};
if(vErrors === null){
vErrors = [err634];
}
else {
vErrors.push(err634);
}
errors++;
}
if(data270.author === undefined){
const err635 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "author"},message:"must have required property '"+"author"+"'"};
if(vErrors === null){
vErrors = [err635];
}
else {
vErrors.push(err635);
}
errors++;
}
if(data270.text === undefined){
const err636 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/required",keyword:"required",params:{missingProperty: "text"},message:"must have required property '"+"text"+"'"};
if(vErrors === null){
vErrors = [err636];
}
else {
vErrors.push(err636);
}
errors++;
}
}
else {
const err637 = {instancePath:instancePath+"/event/troubleTicket/note/" + i22,schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/items/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err637];
}
else {
vErrors.push(err637);
}
errors++;
}
}
let i23 = data269.length;
let j11;
if(i23 > 1){
outer11:
for(;i23--;){
for(j11 = i23; j11--;){
if(func0(data269[i23], data269[j11])){
const err638 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/uniqueItems",keyword:"uniqueItems",params:{i: i23, j: j11},message:"must NOT have duplicate items (items ## "+j11+" and "+i23+" are identical)"};
if(vErrors === null){
vErrors = [err638];
}
else {
vErrors.push(err638);
}
errors++;
break outer11;
}
}
}
}
}
else {
const err639 = {instancePath:instancePath+"/event/troubleTicket/note",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/properties/note/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err639];
}
else {
vErrors.push(err639);
}
errors++;
}
}
}
else {
const err640 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err640];
}
else {
vErrors.push(err640);
}
errors++;
}
if(data75 && typeof data75 == "object" && !Array.isArray(data75)){
if(data75.description === undefined){
const err641 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "description"},message:"must have required property '"+"description"+"'"};
if(vErrors === null){
vErrors = [err641];
}
else {
vErrors.push(err641);
}
errors++;
}
if(data75.severity === undefined){
const err642 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "severity"},message:"must have required property '"+"severity"+"'"};
if(vErrors === null){
vErrors = [err642];
}
else {
vErrors.push(err642);
}
errors++;
}
if(data75.type === undefined){
const err643 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "type"},message:"must have required property '"+"type"+"'"};
if(vErrors === null){
vErrors = [err643];
}
else {
vErrors.push(err643);
}
errors++;
}
if(data75.resolutionDate === undefined){
const err644 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/required",keyword:"required",params:{missingProperty: "resolutionDate"},message:"must have required property '"+"resolutionDate"+"'"};
if(vErrors === null){
vErrors = [err644];
}
else {
vErrors.push(err644);
}
errors++;
}
if(data75.status !== undefined){
let data277 = data75.status;
if(typeof data277 !== "string"){
const err645 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err645];
}
else {
vErrors.push(err645);
}
errors++;
}
if(!((data277 === "Resolved") || (data277 === "Cancelled"))){
const err646 = {instancePath:instancePath+"/event/troubleTicket/status",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.allOf[1].oneOf[1].properties.event.properties.troubleTicket.oneOf[2].allOf[1].properties.status.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err646];
}
else {
vErrors.push(err646);
}
errors++;
}
}
}
else {
const err647 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf/2/allOf/1/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err647];
}
else {
vErrors.push(err647);
}
errors++;
}
var _valid3 = _errs537 === errors;
if(_valid3 && valid43){
valid43 = false;
passing3 = [passing3, 2];
}
else {
if(_valid3){
valid43 = true;
passing3 = 2;
}
}
}
if(!valid43){
const err648 = {instancePath:instancePath+"/event/troubleTicket",schemaPath:"#/allOf/1/oneOf/1/properties/event/properties/troubleTicket/oneOf",keyword:"oneOf",params:{passingSchemas: passing3},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err648];
}
else {
vErrors.push(err648);
}
errors++;
}
else {
errors = _errs193;
if(vErrors !== null){
if(_errs193){
vErrors.length = _errs193;
}
else {
vErrors = null;
}
}
}
}
}
}
}
var _valid0 = _errs186 === errors;
if(_valid0 && valid2){
valid2 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid2 = true;
passing0 = 1;
}
}
if(!valid2){
const err649 = {instancePath,schemaPath:"#/allOf/1/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){
vErrors = [err649];
}
else {
vErrors.push(err649);
}
errors++;
}
else {
errors = _errs10;
if(vErrors !== null){
if(_errs10){
vErrors.length = _errs10;
}
else {
vErrors = null;
}
}
}
validate10.errors = vErrors;
return errors === 0;
}
