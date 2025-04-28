import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, addMonths, subMonths } from 'date-fns';
import CalendarGrid from './CalendarGrid';

interface CalendarProps {
  events: Array<{
    id: number;
    title: string;
    date: string;
    month: string;
    description: string;
    time: string;
    location: string;
    category: string;
  }>;
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // Start with April 2025

  const nextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const previousMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-temple-maroon flex items-center">
          <CalendarIcon size={24} className="mr-2" />
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        <div className="flex space-x-2">
          <button 
            onClick={previousMonth}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            &larr; Previous
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            Next &rarr;
          </button>
        </div>
      </div>
      
      <CalendarGrid currentDate={currentDate} events={events} />
    </div>
  );
};

export default Calendar;