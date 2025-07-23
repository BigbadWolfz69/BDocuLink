import React from 'react';
import Modal from '@/Components/Modal';

export default function SpecialPermitModal({ show, onClose }) {
    return (
        <Modal show={show} onClose={onClose} maxWidth="md">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Permit Application</h2>
                <p className="text-gray-700 mb-4">
                    Comprehensive permit system for events, gatherings, construction, and special activities. Includes safety compliance checks and community impact assessment.
                </p>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements:</h3>
                <ul className="list-disc ml-5 mb-4">
                    <li>Event Proposal</li>
                    <li>Venue Details</li>
                    <li>Safety Plan</li>
                    <li>Insurance Coverage</li>
                </ul>
                 <h3 className="text-lg font-medium text-gray-900 mb-2">Features:</h3>
                <ul className="list-disc ml-5">
                    <li>Safety Compliance Check</li>
                    <li>Community Impact Assessment</li>
                    <li>Digital Approval</li>
                </ul>
                {/* You can add a form or other interactive elements here */}
            </div>
        </Modal>
    );
}