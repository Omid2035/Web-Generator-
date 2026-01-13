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

const TEMPLATE = "local-stores";
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
        title: "We Help You Stay in the Know",
        subtitle: "Get early access to sales, new arrivals, and VIP-only promos.",
        fields: {
            name: "Full Name*",
            phone: "Phone Number*",
            email: "Email*",
            address: "Favorite Product or Category*",
            message: "Birthday or Special Occasion Month*"
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
        submitButton: "Join the VIP List",
        successPopup: {
            title: "You're In!",
            message: "You've successfully joined our VIP list. Get ready for exclusive perks!",
            closeButton: "Close"
        }
    },
    hero: {
        title: "Be first in line for local deals",
        subtitle: "We'll send you exclusive offers, product launches, and store updates straight to your phone.",
        ctaText: "Join the VIP List",
        imageUrl: IMAGES["1"]
    },
    process: {
        title: "How We Work",
        steps: [
            {
                icon: "sign-up",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "1. Sign up for updates",
                description: "Fill out the form to join our VIP text list."
            },
            {
                icon: "stay-informed",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
                title: "2. Get exclusive alerts",
                description: "We'll send you early access to sales, product drops, and in-store events."
            },
            {
                icon: "get-exclusive-resources",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "3. Shop smarter",
                description: "Enjoy perks and promos others miss, without ever checking your email."
            }
        ]
    },
    whyUs: {
        title: "Why Shop With Us",
        features: [
            {
                icon: "local-expertise",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
                title: "Locally Owned & Loved",
                description: "We care about our customers and community, and we want to treat you like VIPs."
            },
            {
                icon: "simple-informative",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
                title: "Quick, Fun Updates",
                description: "We'll keep it light, useful, and only send what you want to know."
            },
            {
                icon: "transparency-first",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
                title: "Clear & Simple Communication",
                description: "You control your messages. Opt in and out anytime."
            },
            {
                icon: "guidance-you-can-trust",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
                title: "Made for Busy Shoppers",
                description: "We get it—you're on the go. Our texts help you never miss a deal."
            }
        ],
        imageUrl: IMAGES["2"]
    },
    
    about: {
        title: `About ${companyName}`,
        content1: `${companyName} is a neighborhood favorite offering great finds, seasonal collections, and personalized service. From stylish apparel to must-have pet goods, we make shopping local more rewarding.`,
        content2: "We send exclusive text updates so our best customers can shop smarter, save more, and stay in the loop—without needing to scroll social media or email.",
        imageUrl: IMAGES["3"]
    },
    banner: [
        {
            title: "Be the first to shop the best.",
            subtitle: "New collections and top deals—straight to your phone.",
            ctaText: "Join the VIP List",
            phone: companyPhone
        },
        {
            title: "More perks, less effort.",
            subtitle: "Sign up for exclusive deals you won't see anywhere else.",
            ctaText: "Start Receiving Offers",
            phone: companyPhone
        },
        {
            title: "Style, treats, and savings.",
            subtitle: "From salons to boutiques to pet shops—we've got something for you.",
            ctaText: "Get My Perks",
            phone: companyPhone
        },
        {
            title: "Retail therapy, simplified.",
            subtitle: "Stay informed and never miss a local deal again.",
            ctaText: "Text Me Updates",
            phone: companyPhone
        }
    ],
    compare: {
        title: "Traditional Retail Marketing vs. VIP SMS Club (What We Offer)",
        backgroundImageUrl: IMAGES["4"],
        tableHeaders: {
            category: "Category",
            traditional: "Traditional Retail",
            modern: "VIP SMS Club (What We Offer)"
        },
        rows: [
            {
                category: "Sale Alerts",
                traditional: "Posters, word-of-mouth",
                modern: "Instant texts before sales begin"
            },
            {
                category: "New Arrivals",
                traditional: "Seen only in-store",
                modern: "Sneak peeks via SMS"
            },
            {
                category: "Birthday Offers",
                traditional: "Printed coupons",
                modern: "Text-exclusive birthday perks"
            },
            {
                category: "In-Store Events",
                traditional: "Missed or low turnout",
                modern: "SMS invitations + reminders"
            },
            {
                category: "Loyalty Updates",
                traditional: "Stamp cards",
                modern: "Digital loyalty offers via text"
            },
            {
                category: "Customer Feedback",
                traditional: "Rarely collected",
                modern: "Fast surveys via text message"
            },
            {
                category: "Last-Minute Deals",
                traditional: "Missed unless in-store",
                modern: "Flash deal alerts in real time"
            },
            {
                category: "Personal Connection",
                traditional: "Basic checkout",
                modern: "Personalized promos & updates"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        items: [
            {
                name: "Kayla M.",
                location: "Winter Park, FL",
                rating: 5,
                quote: "The text club is my secret weapon for snagging sales before everyone else!",
                image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
            },
            {
                name: "Renee T.",
                location: "Orlando, FL",
                rating: 5,
                quote: "I get updates about new arrivals right when they drop. It makes me feel like an insider.",
                image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="
            },
            {
                name: "Mason J.",
                location: "Oviedo, FL",
                rating: 5,
                quote: "They texted me about a flash sale and I saved 40%—I'm hooked.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gK6ZUwLdj6GtcfS6PnXF9E7Yhyff1ahzkQ&s"
            },
            {
                name: "Talia B.",
                location: "Sanford, FL",
                rating: 5,
                quote: "So much easier than checking email. I love being part of the VIP group.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_PX0_vxY5L5BMZ_eikMhRyqbrkkzo6FGQ&s"
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What kind of messages will I receive?",
                answer: "Sales, promos, event reminders, new product announcements, and rewards."
            },
            {
                question: "Is this really free?",
                answer: "Yes! There's no cost to join. Msg and data rates may apply."
            },
            {
                question: "How often will you text me?",
                answer: "1–2 times a week depending on promotions and product launches."
            },
            {
                question: "How do I unsubscribe?",
                answer: "Reply STOP at any time."
            },
            {
                question: "Will you share my info?",
                answer: "Never. Your data stays private and is only used for messages from our store."
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
    },
};