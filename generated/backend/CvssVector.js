/**
 * CodeReady Dependency Analytics API
 * Vulnerability analysis with Red Hat CodeReady Dependency Analytics
 *
 * OpenAPI spec version: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export class CvssVector {
    'attackVector';
    'attackComplexity';
    'privilegesRequired';
    'userInteraction';
    'scope';
    'confidentialityImpact';
    'integrityImpact';
    'availabilityImpact';
    'exploitCodeMaturity';
    'remediationLevel';
    'reportConficende';
    'cvss';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "attackVector",
            "baseName": "attackVector",
            "type": "string",
            "format": ""
        },
        {
            "name": "attackComplexity",
            "baseName": "attackComplexity",
            "type": "string",
            "format": ""
        },
        {
            "name": "privilegesRequired",
            "baseName": "privilegesRequired",
            "type": "string",
            "format": ""
        },
        {
            "name": "userInteraction",
            "baseName": "userInteraction",
            "type": "string",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "confidentialityImpact",
            "baseName": "confidentialityImpact",
            "type": "string",
            "format": ""
        },
        {
            "name": "integrityImpact",
            "baseName": "integrityImpact",
            "type": "string",
            "format": ""
        },
        {
            "name": "availabilityImpact",
            "baseName": "availabilityImpact",
            "type": "string",
            "format": ""
        },
        {
            "name": "exploitCodeMaturity",
            "baseName": "exploitCodeMaturity",
            "type": "string",
            "format": ""
        },
        {
            "name": "remediationLevel",
            "baseName": "remediationLevel",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportConficende",
            "baseName": "reportConficende",
            "type": "string",
            "format": ""
        },
        {
            "name": "cvss",
            "baseName": "cvss",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return CvssVector.attributeTypeMap;
    }
    constructor() {
    }
}
