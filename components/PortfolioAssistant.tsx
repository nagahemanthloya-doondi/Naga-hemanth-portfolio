
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getPortfolioAssistantResponse } from '../services/geminiService';

const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I'm doondi, Hemanth's AI assistant. Ask me anything about his skills or projects." }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if(isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    const aiResponse = await getPortfolioAssistantResponse(userInput);
    
    setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-accent-light dark:bg-brand-accent-dark text-brand-bg-dark rounded-full flex items-center justify-center shadow-neo-light dark:shadow-neo-dark border-2 border-brand-text-light dark:border-brand-text-dark motion-safe:hover:animate-bounce"
          aria-label="Open portfolio assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/><path d="M12 14c-2.206 0-4-1.794-4-4h2c0 1.103.897 2 2 2s2-.897 2-2h2c0 2.206-1.794 4-4 4z"/><path d="M15.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
        </button>
      </div>

      <div className={`fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[500px] bg-brand-bg-light dark:bg-brand-bg-dark border-2 border-brand-text-light dark:border-brand-text-dark shadow-neo-light dark:shadow-neo-dark flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="p-4 border-b-2 border-brand-text-light dark:border-brand-text-dark flex justify-between items-center">
          <h3 className="font-mono font-bold">Portfolio Assistant</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="w-8 h-8 flex items-center justify-center border-2 border-brand-text-light dark:border-brand-text-dark hover:bg-brand-accent-light dark:hover:bg-brand-accent-dark hover:text-black">✕</button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 text-sm ${msg.sender === 'user' ? 'bg-brand-accent-light text-brand-bg-dark dark:bg-brand-accent-dark' : 'bg-gray-200 dark:bg-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 text-sm bg-gray-200 dark:bg-gray-800">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-0"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-2 border-t-2 border-brand-text-light dark:border-brand-text-dark flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 bg-transparent border-2 border-brand-text-light dark:border-brand-text-dark focus:outline-none focus:border-brand-accent-light dark:focus:border-brand-accent-dark font-mono"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading} className="px-4 py-2 border-2 border-brand-text-light dark:border-brand-text-dark bg-brand-text-light dark:bg-brand-text-dark text-brand-bg-light dark:text-brand-bg-dark disabled:opacity-50">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default PortfolioAssistant;
