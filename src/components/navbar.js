import { LitElement, html } from 'lit';
import { text, bg, hover  } from '../templates/common/color.js';
import { getTemplateData } from '../utils/templates.js';

export class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      name: { type: String },
      mobileMenuOpen: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.mobileMenuOpen = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    // Add event listener for mobile menu
    this.querySelector('.mobile-menu-button').addEventListener('click', () => {
      this.toggleMobileMenu();
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const mobileMenu = this.querySelector('.mobile-menu');
    if (this.mobileMenuOpen) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }

  _getLogoPath() {
    const navbarData = getTemplateData('navbar');
    return navbarData.logo;
  }

  render() {
    const navbarData = getTemplateData('navbar');
    const logoPath = this._getLogoPath();

    return html`
      <nav class="bg-white shadow-lg fixed w-full py-2 lg:py-4 z-30">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center max-w-[70%] md:max-w-none">
                    <a href="/index.html" class="flex items-center py-2">
                        <span class="${text('gray', '600')} text-lg flex flex-row font-bold items-center gap-1 sm:gap-2">
                            <img class="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain transition-all duration-300" src="${logoPath}" alt="Logo"> 
                            <span class="text-xs sm:text-sm md:text-base lg:text-lg">
                              <span class="block sm:block md:block company-name">${navbarData.companyName}</span>
                            </span>
                        </span>
                    </a>
                </div>
                <div class="hidden md:flex flex-row items-center space-x-2 lg:space-x-6">
                    <div class="flex items-center space-x-1 lg:space-x-2">
                        ${navbarData.links && navbarData.links.map(link => html`
                            <a href="${link.href}" class="py-2 px-1 lg:py-4 lg:px-2 ${text('gray', '500')} ${hover(text, 'gray', '900')} text-xs sm:text-sm lg:text-base">${link.text}</a>
                        `)}
                    </div>
                    <a href="${navbarData.contactButton?.href || '/form.html'}" class="py-1 px-2 lg:py-2 lg:px-4 ${bg('primary', '600')} text-white text-xs sm:text-sm lg:text-base rounded ${hover(bg, 'primary', '500')} transition duration-300">${navbarData.contactButton?.text || 'Contact Us'}</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button class="mobile-menu-button p-2" aria-label="Menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="mobile-menu hidden md:hidden overflow-hidden transition-all duration-300">
            ${navbarData.links && navbarData.links.map(link => html`
                <a href="${link.href}" class="block py-2 px-4 text-sm ${hover(bg, 'gray', '200')}">${link.text}</a>
            `)}
            <a href="${navbarData.contactButton?.href || '/form.html'}" class="block py-2 px-4 text-sm ${bg('primary', '600')} text-white ${hover(bg, 'primary', '500')}">${navbarData.contactButton?.text || 'Contact Us'}</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);

