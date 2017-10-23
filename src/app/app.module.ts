/**
 * Created by wenbo.kuang on 2017/10/19.
 */
// 引入NgModule装饰器
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";

// 引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

// 引入组件AppComponent
import { AppComponent } from './app.component';
// 引入框架OnsenUI
import {OnsenModule} from "ngx-onsenui";

//引入页面
import {HomeComponent} from "../pages/HomePage/home.component";
import {homePage} from "../pages/HomePage/home/home.page";
import {minePage} from "../pages/HomePage/mine/mine.page";
import {historyAssessment} from "../pages/AssessmentCenter/historyAssessment/history.assessment";
import {latestAssessment} from "../pages/AssessmentCenter/latestAssessment/latest.assessment";
import {AssessmentComponent} from "../pages/AssessmentCenter/assessment.component";

//引入组件
import {AssessmentCard} from "../components/AssessmentCard/assessment.card";

//引入服务
import {HttpInterceptorService} from "../services/http-interceptor.service";
import {UserService} from "../services/UserService/user.service";
import {AssessmentService} from "../services/AssessmentService/assessment.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    OnsenModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    homePage,
    minePage,
    AssessmentComponent,
    historyAssessment,
    latestAssessment,
    AssessmentCard
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    HomeComponent,
    homePage,
    minePage,
    AssessmentComponent,
    historyAssessment,
    latestAssessment,
    AssessmentCard
  ],
  providers: [
    HttpInterceptorService,
    UserService,
    AssessmentService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class AppModule {}
