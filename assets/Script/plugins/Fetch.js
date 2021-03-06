!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e(); }(this, function () {
    "use strict";
    function t(t) { return "function" == typeof t || "object" == typeof t && null !== t; }
    function e(t) { return "function" == typeof t; }
    function n(t) { I = t; }
    function r(t) { J = t; }
    function o() { return function () { return process.nextTick(a); }; }
    function i() { return "undefined" != typeof H ? function () { H(a); } : c(); }
    function s() { var t = 0, e = new V(a), n = document.createTextNode(""); return e.observe(n, { characterData: !0 }), function () { n.data = t = ++t % 2; }; }
    function u() { var t = new MessageChannel; return t.port1.onmessage = a, function () { return t.port2.postMessage(0); }; }
    function c() { var t = setTimeout; return function () { return t(a, 1); }; }
    function a() { for (var t = 0; t < G; t += 2) {
        var e = $[t], n = $[t + 1];
        e(n), $[t] = void 0, $[t + 1] = void 0;
    } G = 0; }
    function f() { try {
        var t = require, e = t("vertx");
        return H = e.runOnLoop || e.runOnContext, i();
    }
    catch (n) {
        return c();
    } }
    function l(t, e) { var n = arguments, r = this, o = new this.constructor(p); void 0 === o[et] && k(o); var i = r._state; return i ? !function () { var t = n[i - 1]; J(function () { return x(i, o, t, r._result); }); }() : E(r, o, t, e), o; }
    function h(t) { var e = this; if (t && "object" == typeof t && t.constructor === e)
        return t; var n = new e(p); return g(n, t), n; }
    function p() { }
    function v() { return new TypeError("You cannot resolve a promise with itself"); }
    function d() { return new TypeError("A promises callback cannot return that same promise."); }
    function _(t) { try {
        return t.then;
    }
    catch (e) {
        return it.error = e, it;
    } }
    function y(t, e, n, r) { try {
        t.call(e, n, r);
    }
    catch (o) {
        return o;
    } }
    function m(t, e, n) { J(function (t) { var r = !1, o = y(n, e, function (n) { r || (r = !0, e !== n ? g(t, n) : S(t, n)); }, function (e) { r || (r = !0, j(t, e)); }, "Settle: " + (t._label || " unknown promise")); !r && o && (r = !0, j(t, o)); }, t); }
    function b(t, e) { e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function (e) { return g(t, e); }, function (e) { return j(t, e); }); }
    function w(t, n, r) { n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? j(t, it.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n); }
    function g(e, n) { e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n); }
    function A(t) { t._onerror && t._onerror(t._result), P(t); }
    function S(t, e) { t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(P, t)); }
    function j(t, e) { t._state === nt && (t._state = ot, t._result = e, J(A, t)); }
    function E(t, e, n, r) { var o = t._subscribers, i = o.length; t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(P, t); }
    function P(t) { var e = t._subscribers, n = t._state; if (0 !== e.length) {
        for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
            r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
        t._subscribers.length = 0;
    } }
    function T() { this.error = null; }
    function M(t, e) { try {
        return t(e);
    }
    catch (n) {
        return st.error = n, st;
    } }
    function x(t, n, r, o) { var i = e(r), s = void 0, u = void 0, c = void 0, a = void 0; if (i) {
        if (s = M(r, o), s === st ? (a = !0, u = s.error, s = null) : c = !0, n === s)
            return void j(n, d());
    }
    else
        s = o, c = !0; n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s)); }
    function C(t, e) { try {
        e(function (e) { g(t, e); }, function (e) { j(t, e); });
    }
    catch (n) {
        j(t, n);
    } }
    function O() { return ut++; }
    function k(t) { t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = []; }
    function Y(t, e) { this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q()); }
    function q() { return new Error("Array Methods must be provided an Array"); }
    function F(t) { return new Y(this, t).promise; }
    function D(t) { var e = this; return new e(B(t) ? function (n, r) { for (var o = t.length, i = 0; i < o; i++)
        e.resolve(t[i]).then(n, r); } : function (t, e) { return e(new TypeError("You must pass an array to race.")); }); }
    function K(t) { var e = this, n = new e(p); return j(n, t), n; }
    function L() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor"); }
    function N() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."); }
    function U(t) { this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N()); }
    function W() { var t = void 0; if ("undefined" != typeof global)
        t = global;
    else if ("undefined" != typeof self)
        t = self;
    else
        try {
            t = Function("return this")();
        }
        catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        } var n = t.Promise; if (n) {
        var r = null;
        try {
            r = Object.prototype.toString.call(n.resolve());
        }
        catch (e) { }
        if ("[object Promise]" === r && !n.cast)
            return;
    } t.Promise = U; }
    var z = void 0;
    z = Array.isArray ? Array.isArray : function (t) { return "[object Array]" === Object.prototype.toString.call(t); };
    var B = z, G = 0, H = void 0, I = void 0, J = function (t, e) { $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt()); }, Q = "undefined" != typeof window ? window : void 0, R = Q || {}, V = R.MutationObserver || R.WebKitMutationObserver, X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, $ = new Array(1e3), tt = void 0;
    tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
    var et = Math.random().toString(36).substring(16), nt = void 0, rt = 1, ot = 2, it = new T, st = new T, ut = 0;
    return Y.prototype._enumerate = function () { for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++)
        this._eachEntry(e[n], n); }, Y.prototype._eachEntry = function (t, e) { var n = this._instanceConstructor, r = n.resolve; if (r === h) {
        var o = _(t);
        if (o === l && t._state !== nt)
            this._settledAt(t._state, e, t._result);
        else if ("function" != typeof o)
            this._remaining--, this._result[e] = t;
        else if (n === U) {
            var i = new n(p);
            w(i, t, o), this._willSettleAt(i, e);
        }
        else
            this._willSettleAt(new n(function (e) { return e(t); }), e);
    }
    else
        this._willSettleAt(r(t), e); }, Y.prototype._settledAt = function (t, e, n) { var r = this.promise; r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result); }, Y.prototype._willSettleAt = function (t, e) { var n = this; E(t, void 0, function (t) { return n._settledAt(rt, e, t); }, function (t) { return n._settledAt(ot, e, t); }); }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = { constructor: U, then: l, "catch": function (t) { return this.then(null, t); } }, U.polyfill = W, U.Promise = U, U;
}), ES6Promise.polyfill();
(function (self) {
    'use strict';
    if (self.fetch) {
        return;
    }
    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = name.toString();
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
    }
    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = value.toString();
        }
        return value;
    }
    function Headers(headers) {
        this.map = {};
        var self = this;
        if (headers instanceof Headers) {
            headers.forEach(function (name, values) {
                values.forEach(function (value) {
                    self.append(name, value);
                });
            });
        }
        else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                self.append(name, headers[name]);
            });
        }
    }
    Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var list = this.map[name];
        if (!list) {
            list = [];
            this.map[name] = list;
        }
        list.push(value);
    };
    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function (name) {
        var values = this.map[normalizeName(name)];
        return values ? values[0] : null;
    };
    Headers.prototype.getAll = function (name) {
        return this.map[normalizeName(name)] || [];
    };
    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = [normalizeValue(value)];
    };
    // Instead of iterable for now.
    Headers.prototype.forEach = function (callback) {
        var self = this;
        Object.getOwnPropertyNames(this.map).forEach(function (name) {
            callback(name, self.map[name]);
        });
    };
    function consumed(body) {
        if (body.bodyUsed) {
            return fetch.Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
        return new fetch.Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
        });
    }
    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
        var reader = new FileReader();
        reader.readAsText(blob);
        return fileReaderReady(reader);
    }
    var support = {
        blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
                new Blob();
                return true;
            }
            catch (e) {
                return false;
            }
        })(),
        formData: 'FormData' in self
    };
    function Body() {
        this.bodyUsed = false;
        this._initBody = function (body) {
            this._bodyInit = body;
            if (typeof body === 'string') {
                this._bodyText = body;
            }
            else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
            }
            else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
            }
            else if (!body) {
                this._bodyText = '';
            }
            else {
                throw new Error('unsupported BodyInit type');
            }
        };
        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return fetch.Promise.resolve(this._bodyBlob);
                }
                else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob');
                }
                else {
                    return fetch.Promise.resolve(new Blob([this._bodyText]));
                }
            };
            this.arrayBuffer = function () {
                return this.blob().then(readBlobAsArrayBuffer);
            };
            this.text = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob);
                }
                else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as text');
                }
                else {
                    return fetch.Promise.resolve(this._bodyText);
                }
            };
        }
        else {
            this.text = function () {
                var rejected = consumed(this);
                return rejected ? rejected : fetch.Promise.resolve(this._bodyText);
            };
        }
        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode);
            };
        }
        this.json = function () {
            return this.text().then(function (text) {
                return JSON.parse(text);
            });
        };
        return this;
    }
    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return (methods.indexOf(upcased) > -1) ? upcased : method;
    }
    function Request(url, options) {
        options = options || {};
        this.url = url;
        this.credentials = options.credentials || 'omit';
        this.headers = new Headers(options.headers);
        this.method = normalizeMethod(options.method || 'GET');
        this.mode = options.mode || null;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(options.body);
    }
    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    }
    function headers(xhr) {
        var head = new Headers();
        var pairs = xhr.getAllResponseHeaders().trim().split('\n');
        pairs.forEach(function (header) {
            var split = header.trim().split(':');
            var key = split.shift().trim();
            var value = split.join(':').trim();
            head.append(key, value);
        });
        return head;
    }
    var noXhrPatch = typeof window !== 'undefined' && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
    function getXhr() {
        // from backbone.js 1.1.2
        // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
        if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
            this.usingActiveXhr = true;
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        return new XMLHttpRequest();
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
        if (!options) {
            options = {};
        }
        this._initBody(bodyInit);
        this.type = 'default';
        this.url = null;
        this.status = options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText;
        this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
        this.url = options.url || '';
    }
    Body.call(Response.prototype);
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.fetch = function (input, init) {
        // TODO: Request constructor should accept input, init
        var request;
        if (Request.prototype.isPrototypeOf(input) && !init) {
            request = input;
        }
        else {
            request = new Request(input, init);
        }
        return new fetch.Promise(function (resolve, reject) {
            var xhr = getXhr();
            if (request.credentials === 'cors') {
                xhr.withCredentials = true;
            }
            function responseURL() {
                if ('responseURL' in xhr) {
                    return xhr.responseURL;
                }
                // Avoid security warnings on getResponseHeader when not allowed by CORS
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL');
                }
                return;
            }
            function onload() {
                if (xhr.readyState !== 4) {
                    return;
                }
                var status = (xhr.status === 1223) ? 204 : xhr.status;
                if (status < 100 || status > 599) {
                    reject(new TypeError('Network request failed'));
                    return;
                }
                var options = {
                    status: status,
                    statusText: xhr.statusText,
                    headers: headers(xhr),
                    url: responseURL()
                };
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
            }
            xhr.onreadystatechange = onload;
            if (!self.usingActiveXhr) {
                xhr.onload = onload;
                xhr.onerror = function () {
                    reject(new TypeError('Network request failed'));
                };
            }
            xhr.open(request.method, request.url, true);
            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob';
            }
            request.headers.forEach(function (name, values) {
                values.forEach(function (value) {
                    xhr.setRequestHeader(name, value);
                });
            });
            xhr.send();
        });
    };
    fetch.Promise = self.Promise; // you could change it to your favorite alternative
    self.fetch.polyfill = true;
})(window);
