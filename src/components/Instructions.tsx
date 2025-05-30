import React from 'react';
import { CircleDollarSign, Share2, CheckCircle } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function Step({ number, title, description, icon }: StepProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center md:items-start md:text-left">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-blue-900">
        Step {number} – {title}
      </h3>
      <p className="text-blue-800/80">{description}</p>
    </div>
  );
}

export function Instructions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
          <span className="mr-2">📖</span> How to Start a Shop2Give
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Step
            number={1}
            title="Create your fundraiser"
            description="Click the 'Start a Shop2Give' button to get started. You'll be guided by prompts powered by AI to add fundraiser details and set your goal, which can be changed anytime."
            icon={<CircleDollarSign className="h-6 w-6" />}
          />
          <Step
            number={2}
            title="Share your fundraiser link"
            description="Once live, share your fundraiser link with friends and family to start gaining momentum. You'll also find helpful resources for running your fundraiser in your Shop2Give dashboard."
            icon={<Share2 className="h-6 w-6" />}
          />
          <Step
            number={3}
            title="Securely receive funds"
            description="Add your bank information or invite your fundraiser beneficiary to add theirs and start receiving funds directly and securely."
            icon={<CheckCircle className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
}