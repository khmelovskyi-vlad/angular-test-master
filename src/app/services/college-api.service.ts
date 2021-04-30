import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutInterface } from '../models/about.interface';
export const college: AboutInterface = {id: 1, name: 'my name', photo: 'my photo', about: 'my about', media_type: 1, vimeo_video_id: 2};

@Injectable({
  providedIn: 'root'
})
export class CollegeApiService {

  constructor() { }

  getCollege(): Observable<AboutInterface>{
    return of(college);
  }
}