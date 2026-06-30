import { Injectable } from '@angular/core';
import { userModle } from '../models/user.model';

@Injectable({
    providedIn:'root'
})
export class UsersService {
    
    public Users: userModle[] = [
        { id: "u1", Name: "Abdo Fad", Avatar: "people.png" },
        { id: "u2", Name: "Ahmed Ail", Avatar: "people.png" },
        { id: "u3", Name: "Mohamed Ail", Avatar: "people.png" },
        { id: "u4", Name: "Ali Mohamed", Avatar: "people.png" },
    ];

    public getUsersFromServices(): userModle[]{
        return this.Users;
    }
}
