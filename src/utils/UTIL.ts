export module UTIL {
  function toQueryPair(key:any, value:any) {
    if (typeof value == 'undefined'){
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }
  export function toQueryString(obj: any) {
    let ret:any = [];
    for(let key in obj){
      key = encodeURIComponent(key);
      var values = obj[key];
      if(values && values.constructor == Array){//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      }else{ //字符串
        ret.push(toQueryPair(key, values));
      }
    }
    return ret.join('&');
  }

  export function getUrlParam(name: string) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r !== null)
      return decodeURI(r[2]);
    return null; //返回参数值
  }

  //判断输入是否为十一位电话号码
  export function phoneNumber(str: string) {
    let reg = /^([0-9]|[-])+$/g;
    if (str.length !== 11) {
      if (str.length === 12) {
        if (str.charAt(0) === '0') {
          return true;
        }
      }
      return false;
    } else {
      if (reg.exec(str) === null) {
        return false;
      } else {
        return true;
      }
    }
  }

  //邮件格式
  export function isEmailAddress(obj: string) {
    let pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return pattern.test(obj);
  }


  //获得UUID
  export function guUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  //工具类，判断当前字符串是否为空
  export function isEmpty(v: any) {
    switch (typeof v) {
      case 'undefined':
        return true;
      case 'string':
        if (v.trim().length === 0 || v.trim() === "")
          return true;
        break;
      case 'boolean':
        if (!v)
          return true;
        break;
      case 'number':
        if (0 === v)
          return true;
        break;
      case 'object':
        // undefined or null or {}
        for (let t in v)
          return !1;
        return !0;
    }
    return false;
  }

  //复制对象
  export function clone(myObj: any): any {
    if (myObj == null) return myObj;
    if (myObj.constructor === Array) {
      let myNewArray: any = [];
      for (let j in myObj)
        myNewArray.push(this.clone(myObj[j]));
      return myNewArray;
    } else if (myObj.constructor === Object) {
      let myNewObj: any = {};
      for (let i in myObj)
        myNewObj[i] = this.clone(myObj[i]);
      return myNewObj;
    } else {
      return myObj
    }
  }
}