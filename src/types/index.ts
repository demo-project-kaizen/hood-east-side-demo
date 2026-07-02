export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea-elixirs' | 'comfort-food';
  brand: 'hood' | 'universal-people' | 'yamie-panda';
  price: number;
  description: string;
  image: string;
  tags: string[];
  isSignature?: boolean;
  ingredients?: string[];
  calories?: string;
}

export interface AtmosphereSlot {
  timeRange: string;
  title: string;
  subtitle: string;
  vibe: string;
  musicGenre: string;
  accentColor: string;
  shadowColor: string;
  description: string;
  suggestedAction: string;
  image: string;
  activeFeature: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}
