/**
 * Created by wenbo.kuang on 2017/10/22.
 */
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import {HttpInterceptorService} from "../http-interceptor.service";


@Injectable()
export class UserService {
  constructor(private httpInterceptorService: HttpInterceptorService) { }

  public login(user: any): any {
    let url = AppConfig.hempConfig.kpPath + "/token/access";
    return this.httpInterceptorService.post(url, user);
  }
}
