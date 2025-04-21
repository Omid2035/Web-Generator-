// Import styles
import '../../global.css';

// Import the component
import '../../components/navbar.js';
import '../../components/home/hero.js';
import '../../components/home/process.js';
import '../../components/home/why-us.js';
import '../../components/home/banner.js';
import '../../components/home/about.js';
import '../../components/home/compare.js';
import '../../components/home/testimonials.js';
import '../../components/home/faqs.js';
import '../../components/footer.js';
import '../../components/home/popup.js';


// Import the template data
import { getTemplateData } from '../../utils/templates.js';
import { companyName } from '../../templates/common/index.js';

// Get the template data
const templateData = getTemplateData('banner');

const BANNERS = ["banner-1", "banner-2", "banner-3", "banner-4"];

BANNERS.forEach((banner, index) => {
    const bannerElement = document.getElementById(banner);
    const bannerData = templateData[index];
    const bannerComponent = document.createElement('banner-section');
    bannerComponent.bannerData = bannerData;
    bannerElement.appendChild(bannerComponent);
});

document.title = companyName;