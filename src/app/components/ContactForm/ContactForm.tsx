"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";

const EMPTY_FORM = {
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    interestedIn: "",
    eventDate: "",
    location: "",
    guestCount: "",
    socialMedia: "",
    referralSource: "",
    message: "",
    // Honeypot — real users never see or fill this; bots do.
    company: "",
};

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined;
        if (showMessage) {
            timeoutId = setTimeout(() => {
                setShowMessage(false);
                setSubmitMessage("");
            }, 5000);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [showMessage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                sessionStorage.setItem("contactSubmission", JSON.stringify(formData));
                setFormData(EMPTY_FORM);
                router.push("/thank-you");
            } else {
                setSubmitMessage("Failed to send message. Please try again.");
                setSubmitStatus("error");
                setShowMessage(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage("An error occurred. Please try again later.");
            setSubmitStatus("error");
            setShowMessage(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.srOnly}>
                            Full Name (required)
                        </label>
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
                        <label htmlFor="partnerName" className={styles.srOnly}>
                            Partner&apos;s Full Name
                        </label>
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
                </div>

                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.srOnly}>
                            Email (required)
                        </label>
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
                        <label htmlFor="phone" className={styles.srOnly}>
                            Phone Number
                        </label>
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
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="interestedIn" className={styles.srOnly}>
                        I&apos;m interested in (required)
                    </label>
                    <select
                        id="interestedIn"
                        name="interestedIn"
                        required
                        className={`${styles.select} ${formData.interestedIn === "" ? styles.selectPlaceholder : ""}`}
                        value={formData.interestedIn}
                        onChange={handleChange}
                    >
                        <option value="" disabled>I'm interested in *</option>
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
                    <label htmlFor="eventDate" className={styles.srOnly}>
                        Wedding or Session Date
                    </label>
                    <input
                        type="text"
                        id="eventDate"
                        name="eventDate"
                        className={styles.input}
                        value={formData.eventDate}
                        onChange={handleChange}
                        placeholder="Wedding Date or Session Date"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="location" className={styles.srOnly}>
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className={styles.input}
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="guestCount" className={styles.srOnly}>
                        Guest Count
                    </label>
                    <input
                        type="text"
                        id="guestCount"
                        name="guestCount"
                        className={styles.input}
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="Guest Count"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia" className={styles.srOnly}>
                        Instagram or TikTok
                    </label>
                    <input
                        type="text"
                        id="socialMedia"
                        name="socialMedia"
                        className={styles.input}
                        value={formData.socialMedia}
                        onChange={handleChange}
                        placeholder="Instagram or TikTok: I would love to connect!"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="referralSource" className={styles.srOnly}>
                        How did you learn about me
                    </label>
                    <select
                        id="referralSource"
                        name="referralSource"
                        className={`${styles.select} ${formData.referralSource === "" ? styles.selectPlaceholder : ""}`}
                        value={formData.referralSource}
                        onChange={handleChange}
                    >
                        <option value="" disabled>How Did You Learn About Me</option>
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Reddit">Reddit</option>
                        <option value="Vendor Referral">Vendor Referral</option>
                        <option value="Client Referral">Client Referral</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.srOnly}>
                        Your Message (required)
                    </label>
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

                {/* Honeypot: hidden from users (and AT); only bots fill it. */}
                <div className={styles.honeypot} aria-hidden="true">
                    <label htmlFor="company">Company (leave this field empty)</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>

                {/* Always present so screen readers announce the result */}
                <div
                    role="status"
                    aria-live="polite"
                    className={
                        showMessage
                            ? `${styles.messageBox} ${styles.buttonLike} ${
                                  submitStatus === "success" ? styles.success : styles.error
                              }`
                            : styles.srOnly
                    }
                >
                    {submitMessage}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                >
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
