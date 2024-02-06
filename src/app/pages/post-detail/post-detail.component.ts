import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BlogPost } from 'src/app/objects/Post';
import { PostsService } from 'src/app/services/posts-service.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  private postId: number;

  private subscriptions$: Subscription[] = [];

  private currentPost: BehaviorSubject<BlogPost> = new BehaviorSubject<BlogPost>(null);

  constructor(private route: ActivatedRoute,
    private postsService: PostsService) {
      this.subscriptions$.push(this.route.params.subscribe(params => {
        this.postId = params['id'] as number;
      }));
  }

  ngOnInit() {
    window.scroll(0,0);
    this.subscriptions$.push(this.postsService.posts$.subscribe(posts => {
        let checkPosts = posts['Blogs'] as BlogPost[];
        if (checkPosts == null) {
          return;
        }
        let checkPost = checkPosts.find(post => post.Id == this.postId)
        this.currentPost.next(checkPost);
    }));

    this.subscriptions$.push(this.currentPost
      .subscribe());
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(element => {
      element.unsubscribe();
    });
  }

}

