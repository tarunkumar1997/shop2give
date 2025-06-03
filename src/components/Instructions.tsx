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
    <div className="flex flex-col items-center p-8 text-center md:items-start md:text-left bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-pink text-brand-teal">
        {icon}
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-[#1E2A32]">
        Step {number} – {title}
      </h3>
      <p className="text-[#374151]">{description}</p>
    </div>
  );
}

export function Instructions() {
  return (
    <section id="instructions" className="bg-[#FFF8E7] py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-[#1E2A32]">
          Start meaningful giving — fast, simple, and impactful.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Step
            number={1}
            title="Create your fundraiser"
            description="Click the 'Start a Shop2Give' button to begin. Our AI-powered system will guide you through setting up your fundraiser details and goals."
            icon={<CircleDollarSign className="h-7 w-7" />}
          />
          <Step
            number={2}
            title="Share your fundraiser link"
            description="Share your unique fundraiser link with friends and family. Track progress and engage supporters through your Shop2Give dashboard."
            icon={<Share2 className="h-7 w-7" />}
          />
          <Step
            number={3}
            title="Receive funds securely"
            description="Add your bank details or invite your fundraiser beneficiary to receive donations directly and securely through our platform."
            icon={<CheckCircle className="h-7 w-7" />}
          />
        </div>
      </div>
    </section>
  );
}