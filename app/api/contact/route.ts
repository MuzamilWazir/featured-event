import { NextRequest, NextResponse } from "next/server";
import { ContactMessage } from "@/app/types/event";

const messages: ContactMessage[] = [];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const contactMessage: ContactMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    sentAt: new Date().toISOString(),
  };

  messages.push(contactMessage);
  return NextResponse.json({ success: true }, { status: 201 });
}

export async function GET() {
  return NextResponse.json(messages);
}
