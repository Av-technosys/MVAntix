"use client";
import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");
      let result;
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = { msg: await response.text() };
      }

      if (response.ok) {
        setStatus({
          type: "success",
          msg: result.msg || "Message sent successfully!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          type: "error",
          msg: result.msg || "Server returned an error. Please try again.",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus({
        type: "error",
        msg: "Could not connect to server. Please check your internet or API route.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="bg-white py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-1 lg:gap-12 lg:grid-cols-2">
            <Card className="rounded-3xl border-none shadow-xl bg-white overflow-hidden mb-24">
              <CardContent className="p-10 md:p-14">
                <h1 className="text-4xl font-bold text-[#111827] font-playfair">
                  Request a Call Back
                </h1>
                <p className="mt-4 text-gray-500 text-lg font-poppins">
                  Fill out the form below and our team will reach out to you
                  shortly.
                </p>

                {status.msg && (
                  <div
                    className={`mt-6 p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"} border`}
                  >
                    {status.msg}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 grid gap-6 md:grid-cols-2"
                >
                  <div className="space-y-2 font-playfair">
                    <label className="text-sm font-semibold">Full Name *</label>
                    <Input
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="bg-gray-50 h-12"
                    />
                  </div>
                  <div className="space-y-2 font-playfair">
                    <label className="text-sm font-semibold">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email-id"
                      className="bg-gray-50 h-12"
                    />
                  </div>
                  <div className="space-y-2 font-playfair">
                    <label className="text-sm font-semibold">
                      Phone Number
                    </label>
                    <Input
                      name="mobile"
                      placeholder="Enter phone number"
                      className="bg-gray-50 h-12"
                    />
                  </div>
                  <div className="space-y-2 font-playfair">
                    <label className="text-sm font-semibold">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      placeholder="Enter company name"
                      className="bg-gray-50 h-12"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2 font-playfair">
                    <label className="text-sm font-semibold">Subject *</label>
                    <Input
                      name="enquiryFor"
                      required
                      placeholder="How can we help?"
                      className="bg-gray-50 h-12"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2 font-playfair">
                    <label className="text-sm font-semibold">Message *</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell us more..."
                      className="bg-gray-50 min-h-30"
                    />
                  </div>
                  <Button
                    disabled={loading}
                    type="submit"
                    className="md:col-span-2 font-playfair bg-[#0176d3] hover:bg-[#015ba3] text-white h-14 text-lg rounded-xl transition-all"
                  >
                    {loading ? (
                      <IconLoader2 className="animate-spin mr-2" />
                    ) : (
                      <IconSend  size={20} />
                    )}
                    {loading ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-[#111827] md:text-left  text-center mb-4 font-playfair">
                Our Location
              </h2>
              <div className="bg-linear-to-r from-[#061C5B] to-[#0B2FA0] text-white p-10 rounded-3xl shadow-2xl">
                <h3 className="text-xl font-bold mb-8 font-playfair">
                  Corporate Headquarter
                </h3>
                <div className="space-y-6 font-poppins">
                  <div className="flex items-start gap-4">
                    <IconMapPin className="mt-1 shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-lg">
                        Mvantix Pvt. Ltd.
                      </p>
                      <p className="text-gray-300">Jaipur Rajasthan, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <IconPhone size={22} />
                    <Link href={"tel:+917877727352"}>
                    <p>+91-7877727352</p>
                    </Link>
                  </div>
                
                 <div className="flex items-center gap-4">
  <IconMail size={22} />
  <p>contact@mvantix.com</p>
</div>

                </div>
              </div>
              <div className="mt-8 rounded-3xl h-96 overflow-hidden   shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.382562431!2d75.7062635!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default ContactForm;