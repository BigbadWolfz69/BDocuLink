import React, { useState, ComponentDidCatch } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    FileText,
    Shield,
    Award,
    Briefcase,
    Heart,
    Ticket,
    Filter, // Added Filter icon
    Printer, // Added Printer icon
    Eye // Added Eye icon
} from "lucide-react";

// Components
// Removed import for FormCard
// import FormCard from "@/Components/FormCard";
import RequirementsProcessing from "@/Components/RequirementsProcessing";
import BarangayClearanceModal from "@/Components/BarangayClearanceModal";
import BarangayBlotterModal from "@/Components/BarangayBlotterModal";
import BusinessPermitModal from "@/Components/BusinessPermitModal"; // Corrected import based on file list
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function Dashboard({ auth }) {
    const [showBarangayClearanceModal, setShowBarangayClearanceModal] = useState(false);
    const [showBarangayBlotterModal, setShowBarangayBlotterModal] = useState(false);
    const [showBusinessPermitModal, setShowBusinessPermitModal] = useState(false); // State for Business Permit Modal
    const [filterStatus, setFilterStatus] = useState("All Requests"); // State for filtering
    const [sortOrder, setSortOrder] = useState("Newest"); // State for sorting


    // Hardcoded dummy request data
    const dummyRequests = [
        { id: 1, user: 'John Doe', type: 'Barangay Clearance', status: 'Pending', date: '2023-10-26' },
        { id: 2, user: 'Jane Smith', type: 'Business Permit', status: 'Approved', date: '2023-10-25' },
        { id: 3, user: 'Peter Jones', type: 'Barangay Blotter', status: 'Rejected', date: '2023-10-24' },
         { id: 4, user: 'John Doe', type: 'Business Permit', status: 'Pending', date: '2023-10-23' },
        { id: 5, user: 'Jane Smith', type: 'Barangay Clearance', status: 'Approved', date: '2023-10-22' },
        { id: 6, user: 'Peter Jones', type: 'Barangay Blotter', status: 'Rejected', date: '2023-10-21' },
    ];

    const forms = [
        {
            title: "Barangay Clearance",
            subtitle: "Official clearance certificate",
            description:
                "Essential document for employment, business registration, loan applications, and various legal transactions. Digitally processed with QR verification for authenticity.",
            icon: FileText,
            gradient: "from-blue-600 to-cyan-600",
            price: "₱50.00",
            processingTime: "2-3 days",
            features: [
                "Digital QR Verification",
                "Valid for 6 months",
                "Express processing available",
            ],
            requirements: [
                "Community Tax Certificate",
                "Valid ID",
                "Certificate of Residency",
                "Passport Photo",
            ],
        },
        {
            title: "Barangay Blotter",
            subtitle: "Report incidents and complaints",
            description:
                "Secure incident reporting system for complaints, disputes, and legal documentation. Confidential handling with proper case tracking and follow-up procedures.",
            icon: Shield,
            gradient: "from-red-600 to-orange-600",
            price: "Free",
            processingTime: "Same day",
            features: [
                "24/7 Emergency Reporting",
                "Confidential Processing",
                "Legal Documentation",
            ],
            requirements: [
                "Valid ID",
                "Incident Details",
                "Witness Information",
                "Supporting Documents",
            ],
        },
        {
            title: "Special Permit",
            subtitle: "Event and activity permits",
            description:
                "Comprehensive permit system for events, gatherings, construction, and special activities. Includes safety compliance checks and community impact assessment.",
            icon: Award,
            gradient: "from-indigo-600 to-purple-600",
            price: "₱200.00",
            processingTime: "1-2 days",
            features: [
                "Safety Compliance Check",
                "Community Impact Assessment",
                "Digital Approval",
            ],
            requirements: [
                "Event Proposal",
                "Venue Details",
                "Safety Plan",
                "Insurance Coverage",
            ],
        },
        {
            title: "Business Permit",
            subtitle: "Local business registration",
            description:
                "Streamlined business registration for micro and small enterprises. Includes tax guidance, compliance monitoring, and business development support resources.",
            icon: Briefcase,
            gradient: "from-green-500 to-green-600",
            price: "₱150.00",
            processingTime: "3-5 days",
            features: [
                "Tax Guidance Included",
                "Compliance Monitoring",
                "Business Development Support",
            ],
            requirements: [
                "Business Plan",
                "Location Clearance",
                "Tax Documents",
                "Owner's ID",
            ],
        },
        {
            title: "Ayuda Application",
            subtitle: "Community assistance program",
            description:
                "Comprehensive social assistance program covering financial aid, medical assistance, educational support, and emergency relief. Fair distribution with transparent eligibility criteria.",
            icon: Heart,
            gradient: "from-pink-600 to-rose-600",
            price: "Free",
            processingTime: "1 week",
            features: [
                "Multiple Aid Categories",
                "Fair Distribution System",
                "Emergency Fast-track",
            ],
            requirements: [
                "Income Certificate",
                "Medical Records",
                "Family Composition",
                "Proof of Need",
            ],
        },
        {
            title: "Service Tickets",
            subtitle: "Track your applications",
            description:
                "Advanced tracking system for all applications with real-time updates, SMS notifications, and digital document delivery. Complete transparency in processing status.",
            icon: Ticket,
            gradient: "from-amber-600 to-yellow-600",
            price: "Free",
            processingTime: "Immediate",
            features: [
                "Real-time Updates",
                "SMS Notifications",
                "Digital Document Delivery",
            ],
            requirements: [
                "Reference Number",
                "Valid ID",
                "Contact Information",
            ],
        },
    ];

    const handleFormClick = (formTitle) => {
        console.log(`Navigating to ${formTitle} form`);
        switch (formTitle) {
            case "Barangay Clearance":
                setShowBarangayClearanceModal(true);
                break;
            case "Barangay Blotter":
                setShowBarangayBlotterModal(true);
                break;
            case "Business Permit":
                setShowBusinessPermitModal(true); // Use the correct state setter
                break;
            default:
                alert(`Opening ${formTitle} application form`);
                break;
        }
    };

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

     const handleSortChange = (order) => {
        setSortOrder(order);
    };

    const handleAccept = (requestId) => {
        console.log(`Request ${requestId} accepted`);
        // Add your logic here to update the request status to 'Approved' in your data source
        // For example, if you have a backend API, you would make an API call here.
        alert(`Request ${requestId} accepted`);
    };

    const handleDeny = (requestId) => {
        console.log(`Request ${requestId} denied`);
        // Add your logic here to update the request status to 'Rejected' in your data source
        // For example, if you have a backend API, you would make an API call here.
        alert(`Request ${requestId} denied`);
    };

    const filteredRequests = filterStatus === "All Requests" ? dummyRequests : dummyRequests.filter(request => request.status === filterStatus);

    const sortedRequests = filteredRequests.sort((a, b) => {
        if (sortOrder === "Newest") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });


    const handleViewPdf = (requestId) => {
        console.log(`Viewing PDF for request ${requestId}`);
        // Add logic to view PDF, e.g., open a new tab with the PDF
        alert(`Viewing PDF for request ${requestId}`);
    };

    const handlePrint = (requestId) => {
        console.log(`Printing request ${requestId}`);
        // Add logic to print the request details or a related document
        alert(`Printing request ${requestId}`);
    };


    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Barangay Forms" />
            <ErrorBoundary>
            <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
                <div className="max-w-7xl w-full">
                    {auth.user.is_admin === 0 ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Admin Dashboard - User Requests</h3>

                            {/* Admin Dashboard Layout */}
                            <div className="flex justify-between items-center mb-6">
                                {/* Filter Tabs */}
                                <div className="flex space-x-2">
                                    <button onClick={() => handleFilterChange("All Requests")} className={`px-4 py-2 rounded-md cursor-pointer ${filterStatus === "All Requests" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>All Requests</button>
                                    <button onClick={() => handleFilterChange("Pending")} className={`px-4 py-2 rounded-md cursor-pointer ${filterStatus === "Pending" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Pending</button>
                                    <button onClick={() => handleFilterChange("Approved")} className={`px-4 py-2 rounded-md cursor-pointer ${filterStatus === "Approved" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Approved</button>
                                    <button onClick={() => handleFilterChange("Rejected")} className={`px-4 py-2 rounded-md cursor-pointer ${filterStatus === "Rejected" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Rejected</button>
                                </div>

                                {/* Sort Button */}
                                <div className="flex items-center space-x-2">
                                     <button onClick={() => handleSortChange("Newest")} className={`px-4 py-2 rounded-md ${sortOrder === "Newest" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Newest</button>
                                    <button onClick={() => handleSortChange("Oldest")} className={`px-4 py-2 rounded-md ${sortOrder === "Oldest" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Oldest</button>
                                </div>
                            </div>

                            {/* Requests Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th> {/* Added Date header */}
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> {/* Added Actions header */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {sortedRequests.map(request => (
                                            <tr key={request.id} className="animate-fade-in" style={{ animationDelay: `${request.id * 100}ms` }}> {/* Added animation */}
                                                <td className="px-6 py-4 whitespace-nowrap">{request.user}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{request.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap">{request.date}</td> {/* Added Date data */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                     <button onClick={() => handleViewPdf(request.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">View PDF</button>
                                                    <button onClick={() => handlePrint(request.id)} className="text-gray-600 hover:text-gray-900 mr-4">Print</button>
                                                     <button onClick={() => handleAccept(request.id)} className="text-green-600 hover:text-green-900 mr-4">Accept</button>
                                                    <button onClick={() => handleDeny(request.id)} className="text-red-600 hover:text-red-900">Deny</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Content for regular users (can be the original dashboard content) */}
                             {/* Form Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {forms.map((form, index) => (
                                    <div
                                        key={form.title}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <FormCard
                                            title={form.title}
                                            subtitle={form.subtitle}
                                            description={form.description}
                                            icon={form.icon}
                                            onClick={() => handleFormClick(form.title)}
                                            gradient={form.gradient}
                                            price={form.price}
                                            processingTime={form.processingTime}
                                            features={form.features}
                                            requirements={form.requirements}
                                        />
                                    </div>
                                ))}
                            </div>


                            {/* Requirements/Processing Info */}
                            <RequirementsProcessing />

                            {/* Hardcoded Application Status */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Status (Hardcoded)</h2>
                                <div className="bg-white p-6 rounded-lg shadow">
                                    <p className="text-gray-700">
                                        Barangay Clearance:{" "}
                                        <Link href="/status/processing" className="text-blue-600 hover:underline">
                                            Processing
                                        </Link>
                                    </p>
                                    <p className="text-gray-700">
                                        Barangay Blotter:{" "}
                                        <Link href="/status/pending" className="text-blue-600 hover::underline">
                                            Pending
                                        </Link>
                                    </p>
                                    <p className="text-gray-700">
                                        Business Permit:{" "}
                                        <Link href="/status/completed" className="text-blue-600 hover::underline">
                                            Completed
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
            </ErrorBoundary>

            {/* Modals (keep these if they are used by regular users) */}
            <BarangayClearanceModal
                show={showBarangayClearanceModal}
                onClose={() => setShowBarangayClearanceModal(false)}
            />
            <BarangayBlotterModal
                show={showBarangayBlotterModal}
                onClose={() => setShowBarangayBlotterModal(false)}
            />
            {/* Added BusinessPermitModal */}
            <BusinessPermitModal
                show={showBusinessPermitModal}
                onClose={() => setShowBusinessPermitModal(false)}
            />
        </AuthenticatedLayout>
    );
}
