'use client';

import Wrapper from "../components/wrapper";
import EventCard from "./EventCard";
import { mockEvents } from "./eventData";
import { useState } from "react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Management', 'Tech', 'Cultural', 'Psychology', 'Literary', 'General'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  return (
    <Wrapper>
      <div className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 md:px-8 py-10 pb-30">
      <div className="max-w-6xl mx-auto">
        <h1 className="flex items-center justify-center text-[#efdb92] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-tight font-cormorant">Events</h1>
        <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-full px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-[rgba(255,255,255,0.16)] inline-flex flex-wrap gap-2 sm:gap-3 max-w-full justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2.5 font-jetbrains-mono sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl md:rounded-full text-[#efdb92] text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[rgba(239,219,146,0.2)]'
                    : 'hover:bg-[rgba(255,255,255,0.09)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
    </Wrapper>
    
  );
}
