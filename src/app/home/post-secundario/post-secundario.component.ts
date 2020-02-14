import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post-service';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html',
})
export class PostSecundarioComponent implements OnInit {

  posts : Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
   this.postService.listJson()
   .subscribe(dados => this.posts = dados);
  }

}
