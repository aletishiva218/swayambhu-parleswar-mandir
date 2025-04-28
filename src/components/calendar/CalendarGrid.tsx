import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';

interface CalendarGridProps {
  currentDate: Date;
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

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startingDayIndex = getDay(monthStart);

  const hasEvent = (day: number, monthStr: string) => {
    return events.some(event => parseInt(event.date) === day && event.month === monthStr);
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {/* Days of week */}
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
        <div key={index} className="text-center font-semibold p-2">
          {day}
        </div>
      ))}
      
      {/* Empty days */}
      {Array(startingDayIndex).fill(null).map((_, index) => (
        <div key={`empty-${index}`} className="p-2 h-24 border border-gray-100"></div>
      ))}
      
      {/* Calendar days */}
      {daysInMonth.map((date) => {
        const day = parseInt(format(date, 'd'));
        const monthStr = format(date, 'MMM');
        const hasEventOnDay = hasEvent(day, monthStr);
        
        return (
          <div 
            key={`day-${day}`} 
            className={`p-2 h-24 border border-gray-100 ${hasEventOnDay ? 'bg-temple-gold bg-opacity-10' : ''}`}
          >
            <div className={`text-sm font-medium ${hasEventOnDay ? 'text-temple-maroon' : ''}`}>
              {day}
            </div>
            
            {hasEventOnDay && (
              <div className="text-xs mt-1 bg-temple-saffron text-white p-1 rounded truncate">
                Event
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;