import { css } from 'lit';
export default css `:host(fzn-tree) {
  display: block;
}
:host(fzn-tree) > .children,
:host(fzn-tree) .children-level {
  padding-left: 0.6125rem;
}
:host(fzn-tree) > .children .item {
  list-style-type: none;
  margin: 2px 0;
}
:host(fzn-tree) > .children .item > a {
  font-weight: 500;
  padding: 0 0.5rem;
  display: block;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  display: flex;
  opacity: 1;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
:host(fzn-tree) > .children .item > a .left {
  display: inline-flex;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
}
:host(fzn-tree) > .children .item > a .left > .icon {
  margin-right: 0.25rem;
}
:host(fzn-tree) > .children .item > a .left > .icon > .fa:first-child, :host(fzn-tree) > .children .item > a .left > .icon .far:first-child, :host(fzn-tree) > .children .item > a .left > .icon .fas:first-child {
  text-align: center;
  width: 1.5rem;
}
:host(fzn-tree) > .children .item > a .left > .label {
  text-overflow: ellipsis;
  overflow: hidden;
}
:host(fzn-tree) > .children .item > a > .right {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
}
:host(fzn-tree) > .children .item > a:hover {
  opacity: 1;
  background: #406DCE;
}
:host(fzn-tree) > .children .item > a:hover fzn-drawer-public-item-icon::part(icon) {
  width: 1.5rem;
}
:host(fzn-tree) > .children .item > a:active, :host(fzn-tree) > .children .item > a.active {
  background-color: transparent;
  background-image: linear-gradient(#020202, #101112);
  border-left: 2px solid #CEE61B;
}
:host(fzn-tree) > .children .item > a:active > .left .icon, :host(fzn-tree) > .children .item > a.active > .left .icon {
  color: #CEE61B;
}
:host(fzn-tree) > .children .item > a.active {
  cursor: default;
}
:host(fzn-tree) > .children.is-root:not(.has-top) .folder:first-child .folder-header {
  border-top: 0;
}
:host(fzn-tree) > .children .folder {
  margin: 2px 0;
}
:host(fzn-tree) > .children .folder .folder-header {
  display: flex;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  line-height: 2rem;
  padding: 0 0.5rem 0 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  border-left: 1px solid rgba(0, 0, 0, 0.25);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
:host(fzn-tree) > .children .folder .folder-header:hover {
  border-top-color: rgba(0, 0, 0, 0.55);
  border-bottom-color: rgba(0, 0, 0, 0.55);
  border-left-color: rgba(0, 0, 0, 0.55);
  background-color: rgba(255, 255, 255, 0.05);
}
:host(fzn-tree) > .children .folder .folder-header > .left i.fa.state {
  margin-right: 0.325rem;
  line-height: inherit;
}
:host(fzn-tree) > .children .folder .folder-header > .right {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
:host(fzn-tree) > .children .folder .folder-body {
  display: none;
  box-sizing: border-box;
  margin-bottom: 0;
}
:host(fzn-tree) > .children .folder.open > .folder-header:hover {
  border-bottom-color: rgba(0, 0, 0, 0.55);
}
:host(fzn-tree) > .children .folder.open > .folder-body {
  display: block;
}
:host(fzn-tree) > .children.is-root {
  padding-left: 0;
}
:host(fzn-tree) > .children.is-root .folder {
  margin: 0;
}
:host(fzn-tree) > .children.is-root .folder > .folder-header {
  display: flex;
  float: none;
  font-weight: bold;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
}
:host(fzn-tree) > .children.is-root .folder > .folder-header * {
  user-select: none;
}
:host(fzn-tree) > .children.is-root .folder:last-child > .folder-header {
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
:host(fzn-tree) > .children.is-root .folder:last-child > .folder-header:hover {
  border-bottom-color: rgba(0, 0, 0, 0.55);
}
:host(fzn-tree) > .children.is-root .folder.next-folder:not(.open) > .folder-header {
  border-bottom: rgba(0, 0, 0, 0);
}
:host(fzn-tree) > .children.is-root .folder.open > .folder-header {
  border-bottom-color: transparent;
}
:host(fzn-tree) > .children.is-root .folder.open > .folder-header:hover {
  border-bottom-color: rgba(0, 0, 0, 0.55);
}
:host(fzn-tree) > .children.is-root .item a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

:host(fzn-tree-item) {
  display: block;
}
:host(fzn-tree-item) * {
  user-select: none;
}
:host(fzn-tree-item) > a {
  font-weight: 500;
  padding: 0 0.5rem;
  display: block;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  display: flex;
  opacity: 1;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
:host(fzn-tree-item) > a.in-root {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
:host(fzn-tree-item) > a .left {
  display: inline-flex;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
}
:host(fzn-tree-item) > a .left > .icon {
  margin-right: 0.25rem;
}
:host(fzn-tree-item) > a .left > .icon > .fa:first-child, :host(fzn-tree-item) > a .left > .icon .far:first-child, :host(fzn-tree-item) > a .left > .icon .fas:first-child {
  text-align: center;
  width: 1.5rem;
}
:host(fzn-tree-item) > a .left > .label {
  text-overflow: ellipsis;
  overflow: hidden;
}
:host(fzn-tree-item) > a > .right {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
}
:host(fzn-tree-item) > a:hover {
  opacity: 1;
  background: #406DCE;
}
:host(fzn-tree-item) > a:hover fzn-drawer-public-item-icon::part(icon) {
  width: 1.5rem;
}
:host(fzn-tree-item) > a:active, :host(fzn-tree-item) > a.active {
  background-color: transparent;
  background-image: linear-gradient(#020202, #101112);
  border-left: 2px solid #CEE61B;
}
:host(fzn-tree-item) > a:active > .left .icon, :host(fzn-tree-item) > a.active > .left .icon {
  color: #CEE61B;
}
:host(fzn-tree-item) > a.active {
  cursor: default;
}`;
//# sourceMappingURL=tree.lit.css.js.map