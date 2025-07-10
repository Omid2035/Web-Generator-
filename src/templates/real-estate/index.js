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

const TEMPLATE = "real-estate";
const IMAGES = companyImages !== "%COMPANY_IMAGES%" ? JSON.parse(companyImages) : getImages(TEMPLATE, subTemplateName);

let logo = loadLogo(TEMPLATE, companyLogo);

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
        title: "We Help Homeowners Stay Informed",
        subtitle: "Discover Real Estate Market Trends & Insights in Your Area",
        fields: {
            name: "Full Name*",
            phone: "Phone Number*",
            email: "Email*",
            address: "Property Address*",
            message: "Any Comments*"
        },
        consent: companyConsent !== "%COMPANY_CONSENT%" ? companyConsent : `By submitting this form and signing up for texts, you consent to receive recurring marketing text messages from "${companyName}" at the number provided, including messages sent by autodialer. Message frequency may vary. Reply HELP for help, STOP to cancel. Consent is not a condition of purchase. Msg and data rates may apply. We do not share mobile opt-in data or consent with any third parties.`,
        privacyText: "I have read and agree to the website's",
        privacyLink: {
            text: "privacy policy",
            href: "/privacy-policy.html"
        },
        termsLink: {
            text: "terms & conditions",
            href: "/terms.html"
        },
        submitButton: "Submit Application",
        successPopup: {
            title: "Thank You!",
            message: "Your application has been submitted successfully. We'll be in touch soon!",
            closeButton: "Close"
        }
    },
    hero: {
        title: "Get the insights you need—fast",
        subtitle: "Our experienced team delivers weekly real estate tips, neighborhood news, and personalized educational content to help you stay ahead in your local market.",
        ctaText: "Get Started",
        imageUrl: IMAGES["1"]
    },
    process: {
        title: "How We Work",
        steps: [
            {
                icon: "sign-up",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "1. Sign up for updates",
                description: "Complete the form to start receiving real estate market news and homeowner tips for your area."
            },
            {
                icon: "stay-informed",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
                title: "2. Stay informed",
                description: "We'll send you brief, helpful updates with info about pricing trends, selling timelines, and property strategies."
            },
            {
                icon: "get-exclusive-resources",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "3. Get exclusive resources",
                description: "Subscribers receive first access to neighborhood reports, webinars, and more — all free."
            }
        ]
    },
    whyUs: {
        title: "Why Work With Us",
        features: [
            {
                icon: "local-expertise",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
                title: "Local Expertise",
                description: "We're locals, not brokers. We know the market inside out and can offer tailored advice based on your needs."
            },
            {
                icon: "simple-informative",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
                title: "Simple & Informative",
                description: "No pressure, no offers. Just real estate tips and data to help you make smart decisions."
            },
            {
                icon: "transparency-first",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
                title: "Transparency First",
                description: "We clearly explain every strategy and update. You're always informed and in control."
            },
            {
                icon: "guidance-you-can-trust",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
                title: "Guidance You Can Trust",
                description: "Our team shares tools and suggestions tailored to your situation, whether you're planning, watching the market, or ready to take action."
            }
        ],
        imageUrl: IMAGES["2"]
    },
    about: {
        title: `About ${companyName}`,
        content1: `${companyName} is a real estate marketing brand dedicated to helping homeowners stay informed. We believe that education and transparency are the keys to success in real estate — whether you're selling now or just watching the market.`,
        content2: "In addition to buying properties, we work with some of the top agents in all areas of the United States. So wether you are looking to get a quick Timeline to Close on your property, or looking to put your property on the market, we are able to help with whatever your needs consist of.",
        imageUrl: IMAGES["3"]
    },
    banner: [
        {
            title: "Your property, your pace, your strategy.",
            subtitle: "Explore smart real estate solutions designed for today's market.",
            ctaText: "Explore Your Options",
            phone: companyPhone
        },
        {
            title: "Your property, your pace, your strategy.",
            subtitle: "Explore smart real estate solutions designed for today's market.",
            ctaText: "Explore Your Options",
            phone: companyPhone
        },
        {
            title: "Your property, your pace, your strategy.",
            subtitle: "Explore smart real estate solutions designed for today's market.",
            ctaText: "Explore Your Options",
            phone: companyPhone
        },
        {
            title: "Your property, your pace, your strategy.",
            subtitle: "Explore smart real estate solutions designed for today's market.",
            ctaText: "Explore Your Options",
            phone: companyPhone
        }
    ],
    compare: {
        title: "Traditional Home Sales vs. Modern Real Estate Strategies",
        backgroundImageUrl: IMAGES["4"],
        tableHeaders: {
            category: "Category",
            traditional: "Traditional Home Sale",
            modern: "Modern Seller Strategies (What We Share)"
        },
        rows: [
            {
                category: "Commissions / Fees",
                traditional: "Often 6% in agent fees",
                modern: "Learn how some homeowners avoid this through creative deals"
            },
            {
                category: "Who Pays Closing Cost?",
                traditional: "Seller typically pays 2%",
                modern: "Discover how buyers and sellers are sharing costs in 2024"
            },
            {
                category: "Inspection Contingency",
                traditional: "Required in most traditional contracts",
                modern: "Some sellers skip inspections using off-market strategies"
            },
            {
                category: "Appraisal Needed",
                traditional: "Yes, in most financed purchases",
                modern: "Learn alternatives used in cash or novation-based closings"
            },
            {
                category: "Time to Close",
                traditional: "30–90+ days",
                modern: "Explore faster closing strategies used by modern investors"
            },
            {
                category: "Number of Showings",
                traditional: "Multiple open houses",
                modern: "Discover how sellers minimize showings with pre-qualified buyers"
            },
            {
                category: "Closing Date",
                traditional: "Buyer picks after offer accepted",
                modern: "Some sellers negotiate flexible closing with creative buyers"
            },
            {
                category: "Who Pays for Repairs",
                traditional: "Often seller responsibility",
                modern: "Some strategies allow sellers to pass repairs to the buyer"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        items: [
            {
                name: "James T.",
                location: "Phoenix, AZ",
                rating: 5,
                quote: "I was amazed at how quick and easy the process was. Their guidance helped me understand my options in just 24 hours, and I felt confident moving forward. Couldn't be happier with the experience!",
                image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
            },
            {
                name: "Sarah Johnson",
                location: "Tampa, FL",
                rating: 5,
                quote: "I had no idea where to start, but they gave me clear, no-pressure insights about the market in my area. I felt educated and supported every step of the way.",
                image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="
            },
            {
                name: "Michael Brown",
                location: "Orlando, FL",
                rating: 5,
                quote: "They explained all the different routes homeowners are taking right now. I never felt pushed — just informed. Super helpful team!",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gK6ZUwLdj6GtcfS6PnXF9E7Yhyff1ahzkQ&s"
            },
            {
                name: "Emily Davis",
                location: "Jacksonville, FL",
                rating: 5,
                quote: "Their updates helped me see how my neighborhood is changing. I wasn't planning on doing anything immediately, but now I feel like I have options.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_PX0_vxY5L5BMZ_eikMhRyqbrkkzo6FGQ&s"
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What kind of messages will I receive?",
                answer: "You'll get real estate market updates, tips for homeowners, and educational insights. No offers, no spam."
            },
            {
                question: "Is this really free?",
                answer: "Yes! Our insights and resources are completely free to subscribers."
            },
            {
                question: "How often will you text me?",
                answer: "Message frequency varies, but we aim to send 1-2 texts per week, always packed with value."
            },
            {
                question: "How do I unsubscribe?",
                answer: "You can reply STOP at any time to opt out of future messages."
            },
            {
                question: "What types of properties do you buy?",
                answer: "We buy all types of properties—single-family homes, multi-family units, apartments, and even vacant land. No matter the size or condition, we're interested in making an offer."
            }
        ]
    },
    footer: {
        contactTitle: "Contact Us",
        email: companyEmail,
        phone: companyPhone,
        address: companyAddress,
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