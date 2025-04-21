import { LitElement, html } from 'lit';
import { bg, text, focus, ring, hover, border } from '../templates/common/color.js';
import { getTemplateData } from '../utils/templates.js';
import './home/popup.js';

export class ContactForm extends LitElement {
    static get properties() {
        return {
            showingPopup: { type: Boolean },
            popupTimer: { type: Object }
        };
    }

    constructor() {
        super();
        this.showingPopup = false;
        this.popupTimer = null;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        // Get form element
        const form = this.querySelector('#applicationForm');
        const phoneInput = this.querySelector('#phone-number');

        // Setup form submission
        if (form) {
            form.addEventListener('submit', this._handleSubmit.bind(this));
        }

        // Setup phone number formatting
        if (phoneInput) {
            phoneInput.addEventListener('input', () => this._formatUSANumber(phoneInput));
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clear any timers when component is removed
        if (this.popupTimer) {
            clearTimeout(this.popupTimer);
        }
    }

    _handleSubmit(e) {
        e.preventDefault();

        // Show success popup
        this._showPopup();

        // Reset the form
        e.target.reset();
    }

    _showPopup() {
        this.showingPopup = true;
        this.requestUpdate();

        // Auto-hide popup after 10 seconds
        this.popupTimer = setTimeout(() => {
            this._closePopup();
        }, 10000);
    }

    _closePopup() {
        this.showingPopup = false;
        this.requestUpdate();

        if (this.popupTimer) {
            clearTimeout(this.popupTimer);
            this.popupTimer = null;
        }
    }

    _formatUSANumber(input) {
        let value = input.value.replace(/\D/g, '');

        if (value.length >= 4 && value.length <= 14) {
            value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
        }

        if (value.length >= 9 && value.length <= 14) {
            value = value.slice(0, 9) + '-' + value.slice(9);
        }

        input.value = value.slice(0, 14);
    }

    render() {
        const formData = getTemplateData('contactForm');

        return html`
        <div class="w-full bg-white/95 backdrop-blur rounded-lg shadow-lg p-6">
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-900">${formData.title}</h2>
                <p class="text-lg font-semibold text-gray-900">${formData.subtitle}</p>
            </div>
            <form id="applicationForm" class="space-y-4">
                <div>
                    <input type="text" id="name" name="name" placeholder="${formData.fields.name}" class="w-full px-4 py-2 border ${border('gray', '300')} rounded-md focus:ring-2 ${focus(ring, 'primary', '500')} ${focus(border, 'primary', '500')}" required>
                </div>
                <div class="flex flex-row items-center border ${border('gray', '300')} rounded-md">
                    <label class="px-2 pr-3">+1</label>
                    <input type="text" id="phone-number" name="phone" placeholder="${formData.fields.phone}" class="w-full px-4 py-2 ${focus(ring, 'primary', '500')} ${focus(border, 'primary', '500')}" required>
                </div>
                <div>
                    <input type="email" id="email" name="email" placeholder="${formData.fields.email}" class="w-full px-4 py-2 border ${border('gray', '300')} rounded-md focus:ring-2 ${focus(ring, 'primary', '500')} ${focus(border, 'primary', '500')}" required>
                </div>
                <div>
                    <input type="text" id="address" name="address" placeholder="${formData.fields.address}" class="w-full px-4 py-2 border ${border('gray', '300')} rounded-md focus:ring-2 ${focus(ring, 'primary', '500')} ${focus(border, 'primary', '500')}" required>
                </div>
                <div>
                    <textarea id="message" name="message" rows="4" placeholder="${formData.fields.message}" class="w-full px-4 py-2 border ${border('gray', '300')} rounded-md focus:ring-2 ${focus(ring, 'primary', '500')} ${focus(border, 'primary', '500')}"></textarea>
                </div>
                <div class="text-sm px-1">
                    <input type="checkbox" name="consent" id="consent" value="consent" class="mr-1"> ${formData.consent}
                </div>
                <p class="text-sm">${formData.privacyText} <a target="_blank" href="${formData.privacyLink.href}" class="italic ${text('primary', '600')} font-semibold">${formData.privacyLink.text}</a> and <a target="_blank" href="${formData.termsLink.href}" class="italic ${text('primary', '600')} font-semibold">${formData.termsLink.text}</a>.</p>
                <button type="submit" class="w-full ${bg('primary', '600')} text-white px-6 py-3 rounded-md ${hover(bg, 'primary', '700')} transition-colors duration-200">
                    ${formData.submitButton}
                </button>
            </form>
        </div>

        ${this.showingPopup ? html`
        <!-- Success popup -->
            <popup-section showPopup></popup-section>
        ` : ''}
        `;
    }
}

customElements.define('contact-form', ContactForm);