import { LitElement, html } from 'lit';
import { getTemplateData } from '../../utils/templates.js';
import { text, bg, hover, focus, ring, active } from '../../templates/common/color.js';

export class Banner extends LitElement {
    static get properties() {
        return {
            index: { type: Number },
            bannerData: { type: Object }
        };
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.index = 0;
        this.bannerData = null;
    }

    connectedCallback() {
        super.connectedCallback();
        // If no banner data is provided, get it from template data
        if (!this.bannerData) {
            const bannerData = getTemplateData('banner');
            if (Array.isArray(bannerData)) {
                this.bannerData = bannerData[this.index % bannerData.length];
            } else {
                this.bannerData = bannerData;
            }
        }
    }

    render() {    
        if (!this.bannerData) return html``;
        
        return html`
        <section class="${bg('primary', '600')} py-12">
            <div class="max-w-6xl mx-auto px-8">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <!-- Left Side - Text -->
                    <div class="text-white">
                        <p class="text-2xl md:text-3xl font-bold mb-2">
                            ${this.bannerData.title}
                        </p>
                        <p class="text-lg">
                            ${this.bannerData.subtitle}
                        </p>
                    </div>

                    <!-- Right Side - CTA -->
                    <div class="space-y-4 md:text-right">
                        <a href="/form.html" class="bg-white ${text('primary', '600')} px-8 py-3 rounded-lg font-semibold text-lg ${hover(bg, 'primary', '50')} ${active(bg, 'primary', '100')} ${focus(ring, 'primary', '200')} focus:ring-2 focus:outline-none transition-colors duration-200 w-full md:w-auto md:ml-auto">
                            ${this.bannerData.ctaText}
                        </a>
                        <div class="text-white">
                            <p class="text-lg">or call us now</p>
                            <p class="text-2xl font-bold ${hover(text, 'primary', '100')}">
                                <span class="company-phone">${this.bannerData.phone}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('banner-section', Banner);