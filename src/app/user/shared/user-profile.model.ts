export abstract class Auditable {
    dateCreated: Date;
    dateModified: Date;
    userCreated: string;
    userModified: string;
}

export abstract class IUserProfile extends Auditable {
    userId: string;
}

export class UserProfile extends IUserProfile {
    UserBasicInfo: UserBasicInfo;
    UserContactInfo: UserContactInfo;
}

export class UserBasicInfo extends IUserProfile {
    firstName: string;
    middleName: string;
    lastName: string;
    profileImageFile: File;
    profileImageUrl: string;
    dob: Date;
    aadharName: string;
    aadharFile: File;
    aadharNumber: string;
    aadharAttachmentUrl: string;
    panNumber: string;
    panFile: File;
    panAttachmentUrl: string;
    nationality: string;
    passportNumber: string;
    validVisaInformation: string;
    guardianType: string;
    guardianName: string;
}

export enum GuardianType {
    Father,
    Husband,
    Guardian,
}



export class UserContactInfo extends IUserProfile {
    CorrespondenceAddress: UserAddress;
    PermanentAddress: UserAddress;
    CorrespondenceAddressId: string;
    PermanentAddressId: string;
    IsCorrespondenceSameAsPermanent: boolean;
    HomePhone: string;
    MobilePhone: string;
    Email: string;
}

export class UserAddress {
    UserAddressId: string;
    Street: string;
    Apartment: string;
    City: string;
    State: string;
    PinCode: string;
}