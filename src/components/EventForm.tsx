import { useState } from 'react';
import { EventDetails } from '../types/types';
import { Wand2 } from 'lucide-react';

interface EventFormProps {
  onGenerate: (details: EventDetails) => void;
}

export default function EventForm({ onGenerate }: EventFormProps) {
  const [details, setDetails] = useState<EventDetails>({
    eventType: '',
    audienceSize: '',
    audienceAge: '',
    budget: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(details);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Event Type</label>
        <select
          className="w-full p-2 border rounded-md"
          value={details.eventType}
          onChange={(e) => setDetails({ ...details, eventType: e.target.value })}
          required
        >
          <option value="">Select event type</option>
          <option value="birthday">Birthday Party</option>
          <option value="corporate">Corporate Event</option>
          <option value="wedding">Wedding</option>
          <option value="reunion">Reunion</option>
          <option value="holiday">Holiday Party</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Audience Size</label>
        <select
          className="w-full p-2 border rounded-md"
          value={details.audienceSize}
          onChange={(e) => setDetails({ ...details, audienceSize: e.target.value })}
          required
        >
          <option value="">Select size</option>
          <option value="intimate">Intimate (1-20)</option>
          <option value="medium">Medium (21-50)</option>
          <option value="large">Large (51-100)</option>
          <option value="xl">Extra Large (100+)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Audience Age Group</label>
        <select
          className="w-full p-2 border rounded-md"
          value={details.audienceAge}
          onChange={(e) => setDetails({ ...details, audienceAge: e.target.value })}
          required
        >
          <option value="">Select age group</option>
          <option value="children">Children (0-12)</option>
          <option value="teens">Teenagers (13-19)</option>
          <option value="young-adults">Young Adults (20-30)</option>
          <option value="adults">Adults (31-50)</option>
          <option value="seniors">Seniors (51+)</option>
          <option value="mixed">Mixed Ages</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Budget Range</label>
        <select
          className="w-full p-2 border rounded-md"
          value={details.budget}
          onChange={(e) => setDetails({ ...details, budget: e.target.value })}
          required
        >
          <option value="">Select budget</option>
          <option value="budget">Budget Friendly</option>
          <option value="moderate">Moderate</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Location Type</label>
        <select
          className="w-full p-2 border rounded-md"
          value={details.location}
          onChange={(e) => setDetails({ ...details, location: e.target.value })}
          required
        >
          <option value="">Select location</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="both">Both</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        <Wand2 size={20} />
        Generate Ideas
      </button>
    </form>
  );
}
