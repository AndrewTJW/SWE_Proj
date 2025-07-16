//About Us Page
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 text-gray-800 space-y-12 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-[#FE2C55]">TikTok Shop</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TikTok Shop is a unique e-commerce platform integrated into TikTok's
            short-form video experience. Our goal is to seamlessly connect
            entertainment and online shopping, transforming product discovery
            and purchase behavior through influencer content and user
            interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#FE2C55]" align="center">
              Our Mission
            </h2>
            <p className="text-gray-700" align="center">
              To create a vibrant digital commerce ecosystem where users can
              discover, explore, and buy products directly from engaging video
              content. By empowering sellers and creators, we aim to
              revolutionize the future of social-commerce interaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#FE2C55]" align="center">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1" align="justify">
              <li>Seamless in-video product tagging & checkout</li>
              <li>AI-driven personalized product recommendations</li>
              <li>Seller dashboards with real-time analytics</li>
              <li>Short video feed for product discovery</li>
              <li>Integrated payments & user review system</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#FE2C55]" align="center">
            Meet the Team
          </h2>
          <p className="text-gray-700" align="center">
            This project was developed as part of the course "Software
            Engineering and HCI (TEB2014)" for the May 2025 Semester at
            Universiti Teknologi PETRONAS.
          </p>
          <ul className="list-disc list-inside text-gray-700" align="justify">
            <li>Andrew Tan Joe Wen (22010175)</li>
            <li>Muhammad Ikhwan bin Mohd Azahari (22010398)</li>
            <li>‘Affan Najiy bin Rusdi (22010453)</li>
            <li>Adham Zulhilmi bin Zamri (22010261)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#FE2C55]" align="center">
            Acknowledgements
          </h2>
          <p className="text-gray-700" align="center">
            We extend our heartfelt thanks to our course instructor and peers
            for their continued support and valuable insights during the
            development process. Special appreciation to TikTok Shop for being a
            source of inspiration in exploring the future of e-commerce.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;