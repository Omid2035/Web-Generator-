// Company information placeholders that get replaced by the build process
export const templateName = "%TEMPLATE_NAME%";
export const companyName = "%COMPANY_NAME%";
export const companyEmail = "%COMPANY_EMAIL%";
export const companyPhone = "%COMPANY_PHONE%";
export const companyAddress = "%COMPANY_ADDRESS%";
export const companyLogo = "%COMPANY_LOGO%"; // Logo index
export const companyImage = "%COMPANY_IMAGE%"; // Image index
export const companyColor = "%COMPANY_COLOR%"; // Color scheme (blue, red, green, purple, etc.)
export const companyConsent = "%COMPANY_CONSENT%"; // Consent text

// Export all company info as a single object
export const companyInfo = {
    name: companyName,
    email: companyEmail,
    phone: companyPhone,
    address: companyAddress,
    logo: companyLogo,
    image: companyImage,
    color: companyColor,
    consent: companyConsent
};

export default companyInfo;