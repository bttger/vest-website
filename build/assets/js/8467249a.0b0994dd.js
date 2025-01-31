"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [688],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return g;
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
      function u(e) {
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
      function a(e, n) {
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
      var s = r.createContext({}),
        l = function (e) {
          var n = r.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : u(u({}, n), e)), t;
        },
        p = function (e) {
          var n = l(e.components);
          return r.createElement(s.Provider, { value: n }, e.children);
        },
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        c = r.forwardRef(function (e, n) {
          var t = e.components,
            i = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = a(e, ["components", "mdxType", "originalType", "parentName"]),
            c = l(t),
            g = i,
            y = c["".concat(s, ".").concat(g)] || c[g] || d[g] || o;
          return t
            ? r.createElement(y, u(u({ ref: n }, p), {}, { components: t }))
            : r.createElement(y, u({ ref: n }, p));
        });
      function g(e, n) {
        var t = arguments,
          i = n && n.mdxType;
        if ("string" == typeof e || i) {
          var o = t.length,
            u = new Array(o);
          u[0] = c;
          var a = {};
          for (var s in n) hasOwnProperty.call(n, s) && (a[s] = n[s]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : i),
            (u[1] = a);
          for (var l = 2; l < o; l++) u[l] = t[l];
          return r.createElement.apply(null, u);
        }
        return r.createElement.apply(null, t);
      }
      c.displayName = "MDXCreateElement";
    },
    2828: function (e, n, t) {
      t.r(n),
        t.d(n, {
          frontMatter: function () {
            return a;
          },
          contentTitle: function () {
            return s;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return p;
          },
          default: function () {
            return c;
          },
        });
      var r = t(7462),
        i = t(3366),
        o = (t(7294), t(3905)),
        u = ["components"],
        a = { sidebar_position: 3 },
        s = "Including and excluding groups",
        l = {
          unversionedId:
            "writing_your_suite/including_and_excluding/skip_and_only_group",
          id: "writing_your_suite/including_and_excluding/skip_and_only_group",
          isDocsHomePage: !1,
          title: "Including and excluding groups",
          description:
            "Similar to the way you use skip and only to include and exclude tests, you can use skip.group and only.group to exclude and include whole groups.",
          source:
            "@site/docs/writing_your_suite/including_and_excluding/skip_and_only_group.md",
          sourceDirName: "writing_your_suite/including_and_excluding",
          slug: "/writing_your_suite/including_and_excluding/skip_and_only_group",
          permalink:
            "/docs/writing_your_suite/including_and_excluding/skip_and_only_group",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/including_and_excluding/skip_and_only_group.md",
          tags: [],
          version: "current",
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "skipWhen: Conditional Exclusion",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skipWhen",
          },
          next: {
            title: "optional fields",
            permalink: "/docs/writing_your_suite/optional_fields",
          },
        },
        p = [
          {
            value: "Things to note when using these functions",
            id: "things-to-note-when-using-these-functions",
            children: [],
            level: 2,
          },
        ],
        d = { toc: p };
      function c(e) {
        var n = e.components,
          t = (0, i.Z)(e, u);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "including-and-excluding-groups" },
            "Including and excluding groups"
          ),
          (0, o.kt)(
            "p",
            null,
            "Similar to the way you use ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skip"),
            " and ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "only"),
            " to include and exclude tests, you can use ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skip.group"),
            " and ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "only.group"),
            " to exclude and include whole groups."
          ),
          (0, o.kt)(
            "p",
            null,
            "These two functions are very powerful and give you control of whole portions of your suite at once."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, group, enforce, skip } from "vest";\n\ncreate((data) => {\n  skip.group(data.userExists ? "signUp" : "signIn");\n\n  test("userName", "Can\'t be empty", () => {\n    enforce(data.username).isNotEmpty();\n  });\n  test("password", "Can\'t be empty", () => {\n    enforce(data.password).isNotEmpty();\n  });\n\n  group("signIn", () => {\n    test(\n      "userName",\n      "User not found. Please check if you typed it correctly.",\n      findUserName(data.username)\n    );\n  });\n\n  group("signUp", () => {\n    test("email", "Email already registered", isEmailRegistered(data.email));\n\n    test("age", "You must be at least 18 years old to join", () => {\n      enforce(data.age).largerThanOrEquals(18);\n    });\n  });\n});\n'
            )
          ),
          (0, o.kt)(
            "h2",
            { id: "things-to-note-when-using-these-functions" },
            "Things to note when using these functions"
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "only.group()"),
            ":\nWhen using ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "only.group"),
            ", other groups won't be tested - but top-level tests that aren't nested in any groups will. The reasoning is that the top-level space is a shared and will always be tested. If you want only your group to run, nest everything else under groups as well."
          ),
          (0, o.kt)(
            "p",
            null,
            "If you combine ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "only.group"),
            " with ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skip"),
            " if you skip a field inside a group that is included, that field will be excluded during this run regardless of its group membership."
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "skip.group()")
          ),
          (0, o.kt)(
            "p",
            null,
            "If you combine ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "skip.group"),
            " with ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "only"),
            " your included field declared within the skipped group will be ignored."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
