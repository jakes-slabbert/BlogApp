import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost } from 'src/app/objects/Post';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private subscriptions$: Subscription[] = [];

  data$ = new Observable<BlogPost[]>();
  searchQuery$ = new BehaviorSubject<string>('');

  public posts: BehaviorSubject<BlogPost[]> = new BehaviorSubject<BlogPost[]>(null);

  public isCollapsed = true;

  constructor(private postsService: PostsService) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit() {
    window.scroll(0, 0);

    this.data$ = combineLatest([
      this.searchQuery$,
      this.postsService.posts$
    ])
    .pipe(
      map(([searchQuery, data]) => {
        if (data === null || data.length === 0) {
          return null;
        }
        if (searchQuery.length === 0) {
          return data['Blogs'];
        }
        console.log(searchQuery);
        return data['Blogs'].filter(x => x.Title.toLowerCase().includes(searchQuery.toLowerCase()) || x.Subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions$.forEach(element => {
      element.unsubscribe();
    });
  }

  onSearchUpdated(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }

}
