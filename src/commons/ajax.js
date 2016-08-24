var Ajax = function() {
    this._ajax = null;
    this._method = "GET";
    this._url = "";
    this._type = "text";
    this._data = null;

    this._interval = 120000;
    this._complete = function() {};
    this._success = function() {};
    this._error = function() {};

    // 发送请求
    this.send = function() {
        var self = this,
            ajax = this._ajax,
            url = this._url,
            data = this._data,
            args = "?";

        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var result = ajax.responseText;
                if (self._type === "json") result = JSON.parse(result);
                self._success(result);
            } else if (ajax.readyState === 4) {
                self._error(ajax.status);
            }
        };
        // 组装参数
        if (!!data)
            for (var key in data)
                args += "&" + key + "=" + encodeURIComponent(data[key]);

        if (self._method.toLowerCase() === "get") {
            args = args.replace("?&", url.indexOf("?") > -1 ? "&" : "?");
            url += args;
            args = "";
            ajax.open(this._method, url, true);
        } else {
            args = args.replace("?&", "");
            ajax.open(this._method, url, true);
            ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        ajax.send(args);

        // 超时操作
        clearInterval(self.send.controller);
        self.send.controller = setInterval(function(){
          if(ajax.status !== 200){ // 没有数据返回
            ajax.abort();
          }
          clearInterval(self.send.controller);
        },self._interval);

    };
    // 设置成功回调函数
    this.success = function(callbakck) {
        this._success = callbakck;
        return this;
    };
    // 设置失败的回调函数
    this.error = function(callbakck) {
        this._error = callbakck;
        return this;
    };
    // 设置请求成功的回调函数
    this.complete = function(callbakck) {
        this._complete = callbakck;
        return this;
    };
    // 设置请求成功后返回的数据格式
    this.json = function() {
        this._type = "json";
        return this;
    };
    // 设置发送的数据
    this.data = function(data) {
        this._data = data;
        return this;
    }

    // 延时操作
    this.timeout = function(time,timeout){
      this._interval = time;
      return this;
    }
}

Ajax.build = function(url, method) {
    var ajax = new Ajax();
    ajax._url = url;
    ajax._ajax = new XMLHttpRequest();
    ajax._method = method;
    return ajax;
};

Ajax.get = function(url) {
    return Ajax.build(url, "GET");
};

Ajax.post = function(url) {
    var ajax = Ajax.build(url, "POST");
    return ajax
};

export default Ajax;
