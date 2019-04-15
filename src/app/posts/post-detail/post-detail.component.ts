import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';
import { Post } from './../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post:Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe((data => {
      console.log(data.id)
      this.postService.getPost(data.id)
      .subscribe(postData => {
        this.post = postData.post;
        console.log(postData.post);
      })
    }))

  }

}
