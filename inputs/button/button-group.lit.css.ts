import { css } from 'lit';
export default css`:host {
  display: flex;
}
:host ::slotted(*) {
  flex-grow: 1;
  margin-right: 2px;
}
:host ::slotted(:last-child) {
  margin-right: 0;
}

:host([inline]) {
  display: inline-flex;
}`;
