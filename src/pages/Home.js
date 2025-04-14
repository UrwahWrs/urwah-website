import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Instagram, Phone, Calendar, Sparkles } from "lucide-react";
import makeupExample from "../assets/makeup-example.png";
import urwahWorking from "../assets/urwah-working.png";

export function Card({ children, className = "" }) {
    return <div className={`bg-white p-4 rounded-3xl shadow-md border border-pink-100 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-2xl text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-pink-600 text-white hover:bg-pink-700 px-6 py-3 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default function MakeupStudioByUrwah() {
    const [formData, setFormData] = useState({ name: "", date: "", contact: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isValidContact = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[+\d]?(?:[\d-.\s()]*)$/;
        return emailRegex.test(value) || phoneRegex.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidContact(formData.contact)) {
            alert("Please enter a valid email or phone number.");
            return;
        }

        localStorage.setItem("makeupStudioBooking", JSON.stringify(formData));

        emailjs
            .send("service_glunriu", "template_1vk9vtn", {
                from_name: formData.name,
                contact_info: formData.contact,
                appointment_date: formData.date,
                message: formData.message || "No message provided",
            }, "xwf4w_P4gVJREzDMH")
            .then(() => {
                setSubmitted(true);
            })
            .catch((err) => {
                console.error("Email failed", err);
                alert("There was an error sending your message.");
            });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-10">
                    <motion.h1
                        className="text-5xl font-extrabold text-pink-800 tracking-wide"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Makeup Studio by Urwah
                    </motion.h1>
                    <p className="text-pink-600 text-lg mt-3">Where beauty meets artistry 💄✨</p>
                    <motion.img
                        src={makeupExample}
                        alt="Makeup Example"
                        className="rounded-3xl shadow-lg mt-6 mx-auto w-full max-w-lg"
                        whileHover={{ scale: 1.03 }}
                    />
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
                                <Sparkles className="text-pink-600" /> Services Offered
                            </h2>
                            <ul className="list-disc list-inside text-pink-700 space-y-2 text-base">
                                <li>Bridal Makeup – Traditional & Modern</li>
                                <li>Party Makeup – Glam & Elegant Looks</li>
                                <li>Everyday Natural Glam</li>
                                <li>Hairstyling for All Occasions</li>
                                <li>Makeup Consultations & Trials</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Meet Urwah</h2>
                            <p className="text-pink-700 text-base leading-relaxed">
                                Hello gorgeous! I'm <strong>Urwah</strong> – a certified and passionate makeup artist with a flair for soft glam, bold transformations, and radiant bridal looks. My mission is to help you feel like the most confident version of yourself for your big day or any day! Let’s bring out your inner glow ✨
                            </p>
                            <img
                                src={urwahWorking}
                                alt="Urwah working"
                                className="rounded-2xl mt-6 shadow-md w-full"
                            />
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a
                        href="https://www.instagram.com/makeupstudiobyurwah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card className="text-center hover:shadow-xl transition">
                            <CardContent>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                    alt="Instagram"
                                    className="mx-auto w-8 h-8"
                                />
                                <p className="text-pink-700 mt-3 font-medium">@makeupstudiobyurwah</p>
                            </CardContent>
                        </Card>
                    </a>

                    <a
                        href="https://wa.me/92333409577"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card className="text-center hover:shadow-xl transition">
                            <CardContent>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className="mx-auto w-8 h-8 text-pink-600"
                                />
                                <p className="text-pink-700 mt-3 font-medium">Chat on WhatsApp</p>
                            </CardContent>
                        </Card>
                    </a>

                    <a href="tel:+92333409577">
                        <Card className="text-center hover:shadow-xl transition">
                            <CardContent>
                                <Phone className="mx-auto text-[#ec4899]" size={32}/>
                                <p className="text-pink-700 mt-3 font-medium">+92333409577</p>
                            </CardContent>
                        </Card>
                    </a>


                    {/*<Card className="text-center">*/}
                    {/*    <CardContent>*/}
                    {/*        <Calendar className="mx-auto text-pink-600" size={32}/>*/}
                    {/*        <p className="text-pink-700 mt-3 font-medium">By Appointment Only</p>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                </section>

                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">Book Your Appointment</h2>
                    {submitted ? (
                        <motion.p className="text-center text-green-600 font-semibold" initial={{opacity: 0}}
                                  animate={{opacity: 1}}>
                            Thank you! Your appointment request has been received. 💌
                        </motion.p>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto border border-pink-100">
                            <div className="mb-5">
                                <label className="block text-pink-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-200"
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-pink-700 font-medium mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-200"
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-pink-700 font-medium mb-2">Contact (Email or Phone)</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-200"
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-pink-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-200"
                                ></textarea>
                            </div>
                            <Button type="submit" className="w-full">
                                Submit ✨
                            </Button>
                        </form>
                    )}
                </section>
            </div>
        </main>
    );
}
