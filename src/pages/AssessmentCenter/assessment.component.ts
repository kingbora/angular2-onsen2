/**
 * Created by wenbo.kuang on 2017/10/20.
 */
import {Component} from "@angular/core";
import {latestAssessment} from "./latestAssessment/latest.assessment";
import {historyAssessment} from "./historyAssessment/history.assessment";

@Component({
  selector: 'ons-page[assessment]',
  templateUrl: 'assessment.component.html',
  styleUrls: ['assessment.component.scss']
})

export class AssessmentComponent {
  latestAssessment = latestAssessment;
  historyAssessment = historyAssessment;

  constructor() {

  }
}
