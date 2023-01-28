import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  article: Article;


  constructor() {

    this.article = new Article(
      'Angular',
      'http://angular.io',
      10);
  }

  voteUp(event: any) {
    //this.votes += 1;
    this.article.voteUp();
    return false;
  }

  // @HostListener('click', ['$event'])
  // voteUp(event: any) {
  //   // event handler code here
  //   console.log(event);
  //   this.votes += 1;
  //   return false;
  // }

  voteDown() {
    this.article.voteDown();
    return false;
  }

















  ngOnInit() {
  }

}
