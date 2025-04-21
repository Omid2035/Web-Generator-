import { LitElement, html, css } from 'lit';
import { bg, text, hover } from '../templates/common/color.js';
import { getTemplateData } from '../utils/templates.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export class Footer extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const footerData = getTemplateData('footer');
        
        return html`
        <footer class="${bg('gray', '800')} text-white py-12">
            <div class="max-w-6xl mx-auto px-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-semibold mb-4">${footerData.contactTitle}</h3>
                        <p>Email: <span class="company-email">${footerData.email}</span></p>
                        <p>Phone: <span class="company-phone">${footerData.phone}</span></p>
                        <p>Address: <span class="company-address">${footerData.address}</span></p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-4">${footerData.linksTitle}</h3>
                        <ul class="space-y-2">
                            ${footerData.links.map(link => html`
                                <li>
                                    <a 
                                        href="${link.href}" 
                                        class="${hover(text, 'primary', '300')}"
                                        ?target="${link.target || ''}"
                                    >
                                        ${link.text}
                                    </a>
                                </li>
                            `)}
                        </ul>
                    </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>${unsafeHTML(footerData.copyright)}</p>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('footer-section', Footer);