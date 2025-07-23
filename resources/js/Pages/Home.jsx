import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import "../../css/app.css";


export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow animate-fadeDown`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-800 gilroy-bold">
            BDocu<span className="text-gray-800">Link</span>
          </div>
          <ul className="flex space-x-6 text-sm font-semibold">
            <li><a href="#home" className="hover:text-blue-800 transition duration-300">HOME</a></li>
            <li><a href="#features" className="hover:text-blue-800 transition duration-300">FEATURES</a></li>
            <li><a href="#how-it-helps" className="hover:text-blue-800 transition duration-300">HOW IT HELPS</a></li>
             <li><a href="#developers" className="hover:text-blue-800 transition duration-300">DEV TEAM</a></li>
            <li><a href="#contact" className="hover:text-blue-800 transition duration-300">CONTACT</a></li>
            <li>
              <Link
                href="/login"
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition duration-300"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="home" className="h-screen bg-white flex flex-col justify-center items-center text-center p-8 animate-fadeIn">
          <motion.img
            src="/path/to/egov-logo.png" // Replace with actual egov.ph logo path
            alt="eGov PH Logo"
            className="h-16 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 gilroy-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Streamlining Barangay Services
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BDocuLink simplifies and digitizes your essential barangay document requests, bringing government services closer to you.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
          >
             <Link
              href="/register"
              className="bg-blue-800 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-900 transition duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-100 animate-fadeInUp">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 gilroy-bold">What BDocuLink Can Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Document Requests</h3>
                <p className="text-gray-600">Request various barangay documents like Barangay Clearance and Certificate of Residency online, anytime, anywhere.</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Request Status</h3>
                <p className="text-gray-600">Easily track the status of your document requests in real-time, reducing uncertainty and follow-ups.</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure and Convenient</h3>
                <p className="text-gray-600">A secure platform ensuring the privacy of your information and offering a convenient way to access essential services.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Helps Section */}
        <section id="how-it-helps" className="py-20 px-4 bg-white animate-fadeInUp">
             <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 gilroy-bold">How BDocuLink Helps Filipinos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                     <motion.div
                        className="bg-gray-100 rounded-lg shadow-md p-6 text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Saves Time and Effort</h3>
                        <p className="text-gray-600">No more long queues and multiple trips to the barangay hall. Request documents from the comfort of your home or office.</p>
                    </motion.div>
                     <motion.div
                        className="bg-gray-100 rounded-lg shadow-md p-6 text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Increased Transparency</h3>
                        <p className="text-gray-600">Track the progress of your request every step of the way, providing transparency in the process.</p>
                    </motion.div>
                     <motion.div
                        className="bg-gray-100 rounded-lg shadow-md p-6 text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Accessibility</h3>
                        <p className="text-gray-600">Provides an accessible platform for citizens, especially those who may have difficulty visiting the barangay hall physically.</p>
                    </motion.div>
                     <motion.div
                        className="bg-gray-100 rounded-lg shadow-md p-6 text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Efficient Service Delivery</h3>
                        <p className="text-gray-600">Helps barangay officials process requests more efficiently, leading to faster service delivery for the community.</p>
                    </motion.div>
                </div>
             </div>
        </section>

        {/* Developers Section */}
        <section id="developers" className="py-20 px-4 bg-gray-100 animate-fadeInUp">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 gilroy-bold">Developer Teams</h2>
            <p className="text-lg text-gray-700 mb-6">
              Meet the team behind BDocuLink.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 w-72 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">Mathew Valiente</h3>
                <p className="text-gray-600 text-sm">Lead Frontend Developer</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 w-72 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">Bryan Canizar</h3>
                <p className="text-gray-600 text-sm">Backend Developer</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white animate-fadeInUp">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 gilroy-bold">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@bdoculink.ph"
              className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition duration-300 shadow-lg"
            >
              Send Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto animate-fadeIn">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 BDocuLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
