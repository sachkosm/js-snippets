

(function (open) {

    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {

        this.addEventListener("readystatechange", function () {
            console.log(this.readyState); // this one I changed
        }, false);
        url = url + '?TEST'
        open.call(this, method, url, async, user, pass);
    };

})(XMLHttpRequest.prototype.open);

(function (send) {

    XMLHttpRequest.prototype.send = function (data) {

        // in this case I'm injecting an access token (eg. accessToken) in the request headers before it gets sent
        //if(accessToken) this.setRequestHeader('x-access-token', accessToken);

        send.call(this, data);
    };

})(XMLHttpRequest.prototype.send);
