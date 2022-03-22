import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IUserRepository } from '../../domain/users/users.repository';
import { IUserDto } from '../../domain/users/user.dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { UsersField } from 'src/app/core/constants/users.field';
import { HttpStatusCode } from 'src/app/core/constants/httpStatusCode';
import { userCreatedUser, userEdit, userWarning } from 'src/app/core/constants/sweetalert.config';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('buttonCloseModalRegister') buttonModalRegister!: ElementRef;

  userData!: IUserDto[];
  formCreateUserData!: FormGroup;
  isEditUser: boolean = false;
  userErrorService!: HttpErrorResponse;
  showErrorUserService: boolean = false;
  userDtoData!: IUserDto;

  constructor(@Inject('UserRepository') private userService: IUserRepository, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField);
  }

  closeModal(): void{
    this.buttonModalRegister.nativeElement.click();
  }

  fetchUserData():void {
    this.userService.getAll().subscribe((response: any) =>
      this.userData = response.body
    );
  }

  createUserData(): void {
    this.userService.createUser(this.formCreateUserData.value).subscribe((response: HttpResponse<IUserDto>) => {
      if (response.status === HttpStatusCode.Created) {
        this.closeModal();
        Swal.fire(userCreatedUser);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error.error;
      this.showErrorUserService = true;
    });
  }

  editUserData(): void {
    console.log('entra')
    this.userService.updateUser(this.formCreateUserData.value).subscribe((response: HttpResponse<IUserDto>) => {
      console.log(response);
      if (response.status === HttpStatusCode.Ok) {
        this.closeModal();
        Swal.fire(userEdit);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error.error;
      console.log('error', error);
      this.showErrorUserService = true;
    });
  }

  showModalWithUserData(user: IUserDto): void {
    this.showErrorUserService = false;
    this.isEditUser = true;
    this.formCreateUserData.patchValue(user)
  }

  deleteUserData(user: IUserDto): void {
    Swal.fire(userWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this.userService.deleteUser(user.id!).subscribe((response: HttpResponse<any>) => {
          if (response.status === HttpStatusCode.NoContent)
            this.fetchUserData();
        });
    });
  }

  showFormToCreate(): void {
    this.formCreateUserData.reset();
    this.showErrorUserService = false;
    this.isEditUser = false;
  }
}
