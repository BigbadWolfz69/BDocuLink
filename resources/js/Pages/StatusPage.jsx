import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    FileText,
    Shield,
    Award,
    Briefcase,
    Heart,
    Ticket,
} from "lucide-react";


export default function StatusPage() {
    const { status } = usePage().props;

    // Hardcoded data for demonstration
    const applications = {
        processing: [
            { id: 1, type: 'Barangay Clearance', name: 'John Doe' },
        ],
        pending: [
            { id: 2, type: 'Barangay Blotter', name: 'Jane Smith' },
        ],
        completed: [
            { id: 3, type: 'Business Permit', name: 'Peter Jones' },
            { id: 4, type: 'Special Permit', name: 'Mary Brown' },
        ],
    };

    const filteredApplications = applications[status] || [];

    const handlePrint = (applicationId) => {
        alert(`Printing application ${applicationId}`);
        // In a real application, you would generate and display/download the PDF here
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Applications (${status})`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Applications with Status: {status.charAt(0).toUpperCase() + status.slice(1)}</h1>

                            {filteredApplications.length > 0 ? (
                                <ul>
                                    {filteredApplications.map(app => (
                                        <li key={app.id} className="mb-4 p-4 border rounded flex justify-between items-center">
                                            <div>
                                                <p><strong>Type:</strong> {app.type}</p>
                                                <p><strong>Name:</strong> {app.name}</p>
                                            </div>
                                            <button
                                                onClick={() => handlePrint(app.id)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Print
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No applications found with this status.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
