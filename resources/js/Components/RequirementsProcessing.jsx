import React from 'react';
import { FileText, Clock, Info, Download, CheckCircle } from 'lucide-react';

const RequirementsProcessing = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Requirements & Processing</h2>
                <p className="text-gray-600">Everything you need to know about document requirements, processing timelines, and step-by-step procedures for a smooth application experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Document Requirements Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-green-500 rounded-full p-3">
                            <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Document Requirements</h3>
                            <p className="text-sm text-gray-500">For Barangay Clearance Application</p>
                        </div>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Community Tax Certificate or Cedula</span>
                            </div>
                            <span className="text-red-500 font-semibold">required</span>
                        </li>
                        <li className="text-sm text-gray-500 ml-7">Valid for current year, original or certified copy</li>

                        <li className="flex items-center justify-between">
                             <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Valid Government ID</span>
                            </div>
                            <span className="text-red-500 font-semibold">required</span>
                        </li>
                         <li className="text-sm text-gray-500 ml-7">Driver's License, Passport, SSS ID, or any government-issued ID</li>

                        <li className="flex items-center justify-between">
                             <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">Certificate of Residency</span>
                            </div>
                            <span className="text-red-500 font-semibold">required</span>
                        </li>
                         <li className="text-sm text-gray-500 ml-7">Proof of residence in the barangay for at least 6 months</li>

                        <li className="flex items-center justify-between">
                            <div className="flex items-center">
                                 <CheckCircle className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-700">Passport-sized Photo</span>
                            </div>
                            <span className="text-gray-500 font-semibold">optional</span>
                        </li>
                         <li className="text-sm text-gray-500 ml-7">2x2 recent photo with white background</li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-6" role="alert">
                        <div className="flex">
                            <div className="py-1"><Info className="h-5 w-5 text-blue-500 mr-4" /></div>
                            <div>
                                <p className="font-bold">Important Notes:</p>
                                <ul className="list-disc ml-5 text-sm">
                                    <li>All documents must be original or certified true copies</li>
                                    <li>Processing fee: ₱50.00 (subject to change)</li>
                                    <li>Clearance is valid for 6 months from date of issuance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                        <Download className="h-5 w-5 mr-2" />
                        Download Requirements Checklist
                    </button>
                </div>

                {/* Processing Timeline Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-purple-500 rounded-full p-3">
                            <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Processing Timeline</h3>
                            <p className="text-sm text-gray-500">Typical processing duration: 1-2 business days</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Submit complete requirements</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                        </div>

                         <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Document verification</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>

                         <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Background check</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>

                         <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Clearance issuance</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-green-100 text-center py-4 rounded-lg">
                            <p className="text-2xl font-bold text-green-700">₱50</p>
                            <p className="text-sm text-green-600">Processing Fee</p>
                        </div>
                         <div className="bg-blue-100 text-center py-4 rounded-lg">
                            <p className="text-2xl font-bold text-blue-700">1-2</p>
                            <p className="text-sm text-blue-600">Business Days</p>
                        </div>
                    </div>

                     <div className="flex items-center mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
                        <Clock className="h-5 w-5 text-yellow-500 mr-3" />
                        <p className="text-sm font-semibold">Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequirementsProcessing;
