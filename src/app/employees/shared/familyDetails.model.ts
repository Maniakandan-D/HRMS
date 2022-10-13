export class FamilyDetails {
    id: number;
    name: string;
    relationship: string;
    dob: Date;
    mobileNo: number;
}
export class FamilyDetailsVM  extends FamilyDetails{
    id: number;
    relationShipName: string;
  }