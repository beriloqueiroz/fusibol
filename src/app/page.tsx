'use client';

import Field from '@/components/Field';

export default function TacticalBoard() {
    return (
    <main className="min-h-screen bg-black p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Field
          />
        </div>
      </div>
    </main>
  );
}