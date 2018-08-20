// Type definitions for AliCloud Function Compute
// Project: https://cn.aliyun.com/product/fc
// Definitions by: Son, Luong Ngoc <https://github.com/sluongng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0.1

/**
 * OSS Event Trigger
 * https://help.aliyun.com/document_detail/52633.html#event
 */
export interface OSSEventRecords {
    events: OSSEventRecord[];
}

export interface OSSEventRecord {
    eventName: string;
    eventSource: string;
    eventTime: string;
    eventVersion: string;
    oss: OSSMetaRecord;
    region: string;
    requestParameters: OSSRequestParameters;
    resposeElements: OSSResponseElements;
    userIdentity: OSSUserIdentity;
}

export OSSMetaRecord {
    bucket: OSSBucketMetaRecord;
    object: OSSObjectMetaRecord;
    ossSchemaVersion: string;
    ruleId: string;
}

export OSSBucketMetaRecord {
    arn: string;
    name: string;
    ownerIdentity: string;
    virtualBucket: string;
}

export OSSObjectMetaRecord {
    deltaSize: number;
    eTag: string;
    key: string;
    size: number;
}

export OSSRequestParameters {
    sourceIPAddress: string;
    [name: string]: string;
}

export OSSResponseElements {
    requestId: string;
    [name: string]: string;
}

export OSSUserIdentity {
    principalId: string;
    [name: string]: string;
}

