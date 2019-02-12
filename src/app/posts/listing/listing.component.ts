import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  posts = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => console.log(data));
  }

}
