
export enum ExperienceLevel {
  BEGINNER = 'PRINCIPIANTE',
  INTERMEDIATE = 'INTERMEDIO',
  ADVANCED = 'AVANZADO'
}

export interface Club {
  id: string;
  name: string;
  location: string;
  runners: number;
  image: string;
  isFollowing: boolean;
  category: string;
}

export interface RunningEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  distances: string[];
  isPopular?: boolean;
  isNew?: boolean;
  slotsLeft?: number;
  organizer?: string;
  price?: number;
  description?: string;
  attendingFriends?: string[];
}

export interface RaceSummary {
  distance: number;
  time: string;
  pace: string;
  calories: number;
  topRank: number;
}
