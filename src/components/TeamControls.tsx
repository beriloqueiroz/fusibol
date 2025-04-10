'use client';
import { useAppContext } from '@/contexts/AppContext';
import { defaultFormation, getFormations } from '@/formations';
import { ITeam, TFormationKey } from '@/types';


const formations: { value: TFormationKey; label: string }[] = [
  { value: '4-4-2', label: '4-4-2 (Clássico)' },
  { value: '4-3-3', label: '4-3-3 (Ofensivo)' },
  { value: "3-5-2", label:'3-5-2 (Meio-campo forte)'},
  { value: "5-3-2", label: '5-3-2 (Defesa sólida)'},
  { value: "4-5-1", label: '4-5-1 (Contenção)'},
  { value: "4-2-4", label: '4-2-4 (Ataque pesado)'},
  { value: "3-4-3", label: '3-4-3 (Equilíbrio ofensivo)'},
  { value: "4-2-3-1", label: '4-2-3-1 (Formação moderna)'},
  { value: "4-1-4-1", label: '4-1-4-1 (Controle do meio)'},
];

export default function TeamControls({team}:{team:ITeam}) {

  const {saveTeam, deleteTeam} = useAppContext();  

  function onTeamChange(team:ITeam) {
    team.name=team.id
    const positions = getFormations()[team.formation];
    team.players = team.players.map(p=>{
      const position = positions.find(pos=>pos.id===p.id)
      if (position) {
        p.x=position.x
        p.y=position.y
      }
      p.color=team.color
      return p;
    })
    saveTeam(team)
  }
  
  function onReset() {
    const positions = defaultFormation;
    team.players = team.players.map(p=>{
      const position = positions.find(pos=>pos.id===p.id)
      if (position) {
        p.x=position.x
        p.y=position.y
      }
      p.color=team.color
      return p;
    })
    saveTeam(team)
    deleteTeam(team)
  }
  
  function onSave() {
    saveTeam(team)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-3">
        <label htmlFor={'name'+team.id}>Nome do time:</label>
        <input
          type="text"
          value={team.name}
          onChange={(e) => onTeamChange({ ...team, name: e.target.value })}
          className="w-full p-2 border rounded text-black"
          placeholder="Nome do time"
          id={'name'+team.id}
        />

        <select
          value={team.formation}
          onChange={(e) => onTeamChange({ ...team, formation: e.target.value as TFormationKey })}
          className="w-full p-2 border rounded text-black"
        >
          {formations.map((formation) => (
            <option key={formation.value+team.id} value={formation.value} className='text-black'>
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
          onClick={onSave}
          className="w-full bg-green-500 text-black py-2 rounded hover:bg-red-600 transition"
        >
          Salvar
        </button>

        <button
          onClick={onReset}
          className="w-full bg-green-900 text-black py-2 rounded hover:bg-red-600 transition"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}