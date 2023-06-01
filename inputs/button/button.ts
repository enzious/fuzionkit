import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { contextProvided } from '@lit-labs/context';

import { SizedMixin } from '../../base/sized-mixin.js';
import { VariantMixin } from '../../base/variant-mixin.js';
import { handleHrefClick } from '../../utils/router.js';
import { RouterContext, routerContext } from '../../router/context.js';

import normalizeStyles from '../../resources/css/normalize.css.js';

import styles from './button.lit.css.js';

const ButtonBase = VariantMixin<
  typeof LitElement
>(SizedMixin(LitElement), { defaultVariant: 'primary' });

@customElement('fzn-button')
export default class Button extends ButtonBase {
  static styles = [ normalizeStyles, styles ];

  @contextProvided({ context: routerContext })
  routerContext: RouterContext;

  @property({ attribute: true, type: Boolean, reflect: true })
  disabled?: boolean;

  @property({ attribute: true, type: String, reflect: true })
  href: string;

  @property({ attribute: true, type: String, reflect: true })
  routerHref?: string;

  @property({ attribute: true, type: String, reflect: true })
  target: '_blank' | '_parent' | '_self' | '_top';

  handleClick = (evt: MouseEvent): void => {
    if (this.disabled) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      evt.stopPropagation();
      return;
    }

    const { routerContext } = this;

    if (this.routerHref) {
      handleHrefClick(routerContext)(evt);
    }
  };

  render (): TemplateResult {
    const { disabled, handleClick, href, routerHref, target } = this;

    return (!href && !target && !routerHref)
      ? html`
        <button
          @click=${handleClick}
          ?disabled=${disabled}
        ><slot></slot></button>
      `
      : html`
        <a
          @click=${handleClick}
          ?disabled=${disabled}
          href=${routerHref || href || undefined}
          target=${target || undefined}
        >
          <slot></slot>
        </a>
      `;
  }
}
