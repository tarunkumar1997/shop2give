import { DivideIcon as LucideIcon, Stethoscope, Flame, Heart, GraduationCap, Dog, Sprout, Building2, Users, Trophy, Palette, Calendar, CloudSun, Users2, FolderRoot as Football, Plane, HandMetal, Star } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { id: '1', name: 'Medical', slug: 'medical', icon: Stethoscope },
  { id: '2', name: 'Memorial', slug: 'memorial', icon: Flame },
  { id: '3', name: 'Emergency', slug: 'emergency', icon: Flame },
  { id: '4', name: 'Nonprofit', slug: 'nonprofit', icon: Heart },
  { id: '5', name: 'Education', slug: 'education', icon: GraduationCap },
  { id: '6', name: 'Animal', slug: 'animal', icon: Dog },
  { id: '7', name: 'Environment', slug: 'environment', icon: Sprout },
  { id: '8', name: 'Business', slug: 'business', icon: Building2 },
  { id: '9', name: 'Community', slug: 'community', icon: Users },
  { id: '10', name: 'Competition', slug: 'competition', icon: Trophy },
  { id: '11', name: 'Creative', slug: 'creative', icon: Palette },
  { id: '12', name: 'Event', slug: 'event', icon: Calendar },
  { id: '13', name: 'Faith', slug: 'faith', icon: CloudSun },
  { id: '14', name: 'Family', slug: 'family', icon: Users2 },
  { id: '15', name: 'Sports', slug: 'sports', icon: Football },
  { id: '16', name: 'Travel', slug: 'travel', icon: Plane },
  { id: '17', name: 'Volunteer', slug: 'volunteer', icon: HandMetal },
  { id: '18', name: 'Wishes', slug: 'wishes', icon: Star },
];

// Helper function to get random categories
export function getRandomCategories(count: number): Category[] {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}