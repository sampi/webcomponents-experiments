import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';
export { constants, helpers } from './utils';

export function customElementDefineHelper(name, component) {
	if (!window.customElements.get(name)) {
		window.customElements.define(name, component);
	}
}

export class TSElement extends LitElement {
	static get styles() {
		return unsafeCSS(commonCSS);
	}

	static get properties() {
		return {
			busy: { type: String, reflect: true }
		};
	}

	get bodyHasRTL() {
		return document.body.getAttribute('dir') === 'rtl';
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';
