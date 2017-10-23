/**
 * Created by wenbo.kuang on 2017/10/22.
 */
/**
 * name:http服务
 * describe:对http请求做统一处理
 */
import {Injectable}    from '@angular/core';
import {Http, Response, Headers}   from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpInterceptorService {

  constructor(private http: Http) {
  }

  /**
   * 统一发送请求
   * @param params
   * @returns {Observable<U>|Observable<R>}
   */
  public request(params: any): any {
    if (params['method'] == 'post' || params['method'] == 'POST') {
      return this.post(params['url'], params['data']);
    }
    else {
      return this.get(params['url'], params['data']);
    }
  }

  /**
   * get请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Observable<R>|Observable<U>}
   */
  public get(url: string, params?: any): any {
    let headers = new Headers();
    headers.append('Authorization', window['basicAuthHeaderValue']);
    return this.http.get(url, {search: params, headers: headers})
      .map(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Observable<R>|Observable<U>}
   */
  public post(url: string, params?: any) {
    let headers = new Headers();
    headers.append('Authorization', window['basicAuthHeaderValue']);

    return this.http.post(url, params, {headers: headers})
      .map(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  /**
   * 处理请求成功
   * @param res
   * @returns {{data: (string|null|((node:any)=>any)
 */
  private handleSuccess(res: Response) {
    return res.json() || {};
  }

  /**
   * 处理请求错误
   * @param error
   * @returns {void|Observable<string>|Observable<T>|any}
   */
  private handleError(error:any) {
    console.log(error);
    let msg = '请求失败';
    if (error.status == 400) {
      console.log('请求参数正确');
    }
    if (error.status == 404) {
      console.error('请检查路径是否正确');
    }
    if (error.status == 500) {
      console.error('请求的服务器错误');
    }
    console.log(error);
    return Observable.throw(error);

  }

}
