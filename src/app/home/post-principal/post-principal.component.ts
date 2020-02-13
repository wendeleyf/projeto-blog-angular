import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post-service';

@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html',
})

export class PostPrincipalComponent implements OnInit {

  post: Post = new Post();
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.post = this.postService.buscarPostPrincipal();
    console.log(this.post)
  }


}
