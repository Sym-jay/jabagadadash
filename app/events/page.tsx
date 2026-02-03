import EventCard from "./EventCard";
import { mockEvents } from "./eventData";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[#efdb92] text-5xl font-bold mb-3 tracking-tight">Events</h1>
        <p className="text-gray-500 text-lg mb-12">Discover upcoming events and activities</p>
        <div className="grid grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
