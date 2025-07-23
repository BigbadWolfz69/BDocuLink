import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
 

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    first_name: '',
    last_name: '',
    city: '',
    barangay: '',
    gender: '',
    birthdate: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('register'));
  };
    return (
        <GuestLayout>
            <Head title="Register" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Create an Account
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel value="First Name" />
                            <TextInput
                                type="text"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                required
                                className="mt-1 w-full"
                            />
                            <InputError message={errors.first_name} />
                        </div>
                        <div>
                            <InputLabel value="Last Name" />
                            <TextInput
                                type="text"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                required
                                className="mt-1 w-full"
                            />
                            <InputError message={errors.last_name} />
                        </div>
                    </div>

                    {/* City */}
                    <div>
                        <InputLabel value="City" />
                        <select
                            className="mt-1 w-full border-gray-300 rounded-md"
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                            required
                        >
                            <option value="">Select City</option>
                            <option value="Dipolog">Dipolog</option>
                            <option value="Dapitan">Dapitan</option>
                        </select>
                        <InputError message={errors.city} />
                    </div>

                    {/* Barangay */}
                    <div>
                        <InputLabel value="Barangay" />
                        <select
                            className="mt-1 w-full border-gray-300 rounded-md"
                            value={data.barangay}
                            onChange={(e) =>
                                setData("barangay", e.target.value)
                            }
                            required
                        >
                            <option value="">Choose Barangay</option>
                            <option value="Minaog">Minaog</option>
                            <option value="Sicayab">Sicayab</option>
                        </select>
                        <InputError message={errors.barangay} />
                    </div>

                    {/* Gender & Birthdate */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel value="Gender" />
                            <select
                                className="mt-1 w-full border-gray-300 rounded-md"
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <InputError message={errors.gender} />
                        </div>
                        <div>
                            <InputLabel value="Birthdate" />
                            <TextInput
                                type="date"
                                value={data.birthdate}
                                onChange={(e) =>
                                    setData("birthdate", e.target.value)
                                }
                                required
                                className="mt-1 w-full"
                            />
                            <InputError message={errors.birthdate} />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <InputLabel value="Email" />
                        <TextInput
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            className="mt-1 w-full"
                        />
                        <InputError message={errors.email} />
                    </div>

                    {/* Password */}
                    <div>
                        <InputLabel value="Password" />
                        <TextInput
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                            className="mt-1 w-full"
                        />
                        <InputError message={errors.password} />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <InputLabel value="Confirm Password" />
                        <TextInput
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                            className="mt-1 w-full"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mr-2"
                            checked={data.terms}
                            onChange={(e) => setData("terms", e.target.checked)}
                            required
                        />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <Link
                                href="/terms"
                                className="text-blue-600 underline"
                            >
                                Terms and Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="text-blue-600 underline"
                            >
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <PrimaryButton
                            className="w-full justify-center"
                            disabled={processing}
                        >
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </motion.div>
        </GuestLayout>
    );
}
