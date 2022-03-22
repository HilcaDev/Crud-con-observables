import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDto } from 'src/app/domain/users/user.dto';
import { environment } from 'src/environments/environment';
import { IUserRepository } from '../../domain/users/users.repository';
import { IUserField } from '../validators/userForm.validator';

@Injectable()
export class UsersService implements IUserRepository {

  constructor(private httpClient: HttpClient) { }

  createUser(payload: IUserField): Observable<HttpResponse<IUserDto>> {
    return this.httpClient.post<IUserDto>(`${environment.baseUrl}/public/v2/users`, payload, { observe: 'response' });
  }

  getAll(): Observable<HttpResponse<IUserDto[]>> {
    return this.httpClient.get<IUserDto[]>(`${environment.baseUrl}/public/v2/users`, { observe: 'response' })
  }

  updateUser(payload: IUserField): Observable<HttpResponse<IUserDto>> {
    return this.httpClient.put<IUserDto>(`${environment.baseUrl}/public/v2/users/${payload.id}`, payload, { observe: 'response' })
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${environment.baseUrl}/public/v2/users/${id}`, { observe: 'response' })
  }
}
