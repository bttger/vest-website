"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [564],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return d;
        },
        kt: function () {
          return m;
        },
      });
      var i = n(7294);
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
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
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
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var l = i.createContext({}),
        p = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
        },
        d = function (e) {
          var t = p(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        c = i.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            d = s(e, ["components", "mdxType", "originalType", "parentName"]),
            c = p(n),
            m = o,
            f = c["".concat(l, ".").concat(m)] || c[m] || u[m] || a;
          return n
            ? i.createElement(f, r(r({ ref: t }, d), {}, { components: n }))
            : i.createElement(f, r({ ref: t }, d));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            r = new Array(a);
          r[0] = c;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (r[1] = s);
          for (var p = 2; p < a; p++) r[p] = n[p];
          return i.createElement.apply(null, r);
        }
        return i.createElement.apply(null, n);
      }
      c.displayName = "MDXCreateElement";
    },
    9201: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return p;
          },
          toc: function () {
            return d;
          },
          default: function () {
            return c;
          },
        });
      var i = n(7462),
        o = n(3366),
        a = (n(7294), n(3905)),
        r = ["components"],
        s = {},
        l = "optional fields",
        p = {
          unversionedId: "writing_your_suite/optional_fields",
          id: "writing_your_suite/optional_fields",
          isDocsHomePage: !1,
          title: "optional fields",
          description:
            'By default, all the tests inside Vest are required in order for the suite to be considered as "valid". Sometimes your app\'s logic may allow tests not to be filled out, and you want them not to be accounted for in the suites validity.',
          source: "@site/docs/writing_your_suite/optional_fields.md",
          sourceDirName: "writing_your_suite",
          slug: "/writing_your_suite/optional_fields",
          permalink: "/docs/writing_your_suite/optional_fields",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/optional_fields.md",
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Including and excluding groups",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skip_and_only_group",
          },
          next: {
            title: "The Test Function",
            permalink: "/docs/writing_tests/using_the_test_function",
          },
        },
        d = [
          {
            value: "Basic Usage - allowing tests not to run",
            id: "basic-usage---allowing-tests-not-to-run",
            children: [],
            level: 2,
          },
          {
            value: "Advanced Usage - Supplying custom omission function",
            id: "advanced-usage---supplying-custom-omission-function",
            children: [
              { value: "Examples", id: "examples", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value:
              "Difference between <code>optional</code> and <code>warn</code>",
            id: "difference-between-optional-and-warn",
            children: [],
            level: 2,
          },
        ],
        u = { toc: d };
      function c(e) {
        var t = e.components,
          n = (0, o.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "optional-fields" }, "optional fields"),
          (0, a.kt)(
            "p",
            null,
            'By default, all the tests inside Vest are required in order for the suite to be considered as "valid". Sometimes your app\'s logic may allow tests not to be filled out, and you want them not to be accounted for in the suites validity.'
          ),
          (0, a.kt)(
            "p",
            null,
            "For cases like this, Vest provides the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "optional"),
            ' function which allows you to mark a field, or multiple fields as optional. Vest\'s definition of "optional" is that the field did not have any test runs in the lifetime of the suite.'
          ),
          (0, a.kt)(
            "p",
            null,
            "If your app requires custom logic, please see the advanced section below."
          ),
          (0, a.kt)(
            "h2",
            { id: "basic-usage---allowing-tests-not-to-run" },
            "Basic Usage - allowing tests not to run"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("inlineCode", { parentName: "p" }, "optional"),
            " can take a field name as its argument or an array of field names."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, optional, only, test, enforce } from "vest";\n\nconst suite = create((data, currentField) => {\n  only(currentField); // only validate this specified field\n\n  optional(["pet_color", "pet_age"]);\n  /** Equivalent to:\n   * optional(\'pet_color\')\n   * optional(\'pet_age\')\n   **/\n\n  test("pet_name", "Pet Name is required", () => {\n    enforce(data.pet_name).isNotEmpty();\n  });\n\n  test("pet_color", "If provided, pet color must be a string", () => {\n    enforce(data.color).isString();\n  });\n\n  test("pet_age", "If provided, pet age must be numeric", () => {\n    enforce(data.age).isNumeric();\n  });\n});\n\nsuite({ name: "Indie" }, /* -> only validate pet_name */ "pet_name").isValid();\n// \u2705 Since pet_color and pet_age are optional, the suite may still be valid\n\nsuite({ age: "Five" }, /* -> only validate pet_age */ "pet_age").isValid();\n// \ud83d\udea8 When erroring, optional fields still make the suite invalid\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "advanced-usage---supplying-custom-omission-function" },
            "Advanced Usage - Supplying custom omission function"
          ),
          (0, a.kt)(
            "p",
            null,
            "Since every app is different, your app's logic may require some other definition of optional. An example would be that the user typed inside the field and then removed its content, or - if a field may only be empty when a different field is supplied - Vest cannot be aware of this logic, and you will have to tell Vest to conditionally omit the results for this field by providing ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "optional"),
            " with a custom omission function."
          ),
          (0, a.kt)(
            "p",
            null,
            "To provide a custom optional function, instead of passing a list of fields, you need to provide an object with predicate functions. These functions will be run when your suite finishes its ",
            (0, a.kt)("strong", { parentName: "p" }, "synchronous"),
            " run, and when they evaluate to true - will omit ",
            (0, a.kt)("em", { parentName: "p" }, "any"),
            " failures your field might have from the suite."
          ),
          (0, a.kt)(
            "div",
            { className: "admonition admonition-danger alert alert--danger" },
            (0, a.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, a.kt)(
                "h5",
                { parentName: "div" },
                (0, a.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, a.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, a.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z",
                    })
                  )
                ),
                "IMPORTANT - ASYNC TESTS ARE UNSUPPORTED WITH CUSTOM OPTIONAL FUNCTIONS"
              )
            ),
            (0, a.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, a.kt)(
                "p",
                { parentName: "div" },
                "You should avoid using the custom omission function along with async tests. This is unsupported and may cause unexpected behavior. The reason for this limitation is due to the fact that the omission conditionals are calculated at the end of the suite, while the async tests may keep running. Allowing it will require re-calculation for each async test that finishes, which could be expensive."
              )
            )
          ),
          (0, a.kt)("h3", { id: "examples" }, "Examples"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "An example allowing a field to be empty even if its ",
              (0, a.kt)("inlineCode", { parentName: "strong" }, "touched"),
              " or ",
              (0, a.kt)("inlineCode", { parentName: "strong" }, "dirty")
            )
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = create((data) => {\n  optional({\n    pet_name: () => !data.pet_name,\n  });\n\n  test("pet_name", "Pet Name may be left empty", () => {\n    enforce(data.pet_name).isNotEmpty();\n  });\n});\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "An example allowing a field to be empty if a different field is filled"
            )
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = create((data) => {\n  optional({\n    pet_name: () => !suite.get().hasErrors("owner_name"),\n    owner_name: () => !suite.get().hasErrors("pet_name"),\n  });\n\n  test(\n    "pet_name",\n    "Pet Name may be left empty only if owner name is supplied",\n    () => {\n      enforce(data.pet_name).isNotEmpty();\n    }\n  );\n\n  test(\n    "owner_name",\n    "Owner Name may be left empty only if pet name is supplied",\n    () => {\n      enforce(data.owner_name).isNotEmpty();\n    }\n  );\n});\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "difference-between-optional-and-warn" },
            "Difference between ",
            (0, a.kt)("inlineCode", { parentName: "h2" }, "optional"),
            " and ",
            (0, a.kt)("inlineCode", { parentName: "h2" }, "warn")
          ),
          (0, a.kt)(
            "p",
            null,
            'While on its surface, optional might seem similar to warn, they are quite different.\nOptional, like "only" and "skip" is set on the field level, which means that when set - all tests of an optional field are considered optional. Warn, on the other hand - is set on the test level, so the only tests affected are the tests that have the "warn" option applied within them.'
          ),
          (0, a.kt)(
            "p",
            null,
            "Another distinction is that warning tests cannot set the suite to be invalid."
          ),
          (0, a.kt)(
            "p",
            null,
            "There may be rare occasions in which you have an optional and a warning only field, in which case, you may combine the two."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
