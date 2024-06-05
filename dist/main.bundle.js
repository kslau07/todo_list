"use strict";
(self.webpackChunktodo_list = self.webpackChunktodo_list || []).push([
  [792],
  {
    422: (e, t, n) => {
      n.d(t, { A: () => s });
      var o = n(354),
        r = n.n(o),
        a = n(314),
        c = n.n(a)()(r());
      c.push([
        e.id,
        "/* CSS reset and global properties go here */\n:root {\n  /* Fonts */\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-xxl: 1.5rem;\n  --text-xxxl: 2rem;\n  --text-xxxxl: 2.5rem;\n\n  /* Spacing */\n  --space-xxxs: 0.25rem;\n  --space-xxs: 0.375rem;\n  --space-xs: 0.5rem;\n  --space-sm: 0.75rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-xxl: 2.5rem;\n  --space-xxxl: 3rem;\n  --space-xxxxl: 4rem;\n\n  /* Colors */\n  --color-eggshell: #fafafa;\n}\n\n.border-red {\n  border: 3px solid #f00;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n}\n\nh1,\n.text-xxxxl {\n  font-size: var(--text-xxxxl);\n}\n\nh2,\n.text-xxxl {\n  font-size: var(--text-xxxl);\n}\n\nh3,\n.text-xxl {\n  font-size: var(--text-xxl);\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/global.css"],
          names: [],
          mappings:
            "AAAA,4CAA4C;AAC5C;EACE,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;;EAEpB,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;;EAEnB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;AACX;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;;EAEE,0BAA0B;AAC5B",
          sourcesContent: [
            "/* CSS reset and global properties go here */\n:root {\n  /* Fonts */\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-xxl: 1.5rem;\n  --text-xxxl: 2rem;\n  --text-xxxxl: 2.5rem;\n\n  /* Spacing */\n  --space-xxxs: 0.25rem;\n  --space-xxs: 0.375rem;\n  --space-xs: 0.5rem;\n  --space-sm: 0.75rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-xxl: 2.5rem;\n  --space-xxxl: 3rem;\n  --space-xxxxl: 4rem;\n\n  /* Colors */\n  --color-eggshell: #fafafa;\n}\n\n.border-red {\n  border: 3px solid #f00;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n}\n\nh1,\n.text-xxxxl {\n  font-size: var(--text-xxxxl);\n}\n\nh2,\n.text-xxxl {\n  font-size: var(--text-xxxl);\n}\n\nh3,\n.text-xxl {\n  font-size: var(--text-xxl);\n}\n",
          ],
          sourceRoot: "",
        },
      ]);
      const s = c;
    },
    208: (e, t, n) => {
      n.d(t, { A: () => s });
      var o = n(354),
        r = n.n(o),
        a = n(314),
        c = n.n(a)()(r());
      c.push([
        e.id,
        '.backdrop {\n  pointer-events: none;\n  position: fixed;\n  inset: 0; /*Needed???*/\n  opacity: 0;\n}\n.modal {\n  background-color: var(--color-eggshell);\n  display: grid;\n  gap: 1em;\n\n  width: fit-content;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  pointer-events: none;\n  opacity: 0;\n  padding: 2em;\n  border: 1px solid gray;\n\n  transition:\n    transform 175ms ease-out,\n    opacity 200ms ease;\n}\n\n.modal > * {\n  /* border: 2px solid lightgray; */\n}\n\n.modal.show {\n  opacity: 1;\n  pointer-events: all;\n  transform: translate(-50%, -50%);\n}\n.backdrop.show {\n  opacity: 0.3;\n}\n\n.modal__create-project-container {\n  display: none;\n  /* height: 0; */\n}\n\noption[data-action="create-project"] {\n  font-weight: 900;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/style.css"],
          names: [],
          mappings:
            "AAAA;EACE,oBAAoB;EACpB,eAAe;EACf,QAAQ,EAAE,YAAY;EACtB,UAAU;AACZ;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,QAAQ;;EAER,kBAAkB;;EAElB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,8BAA8B;EAC9B,oBAAoB;EACpB,UAAU;EACV,YAAY;EACZ,sBAAsB;;EAEtB;;sBAEoB;AACtB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gCAAgC;AAClC;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB",
          sourcesContent: [
            '.backdrop {\n  pointer-events: none;\n  position: fixed;\n  inset: 0; /*Needed???*/\n  opacity: 0;\n}\n.modal {\n  background-color: var(--color-eggshell);\n  display: grid;\n  gap: 1em;\n\n  width: fit-content;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  pointer-events: none;\n  opacity: 0;\n  padding: 2em;\n  border: 1px solid gray;\n\n  transition:\n    transform 175ms ease-out,\n    opacity 200ms ease;\n}\n\n.modal > * {\n  /* border: 2px solid lightgray; */\n}\n\n.modal.show {\n  opacity: 1;\n  pointer-events: all;\n  transform: translate(-50%, -50%);\n}\n.backdrop.show {\n  opacity: 0.3;\n}\n\n.modal__create-project-container {\n  display: none;\n  /* height: 0; */\n}\n\noption[data-action="create-project"] {\n  font-weight: 900;\n}\n',
          ],
          sourceRoot: "",
        },
      ]);
      const s = c;
    },
    314: (e) => {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = "",
                o = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                o &&
                  (n += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {",
                  )),
                (n += e(t)),
                o && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, o, r, a) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var c = {};
            if (o)
              for (var s = 0; s < this.length; s++) {
                var d = this[s][0];
                null != d && (c[d] = !0);
              }
            for (var i = 0; i < e.length; i++) {
              var l = [].concat(e[i]);
              (o && c[l[0]]) ||
                (void 0 !== a &&
                  (void 0 === l[5] ||
                    (l[1] = "@layer"
                      .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                      .concat(l[1], "}")),
                  (l[5] = a)),
                n &&
                  (l[2]
                    ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                      (l[2] = n))
                    : (l[2] = n)),
                r &&
                  (l[4]
                    ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = r))
                    : (l[4] = "".concat(r))),
                t.push(l));
            }
          }),
          t
        );
      };
    },
    354: (e) => {
      e.exports = function (e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            r =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                o,
              ),
            a = "/*# ".concat(r, " */");
          return [t].concat([a]).join("\n");
        }
        return [t].join("\n");
      };
    },
    72: (e) => {
      var t = [];
      function n(e) {
        for (var n = -1, o = 0; o < t.length; o++)
          if (t[o].identifier === e) {
            n = o;
            break;
          }
        return n;
      }
      function o(e, o) {
        for (var a = {}, c = [], s = 0; s < e.length; s++) {
          var d = e[s],
            i = o.base ? d[0] + o.base : d[0],
            l = a[i] || 0,
            u = "".concat(i, " ").concat(l);
          a[i] = l + 1;
          var A = n(u),
            p = {
              css: d[1],
              media: d[2],
              sourceMap: d[3],
              supports: d[4],
              layer: d[5],
            };
          if (-1 !== A) t[A].references++, t[A].updater(p);
          else {
            var m = r(p, o);
            (o.byIndex = s),
              t.splice(s, 0, { identifier: u, updater: m, references: 1 });
          }
          c.push(u);
        }
        return c;
      }
      function r(e, t) {
        var n = t.domAPI(t);
        return (
          n.update(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          }
        );
      }
      e.exports = function (e, r) {
        var a = o((e = e || []), (r = r || {}));
        return function (e) {
          e = e || [];
          for (var c = 0; c < a.length; c++) {
            var s = n(a[c]);
            t[s].references--;
          }
          for (var d = o(e, r), i = 0; i < a.length; i++) {
            var l = n(a[i]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1));
          }
          a = d;
        };
      };
    },
    659: (e) => {
      var t = {};
      e.exports = function (e, n) {
        var o = (function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        })(e);
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        o.appendChild(n);
      };
    },
    540: (e) => {
      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
      };
    },
    56: (e, t, n) => {
      e.exports = function (e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t);
      };
    },
    825: (e) => {
      e.exports = function (e) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var t = e.insertStyleElement(e);
        return {
          update: function (n) {
            !(function (e, t, n) {
              var o = "";
              n.supports && (o += "@supports (".concat(n.supports, ") {")),
                n.media && (o += "@media ".concat(n.media, " {"));
              var r = void 0 !== n.layer;
              r &&
                (o += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {",
                )),
                (o += n.css),
                r && (o += "}"),
                n.media && (o += "}"),
                n.supports && (o += "}");
              var a = n.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (o +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */",
                  )),
                t.styleTagTransform(o, e, t.options);
            })(t, e, n);
          },
          remove: function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          },
        };
      };
    },
    113: (e) => {
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e));
        }
      };
    },
    977: (e, t, n) => {
      n.d(t, { d: () => v, E: () => g });
      var o = n(72),
        r = n.n(o),
        a = n(825),
        c = n.n(a),
        s = n(659),
        d = n.n(s),
        i = n(56),
        l = n.n(i),
        u = n(540),
        A = n.n(u),
        p = n(113),
        m = n.n(p),
        x = n(422),
        f = {};
      (f.styleTagTransform = m()),
        (f.setAttributes = l()),
        (f.insert = d().bind(null, "head")),
        (f.domAPI = c()),
        (f.insertStyleElement = A()),
        r()(x.A, f),
        x.A && x.A.locals && x.A.locals;
      var E = n(208),
        y = {};
      (y.styleTagTransform = m()),
        (y.setAttributes = l()),
        (y.insert = d().bind(null, "head")),
        (y.domAPI = c()),
        (y.insertStyleElement = A()),
        r()(E.A, y),
        E.A && E.A.locals && E.A.locals;
      var h = n(143),
        C = n(269),
        B = n(880);
      const v = [],
        g = function () {
          (function () {
            const e = document.querySelector(".projects");
            (e.innerHTML = ""),
              v.forEach((t) => {
                const n = document.createElement("li");
                (n.textContent = t.name),
                  e.appendChild(n),
                  (function (e, t) {
                    e.todos.forEach((e) => {
                      const n = e.get("title"),
                        o = document.createElement("div");
                      (o.dataset.projectId = e.get("projectId")),
                        (o.dataset.todoId = e.get("id")),
                        (o.textContent = n),
                        o.addEventListener("click", C.q),
                        t.appendChild(o);
                    });
                  })(t, n);
              });
          })(),
            (0, C.P)();
        };
      (0, h.uY)("localStorage") || alert("Warning: Unable to save locally."),
        (0, h.RT)(v),
        0 === v.length && ((0, B.gA)("default"), g());
    },
    269: (e, t, n) => {
      n.d(t, { P: () => u, q: () => d });
      var o = n(977),
        r = n(143),
        a = n(880);
      const c = document.querySelector(".button-open-modal"),
        s = function () {
          (document.querySelector(".modal__title").textContent = "Add Todo"),
            (document.querySelector(".modal__title-input").value = ""),
            (document.querySelector(".modal__description-input").value = ""),
            (document.querySelector(".modal__date-input").value = ""),
            (document.querySelector(".modal__create-project-input").value = ""),
            (document.querySelector(".modal__priority-select").selectedIndex =
              1);
          const e = document.querySelector(".modal__hidden-input");
          (e.dataset.action = "create"),
            (e.dataset.projectId = ""),
            (e.dataset.todoId = ""),
            (document.querySelector(".modal__create-project-input").required =
              !1);
          const t = document.querySelector(".modal__projects-select"),
            n = o.d.findIndex((e) => e.id > 0);
          (t.selectedIndex = n),
            (document.querySelector(
              ".modal__create-project-container",
            ).style.display = "none"),
            (t.disabled = !1);
        },
        d = function () {
          const e = document.querySelector(".modal"),
            t = document.querySelector(".backdrop");
          e.classList.add("show"),
            t.classList.add("show"),
            this.dataset.projectId &&
              p(this.dataset.projectId, this.dataset.todoId);
        };
      c.addEventListener("click", d);
      const i = document.querySelector(".button-close-modal"),
        l = function () {
          const e = document.querySelector(".modal"),
            t = document.querySelector(".backdrop");
          e.classList.remove("show"),
            t.classList.remove("show"),
            setTimeout(s, 300);
        };
      i.addEventListener("click", l);
      const u = function () {
          const e = document.querySelector(".modal__projects-select");
          (e.innerHTML = ""),
            o.d.forEach((t) => {
              const n = document.createElement("option");
              (n.textContent = t.name),
                (n.dataset.action = "find-project"),
                (n.dataset.projectId = t.id),
                e.appendChild(n);
            });
          const t = document.createElement("option");
          (t.dataset.action = "create-project"),
            (t.textContent = "Create new..."),
            e.appendChild(t);
        },
        A = document.querySelector(".modal__projects-select");
      A.addEventListener("click", () => {
        const e = (0, a.MN)(A),
          t = document.querySelector(".modal__create-project-container"),
          n = document.querySelector(".modal__create-project-input");
        "create-project" === e.dataset.action
          ? ((t.style.display = "initial"), (n.required = !0))
          : ((t.style.display = "none"), (n.required = !1));
      }),
        document
          .querySelector(".button-save-todo")
          .addEventListener("click", function () {
            const e = document.querySelector(".modal__projects-select"),
              t = (0, a.MN)(e),
              n = document.querySelector(".modal__title-input").value,
              c = document.querySelector(".modal__description-input").value,
              s = document.querySelector(".modal__date-input").value,
              d = document.querySelector(".modal__priority-select"),
              i = (0, a.MN)(d),
              u = document.querySelector(".modal__hidden-input").dataset.action,
              A = document.querySelector(".modal__hidden-input").dataset
                .projectId,
              p = document.querySelector(".modal__hidden-input").dataset.todoId,
              m = document.querySelector(".modal__create-project-input");
            if (
              "" == !n &&
              (function (e) {
                const t = e.required && "" !== e.value,
                  n = !1 === e.required;
                return !(!t && !n);
              })(m)
            ) {
              const e = { action: u, projectId: A, todoId: p },
                d = {
                  title: n,
                  description: c,
                  projectId: ("create-project" === t.dataset.action
                    ? (0, a.gA)(m.value)
                    : (0, a.t1)("id", t.dataset.projectId)
                  ).id,
                  dueDate: s,
                  priority: i.value,
                };
              (0, a.XD)(e, d), l(), (0, r.gC)(o.d);
            }
          });
      const p = function (e, t) {
        (0, a.t1)("id", e);
        const n = (0, a.oq)("id", t, e);
        (document.querySelector(".modal__title").textContent = "Update Todo"),
          (document.querySelector(".modal__title-input").value =
            n.get("title")),
          (document.querySelector(".modal__description-input").value =
            n.get("description"));
        const r = document.querySelector(".modal__projects-select"),
          c = o.d.findIndex((t) => t.id === Number(e));
        (r.selectedIndex = c), (r.disabled = !0);
        const s = document.querySelector(".modal__priority-select"),
          d = n.get("priority");
        (s.selectedIndex = "high" === d ? 0 : "medium" === d ? 1 : 2),
          (document.querySelector(".modal__date-input").value =
            n.get("dueDate"));
        const i = document.querySelector(".modal__hidden-input");
        (i.dataset.action = "update"),
          (i.dataset.projectId = (0, a.t1)("id", e).id),
          (i.dataset.todoId = n.get("id"));
      };
    },
    143: (e, t, n) => {
      n.d(t, { RT: () => d, gC: () => s, uY: () => r });
      var o = n(977);
      const r = (e) =>
          !!(function (e) {
            let t;
            try {
              t = window[e];
              const n = "__storage_test__";
              return t.setItem(n, n), t.removeItem(n), !0;
            } catch (e) {
              return (
                e instanceof DOMException &&
                (22 === e.code ||
                  1014 === e.code ||
                  "QuotaExceededError" === e.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
                t &&
                0 !== t.length
              );
            }
          })(e),
        a = function (e, t) {
          return t instanceof Map
            ? { dataType: "Map", value: Array.from(t.entries()) }
            : t;
        };
      function c(e, t) {
        return "object" == typeof t && null !== t && "Map" === t.dataType
          ? new Map(t.value)
          : t;
      }
      const s = function (e) {
          r("localStorage") &&
            (localStorage.setItem("projects", JSON.stringify(e, a)),
            (0, o.E)());
        },
        d = function (e) {
          if (!localStorage.getItem("projects")) return;
          const t = localStorage.getItem("projects");
          JSON.parse(t, c).forEach((t) => e.push(t)), (0, o.E)();
        };
    },
    880: (e, t, n) => {
      n.d(t, {
        MN: () => r,
        XD: () => d,
        gA: () => a,
        oq: () => s,
        t1: () => c,
      });
      var o = n(977);
      const r = function (e) {
          return e.options[e.selectedIndex];
        },
        a = function (e) {
          const t = {
            dataType: "project",
            id: o.d.length + 1,
            name: e,
            todos: [],
          };
          return o.d.push(t), t;
        },
        c = (e, t) => o.d.find((n) => n[e] == t),
        s = function (e, t, n) {
          return c("id", n).todos.find((n) => n.get(e) == t);
        },
        d = function (e, t) {
          let n;
          const o = c("id", t.projectId);
          "create" === e.action
            ? (n = (function (e) {
                const t = new Map();
                return (
                  t.set("dataType", "todo"),
                  t.set(
                    "id",
                    (function (e) {
                      return 0 === e.todos.length
                        ? 1
                        : e.todos[e.todos.length - 1].get("id") + 1;
                    })(e),
                  ),
                  e.todos.push(t),
                  t
                );
              })(o))
            : "update" === e.action && (n = s("id", e.todoId, e.projectId));
          for (const e in t) {
            const o = t[e];
            n.set(e, o);
          }
          return n;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    t(977), t(269), t(880);
  },
]);
//# sourceMappingURL=main.bundle.js.map
