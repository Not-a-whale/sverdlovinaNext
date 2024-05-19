import { Resend } from "resend";
import { EmailTemplate } from "@/components/shared/email-template";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["sabaoth8@gmail.com", "sabaoth@ukr.net", "delivered@resend.dev"],
      subject: "Нова заявка!",
      react: EmailTemplate({ firstName: `${name}`, email, phone, message }),
      text: "Відправлена нова заявка!",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
