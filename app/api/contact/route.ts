import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nom, email, sujet, message } = await request.json();

    // Vérification des champs
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // Configuration de Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Envoi du message
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Nelyfox : ${sujet}`,
      text: `
Nom : ${nom}
Email : ${email}

Message :
${message}
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès !" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erreur d'envoi :", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}