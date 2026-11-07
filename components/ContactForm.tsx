"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const { langue } = useLanguage();
  const fr = langue === "fr";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessageStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nom: formData.get("nom"),
      email: formData.get("email"),
      sujet: formData.get("sujet"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessageStatus(
          fr
            ? "Ton message a bien été envoyé ! 💜"
            : "Your message has been sent successfully! 💜"
        );

        form.reset();
      } else {
        setMessageStatus(
          result.error ||
            (fr ? "Une erreur est survenue." : "An error occurred.")
        );
      }
    } catch {
      setMessageStatus(
        fr
          ? "Impossible d'envoyer le message. Réessaie."
          : "Unable to send the message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="nom"
        placeholder={fr ? "Ton nom complet" : "Your full name"}
        required
      />

      <input
        type="email"
        name="email"
        placeholder={fr ? "Ton adresse e-mail" : "Your email address"}
        required
      />

      <input
        type="text"
        name="sujet"
        placeholder={fr ? "Sujet du message" : "Message subject"}
        required
      />

      <textarea
        name="message"
        placeholder={
          fr ? "Écris ton message ici..." : "Write your message here..."
        }
        rows={6}
        required
      />

      <button type="submit" disabled={loading}>
        {loading
          ? fr
            ? "Envoi en cours..."
            : "Sending..."
          : fr
            ? "Envoyer mon message ✉"
            : "Send my message ✉"}
      </button>

      {messageStatus && (
        <p role="status">{messageStatus}</p>
      )}

    </form>
  );
}