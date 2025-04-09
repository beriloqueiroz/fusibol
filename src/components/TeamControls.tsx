'use client';
import { ITeam, TFormationKey } from '@/types';

interface ITeamControlsProps {
  team: ITeam;
  onTeamChange: (team: ITeam) => void;
  onReset: () => void;
}

const formations: { value: TFormationKey; label: string }[] = [
  { value: '4-4-2', label: '4-4-2 (Clássico)' },
  { value: '4-3-3', label: '4-3-3 (Ofensivo)' },
  // ... outras formações
];

export default function TeamControls({ team, onTeamChange, onReset }: ITeamControlsProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-3">
        <input
          type="text"
          value={team.name}
          onChange={(e) => onTeamChange({ ...team, name: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Nome do time"
        />

        <select
          value={team.formation}
          onChange={(e) => onTeamChange({ ...team, formation: e.target.value as TFormationKey })}
          className="w-full p-2 border rounded"
        >
          {formations.map((formation) => (
            <option key={formation.value} value={formation.value}>
              {formation.label}
            </option>
          ))}
        </select>

        <input
          type="color"
          value={team.color}
          onChange={(e) => onTeamChange({ ...team, color: e.target.value })}
          className="w-full h-10 cursor-pointer"
        />

        <button
          onClick={onReset}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Resetar Time
        </button>
      </div>
    </div>
  );
}