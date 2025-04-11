'use client';
import { useAppContext } from '@/contexts/AppContext';
import { getFormations } from '@/formations';
import { ITeam, TFormationKey } from '@/types';
import { useEffect, useState } from 'react';


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

export default function TeamControls({team, side}:{team:ITeam, side: 'A' | 'B'}) {

  const {saveTeam, resetTempTeam, saveTempTeam, loadTeams} = useAppContext();
  const [name, setName]=useState(team.name)  
  const [showNameAlert, setShowNameAlert]=useState(false)  

  function onTeamChangeFormationColor(team:ITeam) {
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
    team.name=name
    saveTempTeam(team, side)
  }
  
  function onReset() {
    setName('')
    resetTempTeam(side)
  }
  
  function onSave() {
    if (name.length<2) {
      setShowNameAlert(true)
      return;
    }
    team.name=name;
    team.players.forEach(p=>{
      p.team=name
    })
    saveTeam(team, side)
    loadTeams()
  }

  useEffect(()=>{
    setName(team.name)
  },[team])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-3">
        <label htmlFor={'name'+side}>Nome do time:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded text-black"
          placeholder="Nome do time"
          id={'name'+side}
        />

        <select
          value={team.formation}
          onChange={(e) => onTeamChangeFormationColor({ ...team, formation: e.target.value as TFormationKey })}
          className="w-full p-2 border rounded text-black"
        >
          {formations.map((formation) => (
            <option key={formation.value+side} value={formation.value} className='text-black'>
              {formation.label}
            </option>
          ))}
        </select>

        <input
          type="color"
          value={team.color}
          onChange={(e) => onTeamChangeFormationColor({ ...team, color: e.target.value })}
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

      {showNameAlert && 
      (
      <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-80 m-auto text-center">
          <span className='text-center'>Digite primeiro um nome</span>
          <button
            onClick={()=>setShowNameAlert(false)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition my-2"
          >
            OK
          </button>
        </div>
      </div>)
      }

    </div>
  );
}