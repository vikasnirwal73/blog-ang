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

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    console.log(this.route.params.value.id);
    this.postService.getPost(this.route.params.value.id)
    .subscribe(data => {
      console.log(data['post']);
    })
  }

}
