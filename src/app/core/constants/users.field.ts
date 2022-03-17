import { Validators } from "@angular/forms";
import { IUserField } from '../validators/userForm.validator';

export const UsersField = {
  id: [0],
  name: ['', Validators.required],
  email: ['', Validators.required],
  gender: ['', Validators.required],
  status: ['', Validators.required],
}
