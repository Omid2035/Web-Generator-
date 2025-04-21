import { LitElement, html } from 'lit';
import '../../components/contact-form.js';
import { getTemplateData } from '../../utils/templates.js';
import { text } from '../../templates/common/color.js';

export class Hero extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const heroData = getTemplateData('hero');
        
        return html`
        <section id="contact" class="relative py-16 pt-32 lg:pt-40">
            <!-- Background Image with Overlay -->
            <div id="hero-image" class="absolute inset-0 bg-cover bg-center brightness-50" style="background-image: url('${heroData.imageUrl}');">
            </div>

            <!-- Content Container -->
            <div class="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <div class="grid lg:grid-cols-2 gap-8 items-center">
                    <!-- Contact Form Card -->
                    <contact-form></contact-form>

                    <!-- Text Content -->
                    <div class="lg:order-last order-first">
                        <h1 class="text-4xl font-bold text-white mb-4">${heroData.title}</h1>
                        <p class="text-xl text-white/90 mb-8">${heroData.subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    }
}

customElements.define('hero-section', Hero);