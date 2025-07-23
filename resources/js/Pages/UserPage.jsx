import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
  FileText,
  Shield,
  Award,
  Briefcase,
  Heart,
  Ticket
} from 'lucide-react';

// Layout
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// Components
import FormCard from "@/Components/FormCard";
import RequirementsProcessing from "@/Components/RequirementsProcessing";
import BarangayClearanceModal from "@/Components/BarangayClearanceModal";
import BarangayBlotterModal from "@/Components/BarangayBlotterModal";
import BarangayPermitModal from "@/Components/BusinessPermitModal";
// Import new modal/page components here
// import SpecialPermitModal from "@/Components/SpecialPermitModal";
// import AyudaApplicationModal from "@/Components/AyudaApplicationModal";
// import ServiceTicketsPage from "@/Pages/ServiceTicketsPage"; // If Service Tickets is a separate page

export default function UserPage({ auth }) {
  const [showBarangayClearanceModal, setShowBarangayClearanceModal] = useState(false);
  const [showBarangayBlotterModal, setShowBarangayBlotterModal] = useState(false);
  const [showBarangayPermitModal, setShowBarangayPermitModal] = useState(false);
  // Add state for new modals here
  const [showSpecialPermitModal, setShowSpecialPermitModal] = useState(false);
  const [showAyudaApplicationModal, setShowAyudaApplicationModal] = useState(false);
  // If Service Tickets is a page, you might not need a state here, but handle navigation in handleFormClick

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
        setShowBarangayPermitModal(true);
        break;
      case "Special Permit":
        setShowSpecialPermitModal(true);
        break;
      case "Ayuda Application":
        setShowAyudaApplicationModal(true);
        break;
      case "Service Tickets":
        // If Service Tickets is a page, you would use Inertia.visit or <Link> component
        // For now, keeping the alert as a placeholder
        alert(`Opening ${formTitle} application form`);
        break;
      default:
        alert(`Opening ${formTitle} application form`);
        break;
    }
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Barangay Forms" />

      <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
        <div className="max-w-7xl w-full">
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800">Available Services</h1>
          </div>

          {/* Form Cards */}
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

          {/* Requirements Section */}
          <RequirementsProcessing />

         
        </div>
      </div>

      {/* Modals */}
      <BarangayClearanceModal
        show={showBarangayClearanceModal}
        onClose={() => setShowBarangayClearanceModal(false)}
      />
      <BarangayBlotterModal
        show={showBarangayBlotterModal}
        onClose={() => setShowBarangayBlotterModal(false)}
      />
      <BarangayPermitModal
        show={showBarangayPermitModal}
        onClose={() => setShowBarangayPermitModal(false)}
      />
      {/* Render new modals/pages here */}
      {/*
      <SpecialPermitModal
        show={showSpecialPermitModal}
        onClose={() => setShowSpecialPermitModal(false)}
      />
      <AyudaApplicationModal
        show={showAyudaApplicationModal}
        onClose={() => setShowAyudaApplicationModal(false)}
      />
      */}
      {/* If Service Tickets is a page, you would render it as a separate Inertia page */}
    </AuthenticatedLayout>
  );
}
