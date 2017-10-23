/**
 * Created by wenbo.kuang on 2017/10/19.
 */
import {Component, OnInit} from '@angular/core';
import {HomeComponent} from "../pages/HomePage/home.component";

// 为 AppComponent 组件类添加注解
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit{
  initialPage: any = HomeComponent;

  constructor() {}

  ngOnInit() {

  }
}
