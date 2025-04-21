// Import all available templates
import { templateName } from '../templates/common/index.js';
import propertyTemplate from '../templates/property/index.js';
import homeTemplate from '../templates/home/index.js';

const templates = {
  property: propertyTemplate,
  home: homeTemplate,
};

// Function to get current template based on templateName
function getCurrentTemplate() {
  return templates[templateName] || templates.property; // Default to property template
}

// Function to get template data for a specific section
export function getTemplateData(section) {
  const template = getCurrentTemplate();
  return template[section] || {};
}

// Export the entire template for direct access if needed
export default getCurrentTemplate();