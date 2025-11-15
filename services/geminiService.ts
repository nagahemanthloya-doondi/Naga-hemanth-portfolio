
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../constants';
import type { Project } from '../types';

// IMPORTANT: Do NOT hardcode the API key in a real-world application.
// This should be managed through environment variables.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Portfolio Assistant will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const stringifyProjects = (projects: Project[]) => {
  return projects.map(p => 
    `Title: ${p.title}\nCategory: ${p.category}\nDescription: ${p.description}\nTechnologies: ${p.techStack.join(', ')}`
  ).join('\n\n');
};

const systemInstruction = `
You are doondi, the friendly and knowledgeable AI assistant for L Naga Hemanth's portfolio.
Your personality is slightly quirky, helpful, and professional.
You have access to all of Hemanth's portfolio information. Your goal is to answer questions from potential recruiters or collaborators based ONLY on the context provided below.
Do not invent any information. If a question cannot be answered from the context, politely say so.
Keep your answers concise and to the point.

**CONTEXT:**
---
**Personal Information:**
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Contact Email: ${PERSONAL_INFO.email}

**Skills:**
${SKILLS.join(', ')}

**Projects:**
${stringifyProjects(PROJECTS)}
---
`;

export const getPortfolioAssistantResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my connection to the Gemini API is not configured. Please check the API key.";
  }

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having a bit of trouble connecting right now. Please try again later.";
  }
};
