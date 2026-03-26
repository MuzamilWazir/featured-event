import { NextResponse } from "next/server";
import events from "@/data/events.json";
import { Event } from "@/app/types/event";

export async function GET() {
  return NextResponse.json<Event[]>(events);
}
