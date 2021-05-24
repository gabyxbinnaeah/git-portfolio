import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment';
import {Users} from './users';
import {Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  users:Users;
  repos:Repos;
  repoData:any=[]; //all repos
  singleRepoData:any=[];


  constructor(private http:HttpClient, ) {
    this.users= new Users(" "," "," "," ",0,0);
    this.repos= new Repos(" "," "," "," ");
   }

   getUsers(user:string) {

    // this.users= new Users(" "," "," "," "); //makes sure it is empty

       interface ApiResponse{
         login:string,
         avatar_url:string,
         repos_url:string,
         name:string,
         followers:number,
         following:number,
       }

       let promise= new Promise((resolve,reject)=>{
           this.http.get<ApiResponse>('https://api.github.com/users/'+ user +'?access_token=' + environment.apiKey).toPromise().then(response=>{
              this.users.login=response.login,
              this.users.avatar_url=response.avatar_url,
              this.users.repos_url=response.repos_url,
              this.users.name=response.name,
              this.users.followers=response.followers,
              this.users.following=response.following,

              resolve("it is asuccess")
           }), (error:any)=>{
               reject(error);
           }
  //     })

  //     return promise
  //  }
  //     //recv data
  //  getUserRepos(user:string){

   this.repoData.splice(0,this.repoData.length)

    //  let promise= new Promise((resolve,reject)=>{
      this.http.get<any>('https://api.github.com/users/'+ user +'/repos?access_token=' + environment.apiKey).toPromise().then(response=>{
          for (var i=0; i<response.length; i++){
            this.singleRepoData= new Repos(response[i].name,response[i].hmtl_url,response[i].updated_at,response[i].description)
            this.repoData.push(this.singleRepoData)
          } resolve("successfull")
      }),(error:any)=>{
          reject(error)
      }
     })
      // console.log(this.users)
      return promise
   }

   
}
