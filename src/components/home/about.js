import { LitElement, html } from 'lit';
import { getTemplateData } from '../../utils/templates.js';

export class About extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const aboutData = getTemplateData('about');
        
        return html`
        <section class="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="flex-1 space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        ${aboutData.title}
                    </h1>

                    <div class="space-y-6">
                        <p class="text-lg text-gray-600">
                            ${aboutData.content1}
                        </p>

                        <p class="text-lg text-gray-600">
                            ${aboutData.content2}
                        </p>
                    </div>
                </div>

                <div class="flex-1">
                    <div class="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                        <img src="${aboutData.imageUrl}" alt="Team meeting" class="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('about-section', About);