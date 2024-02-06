import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { BehaviorSubject, Subscription } from "rxjs";
import { BlogPost } from "src/app/objects/Post";
import { PostsService } from "src/app/services/posts-service.service";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {

  private subscriptions$: Subscription[] = [];

  private posts: BehaviorSubject<BlogPost[]> = new BehaviorSubject<BlogPost[]>(null);


  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(private postsService: PostsService) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    window.scroll(0,0);
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    // var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    this.subscriptions$.push(this.postsService.posts$.subscribe(posts => {
      debugger;
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
