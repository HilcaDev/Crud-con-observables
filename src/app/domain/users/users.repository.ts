import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUserField } from "src/app/core/validators/userForm.validator";
import { IUserDto } from "./user.dto";

export interface IUserRepository {
  createUser(payload: IUserField): Observable<HttpResponse<IUserDto>>,
  getUserById(id: number): Observable<HttpResponse<IUserDto>>,
  getAll(): Observable<HttpResponse<IUserDto[]>>,
  updateUser(payload: IUserField): Observable<HttpResponse<IUserDto>>,
  deleteUser(id: number): Observable<HttpResponse<any>>
}
