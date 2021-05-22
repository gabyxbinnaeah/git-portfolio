import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment';
import {Users} from './users';
import {Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  users!:Users;
  repos!:Repos;


  constructor(private http:HttpClient, ) {
    this.users= new Users(" "," "," "," ");
    this.repos= new Repos(" "," "," ",);
   }

   getName(user:string) {
       interface ApiResponse{
         login:string,
         avatar_url:string,
         repos_url:string,
         name:string
       }

       let promise= new Promise(function(resolve,reject){

      })
   }

   
}
