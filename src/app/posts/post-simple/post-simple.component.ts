import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-post-simple',
  templateUrl: './post-simple.component.html',
  styleUrls: ['./post-simple.component.scss']
})
export class PostSimpleComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

}
