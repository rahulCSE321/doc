export type ProviderType = 'therapist' | 'psychiatrist';

export interface Provider {
  id: string;
  name: string;
  type: ProviderType;
  title: string;
  degree?: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  image: string;
  isTopRated: boolean;
  isRciLicensed?: boolean;
  rating: number;
  reviewsCount: number;
  sessionFee: number;
  sessionDurationMins: number;
  availableSlot: string;
  specialties: string[];
  cities: string[];
  inPersonAvailable: boolean;
}

export interface CityInfo {
  name: string;
  state: string;
  therapistsCount: number;
  psychiatristsCount: number;
  clinicsCount: number;
  areas: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  license?: string;
  avatar: string;
}

export type MoodType = 'calm' | 'energized' | 'anxious' | 'low' | 'overwhelmed' | 'hopeful';

export interface MoodLog {
  id: string;
  date: string;
  mood: MoodType;
  intensity: number; // 1-10
  tags: string[];
  notes?: string;
}
