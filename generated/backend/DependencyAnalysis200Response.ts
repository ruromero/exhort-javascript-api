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

import { AnalysisReport } from '../backend/AnalysisReport';

export class DependencyAnalysis200Response {
    'jsonReport'?: AnalysisReport;
    'htmlReport'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "jsonReport",
            "baseName": "json_report",
            "type": "AnalysisReport",
            "format": ""
        },
        {
            "name": "htmlReport",
            "baseName": "html_report",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DependencyAnalysis200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

