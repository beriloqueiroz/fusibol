import { useAppContext } from "@/contexts/AppContext";
import { invertColor } from "@/helper";
import { ITeam } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

export function Search({side}:{side: 'A' | 'B'}) {
  const { saveTempTeam, deleteTeam, loadTeams, teams } = useAppContext()
  const [name, setName] = useState('');

  function onChange(e:ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length<3) {
      loadTeams()
    } 
    setName(e.target.value)
  }

  useEffect(()=>{
    loadTeams()
  },[])

  function onSave(t:ITeam) {
    loadTeams()
    saveTempTeam(t, side)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <input type="text" className="rounded transition border-2 p-2  mb-2 border-black" placeholder="buscar" onChange={onChange}/>
      {teams.length>0 &&
      <ul className="p-1 border-1 rounded transition border-grey" id="li-teams">
        {teams.filter(t=>t.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())).map(t=>(
          <li className="p-1 w-full list-none cursor-pointer flex" key={t.name} value={t.name} 
          onClick={()=>onSave(t)}>
            <span className="p-2 m-1 w-full list-none cursor-pointer border-1 border-grey rounded transition" 
              style={{backgroundColor:`${t.color}`, color:`${invertColor(t.color)}`}}>{t.name} ({t.formation})
            </span>
            <button type="button" onClick={()=> deleteTeam(t)} className="p-2 m-1 rounded transition list-none cursor-pointer border-1 border-grey hover:bg-red-900">excluir</button>
          </li>
        ))}
      </ul>
      }
    </div>
  )

}