import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Phone, Calendar, Sparkles } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import makeupExample from "../assets/makeup-example.png";
import urwahWorking from "../assets/urwah-working.png";
export default function Home() {
    const [formData, setFormData] = useState({ name: "", date: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
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
                    <Card className="text-center">
                        <CardContent>
                            <Instagram className="mx-auto text-pink-600" size={32} />
                            <p className="text-pink-700 mt-3 font-medium">@makeupbyurwah</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent>
                            <Phone className="mx-auto text-pink-600" size={32} />
                            <p className="text-pink-700 mt-3 font-medium">+92 300 1234567</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent>
                            <Calendar className="mx-auto text-pink-600" size={32} />
                            <p className="text-pink-700 mt-3 font-medium">By Appointment Only</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">Book Your Appointment</h2>
                    {submitted ? (
                        <motion.p className="text-center text-green-600 font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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