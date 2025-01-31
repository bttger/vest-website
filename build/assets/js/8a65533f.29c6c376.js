"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [460],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return f;
        },
        kt: function () {
          return d;
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
      function i(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var s = n.createContext({}),
        u = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : c(c({}, t), e)), r;
        },
        f = function (e) {
          var t = u(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        l = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        p = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            f = a(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(r),
            d = o,
            m = p["".concat(s, ".").concat(d)] || p[d] || l[d] || i;
          return r
            ? n.createElement(m, c(c({ ref: t }, f), {}, { components: r }))
            : n.createElement(m, c({ ref: t }, f));
        });
      function d(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = r.length,
            c = new Array(i);
          c[0] = p;
          var a = {};
          for (var s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : o),
            (c[1] = a);
          for (var u = 2; u < i; u++) c[u] = r[u];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, r);
      }
      p.displayName = "MDXCreateElement";
    },
    1510: function (e, t, r) {
      r.r(t),
        r.d(t, {
          frontMatter: function () {
            return a;
          },
          contentTitle: function () {
            return s;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return f;
          },
          default: function () {
            return p;
          },
        });
      var n = r(7462),
        o = r(3366),
        i = (r(7294), r(3905)),
        c = ["components"],
        a = { sidebar_position: 1 },
        s = "Enforce",
        u = {
          unversionedId: "enforce/enforce",
          id: "enforce/enforce",
          isDocsHomePage: !1,
          title: "Enforce",
          description:
            "Enforce is Vest's assertion library. It is used to validate values within a Vest test.",
          source: "@site/docs/enforce/enforce.md",
          sourceDirName: "enforce",
          slug: "/enforce/enforce",
          permalink: "/docs/enforce/enforce",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/enforce.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Grouping tests",
            permalink:
              "/docs/writing_tests/advanced_test_features/grouping_tests",
          },
          next: {
            title: "List of Enforce rules",
            permalink: "/docs/enforce/enforce_rules",
          },
        },
        f = [],
        l = { toc: f };
      function p(e) {
        var t = e.components,
          r = (0, o.Z)(e, c);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "enforce" }, "Enforce"),
          (0, i.kt)(
            "p",
            null,
            "Enforce is Vest's assertion library. It is used to validate values within a Vest test."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { enforce, test } from "vest";\n\ntest("username", "Must be at least three characters long", () => {\n  enforce(username).longerThan(2);\n});\n'
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
