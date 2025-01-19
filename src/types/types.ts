export interface EventDetails {
  eventType: string;
  audienceSize: string;
  audienceAge: string;
  budget: string;
  location: string;
}

export interface GeneratedIdea {
  id: string;
  theme: string;
  decorations: string[];
  activities: string[];
  saved?: boolean;
}
