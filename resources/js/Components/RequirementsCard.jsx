import React from 'react';
import { CheckCircle, FileText, Clock, AlertCircle, Download, Info } from 'lucide-react';

const RequirementsCard = () => {
  const requirements = [
    {
      title: 'Community Tax Certificate or Cedula',
      description: 'Valid for current year, original or certified copy',
      status: 'required'
    },
    {
      title: 'Valid Government ID',
      description: "Driver's License, Passport, SSS ID, or any government-issued ID",
      status: 'required'
    },
    {
      title: 'Certificate of Residency',
      description: 'Proof of residence in the barangay for at least 6 months',
      status: 'required'
    },
    {
      title: 'Passport-sized Photo',
      description: '2x2 recent photo with white background',
      status: 'optional'
    }
  ];

  const processingSteps = [
    'Submit complete requirements',
    'Document verification',
    'Background check',
    'Clearance issuance'
  ];

  // Define a government-like color palette
  const governmentPalette = {
    primaryBlue: 'blue-700',
    secondaryBlue: 'blue-500',
    lightGray: 'gray-100',
    mediumGray: 'gray-300',
    darkGray: 'gray-700',
    accentTeal: 'teal-600',
    successGreen: 'green-600',
    dangerRed: 'red-600'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Requirements Section */}
      <div className={`bg-white rounded-2xl shadow-md p-6 border border-${governmentPalette.mediumGray} hover:shadow-lg transition-all duration-300`}>
        <div className="flex items-center space-x-4 mb-5">
          <div className={`w-12 h-12 bg-${governmentPalette.primaryBlue} rounded-lg flex items-center justify-center shadow-md`}>
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className={`text-xl font-bold text-${governmentPalette.darkGray}`}>Document Requirements</h3>
            <p className={`text-sm text-${governmentPalette.darkGray}`}>For Barangay Clearance Application</p>
          </div>
        </div>

        <div className="space-y-4">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className={`group p-3 bg-${governmentPalette.lightGray} rounded-lg hover:bg-${governmentPalette.secondaryBlue} hover:bg-opacity-10 transition-all duration-300 border border-transparent hover:border-${governmentPalette.secondaryBlue}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {requirement.status === 'required' ? (
                    <CheckCircle className={`h-5 w-5 text-${governmentPalette.accentTeal}`} />
                  ) : (
                    <Info className={`h-5 w-5 text-${governmentPalette.primaryBlue}`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-semibold text-${governmentPalette.darkGray} group-hover:text-${governmentPalette.primaryBlue} transition-colors duration-200`}>
                      {requirement.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      requirement.status === 'required'
                        ? `bg-red-100 text-${governmentPalette.dangerRed}`
                        : `bg-blue-100 text-${governmentPalette.primaryBlue}`
                    }`}>
                      {requirement.status}
                    </span>
                  </div>
                  <p className={`text-sm text-${governmentPalette.darkGray} mt-1`}>{requirement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-5 p-4 bg-${governmentPalette.lightGray} rounded-lg border-l-4 border-${governmentPalette.primaryBlue}`}>
          <div className="flex items-start space-x-3">
            <AlertCircle className={`h-5 w-5 text-${governmentPalette.primaryBlue} flex-shrink-0 mt-0.5`} />
            <div>
              <p className={`text-sm text-${governmentPalette.darkGray} font-medium`}>Important Notes:</p>
              <ul className={`text-sm text-${governmentPalette.darkGray} mt-1 space-y-1`}>
                <li>• All documents must be original or certified true copies</li>
                <li>• Processing fee: ₱50.00 (subject to change)</li>
                <li>• Clearance is valid for 6 months from date of issuance</li>
              </ul>
            </div>
          </div>
        </div>

        <button className={`w-full mt-6 bg-${governmentPalette.primaryBlue} text-white py-2 px-4 rounded-lg font-semibold hover:bg-${governmentPalette.secondaryBlue} transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg`}>
          <Download className="h-5 w-5" />
          <span>Download Requirements Checklist</span>
        </button>
      </div>

      {/* Processing Timeline */}
      <div className={`bg-white rounded-2xl shadow-md p-6 border border-${governmentPalette.mediumGray} hover:shadow-lg transition-all duration-300`}>
        <div className="flex items-center space-x-4 mb-5">
          <div className={`w-12 h-12 bg-${governmentPalette.secondaryBlue} rounded-lg flex items-center justify-center shadow-md`}>
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className={`text-xl font-bold text-${governmentPalette.darkGray}`}>Processing Timeline</h3>
            <p className={`text-sm text-${governmentPalette.darkGray}`}>Typical processing duration: 1-2 business days</p>
          </div>
        </div>

        <div className="space-y-5">
          {processingSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <div className={`w-9 h-9 bg-${governmentPalette.primaryBlue} rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className={`font-semibold text-${governmentPalette.darkGray} group-hover:text-${governmentPalette.primaryBlue} transition-colors duration-200`}>
                  {step}
                </p>
                <div className={`w-full bg-${governmentPalette.mediumGray} rounded-full h-2 mt-1`}>
                  <div
                    className={`bg-${governmentPalette.accentTeal} h-2 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${(index + 1) * 25}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className={`text-center p-3 bg-${governmentPalette.lightGray} rounded-lg border border-${governmentPalette.mediumGray}`}>
            <div className={`text-xl font-bold text-${governmentPalette.primaryBlue}`}>₱50</div>
            <div className={`text-sm text-${governmentPalette.darkGray}`}>Processing Fee</div>
          </div>
          <div className={`text-center p-3 bg-${governmentPalette.lightGray} rounded-lg border border-${governmentPalette.mediumGray}`}>
            <div className={`text-xl font-bold text-${governmentPalette.primaryBlue}`}>1-2</div>
            <div className={`text-sm text-${governmentPalette.darkGray}`}>Business Days</div>
          </div>
        </div>

        <div className={`mt-5 p-4 bg-${governmentPalette.lightGray} rounded-lg border-l-4 border-${governmentPalette.secondaryBlue}`}>
          <div className="flex items-center space-x-2">
            <Clock className={`h-5 w-5 text-${governmentPalette.secondaryBlue}`} />
            <p className={`text-sm text-${governmentPalette.darkGray} font-medium`}>Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsCard;