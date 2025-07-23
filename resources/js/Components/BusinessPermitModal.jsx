import React, { useState } from 'react';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function BusinessPermitModal({ show, onClose }) {
    const [data, setData] = useState({
        business_name: '',
        business_address: '',
        owner_name: '',
        owner_address: '',
        type_of_business: '',
        contact_number: '',
        email_address: '',
        tin: '',
        dti_sec_reg_no: '',
        business_plan: null,
        location_clearance: null,
        tax_documents: null,
        owner_id: null,
        other_documents: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(data);
        onClose(); // Close modal after submission
    };

    return (
        <Modal show={show} onClose={onClose} maxWidth="lg">
            <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Permit Application</h2>

                {/* Business Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <InputLabel htmlFor="business_name" value="Business Name" />
                        <TextInput
                            id="business_name"
                            name="business_name"
                            value={data.business_name}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="business_address" value="Business Address" />
                        <TextInput
                            id="business_address"
                            name="business_address"
                            value={data.business_address}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Owner Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <InputLabel htmlFor="owner_name" value="Owner's Name" />
                        <TextInput
                            id="owner_name"
                            name="owner_name"
                            value={data.owner_name}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="owner_address" value="Owner's Address" />
                        <TextInput
                            id="owner_address"
                            name="owner_address"
                            value={data.owner_address}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Contact and Business Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                     <div>
                        <InputLabel htmlFor="type_of_business" value="Type of Business" />
                        <TextInput
                            id="type_of_business"
                            name="type_of_business"
                            value={data.type_of_business}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="contact_number" value="Contact Number" />
                        <TextInput
                            id="contact_number"
                            name="contact_number"
                            value={data.contact_number}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                     <div>
                        <InputLabel htmlFor="email_address" value="Email Address" />
                        <TextInput
                            id="email_address"
                            name="email_address"
                            value={data.email_address}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                            type="email"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="tin" value="TIN" />
                        <TextInput
                            id="tin"
                            name="tin"
                            value={data.tin}
                            className="mt-1 block w-full"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <InputLabel htmlFor="dti_sec_reg_no" value="DTI/SEC Registration Number" />
                     <TextInput
                        id="dti_sec_reg_no"
                        name="dti_sec_reg_no"
                        value={data.dti_sec_reg_no}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                </div>

                {/* File Uploads */}
                <h3 className="text-lg font-medium text-gray-900 mb-4">Required Documents:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <InputLabel htmlFor="business_plan" value="Business Plan" />
                        <input
                            id="business_plan"
                            name="business_plan"
                            type="file"
                            className="mt-1 block w-full text-gray-700"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="location_clearance" value="Location Clearance" />
                         <input
                            id="location_clearance"
                            name="location_clearance"
                            type="file"
                            className="mt-1 block w-full text-gray-700"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <InputLabel htmlFor="tax_documents" value="Tax Documents" />
                        <input
                            id="tax_documents"
                            name="tax_documents"
                            type="file"
                            className="mt-1 block w-full text-gray-700"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="owner_id" value="Owner's ID" />
                        <input
                            id="owner_id"
                            name="owner_id"
                            type="file"
                            className="mt-1 block w-full text-gray-700"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-6">
                     <InputLabel htmlFor="other_documents" value="Other Supporting Documents" />
                        <input
                            id="other_documents"
                            name="other_documents"
                            type="file"
                            className="mt-1 block w-full text-gray-700"
                            onChange={handleChange}
                            multiple // Allow multiple file uploads
                        />
                </div>


                <div className="flex justify-end">
                    <PrimaryButton type="submit">
                        Submit Application
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
