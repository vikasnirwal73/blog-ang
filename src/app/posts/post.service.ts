import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { PostSimple } from './../models/post-simple.model';
import { Post } from './../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<{result: { docs: PostSimple[] }}>('http://localhost:3000/posts?page=1&limit=10');
  }

  getPost(id: string) {
    return this.http.get<{ post: Post }>('http://localhost:3000/posts/' + id);
  }

}
