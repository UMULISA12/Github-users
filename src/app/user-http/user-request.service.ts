import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'
import { environment } from 'src/environments/environment';
// import {environment} from 'src/environments/environment';


@Injectable()
export class apiRequestService {

   user:User;


   constructor(private http:HttpClient) {
     this.user= new User("","",0 ,0 ,0,"",new Date(2018,3,14));
   }


   apiRequest(userName){
     var userInput= userName;
     console.log(userInput)
     interface ApiResponse{
       avatar_url:string;
       name:string;
       followers:number;
       following:number;
       public_repos:number;
       location:string;
       

     }
     let promise =new Promise((resolve,reject)=>{

       this.http.get<ApiResponse>('https://api.github.com/users/'+ userInput + '?access_token=' + environment.apiToken).toPromise().then(response=>{

           this.user.avatar_url=response.avatar_url
           this.user.name=response.name
           this.user.followers =response.followers
           this.user.following=response.following
           this.user.public_repos=response.public_repos
           this.user.location=response.location
          

           resolve()

     },error=>{
       this.user= new User('https://avatars3.githubusercontent.com/u/45567374?v=4','Alice UMULISA',0,0,18,'KIGALI RWANDA',new Date(2019,2,6))
       reject(error)

     }
     )
 })

 return promise
 }
}