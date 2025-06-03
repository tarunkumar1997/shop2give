import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface CreateCampaignChatProps {
  onUpdateForm: (data: any) => void;
}

const questions = [
  "What cause are you raising funds for?",
  "Share your story - why does this matter to you?",
  "What's your fundraising goal amount?",
  "Which category fits best: Medical, Education, Mission & Faith, Community, or Emergency Relief?"
];

const getAIResponse = (userMessage: string, questionIndex: number): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (questionIndex === 0) {
    if (lowerMessage.includes('medical')) {
      return "That's wonderful! Medical campaigns often resonate strongly with supporters. What specific medical need are you raising funds for?";
    } else if (lowerMessage.includes('education')) {
      return "Education is such a powerful investment! Tell me more about the educational opportunity you're supporting.";
    } else if (lowerMessage.includes('mission') || lowerMessage.includes('faith')) {
      return "What a beautiful calling! Mission work touches hearts. Can you share more about this mission opportunity?";
    }
  }
  
  return questions[questionIndex + 1] || "Thank you for sharing! I'll help you create your campaign now.";
};

export function CreateCampaignChat({ onUpdateForm }: CreateCampaignChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentQuestion === 0) {
      addAIMessage(questions[0]);
    }
  }, []);

  const addAIMessage = async (text: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [...prev, { id: Date.now().toString(), text, sender: 'ai' }]);
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    // Add user message
    const userMessage = { id: Date.now().toString(), text: currentInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');

    // Update form data based on current question
    const formUpdate: any = {};
    switch (currentQuestion) {
      case 0:
        formUpdate.title = currentInput;
        break;
      case 1:
        formUpdate.description = currentInput;
        break;
      case 2:
        formUpdate.goalAmount = parseInt(currentInput.replace(/[^0-9]/g, ''));
        break;
      case 3:
        formUpdate.category = currentInput;
        break;
    }
    onUpdateForm(formUpdate);

    // Get AI response
    const aiResponse = getAIResponse(currentInput, currentQuestion);
    
    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      await addAIMessage(aiResponse);
    }
  };

  return (
    <div className="flex h-[600px] flex-col rounded-lg border border-gray-200 bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-brand-teal text-white'
                    : 'bg-gray-100 text-gray-900'
                } max-w-[80%]`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-gray-500"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>AI is typing...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
            placeholder="Type your answer..."
          />
          <Button type="submit" disabled={!currentInput.trim() || isTyping}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}