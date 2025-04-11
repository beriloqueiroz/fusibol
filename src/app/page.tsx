'use client';

import Field from '@/components/Field';
import { Search } from '@/components/Search';
import TeamControls from '@/components/TeamControls';
import { useAppContext } from '@/contexts/AppContext';

export default function TacticalBoard() {  
  const {teamA, teamB} = useAppContext();
    return (
    <main className="min-h-screen bg-black p-16">
      <div className=" mx-auto flex gap-2">
        <div className='m-auto flex flex-col gap-2'>
          <TeamControls team={teamA} side='A'/>
          <Search side='A'/>
        </div>
        <div className="">
          <Field teamA={teamA} teamB={teamB}/>
        </div>
        <div className='m-auto flex flex-col gap-2'>
          <TeamControls team={teamB} side='B'/>
          <Search side='B'/>
        </div>
      </div>
    </main>
  );
}