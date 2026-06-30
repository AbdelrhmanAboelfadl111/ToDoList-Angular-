import { Component, input } from '@angular/core';
import { userModle } from '../../models/user.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  public user = input.required<userModle>()

  public isSelectedUserTrue=input.required<boolean>()
  


}
