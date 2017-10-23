/**
 * Created by wenbo.kuang on 2017/10/19.
 */
// 引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 引入入口文件
import { AppModule } from './app/app.module';

import { enableProdMode } from "@angular/core";

if (process.env.ENV === 'production') {
  enableProdMode();
}

// 启动应用
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);