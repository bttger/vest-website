"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [154],
  {
    3905: function (e, n, r) {
      r.d(n, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return m;
        },
      });
      var t = r(7294);
      function o(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function s(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(r), !0).forEach(function (n) {
                o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                );
              });
        }
        return e;
      }
      function i(e, n) {
        if (null == e) return {};
        var r,
          t,
          o = (function (e, n) {
            if (null == e) return {};
            var r,
              t,
              o = {},
              s = Object.keys(e);
            for (t = 0; t < s.length; t++)
              (r = s[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (t = 0; t < s.length; t++)
            (r = s[t]),
              n.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var c = t.createContext({}),
        l = function (e) {
          var n = t.useContext(c),
            r = n;
          return e && (r = "function" == typeof e ? e(n) : a(a({}, n), e)), r;
        },
        u = function (e) {
          var n = l(e.components);
          return t.createElement(c.Provider, { value: n }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return t.createElement(t.Fragment, {}, n);
          },
        },
        f = t.forwardRef(function (e, n) {
          var r = e.components,
            o = e.mdxType,
            s = e.originalType,
            c = e.parentName,
            u = i(e, ["components", "mdxType", "originalType", "parentName"]),
            f = l(r),
            m = o,
            h = f["".concat(c, ".").concat(m)] || f[m] || p[m] || s;
          return r
            ? t.createElement(h, a(a({ ref: n }, u), {}, { components: r }))
            : t.createElement(h, a({ ref: n }, u));
        });
      function m(e, n) {
        var r = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var s = r.length,
            a = new Array(s);
          a[0] = f;
          var i = {};
          for (var c in n) hasOwnProperty.call(n, c) && (i[c] = n[c]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : o),
            (a[1] = i);
          for (var l = 2; l < s; l++) a[l] = r[l];
          return t.createElement.apply(null, a);
        }
        return t.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    4273: function (e, n, r) {
      r.r(n),
        r.d(n, {
          frontMatter: function () {
            return i;
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
      var t = r(7462),
        o = r(3366),
        s = (r(7294), r(3905)),
        a = ["components"],
        i = { sidebar_position: 6 },
        c = "Composing enforce rules",
        l = {
          unversionedId: "enforce/composing_enforce_rules",
          id: "enforce/composing_enforce_rules",
          isDocsHomePage: !1,
          title: "Composing enforce rules",
          description:
            "When you have rules that you often use together or different groups of rules that describe the same behavior, you can compose them into a single rule for easier reuse.",
          source: "@site/docs/enforce/composing_enforce_rules.md",
          sourceDirName: "enforce",
          slug: "/enforce/composing_enforce_rules",
          permalink: "/docs/enforce/composing_enforce_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/composing_enforce_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 6,
          frontMatter: { sidebar_position: 6 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Consuming external rules",
            permalink: "/docs/enforce/consuming_external_rules",
          },
          next: {
            title: "classnames",
            permalink: "/docs/utilities/classnames",
          },
        },
        u = [{ value: "Some notes", id: "some-notes", children: [], level: 2 }],
        p = { toc: u };
      function f(e) {
        var n = e.components,
          r = (0, o.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, t.Z)({}, p, r, { components: n, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "composing-enforce-rules" },
            "Composing enforce rules"
          ),
          (0, s.kt)(
            "p",
            null,
            "When you have rules that you often use together or different groups of rules that describe the same behavior, you can compose them into a single rule for easier reuse."
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("inlineCode", { parentName: "p" }, "compose"),
            ' allows us to create an "AND" relationship wrapper around multiple rules which acts like the regular enforce function.'
          ),
          (0, s.kt)(
            "p",
            null,
            "A simple use-case example:\nLet's say we have multiple entities in our app that share some common characteristics, but some that are unique. We can compose the different validation rules for the common characteristics into a single rule that we can reuse across multiple entities."
          ),
          (0, s.kt)("p", null, "Let's assume the following:"),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Some of the entities in our app have an ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "id"),
              " property."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "The person entity has a ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "name"),
              " property that includes a first, middle and last name."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "The user entity has both an ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "id"),
              " and a ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "name"),
              " property. It also has a ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "username"),
              " property."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Users can also have a ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "friends"),
              " property, which is an array of other users."
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "Expressing this with basic enforce rules is easy, but can be cumbersome, and also not very reusable."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(userObj).shape({\n  id: enforce.number(),\n  name: enforce.shape({\n    first: enforce.string(),\n    middle: enforce.optional(enforce.string()),\n    last: enforce.string(),\n  }),\n  username: enforce.string(),\n  friends: enforce.optional(\n    enforce.arrayOf(\n      enforce.shape({\n        id: enforce.number(),\n        username: enforce.string(),\n        name: enforce.shape({\n          first: enforce.string(),\n          middle: enforce.optional(enforce.string()),\n          last: enforce.string(),\n        }),\n      })\n    )\n  ),\n});\n"
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "Instead, we can compose these different characteristics into composites that can later on be further reused."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import compose from "vest/enforce/compose";\n\nconst Entity = compose(\n  enforce.loose({\n    id: enforce.number(),\n  })\n);\n\nconst Person = compose(\n  enforce.loose({\n    name: enforce.shape({\n      first: enforce.string(),\n      middle: enforce.optional(enforce.string()),\n      last: enforce.string(),\n    }),\n  })\n);\n\nconst User = compose(\n  Entity,\n  Person,\n  enforce.loose({\n    username: enforce.string(),\n    friends: enforce.optional(enforce.arrayOf(User)),\n  })\n);\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "This way, each composite can be used individually, but can also be composed together to create a more complex rule that can be easily reused."
          ),
          (0, s.kt)(
            "p",
            null,
            "Using these composites is as easy as either calling the from within other compound rules, or calling them directly within a Vest test just like the regular enforce function:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "User(userObj); // Throws an error when failing\n"
            )
          ),
          (0, s.kt)("h2", { id: "some-notes" }, "Some notes"),
          (0, s.kt)(
            "p",
            null,
            "When composing rules, be mindful when you are composing rules that have a ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "shape"),
            " rule inside of them. If these shape extend one another, you should probably use ",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/enforce/builtin-enforce-plugins/schema_rules#enforceloose---loose-shape-matching",
              },
              "loose"
            ),
            " so they allow for extended properties."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
