import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  constructor() { }

  salvar(post: Post){
    const posts = this.buscarTodos();
    posts.push(post);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    // console.log(post);
  }

  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }
}
