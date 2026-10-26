import { NextResponse } from "next/server";

// Availability is managed entirely by Cal.com via embed at /book.

export async function GET() {
  return NextResponse.json({
    message: "Availability is managed via Cal.com at https://streamtoday.co.uk/book",
    bookingUrl: "https://streamtoday.co.uk/book",
  });
}
