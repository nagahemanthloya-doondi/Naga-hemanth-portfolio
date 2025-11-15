
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
