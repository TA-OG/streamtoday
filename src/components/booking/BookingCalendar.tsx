"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfDay } from "date-fns";

interface BookingCalendarProps {
  selectedPlan?: string;
  onSelect: (date: Date, time: string) => void;
}

const timeSlots = [
  "09:00", "10:30", "12:00", "13:30", "15:00", "16:30"
];

const unavailableDates: Date[] = [];

const planDetails: Record<string, { name: string; pricePerHour: number; duration: number }> = {
  "cave-studio": { name: "Cave Studio", pricePerHour: 45, duration: 90 },
  "studio-one": { name: "Studio One", pricePerHour: 75, duration: 90 },
  "content-retainer": { name: "Content Retainer", pricePerHour: 0, duration: 90 },
  "content-engine": { name: "The Content Engine", pricePerHour: 0, duration: 90 },
};

export function BookingCalendar({ selectedPlan, onSelect }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const plan = selectedPlan ? planDetails[selectedPlan] : null;

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const isDateUnavailable = (date: Date) => {
    const today = startOfDay(new Date());
    if (isBefore(date, today)) return true;
    if (date.getDay() === 0) return true; // Sundays closed
    return unavailableDates.some((d) => isSameDay(d, date));
  };

  const handleDateClick = (date: Date) => {
    if (!isDateUnavailable(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {selectedPlan && plan && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200">
          <p className="text-sm text-gray-600">Selected plan:</p>
          <p className="font-bold">{plan.name}</p>
          {plan.pricePerHour > 0 && (
            <p className="text-sm text-gray-500">£{plan.pricePerHour}/hour · {plan.duration} min session</p>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <button onClick={previousMonth} className="p-2 hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-bold">{format(currentMonth, "MMMM yyyy")}</h3>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => {
              const unavailable = isDateUnavailable(day);
              const selected = selectedDate && isSameDay(day, selectedDate);
              const currentMonthFlag = isSameMonth(day, currentMonth);

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => handleDateClick(day)}
                  disabled={unavailable || !currentMonthFlag}
                  className={`
                    aspect-square flex items-center justify-center text-sm
                    ${!currentMonthFlag ? "text-gray-300" : ""}
                    ${unavailable && currentMonthFlag ? "text-gray-300 cursor-not-allowed" : ""}
                    ${selected ? "bg-black text-white" : ""}
                    ${!selected && !unavailable && currentMonthFlag ? "hover:bg-gray-100" : ""}
                    ${isToday(day) && !selected ? "font-bold border border-black" : ""}
                  `}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {selectedDate ? format(selectedDate, "EEEE, MMMM d") : "Select a date"}
          </h3>

          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    py-3 px-4 border text-sm font-medium transition-colors
                    ${selectedTime === time
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Please select a date from the calendar to see available times.</p>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
