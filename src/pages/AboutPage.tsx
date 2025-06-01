import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-blue-900">About Shop2Give</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8 text-xl text-gray-600">
              Shop2Give exists to empower people to make a difference — by connecting 
              everyday purchases with life-changing causes.
            </p>

            <p className="mb-6">
              Rooted in Christian values, we bring communities together to support 
              each other through transparent giving, purposeful products, and 
              sustainable impact.
            </p>

            <p className="mb-6">
              Founded from a personal journey of faith, Shop2Give helps fund missions, 
              education, emergencies, and medical needs — through donations and 
              meaningful shopping.
            </p>

            <p className="text-xl font-medium text-blue-900">
              Every gift you give helps others give back.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}