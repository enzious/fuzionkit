import { css } from 'lit';
export default css `* {
  box-sizing: border-box;
}

:host {
  box-sizing: border-box;
  line-height: 0;
}

:host(fzn-tabs) {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0 0 0;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}
:host(fzn-tabs) .start {
  flex-grow: 1;
  padding: 0.5rem 0.3rem 0.5rem 0.2rem;
  display: inline-block;
  line-height: 1rem;
  border-bottom: 2px solid rgba(82, 97, 112, 0.3137254902);
  min-width: 0.5rem;
  height: 2rem;
}
:host(fzn-tabs) .body {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 99999;
}
:host(fzn-tabs) .body > .rest {
  display: inline-block;
  flex-grow: 1;
  height: 2rem;
  line-height: 1rem;
  border-bottom: 2px solid rgba(82, 97, 112, 0.3137254902);
}
:host(fzn-tabs) .end {
  flex-grow: 1;
  padding: 0.5rem 0.3rem 0.5rem 0.2rem;
  display: inline-block;
  line-height: 1rem;
  border-bottom: 2px solid rgba(82, 97, 112, 0.3137254902);
  min-width: 0.5rem;
  height: 2rem;
}

:host(fzn-tab),
:host(fzn-tab-crumb) {
  display: inline-flex;
  line-height: 1rem;
  height: 2rem;
  align-items: center;
}

:host(fzn-tab) {
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  border-bottom: 2px solid rgba(82, 97, 112, 0.3137254902);
  cursor: pointer;
}
:host(fzn-tab), :host(fzn-tab) * {
  color: #FFFFFF;
  text-decoration: none;
  user-select: none;
}
:host(fzn-tab) > a {
  display: inline-block;
  padding: 0.5rem 0.5rem;
}

:host(fzn-tab[disabled]) {
  color: rgba(255, 255, 255, 0.5);
  cursor: default;
}

:host(fzn-tab[active]) {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom: 2px solid #CEE61B;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05));
}

:host(fzn-tab-crumb) {
  display: inline-block;
  vertical-align: middle;
  border-bottom: 2px solid rgba(82, 97, 112, 0.3137254902);
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  line-height: 1rem;
  height: 2rem;
}`;
//# sourceMappingURL=tabs.lit.css.js.map