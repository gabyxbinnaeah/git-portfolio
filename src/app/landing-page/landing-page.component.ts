import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  title = 'gitApi';

  githubservice:any;
  search!:string;

  holduserdetail:any;

  repoInfo:any=[] //new one

  constructor(gitservice: GitServiceService){
      this.githubservice =gitservice;
  }

  submituser(){
    this.githubservice.getUsers(this.search);
  }

  displayUserDetails(){
    this.githubservice.getUsers(this.search);
    
  }

  buttonInfo(){
     this.holduserdetail=this.githubservice.users;
     this.repoInfo=this.githubservice.repoData;  //data from repoData
    //  console.log(this.repoInfo)
     console.log(this.holduserdetail);
  }



  ngOnInit(): void {
  }

}
