import { AbstractControl, ValidationErrors } from "@angular/forms"

export interface IUserField {
  id?: (number | ((control: AbstractControl) => ValidationErrors))[],
  name: (string | ((control: AbstractControl) => ValidationErrors))[],
  email?: (string | ((control: AbstractControl) => ValidationErrors))[],
  gender?: (string | ((control: AbstractControl) => ValidationErrors))[],
  status?: (string | ((control: AbstractControl) => ValidationErrors))[]
}
