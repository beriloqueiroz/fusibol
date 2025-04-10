'use client';

import Field from '@/components/Field';
import TeamControls from '@/components/TeamControls';
import { useAppContext } from '@/contexts/AppContext';

export default function TacticalBoard() {  
  const {teamA, teamB} = useAppContext();
    return (
    <main className="min-h-screen bg-black p-16">
      <div className=" mx-auto flex gap-2">
        <div className='m-auto'>
          <TeamControls team={teamA}/>
        </div>
        <div className="">
          <Field teamA={teamA} teamB={teamB}/>
        </div>
        <div className='m-auto'>
          <TeamControls team={teamB}/>
        </div>
      </div>
    </main>
  );
}