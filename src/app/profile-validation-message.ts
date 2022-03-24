export class ProfileValidationMessages {
  static errorMessages = {
    firstName: [{type: 'required', message: 'Name is required'}, {
      type: 'maxlength',
      message: 'Name must be between 1 to 254 characters'
    }, {type: 'pattern', message: 'Please enter a valid name'}],
    lastName: [{type: 'required', message: 'Name is required'}, {
      type: 'maxlength',
      message: 'Name must be between 1 to 254 characters'
    }, {type: 'pattern', message: 'Please enter a valid name'}],
    email: [{type: 'required', message: 'Email is required'}, {
      type: 'pattern',
      message: 'Email should be in correct pattern'
    }, {type: 'maxlength', message: 'Email must be between 1 to 254 characters'}, ],
    phoneNo: [{type: 'required', message: 'PhoneNo is required'}, ],
    address: [{type: 'required', message: 'Address is required'}, ],
    dob: [{type: 'required', message: 'D.O.B is required'}],
    message: [{type: 'required', message: 'Message is required'}, {
      type: 'maxlength',
      message: 'Message must be less then 254 characters'
    }, {type: 'minlength', message: 'Please Input at least 1 character'}]
  };
}
