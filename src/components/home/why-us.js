import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getTemplateData } from '../../utils/templates.js';
import { text, bg, hover, focus, ring } from '../../templates/common/color.js';

class WhyUsItem extends LitElement {
    static get properties() {
        return {
            icon: { type: String },
            iconSvg: { type: String },
            title: { type: String },
            description: { type: String }
        };
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <div class="flex items-start space-x-4 p-4 rounded-lg ${hover(bg, 'primary', '50')} transition-colors duration-200 cursor-pointer ${focus(ring, 'primary', '200')} focus-within:ring-2 focus:outline-none">
            <div class="flex-shrink-0">
                <div class="w-8 h-8 ${bg('primary', '100')} rounded-full flex items-center justify-center">
                    ${unsafeHTML(this.iconSvg)}
                </div>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-2">${this.title}</h3>
                <p class="text-gray-600">${this.description}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('why-us-item', WhyUsItem);
export class WhyUs extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const whyUsData = getTemplateData('whyUs');
        
        return html`
        <section id="why-us" class="py-16 ${bg('gray', '50')}">
            <div class="max-w-6xl mx-auto px-8">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <!-- Content Column -->
                    <div class="lg:w-1/2">
                        <h2 class="text-4xl font-bold mb-8">${whyUsData.title}</h2>
                        <div class="space-y-6 flex flex-col gap-1">
                            ${whyUsData.features.map(feature => html`
                                <why-us-item 
                                    icon="${feature.icon}"
                                    iconSvg="${feature.iconSvg}"
                                    title="${feature.title}"
                                    description="${feature.description}"
                                >
                                </why-us-item>
                            `)}
                        </div>
                    </div>
                    
                    <!-- Image Column -->
                    <div class="lg:w-1/2">
                        <img src="${whyUsData.imageUrl}" alt="Why Choose Us" class="rounded-lg shadow-xl">
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('why-us-section', WhyUs);

