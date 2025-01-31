"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [882],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return d;
        },
        kt: function () {
          return p;
        },
      });
      var i = n(7294);
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
      function s(e, t) {
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
            ? s(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
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
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              s = Object.keys(e);
            for (i = 0; i < s.length; i++)
              (n = s[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++)
            (n = s[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var l = i.createContext({}),
        u = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
        },
        d = function (e) {
          var t = u(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        h = i.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            s = e.originalType,
            l = e.parentName,
            d = o(e, ["components", "mdxType", "originalType", "parentName"]),
            h = u(n),
            p = a,
            m = h["".concat(l, ".").concat(p)] || h[p] || c[p] || s;
          return n
            ? i.createElement(m, r(r({ ref: t }, d), {}, { components: n }))
            : i.createElement(m, r({ ref: t }, d));
        });
      function p(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var s = n.length,
            r = new Array(s);
          r[0] = h;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : a),
            (r[1] = o);
          for (var u = 2; u < s; u++) r[u] = n[u];
          return i.createElement.apply(null, r);
        }
        return i.createElement.apply(null, n);
      }
      h.displayName = "MDXCreateElement";
    },
    9192: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return o;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return d;
          },
          default: function () {
            return h;
          },
        });
      var i = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        r = ["components"],
        o = { sidebar_position: 10 },
        l = "Understanding Vest's state",
        u = {
          unversionedId: "understanding_state",
          id: "understanding_state",
          isDocsHomePage: !1,
          title: "Understanding Vest's state",
          description:
            "Vest is designed to help perform validations on user inputs. The nature of user inputs is that they are filled one by one by the user. In order to provide good user experience, the best approach is to validate fields as the user type, or when they leave the field.",
          source: "@site/docs/understanding_state.md",
          sourceDirName: ".",
          slug: "/understanding_state",
          permalink: "/docs/understanding_state",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/understanding_state.md",
          tags: [],
          version: "current",
          sidebarPosition: 10,
          frontMatter: { sidebar_position: 10 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Upgrade guides",
            permalink: "/docs/migration_guide",
          },
          next: {
            title: "External Learning Resources",
            permalink: "/docs/external_resources",
          },
        },
        d = [
          {
            value: "What Vest&#39;s state does",
            id: "what-vests-state-does",
            children: [],
            level: 2,
          },
          {
            value: "Single Page Application - suite result retention",
            id: "single-page-application---suite-result-retention",
            children: [
              {
                value:
                  "Solution: Resetting suite state with <code>.reset();</code>",
                id: "solution-resetting-suite-state-with-reset",
                children: [],
                level: 3,
              },
              { value: "Usage:", id: "usage", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "Dynamically added fields",
            id: "dynamically-added-fields",
            children: [
              {
                value:
                  "Solution: Removing a single field from the validation result",
                id: "solution-removing-a-single-field-from-the-validation-result",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "Server-side validations",
            id: "server-side-validations",
            children: [
              {
                value: "Solution: Treat validations as stateless",
                id: "solution-treat-validations-as-stateless",
                children: [],
                level: 3,
              },
              { value: "Example", id: "example", children: [], level: 3 },
            ],
            level: 2,
          },
        ],
        c = { toc: d };
      function h(e) {
        var t = e.components,
          n = (0, a.Z)(e, r);
        return (0, s.kt)(
          "wrapper",
          (0, i.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "understanding-vests-state" },
            "Understanding Vest's state"
          ),
          (0, s.kt)(
            "p",
            null,
            "Vest is designed to help perform validations on user inputs. The nature of user inputs is that they are filled one by one by the user. In order to provide good user experience, the best approach is to validate fields as the user type, or when they leave the field."
          ),
          (0, s.kt)(
            "p",
            null,
            "The difficult part when validating upon user interaction is that we want to only validate the field that the user is currently interacting with, and not the rest of the form. This\nThis can be done with Vest's ",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_your_suite/including_and_excluding/skip_and_only",
              },
              (0, s.kt)("inlineCode", { parentName: "a" }, "only()"),
              " hook"
            ),
            ". That's where the state mechanism is becoming useful."
          ),
          (0, s.kt)(
            "p",
            null,
            "When you have skipped fields in your validation suite, vest will try to see if those skipped fields ran in the previous suite, and merge them into the currently running suite result - so the result object you get will include all the fields that your user interacted with."
          ),
          (0, s.kt)(
            "h2",
            { id: "what-vests-state-does" },
            "What Vest's state does"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("em", { parentName: "li" }, "Skipped field merge")
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "As mentioned before - whenever you skip a field, vest will look for it in your previously ran validations and add it to the current result."
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "em",
                { parentName: "li" },
                "Lagging async ",
                (0, s.kt)("inlineCode", { parentName: "em" }, "done"),
                " callback blocking"
              )
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "In case you have an async test that didn't finish from the previous suite run - and you already ran another async test for the same field - vest will block the ",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_your_suite/result_object#done",
              },
              (0, s.kt)("inlineCode", { parentName: "a" }, "done()")
            ),
            " callbacks for that field from running for the previous suite result."
          ),
          (0, s.kt)(
            "h1",
            { id: "drawbacks-when-using-stateful-validations" },
            "Drawbacks when using stateful validations"
          ),
          (0, s.kt)(
            "p",
            null,
            "When the validations are stateful, you get the benefit of not having to know which fields have already been validated, or keeping track of their previous results."
          ),
          (0, s.kt)(
            "p",
            null,
            "The drawback of this approach is that when you run the same form in multiple-unrelated contexts, the previous validation state still holds the previous result."
          ),
          (0, s.kt)("p", null, "Here are a few examples and their solutions:"),
          (0, s.kt)(
            "h2",
            { id: "single-page-application---suite-result-retention" },
            "Single Page Application - suite result retention"
          ),
          (0, s.kt)(
            "p",
            null,
            "This scenario applies to cases when your form is a part of a single-page-app with client-side routing. Let's assume your user successfully submits the form, navigates outside of the page, and then later in the same session, navigate back to the form."
          ),
          (0, s.kt)(
            "p",
            null,
            "The form will then have a successful validation state since the previous result is stored in the suite state."
          ),
          (0, s.kt)(
            "h3",
            { id: "solution-resetting-suite-state-with-reset" },
            "Solution: Resetting suite state with ",
            (0, s.kt)("inlineCode", { parentName: "h3" }, ".reset();")
          ),
          (0, s.kt)(
            "p",
            null,
            "In some cases, such as form reset, you want to discard of previous validation results. This can be done with ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "vest.reset()"),
            "."
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("inlineCode", { parentName: "p" }, ".reset"),
            " disables all pending async tests in your suite and empties the state out."
          ),
          (0, s.kt)("h3", { id: "usage" }, "Usage:"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("inlineCode", { parentName: "p" }, ".rese()"),
            " Is a property on your validation suite. Calling it will remove your suite's state."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create } from "vest";\n\nconst suite = create(() => {\n  // Your tests go here\n});\n\nsuite.reset(); // validation result is removed from Vest\'s state.\n'
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "dynamically-added-fields" },
            "Dynamically added fields"
          ),
          (0, s.kt)(
            "p",
            null,
            "When your form contains dynamically added fields, for example - when a customer can add fields to their checkout form on the fly, those items would still exist in the suite state when the user removed them from the form. This means that you may have an unsuccessful suite result, even though it should be successful."
          ),
          (0, s.kt)(
            "h3",
            {
              id: "solution-removing-a-single-field-from-the-validation-result",
            },
            "Solution: Removing a single field from the validation result"
          ),
          (0, s.kt)(
            "p",
            null,
            "Instead of resetting the whole suite, you can alternatively remove just one field. This is useful when dynamically adding and removing fields upon user interaction - and you want to delete a deleted field from the state."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test } from "vest";\n\nconst suite = create(() => {\n  // Your tests go here\n\n  test("username", "must be at least 3 chars long", () => {\n    /*...*/\n  });\n});\n\nsuite.remove("username"); // validation result is removed from Vest\'s state.\n'
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "server-side-validations" },
            "Server-side validations"
          ),
          (0, s.kt)(
            "p",
            null,
            "When running your validations on the server, you want to keep each request isolated with its own state, and not update the same validation state between requests. Doing that can cause failed validations to seem successful or vice versa due to different requests relying on the same state."
          ),
          (0, s.kt)(
            "h3",
            { id: "solution-treat-validations-as-stateless" },
            "Solution: Treat validations as stateless"
          ),
          (0, s.kt)(
            "p",
            null,
            "While when on the browser you usually want to treat validations as statefull - even though it might sometimes not be the case - on the server you almost always want to treat your validations as stateless."
          ),
          (0, s.kt)(
            "p",
            null,
            "To do that, all you need to do is wrap your suite initialization with a wrapper function. Whenever you call that function, a new suite state will be created."
          ),
          (0, s.kt)("h3", { id: "example" }, "Example"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create } from "vest";\n\nfunction suite(data) {\n  return create(() => {\n    test("username", "username is required", () => {\n      enforce(data.username).isNotEmpty();\n    });\n  })();\n  // Note that we\'re immediately invoking our suite\n  // so what we return is actually the suite result\n}\n\nconst result = suite({ username: "Mike123" });\n'
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
