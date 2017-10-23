/**
 * Created by wenbo.kuang on 2017/10/20.
 */
import {Component} from "@angular/core";
import {minePage} from "./mine/mine.page";
import {homePage} from "./home/home.page";

@Component({
  selector: 'ons-page[homeTabs]',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  minePage = minePage;
  homePage = homePage;

  constructor() {

  }

}