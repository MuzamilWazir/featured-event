import { NextRequest, NextResponse } from "next/server";
import { Registration } from "@/app/types/event";

const registrations: Registration[] = [];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { eventId, eventName, name, email, phone } = body;

  if (!eventId || !name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const registration: Registration = {
    id: crypto.randomUUID(),
    eventId,
    eventName,
    name,
    email,
    phone: phone || "",
    registeredAt: new Date().toISOString(),
  };

  registrations.push(registration);

  return NextResponse.json({ success: true, registration }, { status: 201 });
}

export async function GET() {
  return NextResponse.json(registrations);
}
