import React, { useState, useEffect } from 'react';
import Modal from '@/Components/Modal'; // Assuming you have a Modal component
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { useForm } from '@inertiajs/react';

const BarangayClearanceModal = ({ show, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        nickname: '',
        gender: '',
        birthdate: '',
        birth_place: '',
        blood_type: '',
        address: '',
        contact_no: '',
        civil_status: '',
        nationality: '',
        religion: '',
        occupation: '',
        sector: '',
        voters_precinct: '',
        philhealth_no: '',
        is_resident: '',
        spouse_name: '',
        contact_person_emergency: '',
        contact_person_relationship: '',
        contact_person_contact_no: '',
        clearance_type: '',
        purpose: '',
    });

    useEffect(() => {
        // Reset form when modal is closed
        if (!show) {
            reset();
            setCurrentStep(1);
        }
    }, [show]);

    const submit = (e) => {
        e.preventDefault();

        // Handle form submission based on the current step
        if (currentStep === 1) {
            // Validate Step 1 and move to Step 2
            // You might want to add more specific validation here
            if (!data.first_name || !data.last_name || !data.gender || !data.birthdate || !data.birth_place || !data.address || !data.contact_no || !data.civil_status || !data.nationality || !data.religion || !data.is_resident) {
                 alert('Please fill in all required fields for Step 1.');
                 return;
            }
            setCurrentStep(2);
        } else if (currentStep === 2) {
             if (!data.clearance_type || !data.purpose) {
                 alert('Please fill in all required fields for Step 2.');
                 return;
            }
            // Validate Step 2 and move to Step 3 or submit
            // Assuming Step 3 is just an informational step before final submission
            setCurrentStep(3);
        } else if (currentStep === 3) {
            // Final submission
            console.log('Submitting form data:', data);
            // Replace with your actual Inertia post request
            // post(route('barangay.clearance.submit'));
             alert('Barangay Clearance application submitted!');
             onClose(); // Close modal on successful submission
        }
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const renderStep1 = () => (
        <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Step 1: Check and update your personal information</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* General Information */}
                <div className="sm:col-span-6">
                    <h4 className="text-md font-medium text-gray-900">General Information</h4>
                </div>
                <div className="sm:col-span-3">
                    <InputLabel htmlFor="first_name" value="First Name*" />
                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="given-name"
                        isFocused={true}
                        onChange={handleChange}
                        required
                    />
                    <InputError message={errors.first_name} className="mt-2" />
                </div>
                <div className="sm:col-span-3">
                    <InputLabel htmlFor="middle_name" value="Middle Name" />
                    <TextInput
                        id="middle_name"
                        name="middle_name"
                        value={data.middle_name}
                        className="mt-1 block w-full"
                        autoComplete="additional-name"
                        onChange={handleChange}
                    />
                    <InputError message={errors.middle_name} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="last_name" value="Last Name*" />
                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="family-name"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.last_name} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="nickname" value="Nickname/Alias" />
                    <TextInput
                        id="nickname"
                        name="nickname"
                        value={data.nickname}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.nickname} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="gender" value="Gender*" />
                    <select
                         id="gender"
                         name="gender"
                         value={data.gender}
                         className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                         onChange={handleChange}
                         required
                    >
                         <option value="">Select Gender</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                    </select>
                    <InputError message={errors.gender} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="birthdate" value="Date of Birth*" />
                    <TextInput
                        id="birthdate"
                        type="date"
                        name="birthdate"
                        value={data.birthdate}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.birthdate} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="birth_place" value="Birth Place*" />
                    <TextInput
                        id="birth_place"
                        name="birth_place"
                        value={data.birth_place}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.birth_place} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="blood_type" value="Blood Type" />
                    <TextInput
                        id="blood_type"
                        name="blood_type"
                        value={data.blood_type}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.blood_type} className="mt-2" />
                </div>

                {/* Other Details */}
                <div className="sm:col-span-6 mt-6">
                    <h4 className="text-md font-medium text-gray-900">Other Details</h4>
                </div>
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="address" value="Address*" />
                    <TextInput
                        id="address"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="sm:col-span-3">
                    <InputLabel htmlFor="contact_no" value="Contact No.*" />
                    <TextInput
                        id="contact_no"
                        name="contact_no"
                        value={data.contact_no}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.contact_no} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="civil_status" value="Civil Status*" />
                     <select
                         id="civil_status"
                         name="civil_status"
                         value={data.civil_status}
                         className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                         onChange={handleChange}
                         required
                    >
                         <option value="">Select Civil Status</option>
                         <option value="single">Single</option>
                         <option value="married">Married</option>
                         <option value="separated">Separated</option>
                         <option value="widowed">Widowed</option>
                    </select>
                    <InputError message={errors.civil_status} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="nationality" value="Nationality*" />
                    <TextInput
                        id="nationality"
                        name="nationality"
                        value={data.nationality}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.nationality} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="religion" value="Religion*" />
                    <TextInput
                        id="religion"
                        name="religion"
                        value={data.religion}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.religion} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="occupation" value="Occupation" />
                    <TextInput
                        id="occupation"
                        name="occupation"
                        value={data.occupation}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.occupation} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="sector" value="Sector(PWD, Senior, Solo Parent)" />
                    <TextInput
                        id="sector"
                        name="sector"
                        value={data.sector}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.sector} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="voters_precinct" value="Voter's Precinct No. & Polling Place" />
                    <TextInput
                        id="voters_precinct"
                        name="voters_precinct"
                        value={data.voters_precinct}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.voters_precinct} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="philhealth_no" value="Philhealth No." />
                    <TextInput
                        id="philhealth_no"
                        name="philhealth_no"
                        value={data.philhealth_no}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.philhealth_no} className="mt-2" />
                </div>
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="is_resident" value="Are you a resident of Brgy. Marilag?*" />
                     <select
                         id="is_resident"
                         name="is_resident"
                         value={data.is_resident}
                         className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                         onChange={handleChange}
                         required
                    >
                         <option value="">Select Option</option>
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                    </select>
                    <InputError message={errors.is_resident} className="mt-2" />
                </div>

                {/* References */}
                <div className="sm:col-span-6 mt-6">
                    <h4 className="text-md font-medium text-gray-900">References</h4>
                </div>
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="spouse_name" value="Name of Spouse" />
                    <TextInput
                        id="spouse_name"
                        name="spouse_name"
                        value={data.spouse_name}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.spouse_name} className="mt-2" />
                </div>
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="contact_person_emergency" value="Contact Person in case of Emergency" />
                    <TextInput
                        id="contact_person_emergency"
                        name="contact_person_emergency"
                        value={data.contact_person_emergency}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.contact_person_emergency} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="contact_person_relationship" value="Contact Person Relationship" />
                    <TextInput
                        id="contact_person_relationship"
                        name="contact_person_relationship"
                        value={data.contact_person_relationship}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.contact_person_relationship} className="mt-2" />
                </div>
                 <div className="sm:col-span-3">
                    <InputLabel htmlFor="contact_person_contact_no" value="Contact Person Contact No." />
                    <TextInput
                        id="contact_person_contact_no"
                        name="contact_person_contact_no"
                        value={data.contact_person_contact_no}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.contact_person_contact_no} className="mt-2" />
                </div>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Step 2: Barangay Clearance Details</h3>
             <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="clearance_type" value="Type*" />
                     <select
                         id="clearance_type"
                         name="clearance_type"
                         value={data.clearance_type}
                         className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                         onChange={handleChange}
                         required
                    >
                         <option value="">Select Type</option>
                         <option value="type1">Type 1</option>
                         <option value="type2">Type 2</option>
                    </select>
                    <InputError message={errors.clearance_type} className="mt-2" />
                </div>
                 <div className="sm:col-span-6">
                    <InputLabel htmlFor="purpose" value="Purpose of application*" />
                    <TextInput
                        id="purpose"
                        name="purpose"
                        value={data.purpose}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                         required
                    />
                    <InputError message={errors.purpose} className="mt-2" />
                </div>
             </div>
        </div>
    );

    const renderStep3 = () => (
        <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Step 3: Go to BARANGAY MARILAG for account verification</h3>
             <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                <p className="font-bold mb-2">Please bring these requirements to get a Barangay Clearance:</p>
                <ul className="list-disc ml-5">
                    <li>Community Tax Certificate or Cedula</li>
                    <li>Valid ID</li>
                    <li>Certificate of Residency</li>
                </ul>
            </div>
        </div>
    );

    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Barangay Clearance Application</h2>

                <form onSubmit={submit}>
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}

                    <div className="mt-6 flex justify-end">
                        {currentStep > 1 && (
                            <SecondaryButton onClick={prevStep} className="mr-2">
                                Previous
                            </SecondaryButton>
                        )}
                        {currentStep < 3 && (
                            <PrimaryButton onClick={nextStep}>
                                Next
                            </PrimaryButton>
                        )}
                         {currentStep === 3 && (
                            <PrimaryButton type="submit" processing={processing}>
                                Submit Application
                            </PrimaryButton>
                        )}
                         <SecondaryButton onClick={onClose} className="ml-2">
                            Cancel
                        </SecondaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default BarangayClearanceModal;
