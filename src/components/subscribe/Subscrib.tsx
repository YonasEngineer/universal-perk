"use client";

import type React from "react";
import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="mx-4 sm:mx-0 ">
      <div
        className="mx-auto w-full max-w-[1280px] rounded-xl min-h-[266px] p-4 sm:p-8 text-white my-10"
        style={{
          background: "linear-gradient(to right, #2465EA, #298AF0, #2B9CF3)",
        }}
      >
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#DEE4EA]">
              Stay Ahead With The Latest In AI!
            </h2>
            <p className="text-[#DEE4EA]">
              At Universal Park, we share insights on state AI innovations
              transforming web development, customer service, and HR recruitment.
              Discover how AI works and matters!
            </p>
          </div>
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#DEE4EA]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full px-3 py-2 rounded-[7px] text-black bg-white mt-2 h-[43px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-3 h-[43px] bg-gray-900 hover:bg-gray-800 text-[#969696] font-medium py-2 rounded-[7px]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
