import { useState, useEffect } from 'react';
import './index.css';
import EventForm from './components/EventForm';
import IdeaCard from './components/IdeaCard';
import { EventDetails, GeneratedIdea } from './types/types';
import { Sparkles } from 'lucide-react';

function App() {
  const [generatedIdeas, setGeneratedIdeas] = useState<GeneratedIdea[]>([]);

  useEffect(() => {
    const savedIdeas = localStorage.getItem('savedIdeas');
    if (savedIdeas) {
      setGeneratedIdeas(JSON.parse(savedIdeas));
    }
  }, []);

  const generateIdeas = (details: EventDetails) => {
    // This is a simple implementation. In a real app, this would be more sophisticated
    // and possibly connected to an API
    const newIdeas: GeneratedIdea[] = [
      {
        id: crypto.randomUUID(),
        theme: `${details.eventType === 'corporate' ? 'Professional' : 'Fun'} ${details.location} Gathering`,
        decorations: [
          'Themed centerpieces',
          'Ambient lighting',
          'Custom banners',
          'Color-coordinated decorations'
        ],
        activities: [
          'Ice-breaker games',
          'Group activities',
          'Entertainment shows',
          'Interactive stations'
        ],
        saved: false
      },
      {
        id: crypto.randomUUID(),
        theme: `${details.budget === 'luxury' ? 'Elegant' : 'Casual'} ${details.eventType} Experience`,
        decorations: [
          'Seasonal flowers',
          'Themed backdrops',
          'Custom signage',
          'Mood lighting'
        ],
        activities: [
          'Team building exercises',
          'Group competitions',
          'Creative workshops',
          'Social mixing activities'
        ],
        saved: false
      }
    ];

    setGeneratedIdeas(newIdeas);
  };

  const handleSaveIdea = (id: string) => {
    const updatedIdeas = generatedIdeas.map(idea =>
      idea.id === id ? { ...idea, saved: !idea.saved } : idea
    );
    setGeneratedIdeas(updatedIdeas);
    localStorage.setItem('savedIdeas', JSON.stringify(updatedIdeas));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl font-bold text-gray-900">Event Theme Generator</h1>
            <Sparkles className="h-8 w-8 text-indigo-600" />
          </div>
          <p className="text-lg text-gray-600">Create unique event concepts tailored to your needs</p>
        </div>

        <div className="flex justify-center">
          <EventForm onGenerate={generateIdeas} />
        </div>

        {generatedIdeas.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
            {generatedIdeas.map(idea => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onSave={handleSaveIdea}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
