import { LitElement, html } from 'lit';
import { getTemplateData } from '../../utils/templates.js';
import { bg, focus, ring, active } from '../../templates/common/color.js';

class TestimonialItem extends LitElement {
    static get properties() {
        return {
            testimonial: { type: Object }
        };
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <div class="testimonial-slide w-full flex-shrink-0 px-4">
            <div class="bg-white h-full p-8 rounded-lg shadow-lg flex flex-col">
                <div class="flex items-center mb-6">
                    <img src="${this.testimonial.image}" alt="${this.testimonial.name}" class="w-16 h-16 rounded-full object-cover">
                    <div class="ml-4">
                        <h4 class="font-semibold text-xl">${this.testimonial.name}</h4>
                        <p class="text-gray-600">${this.testimonial.location}</p>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="flex text-yellow-400 mb-2">
                        ${'★'.repeat(this.testimonial.rating)}
                    </div>
                    <p class="text-gray-600 italic">"${this.testimonial.quote}"</p>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('testimonial-item', TestimonialItem);

export class Testimonials extends LitElement {
    static get properties() {
        return {
            autoplayInterval: { type: Number },
            currentIndex: { type: Number }
        };
    }
    
    constructor() {
        super();
        this.autoplayInterval = 3000; // 5 seconds between slides
        this.currentIndex = 0;
        this.sliderTimer = null;
    }
    
    createRenderRoot() {
        return this;
    }

    render() {
        const testimonialsData = getTemplateData('testimonials');
        
        return html`
        <section id="testimonials" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-8">
                <h2 class="text-4xl font-bold text-center mb-12">${testimonialsData.title}</h2>

                <!-- Testimonials Slider Container -->
                <div class="testimonials-slider relative w-full h-[400px] overflow-hidden">
                    <div class="testimonials-track flex transition-transform duration-500 w-full h-full">
                        ${testimonialsData.items.map(testimonial => html`<testimonial-item class="w-full min-w-full" .testimonial="${testimonial}"></testimonial-item>`)}
                    </div>

                    <!-- Navigation Dots -->
                    <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        ${testimonialsData.items.map((_, index) => html`
                            <button class="w-3 h-3 rounded-full ${index === 0 ? bg('primary', '200') : 'bg-gray-300'} transition-colors duration-300 ${focus(ring, 'primary', '200')} ${active(bg, 'primary', '700')} focus:ring-2 focus:outline-none" data-index="${index}"></button>
                        `)}
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    firstUpdated() {
        this._initializeSlider();
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        // Clear the timer when component is removed
        if (this.sliderTimer) {
            clearInterval(this.sliderTimer);
            this.sliderTimer = null;
        }
    }

    _initializeSlider() {
        // Add slider functionality
        const track = this.querySelector('.testimonials-track');
        const dots = this.querySelectorAll('[data-index]');
        const testimonials = getTemplateData('testimonials').items;
        const totalSlides = testimonials.length;
        
        // Set initial active dot
        dots[0].classList.add(bg('primary', '600'));
        dots[0].classList.remove('bg-gray-300');

        // Add click handlers to dots - with pause and resume for autoplay
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                // Pause autoplay temporarily when user interacts
                this._pauseAutoplay();
                
                // Move to selected slide
                this.currentIndex = parseInt(dot.getAttribute('data-index'));
                this._updateSlider();
                
                // Resume autoplay after a delay
                setTimeout(() => this._startAutoplay(), 10000); // Longer pause after manual interaction
            });
        });
        
        // Add slider hover pause/resume
        const sliderContainer = this.querySelector('.testimonials-slider');
        sliderContainer.addEventListener('mouseenter', () => this._pauseAutoplay());
        sliderContainer.addEventListener('mouseleave', () => this._startAutoplay());

        // Method to update the slider position and dots
        this._updateSlider = () => {
            // Update transform to move to correct slide
            track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            
            // Update active dot
            dots.forEach((dot, i) => {
                if (i === this.currentIndex) {
                    dot.classList.add(bg('primary', '600'));
                    dot.classList.remove('bg-gray-300');
                } else {
                    dot.classList.add('bg-gray-300');
                    dot.classList.remove(bg('primary', '600'));
                }
            });
        };
        
        // Start the autoplay
        this._startAutoplay();
    }
    
    _startAutoplay() {
        // Clear any existing timer first
        this._pauseAutoplay();
        
        // Create new timer
        const testimonials = getTemplateData('testimonials').items;
        this.sliderTimer = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % testimonials.length;
            this._updateSlider();
        }, this.autoplayInterval);
    }
    
    _pauseAutoplay() {
        if (this.sliderTimer) {
            clearInterval(this.sliderTimer);
            this.sliderTimer = null;
        }
    }
}

customElements.define('testimonials-section', Testimonials);