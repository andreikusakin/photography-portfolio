// components/ContactForm.jsx
"use client";

import { useState, useEffect } from "react"; // Add useEffect
import styles from "./ContactForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContactForm() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        partnerName: "",
        email: "",
        phone: "",
        interestedIn: "",
        eventDate: "",
        eventLocation: "",
        weddingVenue: "",
        referralSource: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState("");
    const [showMessage, setShowMessage] = useState(false); // New state to control message display

    // Clear message after timeout
    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined;
        if (showMessage) {
            timeoutId = setTimeout(() => {
                setShowMessage(false);
                setSubmitMessage("");
            }, 5000);
        }
        
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showMessage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage("Thank you! Your message has been sent successfully!");
                setSubmitStatus("success");
                setFormData({
                    fullName: "",
                    partnerName: "",
                    email: "",
                    phone: "",
                    interestedIn: "",
                    eventDate: "",
                    eventLocation: "",
                    weddingVenue: "",
                    referralSource: "",
                    message: "",
                });
                setStartDate(null); // Reset date picker
            } else {
                setSubmitMessage("Failed to send message. Please try again.");
                setSubmitStatus("error");
            }
        } catch (error) {
            console.log("Error submitting form:", error);
            setSubmitMessage("An error occurred. Please try again later.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setShowMessage(true); // Show message after submission (success or error)
        }
    };

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        // Format the date as YYYY-MM-DD for the form data
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];
            setFormData((prev) => ({
                ...prev,
                eventDate: formattedDate,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                eventDate: "",
            }));
        }
    };

    return (
        <div className={styles.formContainer}>
            <div style={{paddingBottom: "2em", fontWeight: "400"}}>Or fill out the form below.</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    {/* <label htmlFor="fullName" className={styles.label}>
                        Your Full Name<span className={styles.required}>*</span>
                    </label> */}
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className={styles.input}
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name *"
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="partnerName" className={styles.label}>
                        Your Partner's Full Name
                    </label> */}
                    <input
                        type="text"
                        id="partnerName"
                        name="partnerName"
                        placeholder="Partner's Full Name"
                        className={styles.input}
                        value={formData.partnerName}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="email" className={styles.label}>
                        Email<span className={styles.required}>*</span>
                    </label> */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        required
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="phone" className={styles.label}>
                        Phone Number
                    </label> */}
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="interestedIn" className={styles.label}>
                        I'm Interested In<span className={styles.required}>*</span>
                    </label> */}
                    <select
                        id="interestedIn"
                        name="interestedIn"
                        required
                        className={styles.select}
                        value={formData.interestedIn}
                        onChange={handleChange}
                        defaultValue="I'm interested in *"
                    >
                        <option value=""  disabled>I'm interested in *</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Couples">Couples</option>
                        <option value="Family">Family</option>
                        <option value="Portrait">Portrait</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="eventDate" className={styles.label}>
                        Wedding Date or Session Date<span className={styles.required}>*</span>
                    </label> */}
                    <div className={styles.datePickerWrapper}>
                        <DatePicker
                            id="eventDate"
                            selected={startDate}
                            onChange={handleDateChange}
                            className={`${styles.input} ${styles.datePicker}`}
                            placeholderText="Wedding Date or Session Date"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="eventLocation" className={styles.label}>
                        Wedding Location or Session Location
                        <span className={styles.required}>*</span>
                    </label> */}
                    <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        className={styles.input}
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="Wedding Location or Session Location"
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="weddingVenue" className={styles.label}>
                        Wedding Venue
                    </label> */}
                    <input
                        type="text"
                        id="weddingVenue"
                        name="weddingVenue"
                        placeholder="Wedding Venue"
                        className={styles.input}
                        value={formData.weddingVenue}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="referralSource" className={styles.label}>
                        How Did You Learn About Me
                        <span className={styles.required}>*</span>
                    </label> */}
                    <select
                        id="referralSource"
                        name="referralSource"
                        className={styles.select}
                        value={formData.referralSource}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>How Did You Learn About Me</option>
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Vendor Referral">Vendor Referral</option>
                        <option value="Client Referral">Client Referral</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    {/* <label htmlFor="message" className={styles.label}>
                        Your Message<span className={styles.required}>*</span>
                    </label> */}
                    <textarea
                        id="message"
                        name="message"
                        required
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message *"
                    />
                </div>

                {showMessage ? (
                    <div 
                        className={`${styles.messageBox} ${styles.buttonLike} ${
                            submitStatus === "success" ? styles.success : styles.error
                        }`}
                    >
                        {submitMessage}
                    </div>
                ) : (
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.submitButton}
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                )}
            </form>
        </div>
    );
}
