export class FamilyDetails{
    id: string;
    name: string;
    relationship: string;
    birthDate: string;
}
export  class  FamilyDetailsVM extends FamilyDetails{
  isEdit: boolean;
}
export const FamilyDetailsColumns = [
    {
      key: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      key: 'relationship',
      type: 'select',
      label: 'Relationship',
      required: true,
    },
    {
      key: 'birthDate',
      type: 'date',
      label: 'Date of Birth',
      required: true,
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    }
  ];

 export class ReferenceDetails{
  id: string;
  name: string;
  mobileNo: string;
  relationShip: string;
}
export  class  ReferenceDetailsVM extends ReferenceDetails{
  isEdit: boolean;
}

export const ReferenceDetailsColumns = [
  {
    key: 'name',
    type: 'text',
    label: 'Reference Name',
    required: true,
  },
  {
    key: 'mobileNo',
    type: 'text',
    label: 'Mobile Number',
    required: true,
  },
  {
    key: 'relation',
    type: 'select',
    label: 'Relationship',
    required: true,
  }
];
