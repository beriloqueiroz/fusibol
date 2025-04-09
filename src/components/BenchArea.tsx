'use client';
import { IPlayer } from '@/types';
import Player from './Player';

interface IBenchAreaProps {
  players: IPlayer[];
  onPlayerReturn: (player: IPlayer) => void;
}

export default function BenchArea({ players, onPlayerReturn }: IBenchAreaProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const player = JSON.parse(e.dataTransfer.getData('player')) as IPlayer;
    onPlayerReturn(player);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-16 bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg p-2 mb-4 flex gap-2 overflow-x-auto"
    >
      <span className="absolute -top-6 left-0 text-sm font-medium">Reservas</span>
      {players.map((player) => (
        <Player
          key={`bench-${player.id}`}
          player={player}
          isBench
          onClick={() => onPlayerReturn(player)}
        />
      ))}
    </div>
  );
}