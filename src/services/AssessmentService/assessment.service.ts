/**
 * Created by wenbo.kuang on 2017/10/9.
 */
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import {HttpInterceptorService} from "../http-interceptor.service";


@Injectable()
export class AssessmentService {
  constructor(private httpInterceptorService: HttpInterceptorService) { }

  public getCurrentAssessment(params: any): any {
    let url = AppConfig.hempConfig.kpPath + "/sec/currentAssessments?";

    return this.httpInterceptorService.get(url, params);
  }

}
