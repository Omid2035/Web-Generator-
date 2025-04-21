import { LitElement, html } from 'lit';
import { bg, text, border, hover } from '../../templates/common/color.js';

export class Popup extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            showPopup: { type: Boolean, default: false }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this._hidePopup();
    }

    _closePopup() {
        this.showPopup = false;
    }

    _hidePopup() {
        setTimeout(() => {
            this._closePopup();
        }, 10000);
    }

    _handleClick() {
        this._closePopup();
    }

    render() {
        return html`
        <div id="submitPopup" class="${this.showPopup ? '' : 'hidden'} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-l-8 ${border('primary', '500')} p-8 rounded-lg shadow-2xl z-50 transform transition-transform duration-300 w-11/12 max-w-lg">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <svg class="w-8 h-8 ${text('primary', '500')} mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p class="${text('primary', '800')} font-bold text-2xl">Thank You for Choosing Us!</p>
                </div>
            </div>
            <p class="${text('gray', '700')} mb-6">Your application will be reviewed, and we'll contact you as soon as possible.</p>
            <button @click=${this._handleClick} class="${bg('primary', '500')} ${hover(bg, 'primary', '600')} text-white font-semibold py-3 px-6 rounded-md w-full">
                Got it
            </button>
        </div>
        `;
    }
}

customElements.define('popup-section', Popup);