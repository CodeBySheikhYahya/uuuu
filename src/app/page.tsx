import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            title="First Card" 
            description="This is our first card component with some sample content. It's styled with Tailwind CSS."
          />
          <Card 
            title="Second Card" 
            description="Here's another card component showing how we can reuse components with different content."
          />
        </div>
      </div>
    </main>
  );
}
