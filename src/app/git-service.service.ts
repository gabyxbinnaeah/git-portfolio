import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment';
import {Users} from './users';
import {Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor() { }
}
 