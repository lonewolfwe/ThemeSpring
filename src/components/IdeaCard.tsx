import { BookmarkPlus, BookmarkCheck, Palette, PartyPopper } from 'lucide-react';
import { GeneratedIdea } from '../types/types';

interface IdeaCardProps {
  idea: GeneratedIdea;
  onSave: (id: string) => void;
}

export default function IdeaCard({ idea, onSave }: IdeaCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 space-y-6">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800 leading-tight">{idea.theme}</h3>
          <p className="text-sm text-gray-500">Perfect for your special event</p>
        </div>
        <button
          onClick={() => onSave(idea.id)}
          className={`group flex items-center justify-center h-10 w-10 rounded-full transition-all duration-200 ${
            idea.saved 
              ? 'bg-indigo-50 text-indigo-600' 
              : 'hover:bg-gray-50 text-gray-400 hover:text-indigo-600'
          }`}
          aria-label={idea.saved ? "Remove from saved" : "Save idea"}
        >
          {idea.saved ? (
            <BookmarkCheck className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
          ) : (
            <BookmarkPlus className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Palette className="h-4 w-4 text-indigo-500" />
            <h4>Decorations</h4>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {idea.decorations.map((decoration, index) => (
              <li 
                key={index}
                className="text-gray-600 text-sm bg-gray-50 px-3 py-2 rounded-lg"
              >
                {decoration}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <PartyPopper className="h-4 w-4 text-indigo-500" />
            <h4>Activities</h4>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {idea.activities.map((activity, index) => (
              <li 
                key={index}
                className="text-gray-600 text-sm bg-gray-50 px-3 py-2 rounded-lg"
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
