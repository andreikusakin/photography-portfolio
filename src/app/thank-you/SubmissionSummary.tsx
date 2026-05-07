"use client";

import { useEffect, useState } from "react";
import styles from "./SubmissionSummary.module.css";

type Submission = {
    fullName?: string;
    partnerName?: string;
    email?: string;
    phone?: string;
    interestedIn?: string;
    eventDate?: string;
    location?: string;
    guestCount?: string;
    socialMedia?: string;
    referralSource?: string;
    message?: string;
};

const LABELS: { key: keyof Submission; label: string }[] = [
    { key: "fullName",       label: "Your Name" },
    { key: "partnerName",    label: "Partner's Name" },
    { key: "email",          label: "Email" },
    { key: "phone",          label: "Phone" },
    { key: "interestedIn",   label: "Interested In" },
    { key: "eventDate",      label: "Date" },
    { key: "location",       label: "Location" },
    { key: "guestCount",     label: "Guest Count" },
    { key: "socialMedia",    label: "Social Media" },
    { key: "referralSource", label: "How You Found Me" },
    { key: "message",        label: "Message" },
];

export default function SubmissionSummary() {
    const [submission, setSubmission] = useState<Submission | null>(null);

    useEffect(() => {
        const raw = sessionStorage.getItem("contactSubmission");
        if (raw) {
            setSubmission(JSON.parse(raw));
            sessionStorage.removeItem("contactSubmission");
        }
    }, []);

    if (!submission) return null;

    const rows = LABELS.filter(({ key }) => submission[key]);

    if (rows.length === 0) return null;

    return (
        <div className={styles.summary}>
            <h3>Here's what you submitted:</h3>
            <dl className={styles.list}>
                {rows.map(({ key, label }) => (
                    <div key={key} className={styles.row}>
                        <dt className={styles.label}>{label}</dt>
                        <dd className={styles.value}>{submission[key]}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
