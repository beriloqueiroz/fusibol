'use client';
import { useState } from 'react';
import Field from './Field';
import BenchArea from './BenchArea';
import { ITeam, IPlayer } from '@/types';

interface IBigFieldProps {
  teamA: ITeam;
  teamB: ITeam;
  onTeamChange: (team: ITeam) => void;
}

export default function BigField({ teamA, teamB, onTeamChange }: IBigFieldProps) {
  const [benchPlayers, setBenchPlayers] = useState<IPlayer[]>([]);

  const handlePlayerMove = (teamId: 'A' | 'B', playerId: string, pos: IPosition) => {
    const updatedTeam = teamId === 'A' ? { ...teamA } : { ...teamB };
    const playerIndex = updatedTeam.players.findIndex(p => p.id === playerId);
    if (playerIndex !== -1) {
      updatedTeam.players[playerIndex] = { ...updatedTeam.players[playerIndex], ...pos };
      onTeamChange(updatedTeam);
    }
  };

  const handlePlayerToBench = (player: IPlayer) => {
    setBenchPlayers(prev => [...prev, player]);
    const updatedTeam = player.teamId === 'A' ? { ...teamA } : { ...teamB };
    updatedTeam.players = updatedTeam.players.filter(p => p.id !== player.id);
    onTeamChange(updatedTeam);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <BenchArea 
        players={benchPlayers} 
        onPlayerReturn={(player) => {
          setBenchPlayers(prev => prev.filter(p => p.id !== player.id));
          const updatedTeam = player.teamId === 'A' ? { ...teamA } : { ...teamB };
          updatedTeam.players = [...updatedTeam.players, player];
          onTeamChange(updatedTeam);
        }}
      />

      <div className="relative">
        <Field
          team={teamA}
          onPlayerMove={(id, pos) => handlePlayerMove('A', id, pos)}
          onPlayerDropToBench={handlePlayerToBench}
        />
        {!teamB.isHidden && (
          <Field
            team={teamB}
            onPlayerMove={(id, pos) => handlePlayerMove('B', id, pos)}
            onPlayerDropToBench={handlePlayerToBench}
          />
        )}
      </div>
    </div>
  );
}