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

const TEMPLATE = "home-service";
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
            { text: "Our Process", href: "#process" },
            { text: "Why Choose Us", href: "#why-us" },
            { text: "Testimonials", href: "#testimonials" },
            { text: "FAQ", href: "#faq" }
        ],
        contactButton: {
            text: "Contact Us",
            href: "/form.html"
        }
    },
    contactForm: {
        title: "We Help Homeowners Stay on Schedule",
        subtitle: "Get reminders, offers, and service updates right to your phone.",
        fields: {
            name: "Full Name*",
            phone: "Phone Number*",
            email: "Email*",
            address: "Property Zip Code*",
            message: "Type of Service Needed (e.g., HVAC, Plumbing, Electrical)*"
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
        submitButton: "Get My Updates",
        successPopup: {
            title: "Thank You!",
            message: "Your application has been submitted successfully. We'll be in touch soon!",
            closeButton: "Close"
        }
    },
    hero: {
        title: "Timely Service. Trusted Updates.",
        subtitle: "We send quick, helpful texts so you can stay ahead of your maintenance and home repair needs.",
        ctaText: "Get My Updates",
        imageUrl: IMAGES["1"] // Keeping the default image, you can provide a new one if needed
    },
    process: {
        title: "How We Work",
        steps: [
            {
                icon: "sign-up",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "1. Sign up for updates",
                description: "Share your contact details to receive educational insights and helpful information."
            },
            {
                icon: "stay-informed",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
                title: "2. Stay ahead of issues",
                description: "We'll text you about seasonal maintenance, emergency alerts, and special offers."
            },
            {
                icon: "get-exclusive-resources",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "3. Get peace of mind",
                description: "Know what's happening with your home and how to act fast when needed."
            }
        ]
    },
    whyUs: {
        title: "Why Work With Us",
        features: [
            {
                icon: "local-expertise",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
                title: "Local Experts You Know",
                description: "We've been serving your neighborhood for years with reliable, honest work."
            },
            {
                icon: "simple-informative",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
                title: "Real-Time Service Updates",
                description: "From job scheduling to appointment reminders, our texts keep you informed."
            },
            {
                icon: "transparency-first",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
                title: "Clear, No-Stress Communication",
                description: "You get short, timely updates—no spam, no hassle."
            },
            {
                icon: "guidance-you-can-trust",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
                title: "Prepared & Protected",
                description: "We help you stay proactive about your home's safety, comfort, and value."
            }
        ],
        imageUrl: IMAGES["2"] // Keeping the default image
    },
    about: {
        title: `About ${companyName}`,
        content1: `${companyName} is a trusted home service provider specializing in HVAC, plumbing, electrical, and more. We use text messaging to keep you updated about service reminders, upcoming appointments, and special offers that matter to your household.`,
        content2: "Our mission is simple: deliver great work, clear communication, and lasting results. And now, we make staying connected even easier with real-time SMS updates.",
        imageUrl: IMAGES["3"] // Keeping the default image
    },
    banner: [
        {
            title: "🛠️ Your comfort, our priority.",
            subtitle: "We send service reminders and offers straight to your phone.",
            ctaText: "Stay Informed",
            phone: companyPhone
        },
        {
            title: "💡 Home maintenance made easy.",
            subtitle: "Get proactive with SMS alerts about your HVAC, plumbing, and more.",
            ctaText: "Get My Updates",
            phone: companyPhone
        },
        {
            title: "⚡ Stay ready, not reactive.",
            subtitle: "Be the first to know about seasonal offers and repair needs.",
            ctaText: "Receive Service Alerts",
            phone: companyPhone
        },
        {
            title: "🏡 Protect your home with a text.",
            subtitle: "We help you stay on top of what matters.",
            ctaText: "Start Now",
            phone: companyPhone
        }
    ],
    compare: {
        title: "Traditional Home Service vs. Modern SMS Updates (What We Offer)",
        backgroundImageUrl: IMAGES["4"], // Keeping the default image
        tableHeaders: {
            category: "Category",
            traditional: "Traditional Approach",
            modern: "Modern SMS Updates (What We Offer)"
        },
        rows: [
            {
                category: "Appointment Confirmations",
                traditional: "Phone calls, missed voicemails",
                modern: "Instant confirmation texts"
            },
            {
                category: "Service Reminders",
                traditional: "Mailed postcards or none",
                modern: "Timely SMS reminders for seasonal tune-ups"
            },
            {
                category: "Emergency Alerts",
                traditional: "Reactive, call-based",
                modern: "Real-time updates when issues arise"
            },
            {
                category: "Scheduling Updates",
                traditional: "Calls during work hours",
                modern: "Quick reschedule/update texts"
            },
            {
                category: "Promotions",
                traditional: "Flyers or door hangers",
                modern: "Exclusive mobile-only offers"
            },
            {
                category: "Feedback Requests",
                traditional: "Paper surveys",
                modern: "1-click SMS feedback links"
            },
            {
                category: "Technician Arrival",
                traditional: "Windowed times, no notice",
                modern: "Texts when tech is en route"
            },
            {
                category: "Follow-up Care",
                traditional: "Often forgotten",
                modern: "Reminders for filter changes, system checks"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        items: [
            {
                name: "Mark B.",
                location: "Apopka, FL",
                rating: 5,
                quote: "They texted me the day before my tune-up and reminded me to clear the area. Super helpful!",
                image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" // Keeping default image
            },
            {
                name: "Dana R.",
                location: "Clermont, FL",
                rating: 5,
                quote: "Great communication and timely updates. I wish all contractors did this.",
                image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=" // Keeping default image
            },
            {
                name: "Chris M.",
                location: "Lake Mary, FL",
                rating: 5,
                quote: "I got a reminder right before the cold snap—they saved me from a frozen pipe disaster.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gK6ZUwLdj6GtcfS6PnXF9E7Yhyff1ahzkQ&s" // Keeping default image
            },
            {
                name: "Samantha L.",
                location: "Winter Garden, FL",
                rating: 5,
                quote: "Texts about upcoming specials are great. I booked a discount A/C checkup last week!",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_PX0_vxY5L5BMZ_eikMhRyqbrkkzo6FGQ&s" // Keeping default image
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What kind of messages will I receive?",
                answer: "Service reminders, appointment updates, seasonal alerts, and exclusive offers."
            },
            {
                question: "Is this free?",
                answer: "Yes, totally free. We just want to keep you informed. Msg and data rates may apply."
            },
            {
                question: "How often will you text me?",
                answer: "1–2 times a week, depending on your service schedule and season."
            },
            {
                question: "How do I unsubscribe?",
                answer: "Reply STOP to cancel anytime."
            },
            {
                question: "Will you share my information?",
                answer: "Absolutely not. Your privacy matters to us and your number stays secure."
            }
        ]
    },
    footer: {
        contactTitle: "Contact Us",
        email: companyEmail, // Assuming companyEmail is still relevant
        phone: companyPhone, // Assuming companyPhone is still relevant
        address: companyAddress, // Assuming companyAddress is still relevant
        linksTitle: "Quick Links",
        links: [
            { text: "Our Process", href: "#process" },
            { text: "Why Choose Us", href: "#why-us" },
            { text: "Testimonials", href: "#testimonials" },
            { text: "FAQ", href: "#faq" },
            { text: "Privacy Policy", href: "privacy-policy.html", target: "_blank" }
        ],
        copyright: `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`
    }
};