/**
 * Created by wenbo.kuang on 2017/10/22.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'rd-assessment-card',
  templateUrl: 'assessment.card.html',
  styleUrls: ['assessment.card.scss']
})

export class AssessmentCard {
  @Input("data") item: any;
}