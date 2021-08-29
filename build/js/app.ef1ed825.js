;(function (e) {
  function t(t) {
    for (
      var r, o, i = t[0], u = t[1], s = t[2], l = 0, d = [];
      l < i.length;
      l++
    )
      (o = i[l]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && d.push(c[o][0]),
        (c[o] = 0)
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r])
    f && f(t)
    while (d.length) d.shift()()
    return a.push.apply(a, s || []), n()
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o]
        0 !== c[i] && (r = !1)
      }
      r && (a.splice(t--, 1), (e = u((u.s = n[0]))))
    }
    return e
  }
  var r = {},
    o = { app: 0 },
    c = { app: 0 },
    a = []
  function i(e) {
    return (
      u.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      { 'chunk-2d0de903': '75fbbbcf', 'chunk-3c08098a': 'a6c89116' }[e] +
      '.js'
    )
  }
  function u(t) {
    if (r[t]) return r[t].exports
    var n = (r[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports
  }
  ;(u.e = function (e) {
    var t = [],
      n = { 'chunk-3c08098a': 1 }
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function (t, n) {
            for (
              var r =
                  'css/' +
                  ({}[e] || e) +
                  '.' +
                  {
                    'chunk-2d0de903': '31d6cfe0',
                    'chunk-3c08098a': '6c2c84a7'
                  }[e] +
                  '.css',
                c = u.p + r,
                a = document.getElementsByTagName('link'),
                i = 0;
              i < a.length;
              i++
            ) {
              var s = a[i],
                l = s.getAttribute('data-href') || s.getAttribute('href')
              if ('stylesheet' === s.rel && (l === r || l === c)) return t()
            }
            var d = document.getElementsByTagName('style')
            for (i = 0; i < d.length; i++) {
              ;(s = d[i]), (l = s.getAttribute('data-href'))
              if (l === r || l === c) return t()
            }
            var f = document.createElement('link')
            ;(f.rel = 'stylesheet'),
              (f.type = 'text/css'),
              (f.onload = t),
              (f.onerror = function (t) {
                var r = (t && t.target && t.target.src) || c,
                  a = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + r + ')'
                  )
                ;(a.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (a.request = r),
                  delete o[e],
                  f.parentNode.removeChild(f),
                  n(a)
              }),
              (f.href = c)
            var p = document.getElementsByTagName('head')[0]
            p.appendChild(f)
          }).then(function () {
            o[e] = 0
          }))
        )
    var r = c[e]
    if (0 !== r)
      if (r) t.push(r[2])
      else {
        var a = new Promise(function (t, n) {
          r = c[e] = [t, n]
        })
        t.push((r[2] = a))
        var s,
          l = document.createElement('script')
        ;(l.charset = 'utf-8'),
          (l.timeout = 120),
          u.nc && l.setAttribute('nonce', u.nc),
          (l.src = i(e))
        var d = new Error()
        s = function (t) {
          ;(l.onerror = l.onload = null), clearTimeout(f)
          var n = c[e]
          if (0 !== n) {
            if (n) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                o = t && t.target && t.target.src
              ;(d.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                (d.name = 'ChunkLoadError'),
                (d.type = r),
                (d.request = o),
                n[1](d)
            }
            c[e] = void 0
          }
        }
        var f = setTimeout(function () {
          s({ type: 'timeout', target: l })
        }, 12e4)
        ;(l.onerror = l.onload = s), document.head.appendChild(l)
      }
    return Promise.all(t)
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (u.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (u.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function (t) {
              return e[t]
            }.bind(null, r)
          )
      return n
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return u.d(t, 'a', t), t
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (u.p = '/'),
    (u.oe = function (e) {
      throw (console.error(e), e)
    })
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var d = 0; d < s.length; d++) t(s[d])
  var f = l
  a.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('cd49')
  },
  '05ba': function (e, t, n) {},
  '522b': function (e, t, n) {},
  8526: function (e, t, n) {
    'use strict'
    n('05ba')
  },
  cd49: function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var r = n('7a23'),
      o = { class: 'app' }
    function c(e, t, n, c, a, i) {
      var u = Object(r['resolveComponent'])('router-view')
      return (
        Object(r['openBlock'])(),
        Object(r['createBlock'])('div', o, [Object(r['createVNode'])(u)])
      )
    }
    var a = Object(r['defineComponent'])({ name: 'App' })
    n('8526')
    a.render = c
    var i = a,
      u = (n('d3b7'), n('3ca3'), n('ddb0'), n('6c02')),
      s = [
        { path: '/', redirect: '/login' },
        {
          path: '/login',
          component: function () {
            return n.e('chunk-3c08098a').then(n.bind(null, 'dc3f'))
          }
        },
        {
          path: '/main',
          component: function () {
            return n.e('chunk-2d0de903').then(n.bind(null, '85d4'))
          }
        }
      ],
      l = Object(u['a'])({ routes: s, history: Object(u['b'])() }),
      d = l,
      f = (n('b0c0'), n('5502')),
      p = n('1da1'),
      h = (n('96cf'), n('5530')),
      v = (n('5415'), n('d559')),
      b = n.n(v),
      g = n('d4ec'),
      m = n('bee2'),
      O = n('bc3a'),
      y = n.n(O),
      j = !0,
      w = (function () {
        function e(t) {
          var n,
            r,
            o,
            c,
            a,
            i,
            u = this
          Object(g['a'])(this, e),
            (this.instance = y.a.create(t)),
            (this.interceptors = t.interceptors),
            (this.showLoading =
              null !== (n = t.showLoading) && void 0 !== n ? n : j),
            (this.defaultShowLoading =
              null !== (r = t.showLoading) && void 0 !== r ? r : j),
            this.instance.interceptors.request.use(
              null === (o = this.interceptors) || void 0 === o
                ? void 0
                : o.requestInterceptor,
              null === (c = this.interceptors) || void 0 === c
                ? void 0
                : c.requestInterceptorCatch
            ),
            this.instance.interceptors.response.use(
              null === (a = this.interceptors) || void 0 === a
                ? void 0
                : a.responseInterceptors,
              null === (i = this.interceptors) || void 0 === i
                ? void 0
                : i.responseInterceptorsCatch
            ),
            this.instance.interceptors.request.use(
              function (e) {
                return (
                  console.log('全局請求攔截'),
                  console.log('是否加入loading', u.showLoading),
                  u.showLoading &&
                    (u.loading = b.a.service({ lock: !0, text: '加載中' })),
                  e
                )
              },
              function (e) {
                return e
              }
            ),
            this.instance.interceptors.response.use(
              function (e) {
                return (
                  console.log('全局響應攔截'),
                  setTimeout(function () {
                    var e
                    null === (e = u.loading) || void 0 === e || e.close()
                  }, 1e3),
                  e.data
                )
              },
              function (e) {
                var t
                return null === (t = u.loading) || void 0 === t || t.close(), e
              }
            )
        }
        return (
          Object(m['a'])(e, [
            {
              key: 'request',
              value: function (e) {
                var t = this
                return new Promise(function (n, r) {
                  var o
                  null !== (o = e.interceptors) &&
                    void 0 !== o &&
                    o.requestInterceptor &&
                    ((e = e.interceptors.requestInterceptor(e)),
                    !1 === e.showLoading && (t.showLoading = e.showLoading)),
                    t.instance
                      .request(e)
                      .then(function (r) {
                        var o
                        null !== (o = e.interceptors) &&
                          void 0 !== o &&
                          o.responseInterceptors &&
                          (r = e.interceptors.responseInterceptors(r)),
                          (t.showLoading = t.defaultShowLoading),
                          n(r)
                      })
                      .catch(function (e) {
                        return (t.showLoading = t.defaultShowLoading), r(e), e
                      })
                })
              }
            },
            {
              key: 'get',
              value: function (e) {
                return this.request(
                  Object(h['a'])(Object(h['a'])({}, e), {}, { method: 'GET' })
                )
              }
            },
            {
              key: 'post',
              value: function (e) {
                return this.request(
                  Object(h['a'])(Object(h['a'])({}, e), {}, { method: 'POST' })
                )
              }
            },
            {
              key: 'delete',
              value: function (e) {
                return this.request(
                  Object(h['a'])(
                    Object(h['a'])({}, e),
                    {},
                    { method: 'DELETE' }
                  )
                )
              }
            },
            {
              key: 'patch',
              value: function (e) {
                return this.request(
                  Object(h['a'])(Object(h['a'])({}, e), {}, { method: 'PATCH' })
                )
              }
            }
          ]),
          e
        )
      })(),
      L = w,
      k = Object({ NODE_ENV: 'production', BASE_URL: '/' }).VUE_APP_API,
      E = 3e3
    console.log(Object({ NODE_ENV: 'production', BASE_URL: '/' }))
    var q,
      A = new L({
        baseURL: k,
        timeout: E,
        interceptors: {
          requestInterceptor: function (e) {
            return e
          },
          requestInterceptorCatch: function (e) {
            return e
          },
          responseInterceptors: function (e) {
            return e
          },
          responseInterceptorsCatch: function (e) {
            return e
          }
        }
      }),
      P = A
    function S(e) {
      return console.log(e), P.post({ url: q.AccountLogin, data: e })
    }
    ;(function (e) {
      e['AccountLogin'] = '/login'
    })(q || (q = {}))
    var I = {
        namespaced: !0,
        state: function () {
          return { token: '', userInfo: {} }
        },
        mutations: {},
        actions: {
          accountLoginAction: function (e, t) {
            return Object(p['a'])(
              regeneratorRuntime.mark(function n() {
                var r
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return e.commit, (n.next = 3), S(t)
                      case 3:
                        ;(r = n.sent), console.log(r)
                      case 5:
                      case 'end':
                        return n.stop()
                    }
                }, n)
              })
            )()
          }
        }
      },
      _ = I,
      C = Object(f['a'])({
        state: function () {
          return { name: 'Louis' }
        },
        mutations: {
          getStateName: function (e) {
            console.log(e.name)
          }
        },
        modules: { login: _ }
      }),
      T = C,
      N = n('b85c'),
      x = (n('f560'), n('c597')),
      B = n.n(x),
      D = (n('dc92'), n('43f9')),
      R = n.n(D),
      U = (n('0bd6'), n('05c2')),
      M = n.n(U),
      V = (n('8ac7'), n('e661')),
      H = n.n(V),
      J = (n('34c0'), n('aff9')),
      F = n.n(J),
      G = (n('43ea'), n('424b')),
      K = n.n(G),
      z = (n('398c'), n('b27e')),
      Q = n.n(z),
      W = (n('4af4'), n('44fb')),
      X = n.n(W),
      Y = (n('f3fc'), [X.a, Q.a, K.a, F.a, H.a, M.a, R.a, B.a]),
      Z = function (e) {
        var t,
          n = Object(N['a'])(Y)
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var r = t.value
            e.component(r.name, r)
          }
        } catch (o) {
          n.e(o)
        } finally {
          n.f()
        }
      }
    function $(e) {
      Z(e)
    }
    n('f5df1'), n('522b')
    var ee = Object(r['createApp'])(i)
    ee.use(d), ee.use(T), ee.use($), ee.mount('#app')
  }
})
//# sourceMappingURL=app.ef1ed825.js.map
