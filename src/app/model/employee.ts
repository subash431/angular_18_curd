export class EmployeeModel {
  empId: number;
  name: string;
  city: string;
  state: string;
  emailId: string;
  contactNo: string;
  address: string;
  pincode: string;

  constructor() {
    this.address = '';
    this.empId = 0;
    this.name = '';
    this.city = '';
    this.state = '';
    this.emailId = '';
    this.contactNo = '';
    this.pincode = ' ';
  }
}
