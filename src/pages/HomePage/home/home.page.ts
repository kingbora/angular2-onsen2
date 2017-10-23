/**
 * Created by wenbo.kuang on 2017/10/20.
 */
import {Component} from "@angular/core";
import {OnsNavigator} from "ngx-onsenui";
import {AssessmentComponent} from "../../AssessmentCenter/assessment.component";

@Component({
  selector: 'ons-page[homePage]',
  templateUrl: 'home.page.html'
})

export class homePage {
  constructor(public _navigator: OnsNavigator) {

  }

  gotoPage() {
    // Push AssessmentComponent to `ons-navigator
    this._navigator.element.pushPage(AssessmentComponent);
  }
}
