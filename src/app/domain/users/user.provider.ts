import { Provider } from "@angular/core";
import { UsersService } from '../../core/services/users.service';

export const UserProvider: Provider = {
  provide: 'UserRepository',
  useClass: UsersService
}
