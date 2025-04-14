
import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  description: string;
  time?: string;
  location?: string;
}

const EventCard = ({ title, date, month, description, time, location }: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="flex flex-col sm:flex-row">
        <div className="bg-temple-gold p-4 flex flex-col items-center justify-center sm:w-32">
          <Calendar className="text-temple-maroon mb-1" />
          <div className="text-3xl font-bold text-temple-maroon">{date}</div>
          <div className="text-sm font-medium text-temple-dark uppercase">{month}</div>
        </div>
        <div className="p-5 flex-1">
          <h3 className="text-xl font-semibold mb-2 text-temple-maroon">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          
          {(time || location) && (
            <div className="border-t border-gray-200 pt-2 mt-2 text-sm text-gray-700">
              {time && <div className="mb-1"><span className="font-medium">Time:</span> {time}</div>}
              {location && <div><span className="font-medium">Location:</span> {location}</div>}
            </div>
          )}
          
          <button className="btn-secondary mt-3 text-sm">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
