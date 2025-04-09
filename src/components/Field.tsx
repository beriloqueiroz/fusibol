'use client';
import { useAppContext } from '@/contexts/AppContext';
import Player from './Player';

export default function Field() {
  const {teamA, teamB} = useAppContext();


  return (
    <div className="relative w-full h-[480px] bg-green-700 border-4 border-white">
      {/* Linhas do campo */}
      <div className="absolute inset-0 border-r-2 border-white border-dashed left-1/2"></div>
      <div className="absolute w-20 h-20 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      {teamA.players.map((player) => (
        <Player
          key={`${teamB.id}-${player.id}`}
          player={player}

        />
      ))}
      {teamB.players.map((player) => (
        <Player
          key={`${teamB.id}-${player.id}`}
          player={player}
        />
      ))}
    </div>
  );
}