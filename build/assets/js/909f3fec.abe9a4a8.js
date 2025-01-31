"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [584],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return m;
        },
      });
      var r = n(7294);
      function a(e, t, n) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
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
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var l = r.createContext({}),
        c = function (e) {
          var t = r.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        u = function (e) {
          var t = c(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            u = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = c(n),
            m = a,
            g = d["".concat(l, ".").concat(m)] || d[m] || p[m] || i;
          return n
            ? r.createElement(g, s(s({ ref: t }, u), {}, { components: n }))
            : r.createElement(g, s({ ref: t }, u));
        });
      function m(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = n.length,
            s = new Array(i);
          s[0] = d;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : a),
            (s[1] = o);
          for (var c = 2; c < i; c++) s[c] = n[c];
          return r.createElement.apply(null, s);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    2096: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return o;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return u;
          },
          default: function () {
            return d;
          },
        });
      var r = n(7462),
        a = n(3366),
        i = (n(7294), n(3905)),
        s = ["components"],
        o = { sidebar_position: 1 },
        l = "The Test Function",
        c = {
          unversionedId: "writing_tests/using_the_test_function",
          id: "writing_tests/using_the_test_function",
          isDocsHomePage: !1,
          title: "The Test Function",
          description:
            "The test function represents a single case in your validation suite. It accepts the following arguments:",
          source: "@site/docs/writing_tests/using_the_test_function.md",
          sourceDirName: "writing_tests",
          slug: "/writing_tests/using_the_test_function",
          permalink: "/docs/writing_tests/using_the_test_function",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/using_the_test_function.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "optional fields",
            permalink: "/docs/writing_your_suite/optional_fields",
          },
          next: {
            title: "Writing Asynchronous Tests",
            permalink: "/docs/writing_tests/async_tests",
          },
        },
        u = [
          {
            value: "How to fail a test?",
            id: "how-to-fail-a-test",
            children: [
              {
                value: "Throwing inside your test body (using enforce)",
                id: "throwing-inside-your-test-body-using-enforce",
                children: [],
                level: 3,
              },
              {
                value: "Explicitly returning false",
                id: "explicitly-returning-false",
                children: [],
                level: 3,
              },
              {
                value: "Rejecting a Promise",
                id: "rejecting-a-promise",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
        ],
        p = { toc: u };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "the-test-function" }, "The Test Function"),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "test"),
            " function represents a single case in your validation suite. It accepts the following arguments:"
          ),
          (0, i.kt)(
            "table",
            null,
            (0, i.kt)(
              "thead",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "thead" },
                (0, i.kt)("th", { parentName: "tr", align: null }, "Name"),
                (0, i.kt)("th", { parentName: "tr", align: null }, "Type"),
                (0, i.kt)("th", { parentName: "tr", align: null }, "Optional"),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Description"
                )
              )
            ),
            (0, i.kt)(
              "tbody",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "name")
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "String")
                ),
                (0, i.kt)("td", { parentName: "tr", align: null }, "No"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "The name of the value or field that is validated."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "message")
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "String")
                ),
                (0, i.kt)("td", { parentName: "tr", align: null }, "Yes"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "An error message to display to the user in case of a failure."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "callback")
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "Function")
                ),
                (0, i.kt)("td", { parentName: "tr", align: null }, "No"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "The actual validation logic for the given test."
                )
              )
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "A test can either be synchronous or asynchronous, and it can either have a ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/writing_tests/warn_only_tests" },
              "severity"
            ),
            " of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "error"),
            " or of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "warn"),
            "."
          ),
          (0, i.kt)(
            "div",
            { className: "admonition admonition-tip alert alert--success" },
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, i.kt)(
                "h5",
                { parentName: "div" },
                (0, i.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, i.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, i.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
                    })
                  )
                ),
                "tip"
              )
            ),
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, i.kt)(
                "p",
                { parentName: "div" },
                "The test function is very similar to a unit test's ",
                (0, i.kt)("inlineCode", { parentName: "p" }, "it"),
                " or ",
                (0, i.kt)("inlineCode", { parentName: "p" }, "test"),
                " function, with some additions."
              )
            )
          ),
          (0, i.kt)("h2", { id: "how-to-fail-a-test" }, "How to fail a test?"),
          (0, i.kt)(
            "h3",
            { id: "throwing-inside-your-test-body-using-enforce" },
            "Throwing inside your test body (using enforce)"
          ),
          (0, i.kt)(
            "p",
            null,
            "Just like in most unit testing frameworks, a validation fails whenever the test body throws an exception. ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/enforce/enforce" },
              (0, i.kt)("inlineCode", { parentName: "a" }, "Enforce")
            ),
            " throws an error on failed validations.\nWhen thrown with a string"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// const username = \'Gina.Vandervort\';\n// const password = \'Q3O\';\n\ntest("username", "Should be at least 3 characters long", () => {\n  enforce(username).longerThanOrEquals(3);\n}); // this test passes\n\ntest("password", "Should be at least 6 characters long", () => {\n  enforce(password).longerThanOrEquals(6); // an error is thrown here\n}); // this test fails\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce.extend({\n  isChecked: (value) => {\n    return {\n      pass: !!value.checked,\n      message: () => "value must be checked",\n    };\n  },\n});\n\n/*...*/\n\n/*\n  tost = { checked: false }\n*/\n\ntest("tos", () => {\n  enforce(tos).isChecked(); // will fail with the message: "value must be checked"\n});\n'
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "explicitly-returning-false" },
            "Explicitly returning false"
          ),
          (0, i.kt)(
            "p",
            null,
            "To make it easy to migrate your existing validation logic into Vest, it also supports validations explicitly returning ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "false"),
            " (and not any other falsy value) to represent failures."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// const username = \'Gina.Vandervort\';\n// const password = \'Q3O\';\n\ntest("username", "Should be at least 3 characters long", () => {\n  return username.length >= 3; // = true\n}); // this test passes\n\ntest("password", "Should be at least 6 characters long", () => {\n  return password.length >= 6; // = false\n}); // this test fails\n'
            )
          ),
          (0, i.kt)("h3", { id: "rejecting-a-promise" }, "Rejecting a Promise"),
          (0, i.kt)("p", null, "Read more in the next section on async tests.")
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
