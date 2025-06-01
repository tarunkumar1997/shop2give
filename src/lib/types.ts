export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Medical', slug: 'medical', icon: '🏥' },
  { id: '2', name: 'Memorial', slug: 'memorial', icon: '🕯️' },
  { id: '3', name: 'Emergency', slug: 'emergency', icon: '🚨' },
  { id: '4', name: 'Nonprofit', slug: 'nonprofit', icon: '🤝' },
  { id: '5', name: 'Education', slug: 'education', icon: '📚' },
  { id: '6', name: 'Animal', slug: 'animal', icon: '🐾' },
  { id: '7', name: 'Environment', slug: 'environment', icon: '🌱' },
  { id: '8', name: 'Business', slug: 'business', icon: '💼' },
  { id: '9', name: 'Community', slug: 'community', icon: '🏘️' },
  { id: '10', name: 'Competition', slug: 'competition', icon: '🏆' },
  { id: '11', name: 'Creative', slug: 'creative', icon: '🎨' },
  { id: '12', name: 'Event', slug: 'event', icon: '📅' },
  { id: '13', name: 'Faith', slug: 'faith', icon: '🙏' },
  { id: '14', name: 'Family', slug: 'family', icon: '👨‍👩‍👧‍👦' },
  { id: '15', name: 'Sports', slug: 'sports', icon: '⚽' },
  { id: '16', name: 'Travel', slug: 'travel', icon: '✈️' },
  { id: '17', name: 'Volunteer', slug: 'volunteer', icon: '🤲' },
  { id: '18', name: 'Wishes', slug: 'wishes', icon: '⭐' },
];