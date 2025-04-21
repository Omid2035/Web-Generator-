import { LitElement, html } from 'lit';
import { getTemplateData } from '../../utils/templates.js';
import { bg, border, focus, ring, active } from '../../templates/common/color.js';

class FaqItem extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            question: { type: String },
            answer: { type: String },
            isOpen: { type: Boolean }
        };
    }
    
    constructor() {
        super();
        this.isOpen = false;
    }
    
    toggleAnswer() {
        this.isOpen = !this.isOpen;
        
        // Get the answer element and icon
        const answer = this.querySelector('.faq-answer');
        const icon = this.querySelector('svg');
        
        // Toggle visibility
        if (this.isOpen) {
            answer.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            answer.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
    
    firstUpdated() {
        // Add click event listener to the button
        const button = this.querySelector('.faq-button');
        button.addEventListener('click', () => this.toggleAnswer());
    }

    render() {
        return html`
            <div class="faq-item bg-gray-800 text-white border-[1px] border-gray-600 faq-item rounded-lg">
                <button class="faq-button w-full text-left px-6 py-4 ${focus(ring, 'primary', '200')} ${active(bg, 'primary', '900')} focus:outline-none">
                    <div class="flex justify-between items-center">
                        <span class="font-semibold">${this.question}</span>
                        <svg class="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </button>
                <div class="faq-answer hidden px-6 py-4 bg-white text-gray-600 rounded-b-lg">
                    <p>${this.answer}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('faq-item', FaqItem);

export class Faqs extends LitElement {
    createRenderRoot() {
        return this;
    }
    
    render() {
        const faqsData = getTemplateData('faqs');
        
        return html`
        <section id="faq" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-8">
                <h2 class="text-3xl font-bold text-center mb-12">${faqsData.title}</h2>
                <div class="space-y-4 flex flex-col gap-1">
                    ${faqsData.items.map(faq => html`
                        <faq-item .question=${faq.question} .answer=${faq.answer}></faq-item>
                    `)}
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('faqs-section', Faqs);