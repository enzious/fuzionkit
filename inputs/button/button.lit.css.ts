import { css } from 'lit';
export default css`* {
  box-sizing: border-box;
}

:host {
  display: inline-flex;
  flex-direction: row;
}
:host > button,
:host > a {
  flex-grow: 1;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  border: var(--fzn-button--border, 1px solid transparent);
  color: var(--fzn-button--color, #FFFFFF);
  background: var(--fzn-button--background, rgba(255, 255, 255, 0.08));
  padding: var(--fzn-button--padding, 0.375rem 0.75rem);
  line-height: var(--fzn-button--line-height, 1.5);
  border-radius: var(--fzn-button--border-radius, 0.25rem);
  font-size: var(--fzn-button--font-size, 1rem);
  height: var(--fzn-button--height, auto);
}
:host > button:hover,
:host > a:hover {
  background: var(--fzn-button--hover--background, rgba(255, 255, 255, 0.12));
  color: var(--fzn-button--hover--color, #FFFFFF);
  border: var(--fzn-button--hover--border, 1px solid transparent);
}
:host > button:active,
:host > a:active {
  background: var(--fzn-button--active--background, #4C5A67);
  color: var(--fzn-button--active--color, #DDDDDD);
  border: var(--fzn-button--hover--border, 1px solid transparent);
}

:host([variant=solid]) > button,
:host([variant=solid]) > a {
  background: var(--fzn-button--background, rgb(38, 38, 38));
}
:host([variant=solid]) > button:hover,
:host([variant=solid]) > a:hover {
  background: var(--fzn-button--hover--background, rgb(59, 59, 59));
}
:host([variant=solid]) > button:active,
:host([variant=solid]) > a:active {
  background: var(--fzn-button--active--background, rgb(32, 32, 32));
}

:host([variant=solid-success]) > button,
:host([variant=solid-success]) > a {
  border: var(--fzn-button--border, 1px solid #CEE61B);
  background: var(--fzn-button--background, #CEE61B);
  color: var(--fzn-button--active--color, #121212);
}
:host([variant=solid-success]) > button:hover,
:host([variant=solid-success]) > a:hover {
  border: var(--fzn-button--hover--border, 1px solid #CEE61B);
  background: var(--fzn-button--hover--background, #DAEA62);
}
:host([variant=solid-success]) > button:active,
:host([variant=solid-success]) > a:active {
  background: var(--fzn-button--active--background, #CEE61B);
}

:host([variant=success]) > button,
:host([variant=success]) > a {
  border: var(--fzn-button--border, 1px solid #CEE61B);
  background: var(--fzn-button--background, transparent);
}
:host([variant=success]) > button:hover,
:host([variant=success]) > a:hover {
  border: var(--fzn-button--hover--border, 1px solid #CEE61B);
  background: var(--fzn-button--hover--background, rgba(255, 255, 255, 0.08));
}
:host([variant=success]) > button:active,
:host([variant=success]) > a:active {
  background: var(--fzn-button--active--background, #CEE61B);
  color: var(--fzn-button--active--color, #121212);
}

:host([variant=danger]) > button,
:host([variant=danger]) > a {
  border: var(--fzn-button--border, 1px solid #E74C3C);
  background: var(--fzn-button--background, transparent);
}
:host([variant=danger]) > button:hover,
:host([variant=danger]) > a:hover {
  border: var(--fzn-button--hover--border, 1px solid #E74C3C);
  background: var(--fzn-button--hover--background, #E74C3C);
}
:host([variant=danger]) > button:active,
:host([variant=danger]) > a:active {
  background: var(--fzn-button--active--background, #c13f31);
  color: var(--fzn-button--active--color, #FFFFFF);
}

:host([disabled]) > button, :host([disabled]) > button:hover,
:host([disabled]) > a,
:host([disabled]) > a:hover {
  cursor: default;
  border: var(--fzn-button--disabled--border, 1px solid rgba(255, 255, 255, 0.08));
  background: var(--fzn-button--disabled--background, rgba(0, 0, 0, 0.35));
  color: var(--fzn-button--disabled--color, rgba(255, 255, 255, 0.4));
}

:host([size=xs]) > button,
:host([size=xs]) > a {
  padding: var(--fzn-button--padding, 0.125rem 0.25rem);
  font-size: var(--fzn-button--font-size, 0.75rem);
  line-height: var(--fzn-button--line-height, 1.5);
  border-radius: var(--fzn-button--border-radius, 0.2rem);
}

:host([size=s]) > button,
:host([size=s]) > a {
  padding: var(--fzn-button--padding, 0.25rem 0.5rem);
  font-size: var(--fzn-button--font-size, 0.875rem);
  line-height: var(--fzn-button--line-height, 1.5);
  border-radius: var(--fzn-button--border-radius, 0.2rem);
  height: var(--fzn-button--height, 30px);
}

:host([size=l]) > button,
:host([size=l]) > a {
  padding: var(--fzn-button--padding, 0.5rem 1rem);
  font-size: var(--fzn-button--font-size, 1.25rem);
  line-height: var(--fzn-button--line-height, 1.5);
  border-radius: var(--fzn-button--border-radius, 0.3rem);
}`;
