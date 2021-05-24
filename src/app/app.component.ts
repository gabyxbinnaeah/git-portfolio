import { Component } from '@angular/core';
import { GitServiceService } from './git-service.service';
// import {Users} from './users';
// import {Repos} from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitApi';

  // githubservice:any;
  // search!:string;

  // holduserdetail:any;

  // repoInfo:any=[] //new one

  // constructor(gitservice: GitServiceService){
  //     this.githubservice =gitservice;
  // }

  // submituser(){
  //   this.githubservice.getUsers(this.search);
  // }

  // displayUserDetails(){
  //   this.githubservice.getUsers(this.search);
    
  // }

  // buttonInfo(){
  //    this.holduserdetail=this.githubservice.users;
  //    this.repoInfo=this.githubservice.repoData;  //data from repoData
  //   //  console.log(this.repoInfo)
  //    console.log(this.holduserdetail);
  // }
  
}
