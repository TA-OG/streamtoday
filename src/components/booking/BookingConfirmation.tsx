import { Check, Calendar, MapPin, Mail } from "lucide-react";
import Link from "next/link";

interface BookingConfirmationProps {
  bookingData: {
    date?: Date;
    time?: string;
    plan?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

const planNames: Record<string, string> = {
  "cave-studio": "Cave Studio",
  "studio-one": "Studio One",
  "content-retainer": "Content Retainer",
  "content-engine": "The Content Engine",
};

export function BookingConfirmation({ bookingData }: BookingConfirmationProps) {
  return (
    <div className="p-6 lg:p-12 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>

      <h2 className="heading-md mb-4">Booking confirmed!</h2>
      <p className="body-lg mb-8 max-w-lg mx-auto">
        Thanks {bookingData.firstName}. We&apos;ve sent a confirmation to {bookingData.email}
        with all the details and deposit payment instructions.
      </p>

      <div className="bg-gray-50 p-6 max-w-md mx-auto mb-8 text-left">
        <h3 className="font-bold mb-4">Booking details</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>
              {bookingData.date?.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}{" "}
              at {bookingData.time}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>20 Fletcher Gate, Nottingham NG1 2FZ</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>{planNames[bookingData.plan || "cave-studio"]}</span>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto space-y-4">
        <h3 className="font-bold">What happens next?</h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-gray-50">
            <div className="font-bold mb-2">1. Confirmation email</div>
            <p className="text-gray-600">Check your inbox for booking details and deposit invoice.</p>
          </div>
          <div className="p-4 bg-gray-50">
            <div className="font-bold mb-2">2. Reminder</div>
            <p className="text-gray-600">We&apos;ll send a reminder 24 hours before your session.</p>
          </div>
          <div className="p-4 bg-gray-50">
            <div className="font-bold mb-2">3. Show up</div>
            <p className="text-gray-600">Arrive 10 minutes early. We&apos;ll handle the rest.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/services" className="btn-secondary">
          Explore Services
        </Link>
      </div>
    </div>
  );
}
