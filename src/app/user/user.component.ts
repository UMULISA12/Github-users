import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'
import { environment } from 'src/environments/environment';
import {apiRequestService} from '../user-http/user-request.service'
import { FormControl } from '@angular/forms';

@Component({
 selector: 'app-user',
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css'],
 providers:[apiRequestService],
})



export class UserComponent implements OnInit {
 user:User;
 userName=""


 constructor(private apiService:apiRequestService) {
 }
 submitInput() {
   this.apiService.apiRequest(this.userName);
 }

 ngOnInit() {
   this.user = this.apiService.user
   this.apiService.apiRequest('UMULISA12');
 }
}