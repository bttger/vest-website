"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [845],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return f;
        },
      });
      var n = r(7294);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var c = n.createContext({}),
        l = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        u = function (e) {
          var t = l(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            u = s(e, ["components", "mdxType", "originalType", "parentName"]),
            m = l(r),
            f = o,
            d = m["".concat(c, ".").concat(f)] || m[f] || p[f] || a;
          return r
            ? n.createElement(d, i(i({ ref: t }, u), {}, { components: r }))
            : n.createElement(d, i({ ref: t }, u));
        });
      function f(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = r.length,
            i = new Array(a);
          i[0] = m;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (i[1] = s);
          for (var l = 2; l < a; l++) i[l] = r[l];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = "MDXCreateElement";
    },
    629: function (e, t, r) {
      r.r(t),
        r.d(t, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return c;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return u;
          },
          default: function () {
            return m;
          },
        });
      var n = r(7462),
        o = r(3366),
        a = (r(7294), r(3905)),
        i = ["components"],
        s = { sidebar_position: 11 },
        c = "External Learning Resources",
        l = {
          unversionedId: "external_resources",
          id: "external_resources",
          isDocsHomePage: !1,
          title: "External Learning Resources",
          description:
            "Vest's community is still growing, but there are already some excellent usage examples for different frameworks.",
          source: "@site/docs/external_resources.md",
          sourceDirName: ".",
          slug: "/external_resources",
          permalink: "/docs/external_resources",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/external_resources.md",
          tags: [],
          version: "current",
          sidebarPosition: 11,
          frontMatter: { sidebar_position: 11 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Understanding Vest's state",
            permalink: "/docs/understanding_state",
          },
        },
        u = [],
        p = { toc: u };
      function m(e) {
        var t = e.components,
          r = (0, o.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "external-learning-resources" },
            "External Learning Resources"
          ),
          (0, a.kt)(
            "p",
            null,
            "Vest's community is still growing, but there are already some excellent usage examples for different frameworks."
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://codechips.gumroad.com/l/svelte-forms",
                  },
                  "Svelte Forms: The Missing Manual"
                ),
                " - An excellent book by ",
                (0, a.kt)(
                  "a",
                  { parentName: "p", href: "https://twitter.com/codechips" },
                  "Ilia Mikhailov"
                ),
                ". The book contains several chapters of integration examples with Vest."
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://portal.gitnation.org/contents/vue-form-validations-with-vest",
                  },
                  "Vue Form Validations With Vest"
                ),
                " - A Vue.JS London presentation on how to use Vest with Vue."
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://antonbavykin1991.github.io/ember-vest/",
                  },
                  "Ember-Vest"
                ),
                " - An Ember library that integrates Vest with Ember.js (",
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://github.com/antonbavykin1991",
                  },
                  "antonbavykin1991"
                ),
                ")"
              )
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
