import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getTemplateData } from '../../utils/templates.js';
import { text, bg, focus, ring, hover, active } from '../../templates/common/color.js';

class ProcessStep extends LitElement {
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
        <div class="bg-white rounded-lg shadow-lg p-8 transform ${hover(bg, 'primary', '50')} ${active(bg, 'primary', '100')} transition-all duration-300 cursor-pointer ${focus(ring, 'primary', '200')} focus-within:ring-2 focus:outline-none">
            <div class="flex items-center justify-center w-16 h-16 ${bg('primary', '100')} rounded-full mb-6 mx-auto">
                ${unsafeHTML(this.iconSvg)}
            </div>
            <h3 class="text-xl font-bold text-center mb-4">${this.title}</h3>
            <p class="text-gray-600 text-center">${this.description}</p>
        </div>
        `;
    }
}

customElements.define('process-step', ProcessStep);

export class Process extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const processData = getTemplateData('process');
        
        return html`
        <section id="process" class="py-16 ${bg('gray', '50')}">
            <div class="max-w-6xl mx-auto px-8">
                <h2 class="text-4xl font-bold text-center mb-4">${processData.title}</h2>
                <div class="grid md:grid-cols-3 gap-8 mt-12">
                    ${processData.steps.map(step => html`
                        <process-step 
                            icon="${step.icon}"
                            iconSvg="${step.iconSvg}"
                            title="${step.title}"
                            description="${step.description}"
                        >
                        </process-step>
                    `)}
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('process-section', Process);