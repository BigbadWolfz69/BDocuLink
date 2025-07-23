import React from 'react';
import Modal from '@/Components/Modal';

export default function AyudaApplicationModal({ show, onClose }) {
    return (
        <Modal show={show} onClose={onClose} maxWidth="md">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayuda Application</h2>
                <p className="text-gray-700 mb-4">
                    Comprehensive social assistance program covering financial aid, medical assistance, educational support, and emergency relief. Fair distribution with transparent eligibility criteria.
                </p>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements:</h3>
                <ul className="list-disc ml-5 mb-4">
                    <li>Income Certificate</li>
                    <li>Medical Records</li>
                    <li>Family Composition</li>
                    <li>Proof of Need</li>
                </ul>
                 <h3 className="text-lg font-medium text-gray-900 mb-2">Features:</h3>
                <ul className="list-disc ml-5">
                    <li>Multiple Aid Categories</li>
                    <li>Fair Distribution System</li>
                    <li>Emergency Fast-track</li>
                </ul>
                {/* You can add a form or other interactive elements here */}
            </div>
        </Modal>
    );
}