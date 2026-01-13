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

const TEMPLATE = "medical";
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
        title: "We Help Patients Stay Informed",
        subtitle: "Stay up to date with appointment reminders, office updates, and wellness tips",
        fields: {
            name: "Full Name*",
            phone: "Phone Number*",
            email: "Email*",
            appointmentDate: "Preferred Appointment Date*",
            message: "Reason for Visit / Message*"
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
        submitButton: "Submit Request",
        successPopup: {
            title: "Thank You!",
            message: "Your request has been submitted successfully. We'll be in touch soon!",
            closeButton: "Close"
        }
    },
    hero: {
        title: "Get the updates you need—fast",
        subtitle: "Our friendly staff uses SMS to send you appointment confirmations, reminders, and health-related updates so you stay in control of your schedule and well-being.",
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
                description: "Complete the form to receive appointment reminders, office updates, and occasional health tips from our staff."
            },
            {
                icon: "stay-informed",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
                title: "2. Stay informed",
                description: "We'll send you helpful SMS updates about your appointments, wellness reminders, and important clinic notifications."
            },
            {
                icon: "get-exclusive-resources",
                iconSvg: `<svg class="w-8 h-8 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "3. Get priority care info",
                description: "Subscribers get early access to scheduling openings, new services, and seasonal wellness alerts — all free."
            }
        ]
    },
    whyUs: {
        title: "Why Work With Us",
        features: [
            {
                icon: "local-expertise",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
                title: "Compassionate Local Care",
                description: "We're a part of your community—our team understands the health needs and lifestyles of local patients just like you."
            },
            {
                icon: "simple-informative",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
                title: "Simple & Supportive",
                description: "No pressure, no fluff. Just helpful reminders, health updates, and wellness tips to support your care journey."
            },
            {
                icon: "transparency-first",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
                title: "Clear & Transparent",
                description: "We communicate clearly and respectfully. You'll always know what to expect, and how to stay on top of your appointments and treatments."
            },
            {
                icon: "guidance-you-can-trust",
                iconSvg: `<svg class="w-5 h-5 ${text('primary', '600')}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
                title: "Care You Can Count On",
                description: "From the front desk to your provider, our team shares advice and updates that help you feel confident and informed—every step of the way."
            }
        ],
        imageUrl: IMAGES["2"]
    },
    about: {
        title: `About ${companyName}`,
        content1: `${companyName} is a local healthcare provider dedicated to helping patients stay informed, supported, and on schedule. We believe that clear communication and proactive updates are key to delivering excellent care—whether you're visiting us for a routine check-up or specialized treatment.`,
        content2: "In addition to compassionate care, we offer SMS updates to ensure you never miss an appointment, new service, or wellness reminder. Our team is here to keep you informed and confident every step of the way.",
        imageUrl: IMAGES["3"]
    },
    banner: [
        {
            title: "Your health, your schedule, your care.",
            subtitle: "Explore modern, patient-centered updates from your trusted local provider.",
            ctaText: "Explore Appointment Options",
            phone: companyPhone
        },
        {
            title: "Your health, your schedule, your care.",
            subtitle: "Explore modern, patient-centered updates from your trusted local provider.",
            ctaText: "Explore Appointment Options",
            phone: companyPhone
        },
        {
            title: "Your health, your schedule, your care.",
            subtitle: "Explore modern, patient-centered updates from your trusted local provider.",
            ctaText: "Explore Appointment Options",
            phone: companyPhone
        },
        {
            title: "Your health, your schedule, your care.",
            subtitle: "Explore modern, patient-centered updates from your trusted local provider.",
            ctaText: "Explore Appointment Options",
            phone: companyPhone
        }
    ],
    compare: {
        title: "Traditional Communication vs. Modern Patient Messaging",
        backgroundImageUrl: IMAGES["4"],
        tableHeaders: {
            category: "Category",
            traditional: "Traditional Communication",
            modern: "Modern Patient Messaging (What We Offer)"
        },
        rows: [
            {
                category: "Appointment Reminders",
                traditional: "Phone calls or mailed reminders",
                modern: "Fast, direct SMS reminders to your phone"
            },
            {
                category: "Last-Minute Updates",
                traditional: "Often missed or delayed",
                modern: "Real-time texts for reschedules or urgent alerts"
            },
            {
                category: "Waitlist Management",
                traditional: "Manual calls, inconsistent",
                modern: "Automated SMS notifications for open slots"
            },
            {
                category: "Health Tips & Education",
                traditional: "Newsletters, flyers",
                modern: "Bite-sized SMS health tips and seasonal advice"
            },
            {
                category: "Pre-Visit Instructions",
                traditional: "Given only during scheduling",
                modern: "Sent directly to your phone before your appointment"
            },
            {
                category: "No-Show Reduction",
                traditional: "High due to poor communication",
                modern: "SMS reminders significantly reduce missed appointments"
            },
            {
                category: "New Services or Events",
                traditional: "Word-of-mouth or email spam",
                modern: "Timely texts about relevant care updates and promos"
            },
            {
                category: "Patient Engagement",
                traditional: "Low, hard to track",
                modern: "Quick, interactive SMS prompts for feedback and care follow-up"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        items: [
            {
                name: "Amanda R.",
                location: "Tampa, FL",
                rating: 5,
                quote: "I always missed reminder calls, but their text system keeps me on track with my appointments. It's simple, helpful, and makes my visits stress-free.",
                image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
            },
            {
                name: "James T.",
                location: "Orlando, FL",
                rating: 5,
                quote: "Getting my pre-visit instructions by text was a game changer. I felt more prepared walking into the office and appreciated how clear the communication was.",
                image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="
            },
            {
                name: "Carla M.",
                location: "Sarasota, FL",
                rating: 5,
                quote: "They make it so easy to reschedule or confirm. I used to dread calling the office, but now I just reply to a message—it's fast and efficient.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gK6ZUwLdj6GtcfS6PnXF9E7Yhyff1ahzkQ&s"
            },
            {
                name: "Miguel V.",
                location: "Jacksonville, FL",
                rating: 5,
                quote: "Their messages help me remember my annual checkups and flu shots. I love that they're focused on prevention and keeping patients informed.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_PX0_vxY5L5BMZ_eikMhRyqbrkkzo6FGQ&s"
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What kind of messages will I receive?",
                answer: "You'll get appointment reminders, scheduling updates, seasonal health tips, and other helpful updates from our medical office. No spam—just what matters to your care."
            },
            {
                question: "Is this really free?",
                answer: "Yes! Receiving messages is free, and there are no hidden charges. Message and data rates may apply based on your carrier."
            },
            {
                question: "How often will you text me?",
                answer: "Message frequency varies based on your care schedule, but typically 1–2 texts per week."
            },
            {
                question: "How do I unsubscribe?",
                answer: "You can reply STOP at any time to stop receiving messages from us."
            },
            {
                question: "Will you share my number or information?",
                answer: "Never. Your contact info is secure and used solely to communicate with you as a patient of our office."
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