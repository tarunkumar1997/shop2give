// Using JSX transform, no React import needed
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sparkles } from 'lucide-react';

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
            
            <div className="my-10 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h2 className="flex items-center text-2xl font-bold text-blue-900 mb-4">
                <Sparkles className="mr-2 text-blue-600" size={24} />
                Why Shop2Give?
              </h2>
              
              <p className="mb-4 text-lg font-medium">
                Because every purchase has power.
              </p>
              
              <p className="mb-6">
                When you shop through Shop2Give, you're not just buying a product — you're funding a mission, 
                supporting someone's story, and making generosity simple. Whether it's helping a student attend 
                Bible school, supporting a family through illness, or giving toward life-changing causes, 
                your order becomes a gift that gives back.
              </p>
              
              <p className="text-xl font-medium text-blue-900">
                Shop intentionally. Donate effortlessly. Change lives — one purchase at a time.
              </p>
            </div>

            <p className="text-xl font-medium text-blue-900 mt-8">
              Every gift you give helps others give back.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}