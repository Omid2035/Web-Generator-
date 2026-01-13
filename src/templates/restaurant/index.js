import { text } from '../common/color.js';
import {
    companyName,
    companyEmail,
    companyPhone,
    companyAddress,
    companyLogo,
    companyImages,
    companyConsent,
    subTemplateName
} from '../common/index.js';
import { getImages } from '../common/images.js';
import { loadLogo } from '../common/logo.js';

const TEMPLATE = "restaurant";
const IMAGES = companyImages !== "%COMPANY_IMAGES%" ? JSON.parse(companyImages) : getImages(TEMPLATE, subTemplateName);

// Use the asset loader utility to load logos
let logo = null;
if (companyLogo && companyLogo !== "%COMPANY_LOGO%") {
    logo = loadLogo(TEMPLATE, companyLogo);
} else {
    logo = loadLogo(TEMPLATE, "1");
}

export default {
    template: TEMPLATE,
    navbar: {
        companyName: companyName,
        logo: logo,
        links: [
            { text: "Our Menu", href: "#menu" },
            { text: "Events", href: "#events" },
            { text: "Deals", href: "#deals" },
            { text: "Contact", href: "#contact" }
        ],
        contactButton: {
            text: "Join VIP Club",
            href: "/form.html"
        }
    },
    contactForm: {
        title: "We Help Diners Stay Connected",
        subtitle: "Be the first to hear about exclusive offers, events, and new menu drops.",
        fields: {
            name: "Full Name*",
            phone: "Phone Number*",
            email: "Email*",
            favoriteDish: "Favorite Dish or Menu Item",
            diningOccasion: "Occasion You Usually Dine With Us (e.g., Date Night, Family Dinner, etc.)"
        },
        consent: companyConsent !== "%COMPANY_CONSENT%" ? companyConsent : `By providing your phone number, you agree to receive SMS marketing, industry market updates, and outreach messages from "${companyName}". Message frequency may vary. Standard message and data rates may apply. Reply STOP to opt out. Reply HELP for help. We will not share mobile information with third parties for promotional or marketing purposes.`,
        privacyText: "For more information, please read our",
        privacyLink: {
            text: "Privacy Policy",
            href: "/privacy-policy.html"
        },
        termsLink: {
            text: "Terms & Conditions",
            href: "/terms.html"
        },
        submitButton: "Get My VIP Texts",
        successPopup: {
            title: "You're In!",
            message: "You've successfully joined our VIP text club. Get ready for delicious updates!",
            closeButton: "Close"
        }
    },
    hero: {
        title: "Get the flavor you love—first",
        subtitle: "We'll text you early access to specials, events, and rewards. No spam—just delicious updates.",
        ctaText: "Join Our Text Club",
        imageUrl: IMAGES["1"]
    },
    process: {
        title: "How We Work",
        steps: [
            {
                icon: "sign-up",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "Sign up for perks",
                description: "Complete the form to start receiving our best offers, event invites, and surprise treats."
            },
            {
                icon: "get-updates",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17l4 4 4-4m-4-5v9"></path></svg>`,
                title: "Get timely updates",
                description: "We'll text you about weekly specials, limited-time deals, and VIP-only experiences."
            },
            {
                icon: "enjoy-rewards",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7m-8 9l4-4 4 4M5 19l4-4-4-4"></path></svg>`,
                title: "Enjoy more of what you love",
                description: "Skip the noise. Our texts are short, sweet, and just for loyal guests like you."
            }
        ]
    },
    whyUs: {
        title: "Why Work With Us",
        features: [
            {
                icon: "local-love",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9.002 9.002 0 009-9 9.002 9.002 0 00-9-9 9.002 9.002 0 00-9 9 9.002 9.002 0 009 9z"></path></svg>`,
                title: "Locally Loved",
                description: "We're proud to serve the community with quality food, great service, and a personalized touch."
            },
            {
                icon: "fast-updates",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
                title: "Fast & Flavorful Updates",
                description: "From new dishes to secret menu drops—you'll hear it first."
            },
            {
                icon: "clear-communication",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
                title: "Always Clear",
                description: "We'll never flood your phone. You control your subscription, always."
            },
            {
                icon: "guest-first",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "Guest Experience First",
                description: "We care about more than great food. We're here to build real relationships with our guests."
            }
        ],
        imageUrl: IMAGES["2"]
    },
    about: {
        title: `About ${companyName}`,
        content1: `${companyName} is a local favorite dedicated to great food, warm service, and keeping our guests in the loop. Whether you're a regular or planning your first visit, we use SMS to keep you connected with everything that makes our restaurant special.`,
        content2: "From seasonal menus to exclusive offers, we're always cooking up something new—and we want our most loyal guests to be the first to know.",
        imageUrl: IMAGES["3"]
    },
    banner: [
        {
            title: "Great food, even better updates.",
            subtitle: "Be the first to know about new dishes, events, and offers.",
            ctaText: "Join Our Text Club",
            phone: companyPhone
        },
        {
            title: "Dining updates made simple.",
            subtitle: "From kitchen to phone—stay in the know with exclusive text updates.",
            ctaText: "Start Receiving Offers",
            phone: companyPhone
        },
        {
            title: "Perks that come with a ping.",
            subtitle: "Weekly specials and flash deals, straight to your phone.",
            ctaText: "Claim My Perks",
            phone: companyPhone
        },
        {
            title: "Stay informed, stay full.",
            subtitle: "We'll text what's hot, what's new, and what's exclusive.",
            ctaText: "Get Exclusive Access",
            phone: companyPhone
        }
    ],
    compare: {
        title: "Traditional Restaurant Communication vs. Modern Guest Messaging (What We Offer)",
        backgroundImageUrl: IMAGES["4"],
        tableHeaders: {
            category: "Category",
            traditional: "Traditional Approach",
            modern: "Modern Guest Messaging (What We Offer)"
        },
        rows: [
            {
                category: "Special Offers",
                traditional: "Print ads or word-of-mouth",
                modern: "Direct SMS with exclusive discounts"
            },
            {
                category: "Event Invitations",
                traditional: "Flyers or missed emails",
                modern: "Text reminders for live music, wine nights, etc."
            },
            {
                category: "Waitlist Updates",
                traditional: "Manual calls or guessing",
                modern: "Instant SMS alerts when your table is ready"
            },
            {
                category: "Seasonal Menus",
                traditional: "Website-only or not shared",
                modern: "SMS announcement for menu drops"
            },
            {
                category: "Rewards",
                traditional: "Loyalty cards",
                modern: "Digital perks shared via text"
            },
            {
                category: "Feedback Collection",
                traditional: "Comment cards",
                modern: "Quick feedback links via SMS"
            },
            {
                category: "Group Reservations",
                traditional: "Phone calls only",
                modern: "Confirmations and updates via text"
            },
            {
                category: "Consistency",
                traditional: "Unpredictable",
                modern: "Clear, timed, and relevant messaging"
            }
        ]
    },
    testimonials: {
        title: "What Our Guests Say",
        items: [
            {
                name: "Maria L.",
                location: "Orlando, FL",
                rating: 5,
                quote: "I love the texts! We always know when our favorite dishes are back or when there's live music.",
                image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
            },
            {
                name: "Daniel S.",
                location: "Kissimmee, FL",
                rating: 5,
                quote: "I signed up last month and already got two amazing deals we wouldn't have known about otherwise.",
                image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="
            },
            {
                name: "Tina G.",
                location: "Winter Park, FL",
                rating: 5,
                quote: "Perfect way to stay updated. I hate checking emails—texts are much better.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gK6ZUwLdj6GtcfS6PnXF9E7Yhyff1ahzkQ&s"
            },
            {
                name: "Leo H.",
                location: "Sanford, FL",
                rating: 5,
                quote: "The VIP texts are great. The early access to events is a nice touch.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_PX0_vxY5L5BMZ_eikMhRyqbrkkzo6FGQ&s"
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What kind of messages will I receive?",
                answer: "You'll get exclusive offers, event reminders, menu updates, and occasional rewards. No spam."
            },
            {
                question: "Is it really free to join?",
                answer: "Yes! Signing up is completely free. Message & data rates may apply."
            },
            {
                question: "How often will you text me?",
                answer: "Usually 1–2 times a week, depending on what's happening at the restaurant."
            },
            {
                question: "How do I unsubscribe?",
                answer: "Just reply STOP at any time to opt out of future messages."
            },
            {
                question: "Will you share my number?",
                answer: "No. Your information stays private and is used only for our guest messaging."
            }
        ]
    },
    footer: {
        contactTitle: "Stay Connected",
        email: companyEmail,
        phone: companyPhone,
        address: companyAddress,
        linksTitle: "Quick Links",
        links: [
            { text: "Our Menu", href: "#menu" },
            { text: "Events", href: "#events" },
            { text: "Deals", href: "#deals" },
            { text: "Contact Us", href: "#contact" },
            { text: "Privacy Policy", href: "privacy-policy.html", target: "_blank" }
        ],
        copyright: `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`
    }
};