import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts?page=1&limit=3')
    .map((res:Response) => res.json());
  }

}
