import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { Post } from './../../models/post.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  posts:Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.postService.getPosts().subscribe(data => console.log(data));
    this.postService.getPosts()
    .subscribe(data => {
      // console.log(data);
      this.posts = data['result'].docs;
    })
  }

}
