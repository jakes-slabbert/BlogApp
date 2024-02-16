import { Component, OnInit, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { BlogPost } from "src/app/objects/Post";
import { PostsService } from "src/app/services/posts-service.service";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {

  private subscriptions$: Subscription[] = [];

  public posts: BehaviorSubject<BlogPost[]> = new BehaviorSubject<BlogPost[]>(null);

  isCollapsed = true;
  date = new Date();

  constructor(private postsService: PostsService) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    window.scroll(0,0);
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    this.subscriptions$.push(this.postsService.posts$.subscribe(posts => {
      if (posts == null || posts.length == 0) {
        return;
      }
      var latestPosts = posts['Blogs'].slice(-3);
      this.posts.next(latestPosts);
    }));
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");

    this.subscriptions$.forEach(element => {
      element.unsubscribe();
    });
  }
}
