import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
// import Sidebar from '@/Components/Sidebar'; // Commented out or remove Sidebar import
import Navbar from '@/Components/Navbar'; // Keep Navbar import
import Footer from '@/Components/Footer'; // Import the new Footer component

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Sidebar - Removed */}
            {/* <Sidebar /> */}

            {/* Main Content Area */}
            <div className="flex-1">
                {/* Navbar - Keep if you want the top navigation bar */}
                <Navbar user={user} />

                {/* Page Content */}
                <main className="p-4">
                    {children}
                </main>
            </div>
             {/* Footer */}
            <Footer />
        </div>
    );
}
