"use strict";
(self.webpackChunktodo_list = self.webpackChunktodo_list || []).push([
  [792],
  {
    422: (n, e, t) => {
      t.d(e, { A: () => d });
      var o = t(354),
        a = t.n(o),
        r = t(314),
        i = t.n(r)()(a());
      i.push([
        n.id,
        '/* CSS reset and global properties go here */\n:root {\n  /* Fonts */\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-xxl: 1.5rem;\n  --text-xxxl: 2rem;\n  --text-xxxxl: 2.5rem;\n\n  /* Spacing */\n  --space-xxxs: 0.25rem;\n  --space-xxs: 0.375rem;\n  --space-xs: 0.5rem;\n  --space-sm: 0.75rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-xxl: 2.5rem;\n  --space-xxxl: 3rem;\n  --space-xxxxl: 4rem;\n\n  /* Colors */\n  --color-white: white;\n  --color-eggshell: #fafafa;\n  --color-porcelain: #efefef;\n  --color-lightgray: #e5e5e5;\n  --color-gray: #a3a3a3;\n  --color-darkgray: #525252;\n  --color-charcoal: #262626;\n  --color-black: #0a0a0a;\n\n  --color-accent1: #2dd4bf;\n  --color-accent1-alt: #1c877a;\n  --color-accent2-alt: #871c4e;\n\n  --color-green: #5ff75e;\n\n  /* Drop shadow */\n  --drop-shadow-md: drop-shadow(3px 3px 2px #e5e5e5);\n\n  /* Border radius */\n  --border-radius: 5px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: "Montserrat", sans-serif;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n.border-red {\n  border: 3px solid #f00;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nh1,\n.text-xxxxl {\n  font-size: var(--text-xxxxl);\n}\n\nh2,\n.text-xxxl {\n  font-size: var(--text-xxxl);\n}\n\nh3,\n.text-xxl {\n  font-size: var(--text-xxl);\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/global.css"],
          names: [],
          mappings:
            "AAAA,4CAA4C;AAC5C;EACE,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;;EAEpB,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;;EAEnB,WAAW;EACX,oBAAoB;EACpB,yBAAyB;EACzB,0BAA0B;EAC1B,0BAA0B;EAC1B,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;;EAEtB,wBAAwB;EACxB,4BAA4B;EAC5B,4BAA4B;;EAE5B,sBAAsB;;EAEtB,gBAAgB;EAChB,kDAAkD;;EAElD,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;;EAEE,0BAA0B;AAC5B",
          sourcesContent: [
            '/* CSS reset and global properties go here */\n:root {\n  /* Fonts */\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-xxl: 1.5rem;\n  --text-xxxl: 2rem;\n  --text-xxxxl: 2.5rem;\n\n  /* Spacing */\n  --space-xxxs: 0.25rem;\n  --space-xxs: 0.375rem;\n  --space-xs: 0.5rem;\n  --space-sm: 0.75rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-xxl: 2.5rem;\n  --space-xxxl: 3rem;\n  --space-xxxxl: 4rem;\n\n  /* Colors */\n  --color-white: white;\n  --color-eggshell: #fafafa;\n  --color-porcelain: #efefef;\n  --color-lightgray: #e5e5e5;\n  --color-gray: #a3a3a3;\n  --color-darkgray: #525252;\n  --color-charcoal: #262626;\n  --color-black: #0a0a0a;\n\n  --color-accent1: #2dd4bf;\n  --color-accent1-alt: #1c877a;\n  --color-accent2-alt: #871c4e;\n\n  --color-green: #5ff75e;\n\n  /* Drop shadow */\n  --drop-shadow-md: drop-shadow(3px 3px 2px #e5e5e5);\n\n  /* Border radius */\n  --border-radius: 5px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: "Montserrat", sans-serif;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n.border-red {\n  border: 3px solid #f00;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nh1,\n.text-xxxxl {\n  font-size: var(--text-xxxxl);\n}\n\nh2,\n.text-xxxl {\n  font-size: var(--text-xxxl);\n}\n\nh3,\n.text-xxl {\n  font-size: var(--text-xxl);\n}\n',
          ],
          sourceRoot: "",
        },
      ]);
      const d = i;
    },
    208: (n, e, t) => {
      t.d(e, { A: () => d });
      var o = t(354),
        a = t.n(o),
        r = t(314),
        i = t.n(r)()(a());
      i.push([
        n.id,
        'body {\n  margin: 0;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--color-lightgray);\n}\n\nheader {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  text-decoration: none;\n  font-size: var(--text-xxxxl);\n  display: inline-flex;\n  align-items: center;\n  gap: 0;\n  font-family: "Kaushan Script", cursive;\n  padding: var(--space-xs) 0;\n}\n\n.logo-word-todo {\n  color: var(--color-accent1);\n}\n.logo-word-list {\n  position: relative;\n  color: var(--color-darkgray);\n}\n\n.logo-image {\n  width: 30px;\n}\n\n.button-nav-open {\n  position: absolute;\n  inset: var(--space-sm) 0 0 var(--space-sm);\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: var(--border-radius);\n  background-color: var(--color-lightgray);\n  transition: opacity 250ms ease;\n}\n\n.button-nav-open:focus,\n.button-nav-open:hover {\n  opacity: 0.75;\n}\n\n.hamburger {\n  width: 50%;\n  position: relative;\n}\n\n.hamburger,\n.hamburger::before,\n.hamburger::after {\n  display: block;\n  margin: 0 auto;\n  height: 3px;\n  background-color: var(--color-darkgray);\n}\n\n.hamburger::before,\n.hamburger::after {\n  content: "";\n  width: 100%;\n}\n\n.hamburger::before {\n  transform: translateY(-7px);\n}\n\n.hamburger::after {\n  transform: translateY(4px);\n}\n\n.nav {\n  grid-area: nav;\n  padding: var(--space-xs);\n  position: absolute;\n  inset: 0;\n  background-color: var(--color-eggshell);\n  width: 90%;\n  margin: var(--space-md) auto;\n  border: 1px solid var(--color-gray);\n  border-radius: var(--border-radius);\n  min-height: max-content;\n  display: none;\n  filter: var(--drop-shadow-md);\n  text-align: center;\n  z-index: 1;\n}\n\n.nav.open {\n  display: block;\n}\n\n.nav__title {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  margin-bottom: var(--space-md);\n}\n\n.nav__list {\n  display: grid;\n  grid-auto-flow: row;\n  gap: var(--space-md);\n  grid-template-columns: minmax(100px, 250px);\n  justify-content: center;\n  text-decoration: none;\n  list-style: none;\n  padding: 0;\n  margin-bottom: var(--space-xxl);\n}\n\n.nav__item {\n  font-family: "Montserrat", sans-serif;\n}\n\n.nav__item:hover {\n  opacity: 65%;\n}\n\n.nav__link-timeframe {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 500;\n  color: var(--color-accent2-alt);\n  background-color: var(--color-lightgray);\n  padding: 0.5em 0;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.nav__link-project {\n  color: var(--color-accent1-alt);\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.nav__link-timeframe:focus,\n.nav__link-timeframe:hover,\n.nav__link-project:focus,\n.nav__link-project:hover {\n  text-decoration: underline;\n}\n\n.nav__link-settings {\n  display: inline-block;\n  width: min(250px, 100%);\n  padding: var(--space-md) 0;\n  border-top: 1px solid var(--color-lightgray);\n\n  text-decoration: none;\n  color: var(--color-darkgray);\n}\n\n.nav__close-button-container {\n  display: flex;\n  justify-content: end;\n}\n\n.nav__close-button {\n  cursor: pointer;\n  position: relative;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  place-items: center;\n  border: 0;\n  border-radius: var(--border-radius);\n  background-color: initial;\n}\n.nav__close-button:focus,\n.nav__close-button:hover {\n  opacity: 65%;\n}\n\n.nav__close-button::before,\n.nav__close-button::after {\n  position: absolute;\n  content: "";\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-darkgray);\n}\n\n.nav__close-button::before {\n  transform: rotate(45deg);\n}\n.nav__close-button::after {\n  transform: rotate(-45deg);\n}\n\n.backdrop {\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  opacity: 0;\n}\n.modal {\n  background-color: var(--color-eggshell);\n  display: grid;\n  gap: 1em;\n  width: fit-content;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  pointer-events: none;\n  opacity: 0;\n  padding: 2em;\n  border: 1px solid var(--color-gray);\n\n  transition:\n    transform 175ms ease-out,\n    opacity 200ms ease;\n}\n\n.modal.show {\n  opacity: 1;\n  pointer-events: all;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.backdrop.show {\n  opacity: 0.3;\n}\n\n.form__create-project-container {\n  display: none;\n}\n\noption[data-action="create-project"] {\n  font-weight: 900;\n}\n\n.main {\n  z-index: 0;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-areas: "nav main";\n  grid-auto-flow: column;\n  grid-template-columns: 0 1fr;\n}\n\n.main__todos-container {\n  /* border: 3px solid lime; */\n  grid-area: main;\n  background-color: var(--color-porcelain);\n}\n\n.main__todos-head {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--space-sm);\n}\n\n.button-new-todo {\n  color: var(--color-white);\n  font-size: var(--text-lg);\n  font-weight: 600;\n  background: rgb(37, 219, 30);\n  padding: 1.125em 1.125em;\n  border-radius: 3px;\n  border: 0;\n  border: 3px solid lime;\n  transition: transform 50ms;\n  letter-spacing: 1.5px;\n  line-height: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.button-new-todo:focus,\n.button-new-todo:hover {\n  cursor: pointer;\n  filter: brightness(150%);\n  transform: scale(1.05);\n}\n\n.button-new-todo:active {\n}\n\n.button-new-todo::before {\n  position: relative;\n  top: -1px;\n  font-size: var(--text-xxxl);\n  font-weight: 600;\n  content: "+";\n}\n\n.main__title {\n  display: grid;\n  grid-template-areas:\n    "view-title-label   view-title-label"\n    "view-title-icon    view-title-value";\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0 var(--space-xs);\n}\n\n.main__view-title-label {\n  font-size: var(--text-xl);\n  font-weight: 700;\n  grid-area: view-title-label;\n}\n\n.main__view-title-value {\n  font-size: var(--text-xl);\n  font-weight: 700;\n  grid-area: view-title-value;\n}\n\n.main__view-title-by-timeframe {\n  color: var(--color-accent2-alt);\n  text-transform: uppercase;\n}\n\n.main__view-title-by-project {\n  color: var(--color-accent1-alt);\n}\n\n.main__view-title-icon {\n  grid-area: view-title-icon;\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\n\n.main__todos-list {\n  padding: 0;\n  display: grid;\n  gap: var(--space-xs);\n  padding: 0 var(--space-sm) var(--space-md);\n  filter: var(--drop-shadow-md);\n}\n\n.todo-card {\n  background-color: var(--color-white);\n  border-radius: var(--border-radius);\n  padding: var(--space-xs);\n  display: grid;\n  grid-template-areas:\n    "checkbox         card-title      button-expand"\n    "checkbox         card-body       button-expand";\n  grid-template-columns: auto 1fr auto;\n  gap: 0 var(--space-md);\n}\n\n.todo-card.checked {\n  background-color: var(--color-lightgray);\n}\n\n.todo-card__checkbox {\n  grid-area: checkbox;\n  width: 20px;\n}\n\n.todo-card__title {\n  grid-area: card-title;\n  color: var(--color-black);\n}\n\n.todo-card__priority-flag {\n  color: red;\n}\n\n.todo-card__body-container {\n  grid-area: card-body;\n}\n\n.todo-card__body-simple,\n.todo-card__body-expanded {\n  display: none;\n}\n\n.todo-card__body-simple.show,\n.todo-card__body-expanded.show {\n  display: grid;\n}\n\n.todo-card__body-simple {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  color: var(--color-gray);\n}\n\n.todo-card__body-expanded {\n  grid-template-areas:\n    "project-label       project-name"\n    "due-date-label      due-date-date"\n    "description-label   description-body"\n    "priority-label      priority-body"\n    "extra-buttons       extra-buttons";\n  grid-template-columns: auto 1fr;\n  gap: var(--space-md);\n  /* margin: var(--space-xxs) 0 0 0; */\n  margin: 0;\n  padding: var(--space-sm) 0 0 0;\n  border-top: 1px solid var(--color-gray);\n  line-height: 1rem;\n  font-size: var(--text-sm);\n}\n\n.todo-card__project-label {\n  grid-area: project-label;\n}\n.todo-card__project-name {\n  grid-area: project-name;\n}\n.todo-card__due-date-label {\n  grid-area: due-date-label;\n}\n.todo-card__due-date-date {\n  grid-area: due-date-date;\n}\n.todo-card__description-label {\n  grid-area: description-label;\n}\n.todo-card__description-body {\n  grid-area: description-body;\n}\n.todo-card__priority-label {\n  grid-area: priority-label;\n}\n.todo-card__priority-body {\n  grid-area: priority-body;\n}\n\n.todo-card__project-label,\n.todo-card__due-date-label,\n.todo-card__description-label,\n.todo-card__priority-label {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-weight: 700;\n}\n\n.todo-card__project-name,\n.todo-card__due-date-date,\n.todo-card__description-body,\n.todo-card__priority-body {\n  color: var(--color-darkgray);\n}\n\n.todo-card__extra-buttons {\n  grid-area: extra-buttons;\n  display: grid;\n  grid-auto-flow: column;\n  gap: var(--space-xs);\n}\n\n.todo-card__extra-button {\n  font-weight: 600;\n  border: 0;\n  border-radius: 3px;\n  padding: 0.375em 1em;\n  color: white;\n  cursor: pointer;\n}\n\n.todo-card__extra-button:hover {\n  opacity: 0.8;\n}\n\n.todo-card__extra-button--edit {\n  /* background-color: #f00; */\n  background-color: #60a5fa;\n}\n\n.todo-card__extra-button--delete {\n  background-color: #f87171;\n}\n\n.todo-card__extra-button--add-note,\n.todo-card__extra-button--add-checklist-item {\n  /* background-color: #f00; */\n  background-color: #4ade80;\n}\n\n.button-expanded-section {\n  opacity: 0.4;\n  justify-self: end;\n  align-self: start;\n  grid-area: button-expand;\n  height: 34px;\n  width: 34px;\n  background-color: var(--color-porcelain);\n  border-radius: 50%;\n  border: 0;\n  transition: transform 125ms;\n}\n\n.button-expanded-section img {\n  position: relative;\n  left: -1px;\n}\n\n.button-expanded-section:hover {\n  cursor: pointer;\n}\n\n.todo-card:hover .button-expanded-section {\n  opacity: 1;\n}\n\n.button-expanded-section:hover {\n  filter: brightness(0.85);\n}\n\n.button-expanded-section.show {\n  opacity: 1;\n  transform: rotate(-90deg);\n}\n\n@media (min-width: 800px) {\n  .button-nav-open {\n    display: none;\n  }\n  .nav__close-button {\n    display: none;\n  }\n\n  .nav {\n    position: static;\n    display: block;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border: 0;\n    filter: none;\n    text-align: left;\n  }\n\n  .nav__title {\n    font-size: var(--text-xl);\n    font-weight: 500;\n    padding: 0 0 0 var(--space-md);\n  }\n\n  .nav__list {\n    gap: 0;\n    grid-template-columns: 1fr;\n  }\n\n  .nav__item {\n    padding: 0 0 0 var(--space-xl);\n  }\n\n  .nav__link-timeframe {\n    background-color: revert;\n  }\n\n  .grid-container {\n    grid-template-columns: 33% 67%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/style.css"],
          names: [],
          mappings:
            "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",
          sourcesContent: [
            'body {\n  margin: 0;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--color-lightgray);\n}\n\nheader {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  text-decoration: none;\n  font-size: var(--text-xxxxl);\n  display: inline-flex;\n  align-items: center;\n  gap: 0;\n  font-family: "Kaushan Script", cursive;\n  padding: var(--space-xs) 0;\n}\n\n.logo-word-todo {\n  color: var(--color-accent1);\n}\n.logo-word-list {\n  position: relative;\n  color: var(--color-darkgray);\n}\n\n.logo-image {\n  width: 30px;\n}\n\n.button-nav-open {\n  position: absolute;\n  inset: var(--space-sm) 0 0 var(--space-sm);\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: var(--border-radius);\n  background-color: var(--color-lightgray);\n  transition: opacity 250ms ease;\n}\n\n.button-nav-open:focus,\n.button-nav-open:hover {\n  opacity: 0.75;\n}\n\n.hamburger {\n  width: 50%;\n  position: relative;\n}\n\n.hamburger,\n.hamburger::before,\n.hamburger::after {\n  display: block;\n  margin: 0 auto;\n  height: 3px;\n  background-color: var(--color-darkgray);\n}\n\n.hamburger::before,\n.hamburger::after {\n  content: "";\n  width: 100%;\n}\n\n.hamburger::before {\n  transform: translateY(-7px);\n}\n\n.hamburger::after {\n  transform: translateY(4px);\n}\n\n.nav {\n  grid-area: nav;\n  padding: var(--space-xs);\n  position: absolute;\n  inset: 0;\n  background-color: var(--color-eggshell);\n  width: 90%;\n  margin: var(--space-md) auto;\n  border: 1px solid var(--color-gray);\n  border-radius: var(--border-radius);\n  min-height: max-content;\n  display: none;\n  filter: var(--drop-shadow-md);\n  text-align: center;\n  z-index: 1;\n}\n\n.nav.open {\n  display: block;\n}\n\n.nav__title {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  margin-bottom: var(--space-md);\n}\n\n.nav__list {\n  display: grid;\n  grid-auto-flow: row;\n  gap: var(--space-md);\n  grid-template-columns: minmax(100px, 250px);\n  justify-content: center;\n  text-decoration: none;\n  list-style: none;\n  padding: 0;\n  margin-bottom: var(--space-xxl);\n}\n\n.nav__item {\n  font-family: "Montserrat", sans-serif;\n}\n\n.nav__item:hover {\n  opacity: 65%;\n}\n\n.nav__link-timeframe {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 500;\n  color: var(--color-accent2-alt);\n  background-color: var(--color-lightgray);\n  padding: 0.5em 0;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.nav__link-project {\n  color: var(--color-accent1-alt);\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.nav__link-timeframe:focus,\n.nav__link-timeframe:hover,\n.nav__link-project:focus,\n.nav__link-project:hover {\n  text-decoration: underline;\n}\n\n.nav__link-settings {\n  display: inline-block;\n  width: min(250px, 100%);\n  padding: var(--space-md) 0;\n  border-top: 1px solid var(--color-lightgray);\n\n  text-decoration: none;\n  color: var(--color-darkgray);\n}\n\n.nav__close-button-container {\n  display: flex;\n  justify-content: end;\n}\n\n.nav__close-button {\n  cursor: pointer;\n  position: relative;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  place-items: center;\n  border: 0;\n  border-radius: var(--border-radius);\n  background-color: initial;\n}\n.nav__close-button:focus,\n.nav__close-button:hover {\n  opacity: 65%;\n}\n\n.nav__close-button::before,\n.nav__close-button::after {\n  position: absolute;\n  content: "";\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-darkgray);\n}\n\n.nav__close-button::before {\n  transform: rotate(45deg);\n}\n.nav__close-button::after {\n  transform: rotate(-45deg);\n}\n\n.backdrop {\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  opacity: 0;\n}\n.modal {\n  background-color: var(--color-eggshell);\n  display: grid;\n  gap: 1em;\n  width: fit-content;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  pointer-events: none;\n  opacity: 0;\n  padding: 2em;\n  border: 1px solid var(--color-gray);\n\n  transition:\n    transform 175ms ease-out,\n    opacity 200ms ease;\n}\n\n.modal.show {\n  opacity: 1;\n  pointer-events: all;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.backdrop.show {\n  opacity: 0.3;\n}\n\n.form__create-project-container {\n  display: none;\n}\n\noption[data-action="create-project"] {\n  font-weight: 900;\n}\n\n.main {\n  z-index: 0;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-areas: "nav main";\n  grid-auto-flow: column;\n  grid-template-columns: 0 1fr;\n}\n\n.main__todos-container {\n  /* border: 3px solid lime; */\n  grid-area: main;\n  background-color: var(--color-porcelain);\n}\n\n.main__todos-head {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--space-sm);\n}\n\n.button-new-todo {\n  color: var(--color-white);\n  font-size: var(--text-lg);\n  font-weight: 600;\n  background: rgb(37, 219, 30);\n  padding: 1.125em 1.125em;\n  border-radius: 3px;\n  border: 0;\n  border: 3px solid lime;\n  transition: transform 50ms;\n  letter-spacing: 1.5px;\n  line-height: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.button-new-todo:focus,\n.button-new-todo:hover {\n  cursor: pointer;\n  filter: brightness(150%);\n  transform: scale(1.05);\n}\n\n.button-new-todo:active {\n}\n\n.button-new-todo::before {\n  position: relative;\n  top: -1px;\n  font-size: var(--text-xxxl);\n  font-weight: 600;\n  content: "+";\n}\n\n.main__title {\n  display: grid;\n  grid-template-areas:\n    "view-title-label   view-title-label"\n    "view-title-icon    view-title-value";\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0 var(--space-xs);\n}\n\n.main__view-title-label {\n  font-size: var(--text-xl);\n  font-weight: 700;\n  grid-area: view-title-label;\n}\n\n.main__view-title-value {\n  font-size: var(--text-xl);\n  font-weight: 700;\n  grid-area: view-title-value;\n}\n\n.main__view-title-by-timeframe {\n  color: var(--color-accent2-alt);\n  text-transform: uppercase;\n}\n\n.main__view-title-by-project {\n  color: var(--color-accent1-alt);\n}\n\n.main__view-title-icon {\n  grid-area: view-title-icon;\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\n\n.main__todos-list {\n  padding: 0;\n  display: grid;\n  gap: var(--space-xs);\n  padding: 0 var(--space-sm) var(--space-md);\n  filter: var(--drop-shadow-md);\n}\n\n.todo-card {\n  background-color: var(--color-white);\n  border-radius: var(--border-radius);\n  padding: var(--space-xs);\n  display: grid;\n  grid-template-areas:\n    "checkbox         card-title      button-expand"\n    "checkbox         card-body       button-expand";\n  grid-template-columns: auto 1fr auto;\n  gap: 0 var(--space-md);\n}\n\n.todo-card.checked {\n  background-color: var(--color-lightgray);\n}\n\n.todo-card__checkbox {\n  grid-area: checkbox;\n  width: 20px;\n}\n\n.todo-card__title {\n  grid-area: card-title;\n  color: var(--color-black);\n}\n\n.todo-card__priority-flag {\n  color: red;\n}\n\n.todo-card__body-container {\n  grid-area: card-body;\n}\n\n.todo-card__body-simple,\n.todo-card__body-expanded {\n  display: none;\n}\n\n.todo-card__body-simple.show,\n.todo-card__body-expanded.show {\n  display: grid;\n}\n\n.todo-card__body-simple {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  color: var(--color-gray);\n}\n\n.todo-card__body-expanded {\n  grid-template-areas:\n    "project-label       project-name"\n    "due-date-label      due-date-date"\n    "description-label   description-body"\n    "priority-label      priority-body"\n    "extra-buttons       extra-buttons";\n  grid-template-columns: auto 1fr;\n  gap: var(--space-md);\n  /* margin: var(--space-xxs) 0 0 0; */\n  margin: 0;\n  padding: var(--space-sm) 0 0 0;\n  border-top: 1px solid var(--color-gray);\n  line-height: 1rem;\n  font-size: var(--text-sm);\n}\n\n.todo-card__project-label {\n  grid-area: project-label;\n}\n.todo-card__project-name {\n  grid-area: project-name;\n}\n.todo-card__due-date-label {\n  grid-area: due-date-label;\n}\n.todo-card__due-date-date {\n  grid-area: due-date-date;\n}\n.todo-card__description-label {\n  grid-area: description-label;\n}\n.todo-card__description-body {\n  grid-area: description-body;\n}\n.todo-card__priority-label {\n  grid-area: priority-label;\n}\n.todo-card__priority-body {\n  grid-area: priority-body;\n}\n\n.todo-card__project-label,\n.todo-card__due-date-label,\n.todo-card__description-label,\n.todo-card__priority-label {\n  font-family: "Barlow Semi Condensed", sans-serif;\n  font-weight: 700;\n}\n\n.todo-card__project-name,\n.todo-card__due-date-date,\n.todo-card__description-body,\n.todo-card__priority-body {\n  color: var(--color-darkgray);\n}\n\n.todo-card__extra-buttons {\n  grid-area: extra-buttons;\n  display: grid;\n  grid-auto-flow: column;\n  gap: var(--space-xs);\n}\n\n.todo-card__extra-button {\n  font-weight: 600;\n  border: 0;\n  border-radius: 3px;\n  padding: 0.375em 1em;\n  color: white;\n  cursor: pointer;\n}\n\n.todo-card__extra-button:hover {\n  opacity: 0.8;\n}\n\n.todo-card__extra-button--edit {\n  /* background-color: #f00; */\n  background-color: #60a5fa;\n}\n\n.todo-card__extra-button--delete {\n  background-color: #f87171;\n}\n\n.todo-card__extra-button--add-note,\n.todo-card__extra-button--add-checklist-item {\n  /* background-color: #f00; */\n  background-color: #4ade80;\n}\n\n.button-expanded-section {\n  opacity: 0.4;\n  justify-self: end;\n  align-self: start;\n  grid-area: button-expand;\n  height: 34px;\n  width: 34px;\n  background-color: var(--color-porcelain);\n  border-radius: 50%;\n  border: 0;\n  transition: transform 125ms;\n}\n\n.button-expanded-section img {\n  position: relative;\n  left: -1px;\n}\n\n.button-expanded-section:hover {\n  cursor: pointer;\n}\n\n.todo-card:hover .button-expanded-section {\n  opacity: 1;\n}\n\n.button-expanded-section:hover {\n  filter: brightness(0.85);\n}\n\n.button-expanded-section.show {\n  opacity: 1;\n  transform: rotate(-90deg);\n}\n\n@media (min-width: 800px) {\n  .button-nav-open {\n    display: none;\n  }\n  .nav__close-button {\n    display: none;\n  }\n\n  .nav {\n    position: static;\n    display: block;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border: 0;\n    filter: none;\n    text-align: left;\n  }\n\n  .nav__title {\n    font-size: var(--text-xl);\n    font-weight: 500;\n    padding: 0 0 0 var(--space-md);\n  }\n\n  .nav__list {\n    gap: 0;\n    grid-template-columns: 1fr;\n  }\n\n  .nav__item {\n    padding: 0 0 0 var(--space-xl);\n  }\n\n  .nav__link-timeframe {\n    background-color: revert;\n  }\n\n  .grid-container {\n    grid-template-columns: 33% 67%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]);
      const d = i;
    },
    314: (n) => {
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = "",
                o = void 0 !== e[5];
              return (
                e[4] && (t += "@supports (".concat(e[4], ") {")),
                e[2] && (t += "@media ".concat(e[2], " {")),
                o &&
                  (t += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {",
                  )),
                (t += n(e)),
                o && (t += "}"),
                e[2] && (t += "}"),
                e[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (e.i = function (n, t, o, a, r) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var i = {};
            if (o)
              for (var d = 0; d < this.length; d++) {
                var c = this[d][0];
                null != c && (i[c] = !0);
              }
            for (var s = 0; s < n.length; s++) {
              var A = [].concat(n[s]);
              (o && i[A[0]]) ||
                (void 0 !== r &&
                  (void 0 === A[5] ||
                    (A[1] = "@layer"
                      .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                      .concat(A[1], "}")),
                  (A[5] = r)),
                t &&
                  (A[2]
                    ? ((A[1] = "@media ".concat(A[2], " {").concat(A[1], "}")),
                      (A[2] = t))
                    : (A[2] = t)),
                a &&
                  (A[4]
                    ? ((A[1] = "@supports ("
                        .concat(A[4], ") {")
                        .concat(A[1], "}")),
                      (A[4] = a))
                    : (A[4] = "".concat(a))),
                e.push(A));
            }
          }),
          e
        );
      };
    },
    354: (n) => {
      n.exports = function (n) {
        var e = n[1],
          t = n[3];
        if (!t) return e;
        if ("function" == typeof btoa) {
          var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
            a =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                o,
              ),
            r = "/*# ".concat(a, " */");
          return [e].concat([r]).join("\n");
        }
        return [e].join("\n");
      };
    },
    72: (n) => {
      var e = [];
      function t(n) {
        for (var t = -1, o = 0; o < e.length; o++)
          if (e[o].identifier === n) {
            t = o;
            break;
          }
        return t;
      }
      function o(n, o) {
        for (var r = {}, i = [], d = 0; d < n.length; d++) {
          var c = n[d],
            s = o.base ? c[0] + o.base : c[0],
            A = r[s] || 0,
            l = "".concat(s, " ").concat(A);
          r[s] = A + 1;
          var u = t(l),
            p = {
              css: c[1],
              media: c[2],
              sourceMap: c[3],
              supports: c[4],
              layer: c[5],
            };
          if (-1 !== u) e[u].references++, e[u].updater(p);
          else {
            var m = a(p, o);
            (o.byIndex = d),
              e.splice(d, 0, { identifier: l, updater: m, references: 1 });
          }
          i.push(l);
        }
        return i;
      }
      function a(n, e) {
        var t = e.domAPI(e);
        return (
          t.update(n),
          function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          }
        );
      }
      n.exports = function (n, a) {
        var r = o((n = n || []), (a = a || {}));
        return function (n) {
          n = n || [];
          for (var i = 0; i < r.length; i++) {
            var d = t(r[i]);
            e[d].references--;
          }
          for (var c = o(n, a), s = 0; s < r.length; s++) {
            var A = t(r[s]);
            0 === e[A].references && (e[A].updater(), e.splice(A, 1));
          }
          r = c;
        };
      };
    },
    659: (n) => {
      var e = {};
      n.exports = function (n, t) {
        var o = (function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        })(n);
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        o.appendChild(t);
      };
    },
    540: (n) => {
      n.exports = function (n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    56: (n, e, t) => {
      n.exports = function (n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    825: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = n.insertStyleElement(n);
        return {
          update: function (t) {
            !(function (n, e, t) {
              var o = "";
              t.supports && (o += "@supports (".concat(t.supports, ") {")),
                t.media && (o += "@media ".concat(t.media, " {"));
              var a = void 0 !== t.layer;
              a &&
                (o += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {",
                )),
                (o += t.css),
                a && (o += "}"),
                t.media && (o += "}"),
                t.supports && (o += "}");
              var r = t.sourceMap;
              r &&
                "undefined" != typeof btoa &&
                (o +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                    " */",
                  )),
                e.styleTagTransform(o, n, e.options);
            })(e, n, t);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(e);
          },
        };
      };
    },
    113: (n) => {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
    679: (n, e, t) => {
      t.d(e, { rH: () => Wn, uc: () => In, t$: () => On, EA: () => Un });
      var o = t(72),
        a = t.n(o),
        r = t(825),
        i = t.n(r),
        d = t(659),
        c = t.n(d),
        s = t(56),
        A = t.n(s),
        l = t(540),
        u = t.n(l),
        p = t(113),
        m = t.n(p),
        g = t(422),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = A()),
        (h.insert = c().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = u()),
        a()(g.A, h),
        g.A && g.A.locals && g.A.locals;
      var f = t(208),
        b = {};
      (b.styleTagTransform = m()),
        (b.setAttributes = A()),
        (b.insert = c().bind(null, "head")),
        (b.domAPI = i()),
        (b.insertStyleElement = u()),
        a()(f.A, b),
        f.A && f.A.locals && f.A.locals;
      const C = (n) =>
          !!(function (n) {
            let e;
            try {
              e = window[n];
              const t = "__storage_test__";
              return e.setItem(t, t), e.removeItem(t), !0;
            } catch (n) {
              return (
                n instanceof DOMException &&
                (22 === n.code ||
                  1014 === n.code ||
                  "QuotaExceededError" === n.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === n.name) &&
                e &&
                0 !== e.length
              );
            }
          })(n),
        E = function (n, e) {
          return e instanceof Map
            ? { dataType: "Map", value: Array.from(e.entries()) }
            : e;
        };
      function B(n, e) {
        if ("object" == typeof e && null !== e) {
          if ("Map" === e.dataType) return new Map(e.value);
          if ("dueDate" === e[0] && "" !== e[1])
            return (e[1] = new Date(e[1])), e;
        }
        return e;
      }
      const y = function () {
          C("localStorage") &&
            (localStorage.setItem("localData", JSON.stringify(In, E)), Un());
        },
        v = function (n) {
          return n.options[n.selectedIndex];
        },
        x = function (n) {
          const e = {
            dataType: "project",
            id: _("project"),
            name: n,
            todos: [],
          };
          return In.projects.push(e), e;
        },
        w = (n, e) => In.projects.find((t) => t[n] == e),
        _ = function (n) {
          const e = "project" === n ? "projectCounter" : "todoCounter";
          return (In.config[e] = In.config[e] + 1);
        },
        k = function (n, e) {
          return Wn().find((t) => t.get(n) == e);
        },
        S = {
          lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
          },
          xSeconds: { one: "1 second", other: "{{count}} seconds" },
          halfAMinute: "half a minute",
          lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
          },
          xMinutes: { one: "1 minute", other: "{{count}} minutes" },
          aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
          xHours: { one: "1 hour", other: "{{count}} hours" },
          xDays: { one: "1 day", other: "{{count}} days" },
          aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
          xWeeks: { one: "1 week", other: "{{count}} weeks" },
          aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months",
          },
          xMonths: { one: "1 month", other: "{{count}} months" },
          aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
          xYears: { one: "1 year", other: "{{count}} years" },
          overXYears: { one: "over 1 year", other: "over {{count}} years" },
          almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years",
          },
        };
      function j(n) {
        return (e = {}) => {
          const t = e.width ? String(e.width) : n.defaultWidth;
          return n.formats[t] || n.formats[n.defaultWidth];
        };
      }
      const q = {
          date: j({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: j({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: j({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        M = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function D(n) {
        return (e, t) => {
          let o;
          if (
            "formatting" === (t?.context ? String(t.context) : "standalone") &&
            n.formattingValues
          ) {
            const e = n.defaultFormattingWidth || n.defaultWidth,
              a = t?.width ? String(t.width) : e;
            o = n.formattingValues[a] || n.formattingValues[e];
          } else {
            const e = n.defaultWidth,
              a = t?.width ? String(t.width) : n.defaultWidth;
            o = n.values[a] || n.values[e];
          }
          return o[n.argumentCallback ? n.argumentCallback(e) : e];
        };
      }
      const L = {
        ordinalNumber: (n, e) => {
          const t = Number(n),
            o = t % 100;
          if (o > 20 || o < 10)
            switch (o % 10) {
              case 1:
                return t + "st";
              case 2:
                return t + "nd";
              case 3:
                return t + "rd";
            }
          return t + "th";
        },
        era: D({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: D({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: (n) => n - 1,
        }),
        month: D({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: D({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: D({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function I(n) {
        return (e, t = {}) => {
          const o = t.width,
            a =
              (o && n.matchPatterns[o]) || n.matchPatterns[n.defaultMatchWidth],
            r = e.match(a);
          if (!r) return null;
          const i = r[0],
            d =
              (o && n.parsePatterns[o]) || n.parsePatterns[n.defaultParseWidth],
            c = Array.isArray(d)
              ? (function (n, e) {
                  for (let e = 0; e < n.length; e++) if (n[e].test(i)) return e;
                })(d)
              : (function (n, e) {
                  for (const e in n)
                    if (
                      Object.prototype.hasOwnProperty.call(n, e) &&
                      n[e].test(i)
                    )
                      return e;
                })(d);
          let s;
          return (
            (s = n.valueCallback ? n.valueCallback(c) : c),
            (s = t.valueCallback ? t.valueCallback(s) : s),
            { value: s, rest: e.slice(i.length) }
          );
        };
      }
      const W = {
        ordinalNumber:
          ((T = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (n) => parseInt(n, 10),
          }),
          (n, e = {}) => {
            const t = n.match(T.matchPattern);
            if (!t) return null;
            const o = t[0],
              a = n.match(T.parsePattern);
            if (!a) return null;
            let r = T.valueCallback ? T.valueCallback(a[0]) : a[0];
            return (
              (r = e.valueCallback ? e.valueCallback(r) : r),
              { value: r, rest: n.slice(o.length) }
            );
          }),
        era: I({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated:
              /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: "any",
        }),
        quarter: I({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: "any",
          valueCallback: (n) => n + 1,
        }),
        month: I({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [
              /^j/i,
              /^f/i,
              /^m/i,
              /^a/i,
              /^m/i,
              /^j/i,
              /^j/i,
              /^a/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
            any: [
              /^ja/i,
              /^f/i,
              /^mar/i,
              /^ap/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^au/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
          },
          defaultParseWidth: "any",
        }),
        day: I({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: "any",
        }),
        dayPeriod: I({
          matchPatterns: {
            narrow:
              /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: "any",
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: "any",
        }),
      };
      var T;
      const Y = {
        code: "en-US",
        formatDistance: (n, e, t) => {
          let o;
          const a = S[n];
          return (
            (o =
              "string" == typeof a
                ? a
                : 1 === e
                  ? a.one
                  : a.other.replace("{{count}}", e.toString())),
            t?.addSuffix
              ? t.comparison && t.comparison > 0
                ? "in " + o
                : o + " ago"
              : o
          );
        },
        formatLong: q,
        formatRelative: (n, e, t, o) => M[n],
        localize: L,
        match: W,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      let P = {};
      function z() {
        return P;
      }
      Math.pow(10, 8);
      const U = 6048e5,
        N = 864e5;
      function O(n) {
        const e = Object.prototype.toString.call(n);
        return n instanceof Date ||
          ("object" == typeof n && "[object Date]" === e)
          ? new n.constructor(+n)
          : "number" == typeof n ||
              "[object Number]" === e ||
              "string" == typeof n ||
              "[object String]" === e
            ? new Date(n)
            : new Date(NaN);
      }
      function V(n) {
        const e = O(n);
        return e.setHours(0, 0, 0, 0), e;
      }
      function H(n) {
        const e = O(n),
          t = new Date(
            Date.UTC(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds(),
            ),
          );
        return t.setUTCFullYear(e.getFullYear()), +n - +t;
      }
      function F(n, e) {
        return n instanceof Date ? new n.constructor(e) : new Date(e);
      }
      function X(n) {
        const e = O(n);
        return (
          (function (n, e) {
            const t = V(n),
              o = V(e),
              a = +t - H(t),
              r = +o - H(o);
            return Math.round((a - r) / N);
          })(
            e,
            (function (n) {
              const e = O(n),
                t = F(n, 0);
              return (
                t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t
              );
            })(e),
          ) + 1
        );
      }
      function Q(n, e) {
        const t = z(),
          o =
            e?.weekStartsOn ??
            e?.locale?.options?.weekStartsOn ??
            t.weekStartsOn ??
            t.locale?.options?.weekStartsOn ??
            0,
          a = O(n),
          r = a.getDay(),
          i = (r < o ? 7 : 0) + r - o;
        return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
      }
      function $(n) {
        return Q(n, { weekStartsOn: 1 });
      }
      function R(n) {
        const e = O(n),
          t = e.getFullYear(),
          o = F(n, 0);
        o.setFullYear(t + 1, 0, 4), o.setHours(0, 0, 0, 0);
        const a = $(o),
          r = F(n, 0);
        r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
        const i = $(r);
        return e.getTime() >= a.getTime()
          ? t + 1
          : e.getTime() >= i.getTime()
            ? t
            : t - 1;
      }
      function Z(n) {
        const e = O(n),
          t =
            +$(e) -
            +(function (n) {
              const e = R(n),
                t = F(n, 0);
              return t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), $(t);
            })(e);
        return Math.round(t / U) + 1;
      }
      function G(n, e) {
        const t = O(n),
          o = t.getFullYear(),
          a = z(),
          r =
            e?.firstWeekContainsDate ??
            e?.locale?.options?.firstWeekContainsDate ??
            a.firstWeekContainsDate ??
            a.locale?.options?.firstWeekContainsDate ??
            1,
          i = F(n, 0);
        i.setFullYear(o + 1, 0, r), i.setHours(0, 0, 0, 0);
        const d = Q(i, e),
          c = F(n, 0);
        c.setFullYear(o, 0, r), c.setHours(0, 0, 0, 0);
        const s = Q(c, e);
        return t.getTime() >= d.getTime()
          ? o + 1
          : t.getTime() >= s.getTime()
            ? o
            : o - 1;
      }
      function J(n, e) {
        const t = O(n),
          o =
            +Q(t, e) -
            +(function (n, e) {
              const t = z(),
                o =
                  e?.firstWeekContainsDate ??
                  e?.locale?.options?.firstWeekContainsDate ??
                  t.firstWeekContainsDate ??
                  t.locale?.options?.firstWeekContainsDate ??
                  1,
                a = G(n, e),
                r = F(n, 0);
              return r.setFullYear(a, 0, o), r.setHours(0, 0, 0, 0), Q(r, e);
            })(t, e);
        return Math.round(o / U) + 1;
      }
      function K(n, e) {
        return (n < 0 ? "-" : "") + Math.abs(n).toString().padStart(e, "0");
      }
      const nn = {
          y(n, e) {
            const t = n.getFullYear(),
              o = t > 0 ? t : 1 - t;
            return K("yy" === e ? o % 100 : o, e.length);
          },
          M(n, e) {
            const t = n.getMonth();
            return "M" === e ? String(t + 1) : K(t + 1, 2);
          },
          d: (n, e) => K(n.getDate(), e.length),
          a(n, e) {
            const t = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return t.toUpperCase();
              case "aaa":
                return t;
              case "aaaaa":
                return t[0];
              default:
                return "am" === t ? "a.m." : "p.m.";
            }
          },
          h: (n, e) => K(n.getHours() % 12 || 12, e.length),
          H: (n, e) => K(n.getHours(), e.length),
          m: (n, e) => K(n.getMinutes(), e.length),
          s: (n, e) => K(n.getSeconds(), e.length),
          S(n, e) {
            const t = e.length,
              o = n.getMilliseconds();
            return K(Math.trunc(o * Math.pow(10, t - 3)), e.length);
          },
        },
        en = {
          G: function (n, e, t) {
            const o = n.getFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return t.era(o, { width: "abbreviated" });
              case "GGGGG":
                return t.era(o, { width: "narrow" });
              default:
                return t.era(o, { width: "wide" });
            }
          },
          y: function (n, e, t) {
            if ("yo" === e) {
              const e = n.getFullYear(),
                o = e > 0 ? e : 1 - e;
              return t.ordinalNumber(o, { unit: "year" });
            }
            return nn.y(n, e);
          },
          Y: function (n, e, t, o) {
            const a = G(n, o),
              r = a > 0 ? a : 1 - a;
            return "YY" === e
              ? K(r % 100, 2)
              : "Yo" === e
                ? t.ordinalNumber(r, { unit: "year" })
                : K(r, e.length);
          },
          R: function (n, e) {
            return K(R(n), e.length);
          },
          u: function (n, e) {
            return K(n.getFullYear(), e.length);
          },
          Q: function (n, e, t) {
            const o = Math.ceil((n.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(o);
              case "QQ":
                return K(o, 2);
              case "Qo":
                return t.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return t.quarter(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return t.quarter(o, { width: "narrow", context: "formatting" });
              default:
                return t.quarter(o, { width: "wide", context: "formatting" });
            }
          },
          q: function (n, e, t) {
            const o = Math.ceil((n.getMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(o);
              case "qq":
                return K(o, 2);
              case "qo":
                return t.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return t.quarter(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return t.quarter(o, { width: "narrow", context: "standalone" });
              default:
                return t.quarter(o, { width: "wide", context: "standalone" });
            }
          },
          M: function (n, e, t) {
            const o = n.getMonth();
            switch (e) {
              case "M":
              case "MM":
                return nn.M(n, e);
              case "Mo":
                return t.ordinalNumber(o + 1, { unit: "month" });
              case "MMM":
                return t.month(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return t.month(o, { width: "narrow", context: "formatting" });
              default:
                return t.month(o, { width: "wide", context: "formatting" });
            }
          },
          L: function (n, e, t) {
            const o = n.getMonth();
            switch (e) {
              case "L":
                return String(o + 1);
              case "LL":
                return K(o + 1, 2);
              case "Lo":
                return t.ordinalNumber(o + 1, { unit: "month" });
              case "LLL":
                return t.month(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return t.month(o, { width: "narrow", context: "standalone" });
              default:
                return t.month(o, { width: "wide", context: "standalone" });
            }
          },
          w: function (n, e, t, o) {
            const a = J(n, o);
            return "wo" === e
              ? t.ordinalNumber(a, { unit: "week" })
              : K(a, e.length);
          },
          I: function (n, e, t) {
            const o = Z(n);
            return "Io" === e
              ? t.ordinalNumber(o, { unit: "week" })
              : K(o, e.length);
          },
          d: function (n, e, t) {
            return "do" === e
              ? t.ordinalNumber(n.getDate(), { unit: "date" })
              : nn.d(n, e);
          },
          D: function (n, e, t) {
            const o = X(n);
            return "Do" === e
              ? t.ordinalNumber(o, { unit: "dayOfYear" })
              : K(o, e.length);
          },
          E: function (n, e, t) {
            const o = n.getDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return t.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return t.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return t.day(o, { width: "short", context: "formatting" });
              default:
                return t.day(o, { width: "wide", context: "formatting" });
            }
          },
          e: function (n, e, t, o) {
            const a = n.getDay(),
              r = (a - o.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(r);
              case "ee":
                return K(r, 2);
              case "eo":
                return t.ordinalNumber(r, { unit: "day" });
              case "eee":
                return t.day(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return t.day(a, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return t.day(a, { width: "short", context: "formatting" });
              default:
                return t.day(a, { width: "wide", context: "formatting" });
            }
          },
          c: function (n, e, t, o) {
            const a = n.getDay(),
              r = (a - o.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(r);
              case "cc":
                return K(r, e.length);
              case "co":
                return t.ordinalNumber(r, { unit: "day" });
              case "ccc":
                return t.day(a, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return t.day(a, { width: "narrow", context: "standalone" });
              case "cccccc":
                return t.day(a, { width: "short", context: "standalone" });
              default:
                return t.day(a, { width: "wide", context: "standalone" });
            }
          },
          i: function (n, e, t) {
            const o = n.getDay(),
              a = 0 === o ? 7 : o;
            switch (e) {
              case "i":
                return String(a);
              case "ii":
                return K(a, e.length);
              case "io":
                return t.ordinalNumber(a, { unit: "day" });
              case "iii":
                return t.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return t.day(o, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return t.day(o, { width: "short", context: "formatting" });
              default:
                return t.day(o, { width: "wide", context: "formatting" });
            }
          },
          a: function (n, e, t) {
            const o = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return t.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return t
                  .dayPeriod(o, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return t.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return t.dayPeriod(o, { width: "wide", context: "formatting" });
            }
          },
          b: function (n, e, t) {
            const o = n.getHours();
            let a;
            switch (
              ((a =
                12 === o
                  ? "noon"
                  : 0 === o
                    ? "midnight"
                    : o / 12 >= 1
                      ? "pm"
                      : "am"),
              e)
            ) {
              case "b":
              case "bb":
                return t.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return t
                  .dayPeriod(a, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return t.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return t.dayPeriod(a, { width: "wide", context: "formatting" });
            }
          },
          B: function (n, e, t) {
            const o = n.getHours();
            let a;
            switch (
              ((a =
                o >= 17
                  ? "evening"
                  : o >= 12
                    ? "afternoon"
                    : o >= 4
                      ? "morning"
                      : "night"),
              e)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return t.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return t.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return t.dayPeriod(a, { width: "wide", context: "formatting" });
            }
          },
          h: function (n, e, t) {
            if ("ho" === e) {
              let e = n.getHours() % 12;
              return 0 === e && (e = 12), t.ordinalNumber(e, { unit: "hour" });
            }
            return nn.h(n, e);
          },
          H: function (n, e, t) {
            return "Ho" === e
              ? t.ordinalNumber(n.getHours(), { unit: "hour" })
              : nn.H(n, e);
          },
          K: function (n, e, t) {
            const o = n.getHours() % 12;
            return "Ko" === e
              ? t.ordinalNumber(o, { unit: "hour" })
              : K(o, e.length);
          },
          k: function (n, e, t) {
            let o = n.getHours();
            return (
              0 === o && (o = 24),
              "ko" === e ? t.ordinalNumber(o, { unit: "hour" }) : K(o, e.length)
            );
          },
          m: function (n, e, t) {
            return "mo" === e
              ? t.ordinalNumber(n.getMinutes(), { unit: "minute" })
              : nn.m(n, e);
          },
          s: function (n, e, t) {
            return "so" === e
              ? t.ordinalNumber(n.getSeconds(), { unit: "second" })
              : nn.s(n, e);
          },
          S: function (n, e) {
            return nn.S(n, e);
          },
          X: function (n, e, t) {
            const o = n.getTimezoneOffset();
            if (0 === o) return "Z";
            switch (e) {
              case "X":
                return on(o);
              case "XXXX":
              case "XX":
                return an(o);
              default:
                return an(o, ":");
            }
          },
          x: function (n, e, t) {
            const o = n.getTimezoneOffset();
            switch (e) {
              case "x":
                return on(o);
              case "xxxx":
              case "xx":
                return an(o);
              default:
                return an(o, ":");
            }
          },
          O: function (n, e, t) {
            const o = n.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + tn(o, ":");
              default:
                return "GMT" + an(o, ":");
            }
          },
          z: function (n, e, t) {
            const o = n.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + tn(o, ":");
              default:
                return "GMT" + an(o, ":");
            }
          },
          t: function (n, e, t) {
            return K(Math.trunc(n.getTime() / 1e3), e.length);
          },
          T: function (n, e, t) {
            return K(n.getTime(), e.length);
          },
        };
      function tn(n, e = "") {
        const t = n > 0 ? "-" : "+",
          o = Math.abs(n),
          a = Math.trunc(o / 60),
          r = o % 60;
        return 0 === r ? t + String(a) : t + String(a) + e + K(r, 2);
      }
      function on(n, e) {
        return n % 60 == 0
          ? (n > 0 ? "-" : "+") + K(Math.abs(n) / 60, 2)
          : an(n, e);
      }
      function an(n, e = "") {
        const t = n > 0 ? "-" : "+",
          o = Math.abs(n);
        return t + K(Math.trunc(o / 60), 2) + e + K(o % 60, 2);
      }
      const rn = (n, e) => {
          switch (n) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        dn = (n, e) => {
          switch (n) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        },
        cn = {
          p: dn,
          P: (n, e) => {
            const t = n.match(/(P+)(p+)?/) || [],
              o = t[1],
              a = t[2];
            if (!a) return rn(n, e);
            let r;
            switch (o) {
              case "P":
                r = e.dateTime({ width: "short" });
                break;
              case "PP":
                r = e.dateTime({ width: "medium" });
                break;
              case "PPP":
                r = e.dateTime({ width: "long" });
                break;
              default:
                r = e.dateTime({ width: "full" });
            }
            return r
              .replace("{{date}}", rn(o, e))
              .replace("{{time}}", dn(a, e));
          },
        },
        sn = /^D+$/,
        An = /^Y+$/,
        ln = ["D", "DD", "YY", "YYYY"];
      function un(n) {
        if (
          !((e = n),
          e instanceof Date ||
            ("object" == typeof e &&
              "[object Date]" === Object.prototype.toString.call(e)) ||
            "number" == typeof n)
        )
          return !1;
        var e;
        const t = O(n);
        return !isNaN(Number(t));
      }
      const pn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        mn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        gn = /^'([^]*?)'?$/,
        hn = /''/g,
        fn = /[a-zA-Z]/;
      function bn(n, e, t) {
        const o = z(),
          a = t?.locale ?? o.locale ?? Y,
          r =
            t?.firstWeekContainsDate ??
            t?.locale?.options?.firstWeekContainsDate ??
            o.firstWeekContainsDate ??
            o.locale?.options?.firstWeekContainsDate ??
            1,
          i =
            t?.weekStartsOn ??
            t?.locale?.options?.weekStartsOn ??
            o.weekStartsOn ??
            o.locale?.options?.weekStartsOn ??
            0,
          d = O(n);
        if (!un(d)) throw new RangeError("Invalid time value");
        let c = e
          .match(mn)
          .map((n) => {
            const e = n[0];
            return "p" === e || "P" === e ? (0, cn[e])(n, a.formatLong) : n;
          })
          .join("")
          .match(pn)
          .map((n) => {
            if ("''" === n) return { isToken: !1, value: "'" };
            const e = n[0];
            if ("'" === e) return { isToken: !1, value: Cn(n) };
            if (en[e]) return { isToken: !0, value: n };
            if (e.match(fn))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  e +
                  "`",
              );
            return { isToken: !1, value: n };
          });
        a.localize.preprocessor && (c = a.localize.preprocessor(d, c));
        const s = { firstWeekContainsDate: r, weekStartsOn: i, locale: a };
        return c
          .map((o) => {
            if (!o.isToken) return o.value;
            const r = o.value;
            return (
              ((!t?.useAdditionalWeekYearTokens &&
                (function (n) {
                  return An.test(n);
                })(r)) ||
                (!t?.useAdditionalDayOfYearTokens &&
                  (function (n) {
                    return sn.test(n);
                  })(r))) &&
                (function (n, e, t) {
                  const o = (function (n, e, t) {
                    const o = "Y" === n[0] ? "years" : "days of the month";
                    return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                  })(n, e, t);
                  if ((console.warn(o), ln.includes(n)))
                    throw new RangeError(o);
                })(r, e, String(n)),
              (0, en[r[0]])(d, r, a.localize, s)
            );
          })
          .join("");
      }
      function Cn(n) {
        const e = n.match(gn);
        return e ? e[1].replace(hn, "'") : n;
      }
      const En = function () {
          (document.querySelector(".modal__title").textContent = "New Todo"),
            (document.querySelector(".form__todo-title-input").value = ""),
            (document.querySelector(".form__todo-description-input").value =
              ""),
            (document.querySelector(".form__date-input").value = ""),
            (document.querySelector(".form__create-project-input").value = ""),
            (document.querySelector(".form__priority-select").selectedIndex =
              1);
          const n = document.querySelector(".form__hidden-input");
          (n.dataset.action = "create"),
            (n.dataset.projectId = ""),
            (n.dataset.todoId = ""),
            (document.querySelector(".form__create-project-input").required =
              !1);
          const e = document.querySelector(".form__projects-select");
          (e.selectedIndex = 0),
            (document.querySelector(
              ".form__create-project-container",
            ).style.display = "none"),
            (e.disabled = !1);
        },
        Bn = function () {
          const n = document.querySelector(".modal"),
            e = document.querySelector(".backdrop");
          n.classList.remove("show"),
            e.classList.remove("show"),
            setTimeout(En, 300);
        };
      document
        .querySelector(".button-close-modal")
        .addEventListener("click", Bn);
      const yn = document.querySelector(".form__projects-select");
      yn.addEventListener("click", () => {
        const n = v(yn),
          e = document.querySelector(".form__create-project-container"),
          t = document.querySelector(".form__create-project-input");
        "create-project" === n.dataset.action
          ? ((e.style.display = "initial"), (t.required = !0))
          : ((e.style.display = "none"), (t.required = !1));
      });
      const vn = function () {
          const { lastViewConstraint: n, lastViewValue: e } = In.config;
          let t;
          return (
            "timeframe" === n
              ? (t = (function (n) {
                  switch (n) {
                    case "today":
                      return (function () {
                        const n = bn(new Date(), "yyyy-MM-dd");
                        return Wn().filter((e) => {
                          if (!e.get("dueDate")) return !1;
                          const t = bn(e.get("dueDate"), "yyyy-MM-dd");
                          return n === t;
                        });
                      })();
                    case "upcoming":
                      return (function () {
                        const n = new Date();
                        return Wn().filter((e) => {
                          const t = e.get("dueDate");
                          return n < t;
                        });
                      })();
                    case "all":
                      return Wn();
                  }
                })(e))
              : "project" === n &&
                (t = (function (n) {
                  const e = w("name", n),
                    { todos: t } = e;
                  return t;
                })(e)),
            t
          );
        },
        xn = t.p + "d9e7d321fb841007245b.svg",
        wn = document.querySelector(".logo"),
        _n = new Image();
      (_n.src = xn),
        _n.classList.add("logo-image"),
        wn.insertBefore(_n, wn.childNodes[1]);
      const kn = document.querySelector(".nav"),
        Sn = function () {
          kn.classList.remove("open");
        };
      document
        .querySelector(".nav__close-button")
        .addEventListener("click", Sn);
      const jn = t.p + "2e2a67d3e51455cc9a4f.svg",
        qn = t.p + "d6002b6571ca58fc1e57.svg",
        Mn = t.p + "12af17a7b1dc7cf13ea7.svg",
        Dn = t.p + "0c05517fd42db719f444.svg",
        Ln = t.p + "c424c8b5ea8a5ffa7269.svg",
        In = {
          projects: [],
          config: {
            projectCounter: 0,
            todoCounter: 0,
            lastViewConstraint: "timeframe",
            lastViewValue: "all",
          },
        },
        Wn = function () {
          const n = [];
          return (
            In.projects.forEach((e) => {
              e.todos.forEach((e) => n.push(e));
            }),
            n
          );
        },
        Tn = function (n) {
          const e = k("id", n),
            t = w("id", e.get("projectId")),
            o = document.createElement("div");
          return (
            (o.id = `todo-card__body-simple--todo-id-${n}`),
            o.classList.add("todo-card__body-simple"),
            (o.textContent = t.name),
            o.classList.add("show"),
            o
          );
        },
        Yn = function (n) {
          const e = k("id", n),
            t = w("id", e.get("projectId")),
            o = document.createElement("div");
          (o.id = `todo-card__body-expanded--todo-id-${n}`),
            o.classList.add("todo-card__body-expanded");
          const a = document.createElement("div");
          a.classList.add("todo-card__project-label"),
            (a.textContent = "Project: ");
          const r = document.createElement("div");
          r.classList.add("todo-card__project-name"),
            (r.textContent = t.name),
            o.appendChild(a),
            o.appendChild(r);
          let i = "";
          e.get("dueDate") && (i = bn(e.get("dueDate"), "MM-dd-yyyy"));
          const d = document.createElement("div");
          d.classList.add("todo-card__due-date-label"),
            (d.textContent = "Due date: ");
          const c = document.createElement("div");
          c.classList.add("todo-card__due-date-date"),
            (c.textContent = i),
            o.appendChild(d),
            o.appendChild(c);
          const s = document.createElement("div");
          s.classList.add("todo-card__description-label"),
            (s.textContent = "Description: ");
          const A = document.createElement("div");
          A.classList.add("todo-card__description-body"),
            (A.textContent = e.get("description")),
            o.appendChild(s),
            o.appendChild(A);
          const l = document.createElement("div");
          l.classList.add("todo-card__priority-label"),
            (l.textContent = "Priority: ");
          const u = document.createElement("div");
          u.classList.add("todo-card__priority-body"),
            (u.textContent = e.get("priority")),
            o.appendChild(l),
            o.appendChild(u);
          const p = zn(n);
          return o.appendChild(p), o;
        },
        Pn = function () {
          document
            .querySelector(
              `#button-expanded-section--todo-id-${this.dataset.todoId}`,
            )
            .classList.toggle("show"),
            document
              .querySelector(
                `#todo-card__body-simple--todo-id-${this.dataset.todoId}`,
              )
              .classList.toggle("show"),
            document
              .querySelector(
                `#todo-card__body-expanded--todo-id-${this.dataset.todoId}`,
              )
              .classList.toggle("show");
        },
        zn = function (n) {
          const e = document.createElement("div");
          e.classList.add("todo-card__extra-buttons");
          const t = document.createElement("button");
          t.classList.add(
            "todo-card__extra-button",
            "todo-card__extra-button--edit",
          ),
            (t.textContent = "🖉 Edit"),
            t.addEventListener("click", function () {
              On.publish("open modal", n);
            });
          const o = document.createElement("button");
          o.classList.add(
            "todo-card__extra-button",
            "todo-card__extra-button--delete",
          ),
            (o.textContent = "🗑 Delete"),
            o.addEventListener("click", function () {
              On.publish("delete todo", n);
            });
          const a = document.createElement("button");
          a.classList.add(
            "todo-card__extra-button",
            "todo-card__extra-button--add-note",
          ),
            (a.textContent = "+ Note");
          const r = document.createElement("button");
          return (
            r.classList.add(
              "todo-card__extra-button",
              "todo-card__extra-button--add-checklist-item",
            ),
            (r.textContent = "+ Checklist Item"),
            e.appendChild(t),
            e.appendChild(o),
            e.appendChild(a),
            e.appendChild(r),
            e
          );
        },
        Un = function () {
          !(function () {
            const { lastViewConstraint: n, lastViewValue: e } = In.config,
              t = vn(),
              o = document.querySelector(".main__todos-list");
            (o.innerHTML = ""),
              0 === t.length && (o.textContent = "No todos to show."),
              t.forEach((n) => {
                const e = n.get("id"),
                  t = n.get("projectId"),
                  a = document.createElement("div");
                a.classList.add("todo-card"),
                  (a.id = `todo-card--todo-id-${n.get("id")}`);
                const r = (function (n, e) {
                    const t = document.createElement("input");
                    return (
                      t.setAttribute("type", "checkbox"),
                      t.classList.add("todo-card__checkbox"),
                      (t.id = `todo-card__checkbox--todo-id-${n.get("id")}`),
                      (t.checked = n.get("checked")),
                      n.get("checked") && e.classList.add("checked"),
                      t.addEventListener("click", () =>
                        On.publish("checkbox clicked", {
                          targetElement: t,
                          targetTodo: n,
                        }),
                      ),
                      t
                    );
                  })(n, a),
                  i = document.createElement("div"),
                  d = document.createElement("span");
                if (
                  (d.classList.add("todo-card__title"),
                  (d.textContent = n.get("title")),
                  (d.dataset.projectId = t),
                  (d.dataset.todoId = e),
                  d.addEventListener("click", function () {
                    Pn.apply(d);
                  }),
                  i.appendChild(d),
                  "high" === n.get("priority"))
                ) {
                  const n = document.createElement("span");
                  n.classList.add("todo-card__priority-flag"),
                    (n.textContent = " ⚑"),
                    i.appendChild(n);
                }
                const c = (function (n) {
                  const e = document.createElement("button");
                  (e.type = "button"),
                    (e.id = `button-expanded-section--todo-id-${n}`),
                    e.classList.add("button-expanded-section"),
                    (e.dataset.todoId = n),
                    e.addEventListener("click", Pn);
                  const t = new Image();
                  return (
                    (t.src = Ln),
                    (t.alt = "A left arrow that expands this todo"),
                    e.appendChild(t),
                    e
                  );
                })(e);
                c.dataset.projectId = t;
                const s = (function (n) {
                  const e = document.createElement("div");
                  (e.id = `todo-card__body-container--todo-id-${n}`),
                    e.classList.add("todo-card__body-container");
                  const t = Tn(n),
                    o = Yn(n);
                  return e.appendChild(t), e.appendChild(o), e;
                })(e);
                a.appendChild(r),
                  a.appendChild(i),
                  a.appendChild(c),
                  a.appendChild(s),
                  o.appendChild(a);
              });
          })(),
            (function () {
              const { lastViewConstraint: n, lastViewValue: e } = In.config,
                t = document.querySelector(".main__view-title-label"),
                o = document.querySelector(".main__view-title-value");
              (o.textContent = e),
                "timeframe" == n
                  ? ((t.textContent = "View: "),
                    o.classList.add("main__view-title-by-timeframe"),
                    o.classList.remove("main__view-title-by-project"))
                  : "project" === n &&
                    ((t.textContent = "View by Project: "),
                    o.classList.add("main__view-title-by-project"),
                    o.classList.remove("main__view-title-by-timeframe")),
                (function () {
                  const { lastViewConstraint: n, lastViewValue: e } = In.config,
                    t = document.querySelector(".main__view-title-icon");
                  let o;
                  switch (((t.textContent = ""), e)) {
                    case "all":
                      (o = new Image()),
                        (o.src = jn),
                        (o.alt =
                          "An icon of a series of lines which represents all todos.");
                      break;
                    case "today":
                      (o = new Image()),
                        (o.src = Mn),
                        (o.alt =
                          "An icon of a star which represents today's todos.");
                      break;
                    case "upcoming":
                      (o = new Image()),
                        (o.src = qn),
                        (o.alt =
                          "An icon of a calendar which represents upcoming todos.");
                      break;
                    default:
                      (o = new Image()),
                        (o.src = Dn),
                        (o.alt = "An icon which represents a project.");
                  }
                  t.appendChild(o);
                })();
            })(),
            (function () {
              const n = document.querySelector(".form__projects-select");
              (n.innerHTML = ""),
                In.projects.forEach((e) => {
                  const t = document.createElement("option");
                  (t.textContent = e.name),
                    (t.dataset.action = "find-project"),
                    (t.dataset.projectId = e.id),
                    n.appendChild(t);
                });
              const e = document.createElement("option");
              (e.dataset.action = "create-project"),
                (e.textContent = "Create new..."),
                n.appendChild(e);
            })(),
            (function () {
              const n = ["all", "today", "upcoming"],
                e = document.querySelector(".nav__list--primary");
              e.innerHTML = "";
              for (const t of n) {
                const n = document.createElement("li");
                n.classList.add("nav__item");
                const o = document.createElement("a");
                o.classList.add("nav__link-timeframe"),
                  o.classList.add(`nav__link-timeframe-${t}`),
                  (o.href = "#"),
                  (o.text = [t.charAt(0).toUpperCase(), t.slice(1)].join("")),
                  o.addEventListener("click", () =>
                    On.publish("change view", {
                      constraint: "timeframe",
                      value: t,
                    }),
                  ),
                  n.appendChild(o),
                  e.appendChild(n);
              }
            })(),
            (function () {
              const n = document.querySelector(".nav__list--secondary");
              n.innerHTML = "";
              const { projects: e } = In;
              e.forEach((e) => {
                const t = document.createElement("li");
                t.classList.add("nav__item");
                const o = document.createElement("a");
                o.classList.add("nav__link-project"),
                  (o.href = "#"),
                  (o.text = e.name),
                  o.addEventListener("click", () =>
                    On.publish("change view", {
                      constraint: "project",
                      value: e.name,
                    }),
                  ),
                  t.appendChild(o),
                  n.appendChild(t);
              });
            })();
        };
      (document.cookie = "colortheme=light"), document.cookie;
      const Nn = (function () {
          const n = {};
          return {
            subscribe: function (e, t) {
              n[e] ? (n[e] = [...n[e], t]) : (n[e] = [t]);
            },
            unsubscribe: function (e, t) {
              n[e] = n[e].filter((n) => n !== t);
            },
            publish: function (e, t) {
              n[e] && n[e].forEach((n) => n(t));
            },
          };
        })(),
        On = (function (n) {
          return { publish: n.publish };
        })(Nn);
      Nn.subscribe("start up", function () {
        C("localStorage") || alert("Warning: Unable to save locally."),
          (function () {
            if (!localStorage.getItem("localData")) return;
            const n = localStorage.getItem("localData"),
              e = JSON.parse(n, B);
            (In.projects = e.projects), (In.config = e.config);
          })(),
          0 === In.config.projectCounter && x("default");
      }),
        Nn.subscribe("start up", y),
        Nn.subscribe("open modal", function (n) {
          if ("project" === In.config.lastViewConstraint) {
            const n = In.config.lastViewValue,
              e = w("name", n),
              t = In.projects.findIndex((n) => n.id === e.id);
            document.querySelector(".form__projects-select").selectedIndex = t;
          }
          const e = document.querySelector(".modal"),
            t = document.querySelector(".backdrop");
          e.classList.add("show"),
            t.classList.add("show"),
            n &&
              (function (n) {
                const e = k("id", n),
                  t = w("id", e.get("projectId"));
                (document.querySelector(".modal__title").textContent =
                  "Update Todo"),
                  (document.querySelector(".form__todo-title-input").value =
                    e.get("title")),
                  (document.querySelector(
                    ".form__todo-description-input",
                  ).value = e.get("description"));
                const o = document.querySelector(".form__projects-select"),
                  a = In.projects.findIndex((n) => n.id === t.id);
                (o.selectedIndex = a), (o.disabled = !0);
                const r = document.querySelector(".form__priority-select"),
                  i = e.get("priority");
                r.selectedIndex = "high" === i ? 0 : "medium" === i ? 1 : 2;
                const d = document.querySelector(".form__date-input"),
                  c = e.get("dueDate");
                c && (d.value = bn(c, "yyyy-MM-dd"));
                const s = document.querySelector(".form__hidden-input");
                (s.dataset.action = "update"),
                  (s.dataset.projectId = t.id),
                  (s.dataset.todoId = e.get("id"));
              })(n);
        }),
        Nn.subscribe("open modal", Sn),
        Nn.subscribe("nav open", function () {
          kn.classList.add("open");
        }),
        Nn.subscribe("nav open", Bn),
        Nn.subscribe("save todo", function () {
          const n = document.querySelector(".form__projects-select"),
            e = v(n),
            t = document.querySelector(".form__todo-title-input").value,
            o = document.querySelector(".form__todo-description-input").value,
            a = document.querySelector(".form__date-input").value,
            r = document.querySelector(".form__priority-select"),
            i = v(r),
            d = document.querySelector(".form__hidden-input").dataset.action,
            c = document.querySelector(".form__hidden-input").dataset.projectId,
            s = document.querySelector(".form__hidden-input").dataset.todoId,
            A = document.querySelector(".form__create-project-input");
          if (
            "" == !t &&
            (function (n) {
              const e = n.required && "" !== n.value,
                t = !1 === n.required;
              return !(!e && !t);
            })(A)
          ) {
            !(function (n, e) {
              let t;
              const o = w("id", e.projectId);
              "create" === n.action
                ? (t = (function (n) {
                    const e = new Map();
                    return (
                      e.set("dataType", "todo"),
                      e.set("checked", !1),
                      e.set("id", _("todo")),
                      n.todos.push(e),
                      e
                    );
                  })(o))
                : "update" === n.action && (t = k("id", n.todoId));
              for (const n in e) {
                let o;
                if ("dueDate" === n && e[n]) {
                  const t = e[n].split("-"),
                    a = t[0],
                    r = t[1],
                    i = t[2];
                  o = new Date(a, r - 1, i, 0, 0, 0);
                } else o = e[n];
                t.set(n, o);
              }
            })(
              { action: d, projectId: c, todoId: s },
              {
                title: t,
                description: o,
                projectId: ("create-project" === e.dataset.action
                  ? x(A.value)
                  : w("id", e.dataset.projectId)
                ).id,
                dueDate: a,
                priority: i.value,
              },
            );
          }
        }),
        Nn.subscribe("save todo", Bn),
        Nn.subscribe("save todo", y),
        Nn.subscribe("delete todo", function (n) {
          const e = k("id", n),
            t = w("id", e.get("projectId")),
            o = t.todos.findIndex((e) => e.get("id") == n);
          t.todos.splice(o, 1);
        }),
        Nn.subscribe("delete todo", y),
        Nn.subscribe("change view", function ({ constraint: n, value: e }) {
          (In.config.lastViewConstraint = n), (In.config.lastViewValue = e);
        }),
        Nn.subscribe("change view", Sn),
        Nn.subscribe("change view", y),
        Nn.subscribe(
          "checkbox clicked",
          function ({ targetElement: n, targetTodo: e }) {
            const t = n.checked;
            e.set("checked", t),
              t
                ? document
                    .getElementById(`todo-card--todo-id-${e.get("id")}`)
                    .classList.add("checked")
                : document
                    .getElementById(`todo-card--todo-id-${e.get("id")}`)
                    .classList.remove("checked");
          },
        ),
        Nn.subscribe("checkbox clicked", y),
        document
          .querySelector(".button-save-todo")
          .addEventListener("click", () => On.publish("save todo")),
        document
          .querySelector(".button-nav-open")
          .addEventListener("click", () => On.publish("nav open")),
        document
          .querySelector(".button-new-todo")
          .addEventListener("click", function () {
            On.publish("open modal");
          }),
        On.publish("start up");
    },
  },
  (n) => {
    n((n.s = 679));
  },
]);
//# sourceMappingURL=main.bundle.js.map
