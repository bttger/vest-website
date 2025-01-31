"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [615],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return f;
        },
      });
      var r = t(7294);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function o(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function (n) {
                i(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function s(e, n) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var u = r.createContext({}),
        l = function (e) {
          var n = r.useContext(u),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
        },
        c = function (e) {
          var n = l(e.components);
          return r.createElement(u.Provider, { value: n }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        d = r.forwardRef(function (e, n) {
          var t = e.components,
            i = e.mdxType,
            o = e.originalType,
            u = e.parentName,
            c = s(e, ["components", "mdxType", "originalType", "parentName"]),
            d = l(t),
            f = i,
            g = d["".concat(u, ".").concat(f)] || d[f] || p[f] || o;
          return t
            ? r.createElement(g, a(a({ ref: n }, c), {}, { components: t }))
            : r.createElement(g, a({ ref: n }, c));
        });
      function f(e, n) {
        var t = arguments,
          i = n && n.mdxType;
        if ("string" == typeof e || i) {
          var o = t.length,
            a = new Array(o);
          a[0] = d;
          var s = {};
          for (var u in n) hasOwnProperty.call(n, u) && (s[u] = n[u]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : i),
            (a[1] = s);
          for (var l = 2; l < o; l++) a[l] = t[l];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, t);
      }
      d.displayName = "MDXCreateElement";
    },
    8296: function (e, n, t) {
      t.r(n),
        t.d(n, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return u;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return d;
          },
        });
      var r = t(7462),
        i = t(3366),
        o = (t(7294), t(3905)),
        a = ["components"],
        s = { sidebar_position: 2 },
        u = "skipWhen: Conditional Exclusion",
        l = {
          unversionedId: "writing_your_suite/including_and_excluding/skipWhen",
          id: "writing_your_suite/including_and_excluding/skipWhen",
          isDocsHomePage: !1,
          title: "skipWhen: Conditional Exclusion",
          description:
            "In some cases we might need to skip a test or a group based on a given condition, for example - based on the intermediate state of the currently running suite. To allow this, you can use skipWhen. skipWhen takes a boolean expression and a callback with tests.",
          source:
            "@site/docs/writing_your_suite/including_and_excluding/skipWhen.md",
          sourceDirName: "writing_your_suite/including_and_excluding",
          slug: "/writing_your_suite/including_and_excluding/skipWhen",
          permalink:
            "/docs/writing_your_suite/including_and_excluding/skipWhen",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/including_and_excluding/skipWhen.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Excluding and including tests",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skip_and_only",
          },
          next: {
            title: "Including and excluding groups",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skip_and_only_group",
          },
        },
        c = [],
        p = { toc: c };
      function d(e) {
        var n = e.components,
          t = (0, i.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "skipwhen-conditional-exclusion" },
            "skipWhen: Conditional Exclusion"
          ),
          (0, o.kt)(
            "p",
            null,
            "In some cases we might need to skip a test or a group based on a given condition, for example - based on the intermediate state of the currently running suite. To allow this, you can use ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skipWhen"),
            ". ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skipWhen"),
            " takes a boolean expression and a callback with tests.\nIf the expression is true, the tests within the callback will be skipped. Otherwise, the tests will run as normal."
          ),
          (0, o.kt)(
            "p",
            null,
            "When passed a function, the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skipWhen"),
            " will be passed the current validation result as an argument, so it can be used to skip tests based on the current validation result."
          ),
          (0, o.kt)(
            "p",
            null,
            "In the following example, we're skipping the server side verification of the username if the username is invalid to begin with:"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, enforce, skipWhen } from "vest";\n\nexport default create((data = {}) => {\n  test("username", "Username is required", () => {\n    enforce(data.username).isNotEmpty();\n  });\n\n  skipWhen(\n    (res) => res.hasErrors("username"),\n    () => {\n      test("username", "Username already exists", () => {\n        // this is an example for a server call\n        return doesUserExist(data.username);\n      });\n    }\n  );\n});\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
