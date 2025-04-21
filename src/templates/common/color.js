// Import the companyColor from common/index.js
import { companyColor } from './index.js';

// Color scheme definition
export const colorScheme = {
    primary: {
        50: `${companyColor}-50`,
        100: `${companyColor}-100`,
        200: `${companyColor}-200`,
        300: `${companyColor}-300`,
        400: `${companyColor}-400`,
        500: `${companyColor}-500`,
        600: `${companyColor}-600`,
        700: `${companyColor}-700`,
        800: `${companyColor}-800`,
        900: `${companyColor}-900`
    },
    success: {
        50: 'green-50',
        100: 'green-100',
        200: 'green-200',
        300: 'green-300',
        400: 'green-400',
        500: 'green-500',
        600: 'green-600',
        700: 'green-700',
        800: 'green-800',
        900: 'green-900'
    },
    danger: {
        50: 'red-50',
        100: 'red-100',
        200: 'red-200',
        300: 'red-300',
        400: 'red-400',
        500: 'red-500',
        600: 'red-600',
        700: 'red-700',
        800: 'red-800',
        900: 'red-900'
    },
    gray: {
        50: 'gray-50',
        100: 'gray-100',
        200: 'gray-200',
        300: 'gray-300',
        400: 'gray-400',
        500: 'gray-500',
        600: 'gray-600',
        700: 'gray-700',
        800: 'gray-800',
        900: 'gray-900'
    }
};

// Basic color functions that return tailwind classes
export function text(color = 'primary', shade = '600') {
    return `text-${colorScheme[color][shade]}`;
}

export function bg(color = 'primary', shade = '600') {
    return `bg-${colorScheme[color][shade]}`;
}

export function border(color = 'primary', shade = '600') {
    return `border-${colorScheme[color][shade]}`;
}

export function ring(color = 'primary', shade = '200') {
    return `ring-${colorScheme[color][shade]}`;
}

export function outline(color = 'primary', shade = '600') {
    return `outline-${colorScheme[color][shade]}`;
}

// State functions
export function focus(fn, color = 'primary', shade) {
    // For functions like focus(ring('primary', '100'))
    if (typeof fn === 'string') {
        return `focus:${fn}`;
    }

    // For functions like focus(ring, 'primary', '100')
    const defaultShades = {
        bg: '50',
        text: '700',
        border: '400',
        ring: '200',
        outline: '600'
    };

    const fnName = fn.name;
    const useShade = shade || defaultShades[fnName] || '600';

    return `focus:${fnName}-${colorScheme[color][useShade]}`;
}

// Hover functions
export function hover(fn, color = 'primary', shade) {
    // For functions like hover(bg('primary', '100'))
    if (typeof fn === 'string') {
        return `hover:${fn}`;
    }

    // For functions like hover(bg, 'primary', '100')
    const defaultShades = {
        bg: '50',
        text: '100',
        border: '300',
        ring: '300',
        outline: '400'
    };

    const fnName = fn.name;
    const useShade = shade || defaultShades[fnName] || '100';

    return `hover:${fnName}-${colorScheme[color][useShade]}`;
}

// Active state functions
export function active(fn, color = 'primary', shade) {
    // For functions like active(bg('primary', '100'))
    if (typeof fn === 'string') {
        return `active:${fn}`;
    }
    
    // For functions like active(bg, 'primary', '100')
    const defaultShades = {
        bg: '700',
        text: '900',
        border: '500',
        ring: '400',
        outline: '700'
    };
    
    const fnName = fn.name;
    const useShade = shade || defaultShades[fnName] || '700';
    
    return `active:${fnName}-${colorScheme[color][useShade]}`;
}

// Function to get full class string based on type and shade
export function getColorClass(type, color = 'primary', shade = '600') {
    switch (type) {
        case 'text':
            return text(color, shade);
        case 'bg':
            return bg(color, shade);
        case 'border':
            return border(color, shade);
        case 'ring':
            return ring(color, shade);
        case 'outline':
            return outline(color, shade);
        case 'hover:text':
            return hover(text, color, shade);
        case 'hover:bg':
            return hover(bg, color, shade);
        case 'hover:border':
            return hover(border, color, shade);
        case 'hover:ring':
            return hover(ring, color, shade);
        case 'focus:text':
            return focus(text, color, shade);
        case 'focus:bg':
            return focus(bg, color, shade);
        case 'focus:border':
            return focus(border, color, shade);
        case 'focus:ring':
            return focus(ring, color, shade);
        case 'focus:outline':
            return focus(outline, color, shade);
        case 'active:text':
            return active(text, color, shade);
        case 'active:bg':
            return active(bg, color, shade);
        case 'active:border':
            return active(border, color, shade);
        case 'active:ring':
            return active(ring, color, shade);
        case 'active:outline':
            return active(outline, color, shade);
        default:
            return '';
    }
}
