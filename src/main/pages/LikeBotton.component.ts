import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-like',
  templateUrl: './LikeBottonComponent.html',
})
export class LikeBottonComponent implements OnInit {
  private countNumber: number;

  constructor() {
    countNumber = 100;
  }

  ngOnInit(): void {}

  likeButton() {
    countNumber = countNumber + 1;
  }

  dislike() {
    countNumber = 100;
  }
}
