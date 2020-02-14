import { Component, OnInit, Output } from '@angular/core';
import { PostService } from '../services/post-service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
