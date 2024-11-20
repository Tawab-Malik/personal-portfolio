"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { IoPersonOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
import { Textarea } from "@nextui-org/input";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { Button } from "@nextui-org/react";
import { PiPaperPlaneRightLight } from "react-icons/pi";
// import { GoDownload } from "react-icons/go";
import Image from "next/image";
// import LottieIframeComponent from "@/app/Components/Lottieanimation";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setStatus("Please fill in all required fields.");
            setPopupVisible(true);
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);
            return;
        }

        setStatus("Sending...");
        setPopupVisible(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }

        // Automatically hide the popup after 3 seconds
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    return (
        <>
            <section className="dark:bg-black bg-white relative z-10 -mt-24 pt-24 md:py-24" id="contact">
                <div className="max-w-7xl mx-5 xl:mx-auto bg-[#f3f3f3] dark:bg-white rounded-3xl py-20 px-5 md:px-10">
                    <h2 className="text-4xl md:text-5xl text-black font-bold text-center">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5 mt-10">
                            {/* 1st */}
                            <div className="flex md:flex-row flex-col justify-between gap-5">
                                <Input
                                    name="name"
                                    type="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name *"
                                    isRequired
                                    className="outline-none border-1 border-[#d4d4d4] shadow-inner-lg rounded-2xl text-[#65656D]"
                                    classNames={{
                                        inputWrapper:
                                            'bg-transparent !shadow-none h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent',
                                        input:
                                            'group[data-has-value="true"] group-data-[has-value=true]:!text-[#27272a] text-base',
                                        innerWrapper: 'gap-x-2 !py-3 h-auto',
                                    }}
                                    startContent={
                                        <IoPersonOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                {/* email */}
                                <Input
                                    name="email"
                                    type="email"
                                    isRequired
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                    className="outline-none border-1 border-[#d4d4d4] shadow-inner-lg rounded-2xl"
                                    classNames={{
                                        inputWrapper:
                                            'bg-transparent !shadow-none h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent',
                                        input:
                                            'group[data-has-value="true"] group-data-[has-value=true]:!text-[#27272a] text-base',
                                        innerWrapper: ' !py-3 gap-x-2',
                                    }}
                                    startContent={
                                        <LuMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                            </div>
                            {/* 2nd */}
                            <div className="flex md:flex-row flex-col justify-between gap-5">
                                <Input
                                    name="phone"
                                    type="number"
                                    isRequired
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile No *"
                                    className="outline-none border-1 border-[#d4d4d4] shadow-inner-lg rounded-2xl"
                                    classNames={{
                                        inputWrapper:
                                            'bg-transparent !shadow-none h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent',
                                        input:
                                            'group[data-has-value="true"] group-data-[has-value=true]:!text-[#27272a] text-base',
                                        innerWrapper: 'gap-x-2 !py-3',
                                    }}
                                    startContent={
                                        <HiOutlineDevicePhoneMobile className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                {/* subject */}
                                <Input
                                    name="subject"
                                    type="text"
                                    isRequired
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject *"
                                    className="outline-none border-1 border-[#d4d4d4] shadow-inner-lg rounded-2xl"
                                    classNames={{
                                        inputWrapper:
                                            'bg-transparent h-auto !shadow-none group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent',
                                        input:
                                            'text-sm group[data-has-value="true"] group-data-[has-value=true]:text-[#27272a] text-base',
                                        innerWrapper: 'gap-x-2 !py-3',
                                    }}
                                />
                            </div>
                            {/* detail message */}
                            <Textarea
                                isRequired
                                name="message"
                                type="text"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message *"
                                rows={7}
                                className="outline-none border-1 border-[#d4d4d4] shadow-inner-lg rounded-2xl text-base"
                                classNames={{
                                    inputWrapper:
                                        'bg-transparent h-auto !shadow-none group[data-focus="true"] group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent',
                                    input:
                                        'h-auto py-2 text-sm group[data-has-value="true"] group-data-[has-value=true]:text-[#27272a] text-base',
                                }}
                            />

                            <div className="flex justify-start items-center gap-x-1 md:gap-x-5 mt-8 relative z-10">
                                <Button
                                    type="submit"
                                    className="h-auto bg-[#995FB6] dark:bg-new-yellow dark:hover:bg-new-yellow-700 text-black flex justify-center rounded-full text-sm md:text-lg border-2 !py-2 !px-8 border-[#995FB6] dark:border-new-yellow items-center font-semibold gap-x-2"
                                >
                                    Send <PiPaperPlaneRightLight className="h-5 w-5 text-black" />
                                </Button>
                            </div>
                        </div>
                    </form>

                    {/* Display status message */}
                    {popupVisible && (
                        <div
                            className={`fixed mx-5 max-w-[400px] md:mx-auto top-0 left-0 right-0 rounded-3xl z-20 p-4 bg-wisteria dark:bg-new-yellow ${
                                status.includes("success") ? "bg-green-500" : "bg-red-500"
                            } text-black text-center`}
                        >
                            <p>{status}</p>
                        </div>
                    )}
                </div>

                <div className="max-w-7xl mx-5 md:mx-auto flex justify-center md:justify-end md:-mt-[240px] md:pr-10">
                    <Image
                        src="/images/contact/contactdark.png"
                        className="dark:hidden block"
                        alt="logo"
                        height={100}
                        width={200}
                    />
                    <Image
                        src="/images/contact/contactlight.png"
                        className="dark:block hidden"
                        alt="logo"
                        height={100}
                        width={200}
                    />

                    {/*<LottieIframeComponent />*/}
                </div>


            </section>
        </>
    );
}
