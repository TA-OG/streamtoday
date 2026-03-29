import { NextResponse } from "next/server";

// Availability is managed entirely by Acuity Scheduling.
// This endpoint is kept as a stub for future use.
export async function GET() {
  return NextResponse.json({
    message: "Availability is managed via Acuity Scheduling at https://streamtoday.as.me",
    bookingUrl: "https://streamtoday.as.me",
  });
}
