export type Category = 'medical' | 'education' | 'mission' | 'community' | 'emergency';

interface CategoryKeywords {
  [key: string]: string[];
}

const categoryKeywords: CategoryKeywords = {
  medical: ['surgery', 'treatment', 'hospital', 'cancer', 'medical', 'health', 'operation', 'therapy'],
  education: ['school', 'tuition', 'university', 'student', 'education', 'scholarship', 'learning', 'study'],
  mission: ['mission', 'church', 'ministry', 'faith', 'bible', 'christian', 'missionary', 'gospel'],
  community: ['community', 'neighborhood', 'local', 'family', 'support', 'help', 'assistance'],
  emergency: ['emergency', 'urgent', 'crisis', 'disaster', 'immediate', 'help']
};

export interface CategorySuggestion {
  category: Category;
  confidence: number;
  keywords: string[];
}

export function detectCategory(text: string): CategorySuggestion | null {
  if (!text) return null;

  const words = text.toLowerCase().split(/\s+/);
  let maxMatches = 0;
  let suggestedCategory: Category | null = null;
  let matchedKeywords: string[] = [];

  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    const matches = keywords.filter(keyword => 
      words.some(word => word.includes(keyword))
    );

    if (matches.length > maxMatches) {
      maxMatches = matches.length;
      suggestedCategory = category as Category;
      matchedKeywords = matches;
    }
  });

  if (!suggestedCategory || maxMatches === 0) return null;

  // Calculate confidence based on number of matches
  const confidence = Math.min((maxMatches / 3) * 100, 100);

  return {
    category: suggestedCategory,
    confidence,
    keywords: matchedKeywords
  };
}

export const categoryInfo = {
  medical: {
    icon: '🏥',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'Medical campaigns typically help with healthcare costs and treatments.'
  },
  education: {
    icon: '📚',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Education campaigns support learning and academic opportunities.'
  },
  mission: {
    icon: '🙏',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Mission & Faith campaigns support religious and spiritual endeavors.'
  },
  community: {
    icon: '👥',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Community campaigns help local groups and neighborhoods.'
  },
  emergency: {
    icon: '⚡',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'Emergency campaigns address urgent and immediate needs.'
  }
};