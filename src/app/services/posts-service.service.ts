import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogPost } from '../objects/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _posts = new BehaviorSubject<BlogPost[]>([]);
  public posts$: Observable<BlogPost[]> = this._posts.asObservable();

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.http.get<BlogPost[]>('assets//json/NewBlogs.json').subscribe(
      posts => {
        this._posts.next(posts);
      },
      err => {
        console.error('Error loading posts', err);
        this._posts.next([]);
      }
    );
  }
}
