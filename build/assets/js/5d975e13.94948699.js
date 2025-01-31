"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [647],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return d;
        },
      });
      var r = n(7294);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = r.createContext({}),
        l = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        u = function (e) {
          var t = l(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            u = s(e, ["components", "mdxType", "originalType", "parentName"]),
            f = l(n),
            d = o,
            m = f["".concat(c, ".").concat(d)] || f[d] || p[d] || i;
          return n
            ? r.createElement(m, a(a({ ref: t }, u), {}, { components: n }))
            : r.createElement(m, a({ ref: t }, u));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = f;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (a[1] = s);
          for (var l = 2; l < i; l++) a[l] = n[l];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      f.displayName = "MDXCreateElement";
    },
    2285: function (e, t, n) {
      n.r(t),
        n.d(t, {
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
            return f;
          },
        });
      var r = n(7462),
        o = n(3366),
        i = (n(7294), n(3905)),
        a = ["components"],
        s = { sidebar_position: 1 },
        c = "Getting Started",
        l = {
          unversionedId: "get_started",
          id: "get_started",
          isDocsHomePage: !1,
          title: "Getting Started",
          description: "Installation",
          source: "@site/docs/get_started.md",
          sourceDirName: ".",
          slug: "/get_started",
          permalink: "/docs/get_started",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/get_started.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          next: { title: "Core Concepts", permalink: "/docs/concepts" },
        },
        u = [
          { value: "Installation", id: "installation", children: [], level: 2 },
          {
            value: "Writing your first suite",
            id: "writing-your-first-suite",
            children: [],
            level: 2,
          },
        ],
        p = { toc: u };
      function f(e) {
        var t = e.components,
          n = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "getting-started" }, "Getting Started"),
          (0, i.kt)("h2", { id: "installation" }, "Installation"),
          (0, i.kt)("p", null, "To install the stable version of Vest, run:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)("code", { parentName: "pre" }, "npm i vest\n")
          ),
          (0, i.kt)(
            "p",
            null,
            "You can also embed Vest directly as a script tag in your page:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<script src="https://unpkg.com/vest@%5E4/dist/umd/vest.production.js"></script>\n'
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "writing-your-first-suite" },
            "Writing your first suite"
          ),
          (0, i.kt)(
            "p",
            null,
            "A Vest suite is very similar to a unit testing suite in Jest or Mocha, so the following might look familiar:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// suite.js\nimport { create, test, enforce } from "vest";\n\nconst suite = create((data = {}) => {\n  test("username", "Username is required", () => {\n    enforce("username").isNotBlank();\n  });\n\n  test("username", "Username must be at least 3 characters long", () => {\n    enforce("username").longerThan(2);\n  });\n});\n\nexport default suite;\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Vest is a powerful framework, and it has quite a few features. In the following sections, you'll learn Vest's core concepts and how to make use of it."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
