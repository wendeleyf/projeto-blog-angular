import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/posts';

  salvar(post: Post){
    const posts = this.buscarTodos();
    posts.push(post);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    // console.log(post);
  }

  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }

  buscarPostPrincipal() : Post {
    const posts = this.buscarTodos();
    return posts[0];
  }

  listJson(){
    return this.http.get<Post[]>(this.API);
  }


}
