
import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  embedUrl: string;
  date?: string;
  description?: string;
}

const VideoCard = ({ title, embedUrl, date, description }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe 
          src={embedUrl} 
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-temple-dark">{title}</h3>
        {date && <p className="text-sm text-gray-500 mt-1">{date}</p>}
        {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default VideoCard;
