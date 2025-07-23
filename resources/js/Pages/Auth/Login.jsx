import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onSuccess: () => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        });
        // Optionally redirect or perform other actions after successful login
      },
      onError: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Please check your credentials.',
        });
        console.error('Login Error:', error);
      },
    });
  };

  return (
    <GuestLayout>
      <Head title="Log In" />

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <motion.form onSubmit={submit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <InputLabel htmlFor="email" value="Email" className="sr-only" /> {/* Added sr-only to hide label visually but keep for screen readers */}

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
            placeholder="Email"
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4 mb-6">
          <InputLabel htmlFor="password" value="Password" className="sr-only" /> {/* Added sr-only */}

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
            placeholder="Password"
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4 flex justify-between items-center">
           <label className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>
           {canResetPassword && (
            <Link
              href={route('password.request')}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot password?
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center mt-6">
          {/* Modified PrimaryButton for gradient and modern look */}
          <PrimaryButton className="w-full py-2 text-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-md transition duration-300" disabled={processing}>
            Log In
          </PrimaryButton>
        </div>
         <div className="flex items-center justify-center mt-6">
           <Link href={route('register')} className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Don't have an account? Sign up</Link>
         </div>

        {/* Add social login buttons here if needed */}
        {/* Example Structure: */}
         {/* <div className="flex items-center justify-center mt-6 space-x-4">
           <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
             <img src="/path/to/facebook-icon.png" alt="Facebook Login" className="w-5 h-5 mr-2" />
             Login with Facebook
           </button>
           <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
             <img src="/path/to/google-icon.png" alt="Google Login" className="w-5 h-5 mr-2" />
             Login with Google
           </button>
         </div> */}

      </motion.form>
    </GuestLayout>
  );
}