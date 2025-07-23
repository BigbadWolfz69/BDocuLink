import React, { useState, useRef, useEffect } from "react";
import {
    Search,
    Bell,
    Settings,
    User,
    LogOut,
    HelpCircle,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import { usePage, router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink"; // Assuming NavLink is in this directory
import ApplicationLogo from "@/Components/ApplicationLogo"; // Import ApplicationLogo

const Navbar = ({ onMenuToggle }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const dropdownRef = useRef(null);
    const { auth } = usePage().props;
    const user = auth?.user || {};

    useEffect(() => {
        const closeOnEscape = (e) =>
            e.key === "Escape" && setIsProfileOpen(false);
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, []);

    const handleLogout = () => {
        router.post(route("logout"));
        setIsProfileOpen(false);
    };

    const renderSearchInput = () => (
        <div className="relative flex-grow max-w-xs ml-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                    className={`h-5 w-5 ${
                        isSearchFocused
                            ? "text-primary-blue scale-105"
                            : "text-dark-gray"
                    } transition-all`}
                />
            </div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`block w-full pl-10 pr-3 py-2 border border-medium-gray rounded-full bg-light-gray placeholder-dark-gray focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all ${
                    isSearchFocused ? "shadow-md" : ""
                }`}
                placeholder="Search services..."
            />
            {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-md border border-medium-gray py-2 z-50">
                    <div className="px-4 py-2 text-sm text-dark-gray hover:bg-light-gray cursor:pointer">
                        🔍 Search results for "{searchQuery}"
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <nav className="bg-white border-b border-medium-gray shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section - Logo and Title */}
                    <div className="flex items-center">
                         <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        <div className="ml-3">
                            <div className="text-xl font-bold text-gray-800">Barangay Portal</div>
                            <div className="text-xs text-gray-500">Digital Services • 6:46:32 PM</div>
                        </div>

                     {/* Navigation Links */}
                    <div className="flex items-center space-x-4 ml-8">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')} className="text-dark-gray hover:text-primary-blue font-medium">
                            Dashboard
                        </NavLink>
                         <NavLink href="#" className="text-dark-gray hover:text-primary-blue font-medium">
                            Forms
                        </NavLink>
                         <NavLink href="#" className="text-dark-gray hover:text-primary-blue font-medium">
                            Status
                        </NavLink>
                    </div>
                    </div>


                    {/* Right Section - Search and Icons */}
                    <div className="flex items-center space-x-4 ml-auto">
                        {renderSearchInput()}
                         <button className="p-2 rounded-lg text-dark-gray hover:bg-light-gray group relative">
                            <Bell className="h-5 w-5 group-hover:animate-bounce" />
                            {/* Notification indicator (optional, can be refined) */}
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>

                        <button className="p-2 rounded-lg text-dark-gray hover:bg-light-gray group">
                            <Settings className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() =>
                                    setIsProfileOpen((prev) => !prev)
                                }
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-light-gray group"
                            >
                                <div className="w-8 h-8 bg-secondary-blue rounded-full flex items-center justify-center text-white">
                                    <User className="h-5 w-5" />
                                </div>
                                <ChevronDown
                                    className={`h-4 w-4 text-dark-gray transition-transform ${
                                        isProfileOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-medium-gray py-2 z-50">
                                    <div className="px-4 py-3 border-b border-medium-gray">
                                        <p className="text-sm font-medium text-dark-gray">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-dark-gray">
                                            {user.email}
                                        </p>
                                    </div>

                                    <button className="w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-light-gray flex items-center space-x-2">
                                        <User className="h-4 w-4 text-secondary-blue" />
                                        <span>Profile Settings</span>
                                    </button>

                                    <button className="w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-light-gray flex items-center space-x-2">
                                        <HelpCircle className="h-4 w-4 text-secondary-blue" />
                                        <span>Help & Support</span>
                                    </button>

                                    <hr className="my-2 border-medium-gray" />

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                    >
                                        <LogOut className="h-4 w-4 text-red-600" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
