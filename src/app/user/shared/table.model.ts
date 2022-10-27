export class JobHistory {
    id: string;
    position: string;
    companyName: string;
    address: string;
    numberYears: string;
    period: string;
    ctc: string;
    isEdit: boolean;
}

export class Educational {
    id: string;
    university: string;
    completionYear: string;
    program: string;
    aggregate: string;
    grade: string;
    isEdit: boolean;
}

export class Nominee {
    id: string;
    relationship: string;
    nomineeName: string;
    dob: string;
    gender: string;
    nomineeShare: string;
    isEdit: boolean;
}

export class Dependent {
    id: string;
    dependentName: string;
    name: string;
    dob: string;
    gender: string;
    isEdit: boolean;
}


export const JobHistoryColumns = [
    {
        key: 'position',
        type: 'text',
        label: 'First Name',
        required: true,
    },
    {
        key: 'companyName',
        type: 'text',
        label: 'Last Name',
    },
    {
        key: 'address',
        type: 'email',
        label: 'Email',
        required: true,
        pattern: '.+@.+',
    },
    {
        key: 'numberYears',
        type: 'text',
        label: 'Date of Birth',
    },
    {
        key: 'period',
        type: 'text',
        label: 'Date of Birth',
    },
    {
        key: 'ctc',
        type: 'text',
        label: 'Date of Birth',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const EducationalColumns = [
    {
        key: 'university',
        type: 'text',
        label: 'First Name',
        required: true,
    },
    {
        key: 'completionYear',
        type: 'text',
        label: 'Last Name',
    },
    {
        key: 'program',
        type: 'text',
        label: 'Email',
        required: true,
        pattern: '.+@.+',
    },
    {
        key: 'aggregate',
        type: 'text',
        label: 'Date of Birth',
    },
    {
        key: 'grade',
        type: 'text',
        label: 'Date of Birth',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const NomineeColumns = [
    {
        key: 'firstName',
        type: 'text',
        label: 'First Name',
        required: true,
    },
    {
        key: 'lastName',
        type: 'text',
        label: 'Last Name',
    },
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        pattern: '.+@.+',
    },
    {
        key: 'birthDate',
        type: 'date',
        label: 'Date of Birth',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const DependentColumns = [
    {
        key: 'firstName',
        type: 'text',
        label: 'First Name',
        required: true,
    },
    {
        key: 'lastName',
        type: 'text',
        label: 'Last Name',
    },
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        pattern: '.+@.+',
    },
    {
        key: 'birthDate',
        type: 'date',
        label: 'Date of Birth',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];