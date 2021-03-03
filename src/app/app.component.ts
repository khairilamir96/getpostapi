import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _freeApiService: freeApiService){

  }
  lstcomments:Comments[];
  lstposts:Posts[];
  objPosts:Posts;

  ngOnInit(){
    this._freeApiService.getcomments()
    .subscribe
    (
      data=>
      {
        this.lstcomments = data;
      }
    );

    this._freeApiService.getcommentsbyparameter()
    .subscribe
    (
      data=>
      {
        this.lstposts = data;
      }
    );

    var opost = new Posts();

    opost.body = 'testbody';
    opost.title = 'testtile';
    opost.userId = 5;

    this._freeApiService.post(opost)
    .subscribe
    (
      data=>
      {
        this.objPosts = data;
      }
    )
  }
}
