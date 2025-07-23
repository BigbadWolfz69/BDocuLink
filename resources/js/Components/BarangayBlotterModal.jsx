import React, { useState } from 'react';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';

export default function BarangayBlotterModal({ show, onClose }) {
    const [data, setData] = useState({
        name: '',
        gender: '',
        civil_status: '',
        incident_details: '',
        witness_information: '',
        supporting_documents: null,
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
        <Modal show={show} onClose={onClose} maxWidth="md">
            <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Barangay Blotter Application</h2>

                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="gender" value="Gender" />
                    <SelectInput
                        id="gender"
                        name="gender"
                        value={data.gender}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </SelectInput>
                </div>

        

                <div className="mb-4">
                    <InputLabel htmlFor="incident_details" value="Incident Details" />
                    <TextInput
                        id="incident_details"
                        name="incident_details"
                        value={data.incident_details}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="witness_information" value="Witness Information" />
                    <TextInput
                        id="witness_information"
                        name="witness_information"
                        value={data.witness_information}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="supporting_documents" value="Supporting Documents" />
                    <input
                        id="supporting_documents"
                        name="supporting_documents"
                        type="file"
                        className="mt-1 block w-full"
                        onChange={handleChange}
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
