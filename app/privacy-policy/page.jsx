//Privacy Policy Page
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 text-gray-800 space-y-12 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Privacy <span className="text-[#FE2C55]">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy outlines how TikTok Shop collects, uses, and safeguards your personal information.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Information you provide through customer support interactions, surveys, or participation in promotions or contests. These information may include your name, email address, and contact details. All information will be stored in a secure database.</li>
            <li>Metadata associated with uploaded content, including timestamps, geolocation data, and technical tags. This information may be used for analytics and content optimization. In addition, we may collect information about your device, such as IP address, browser type, and operating system.</li>
            <li>Biometric identifiers or facial data (where legally permitted) used for authentication or filters. The identifiers are used to enhance user experience and provide personalized recommendations while maintaining privacy.</li>
            <li>Public data from your social media accounts if you link them to your account. This may include your profile picture, name, and email address. The social media profiles are not linked to your TikTok Shop account. The social media accounts are considered to be your property and not the property of TikTok Shop.</li>
          </ul>

        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To improve the shopping experience and personalize content and product suggestions based on your behavior. The suggestions are based on your past interactions and preferences. We may also use your data for analytics and market research purposes.</li>
            <li>To process payments, ship orders, and provide timely customer support and order updates. Payments are processed using secure payment gateways. Ship orders are handled by third-party logistics providers. Customer support and order updates are provided by our support team.</li>
            <li>To ensure safety, prevent fraud, monitor suspicious activities, and comply with legal obligations. TikTok Shop may use your data for these purposes.</li>
            <li>We may also use your data to conduct research, develop new features, and improve overall platform performance. Your data will not be shared with third parties for these purposes. It is only used internally within the company.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">Data Sharing</h2>
          <p className="text-gray-700">
            We may share your data with third-party services for payment processing, analytics, and logistics, only when necessary and under strict confidentiality.
            These partners are contractually obligated to protect your information and use it solely for the intended purposes.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You can access and update your personal data through your account settings. Account settings are available to you at any time. It will provide you with the option to review, update, or delete your data.</li>
            <li>Request data deletion under certain conditions as outlined by data protection laws. You may request the deletion of your data if you no longer wish to use our services. We are protected by Malaysia's Personal Data Protection Act (PDPA) and the Data Protection Act (DPA).</li>
            <li>Withdraw consent for non-essential data processing and marketing communication. You may withdraw your consent at any time. The withdrawal of consent will not affect your right to access or use our services.</li>
            <li>You may contact our support team for any data privacy-related requests or inquiries.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">Security</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your data but cannot guarantee 100% security over the internet. We encourage users to use strong passwords and remain vigilant of phishing attempts.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FE2C55]">Policy Updates</h2>
          <p className="text-gray-700">
            This policy may be updated from time to time to reflect changes in our practices or legal requirements. Please review it periodically. Continued use of our services constitutes your agreement to any updated terms.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">Last updated: 22 July 2025</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;