// IMAGES = [
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

// function getImages(n) {
//     return [IMAGES[n], IMAGES[IMAGES.length - n]]
// }

// // Function to update all elements of a specific class with an environment variable
// function updateElementsByClass(className, envValue) {
//     const elements = document.getElementsByClassName(className);
//     Array.from(elements).forEach(element => {
//         element.innerText = envValue;
//     });
// }

// function replaceTailwindClasses() {
//     // Function to replace a single class
//     function replaceClass(element, className) {
//         element.classList.remove(className);
//         className = className.replace(/([a-z]+:)?([a-z]+-)blue(-[0-9]+)/g, `$1$2${process.env.COMPANY_COLOR}$3`);
//         element.classList.add(className);
//     }

//     // Traverse the DOM and replace Tailwind classes
//     function traverseDOM(node) {
//         // Replace classes for the current node
//         Array.from(node.classList).forEach((className) => {
//             if (className.includes('blue')) {
//                 replaceClass(node, className);
//             }
//         });

//         // Recursively traverse child nodes
//         node.childNodes.forEach((childNode) => {
//             if (childNode.nodeType === Node.ELEMENT_NODE) {
//                 traverseDOM(childNode);
//             }
//         });
//     }

//     // Start the traversal from the document root
//     traverseDOM(document.body);
// }

// // Function to initialize all dynamic content
// function initializeDynamicContent() {

//     replaceTailwindClasses()

//     // Map of class names to their corresponding environment variables
//     const contentMap = {
//         'company-name': process.env.COMPANY_NAME,
//         'company-email': process.env.COMPANY_EMAIL,
//         'company-phone': process.env.COMPANY_PHONE,
//         'company-address': process.env.COMPANY_ADDRESS,
//     };

//     // Update all mapped elements
//     Object.entries(contentMap).forEach(([className, envValue]) => {
//         // Check if environment variable exists
//         if (typeof envValue !== 'undefined') {
//             updateElementsByClass(className, envValue);
//         } else {
//             console.warn(`Environment variable for ${className} is not defined`);
//         }
//     });

//     // Set the document title to the company name
//     if (process.env.COMPANY_NAME) {
//         document.title = process.env.COMPANY_NAME;
//     }

//     if (process.env.COMPANY_LOGO) {
//         const elements = document.getElementsByClassName('nav-logo');
//         Array.from(elements).forEach(element => {
//             element.src = process.env.COMPANY_LOGO
//         })
//     }

//     if (process.env.COMPANY_IMAGE != undefined) {
//         const images = getImages(Number(process.env.COMPANY_IMAGE));
//         if (document.URL.includes('form')) {
//             document.getElementById('form-image').style.backgroundImage = `url(${images[0]})`;
//         } else {
//             document.getElementById('hero-image').style.backgroundImage = `url(${images[0]})`;
//             document.getElementById('compare-image').style.backgroundImage = `url(${images[1]})`;
// i        }

//     }

// }

// document.addEventListener("DOMContentLoaded", initializeDynamicContent);