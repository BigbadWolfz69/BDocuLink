import React, { useState } from 'react';
import { FileText, Clock, Users, ArrowRight, CheckCircle, Zap, Info, Star } from 'lucide-react';

/**
 * @typedef {Object} FormCardProps
 * @property {string} title
 * @property {string=} subtitle
 * @property {string} description
 * @property {React.ComponentType<any>} icon
 * @property {() => void} onClick
 * @property {string} gradient // We'll still keep this for subtle variations
 * @property {string} price
 * @property {string} processingTime
 * @property {string[]} features
 * @property {string[]} requirements
 */
/**
 * @param {FormCardProps} props
 */
const FormCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  onClick,
  gradient, // Keep gradient prop for subtle color variations
  price,
  processingTime,
  features,
  requirements
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    onClick();
  };

  // Define a color palette based on the images for cards
  const cardPalette = {
    orange: '#F97316', // Tailwind orange-500
    purple: '#8B5CF6', // Tailwind violet-500
    green: '#10B981', // Tailwind green-500
    textPrimary: '#1F2937', // Dark gray text (Tailwind gray-800)
    textSecondary: '#4B5563', // Medium gray text (Tailwind gray-600)
    white: '#FFFFFF',
    lightOrange: '#FFEDD5', // Tailwind orange-100
    lightPurple: '#EDE9FE', // Tailwind violet-100
    lightGreen: '#D1FAE5', // Tailwind green-100
  };


  // Map original gradients to new gradients from the palette
  const cardColor = () => {
    switch (gradient) {
      case 'from-blue-600 to-cyan-600':
        return {
          base: cardPalette.orange,
          light: cardPalette.lightOrange
        };
      case 'from-red-600 to-orange-600':
        return {
          base: cardPalette.orange,
          light: cardPalette.lightOrange
        };
      case 'from-indigo-600 to-purple-600':
        return {
          base: cardPalette.purple,
          light: cardPalette.lightPurple
        };
      case 'from-green-500 to-green-600':
        return {
          base: cardPalette.green,
          light: cardPalette.lightGreen
        };
      case 'from-pink-600 to-rose-600':
        return {
          base: cardPalette.orange,
          light: cardPalette.lightOrange
        }; // Using orange for pink/rose
      case 'from-amber-600 to-yellow-600':
        return {
          base: cardPalette.orange,
          light: cardPalette.lightOrange
        };
      default:
        return {
          base: cardPalette.orange,
          light: cardPalette.lightOrange
        };
    }
  };

  const colors = cardColor();


  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform ${isClicked ? 'scale-95' : ''}`}
      style={{ border: `1px solid #E5E7EB` }} // Added subtle border
    >

      <div className="p-6 relative z-10">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon with background color */}
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md`}
            style={{ backgroundColor: colors.light }}
          >
            <Icon className={`h-6 w-6`} style={{ color: colors.base }} />
          </div>

          {/* Price and Processing Time */}
          <div className="text-right">
            <div className={`text-lg font-bold mb-1`} style={{ color: colors.base }}>
              {price}
            </div>
            <div className={`text-xs font-semibold text-${cardPalette.textSecondary}`}>
              {processingTime === 'Immediate' ? 'Immediate' : processingTime}
            </div>
          </div>

        </div>

        {/* Title and Description */}
        <h3 className={`text-xl font-bold text-${cardPalette.textPrimary} mb-2 group-hover:text-blue-700 transition-colors duration-300`}>
          {title}
        </h3>

        {subtitle && (
          <p className={`text-sm text-${cardPalette.textSecondary} mb-3 font-medium`}>
            {subtitle}
          </p>
        )}

        <p className={`text-base text-${cardPalette.textSecondary} mb-5 line-clamp-3 leading-relaxed`}>
          {description}
        </p>

        {/* Features (simplified display) */}
        <div className="mb-5">
          <div className={`text-sm font-semibold text-${cardPalette.textPrimary} mb-2`}>Features:</div>
          <ul className="grid grid-cols-1 gap-2">
            {features.map((feature, index) => (
              <li key={index} className={`flex items-center text-sm text-${cardPalette.textSecondary}`}>
                <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0`} style={{ color: colors.base }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements Preview (Toggle on hover) */}
        <div className={`transition-all duration-300 ease-in-out ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className={`border-t border-gray-200 pt-4 mb-5`}>
            <div className="flex items-center mb-2">
              <FileText className={`h-4 w-4 text-${cardPalette.textPrimary} mr-2`} />
              <h4 className={`text-sm font-semibold text-${cardPalette.textPrimary}`}>Requirements:</h4>
            </div>
            <ul className="space-y-1">
              {requirements.slice(0, 3).map((req, index) => (
                <li key={index} className={`text-sm text-${cardPalette.textSecondary} flex items-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0`} style={{ backgroundColor: colors.base }}></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button (Styled to match the image) */}
        <button
          className={`mt-4 px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 w-full text-center`}
          style={{ backgroundColor: colors.base, color: cardPalette.white }}
          onClick={handleClick}
        >
          Click to select
        </button>
      </div>
    </div>
  );
};

export default FormCard;
