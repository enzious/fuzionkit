import { consume } from '@lit/context';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router, routerContext } from './context.js';

@customElement('fzn-redirect')
export class Redirect extends LitElement {
  @consume({ context: routerContext })
  router: Router;

  @property({ attribute: true, type: String, reflect: true })
  to: string;

  connectedCallback(): void {
    super.connectedCallback();
    const { router, to } = this;

    router?.navigate(to, { replace: true });
  }

  render(): unknown {
    return null;
  }
}
