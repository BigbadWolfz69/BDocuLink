import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'primary-blue': '#2a416f', // A deep, professional blue
                'secondary-blue': '#5b7d9b', // A slightly lighter blue
                'light-gray': '#f4f7f6', // A very light gray for backgrounds
                'medium-gray': '#d0d6d1', // A medium gray for borders and separators
                'dark-gray': '#5a625c', // A dark gray for text
                'accent-teal': '#007770', // A subtle teal for accents

                // Added colors from your example for more vibrancy
                'vibrant-blue-500': '#3b82f6',
                'vibrant-blue-600': '#2563eb',
                'vibrant-indigo-700': '#4338ca',
                'vibrant-red-500': '#ef4444',
                'vibrant-pink-500': '#ec4899',
                'vibrant-rose-600': '#e11d48',
                'vibrant-purple-500': '#a855f7',
                'vibrant-violet-600': '#7c3aed',
                'vibrant-purple-700': '#6d28d9',
                'vibrant-green-500': '#22c55e',
                'vibrant-emerald-600': '#059669',
                'vibrant-teal-700': '#0f766e',
                'vibrant-orange-500': '#f97316',
                'vibrant-amber-500': '#f59e0b',
                'vibrant-yellow-600': '#eab308',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                pulseGlow: {
                    '0%': { boxShadow: '0 0 0 0 rgba(0, 153, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 10px 4px rgba(0, 153, 255, 0.6)' },
                },
                 float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'gradient-shift': 'gradientShift 4s ease infinite',
                'pulse-glow': 'pulseGlow 2s infinite',
                'float': 'float 3s ease-in-out infinite',
            },
        },
    },
    

    plugins: [forms],
};
