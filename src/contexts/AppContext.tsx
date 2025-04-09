'use client'
import { ITeam } from "@/types";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  teamA: ITeam
  teamB: ITeam
  setTeamA: (team:ITeam) => void
  setTeamB: (team:ITeam) => void
}

const initialTeamA: ITeam = { formation:'4-4-2', id: 'A', name:'Ceará', players:[{id:1, name:'berilo', number:'10', x:50, y:70, color:'#44444', team:'A', isBench:false}]};
const initialTeamB: ITeam = { formation:'4-4-2', id: 'B', name:'Fortaleza', players:[{id:2, name:'carlos', number:'11', x:40, y:60, color:'#44444', team:'B', isBench:false}]};

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [teamA, setTeamA] = useState<ITeam>(initialTeamA)
  const [teamB, setTeamB] = useState<ITeam>(initialTeamB)

  function changeTeam(team:ITeam) {
    if (team.id==='A')
      setTeamA(team)
    else setTeamB(team)
    localStorage.setItem(team.name, JSON.stringify(team))
  }

  return (
    <AppContext.Provider value={{ teamA, teamB, setTeamA: changeTeam, setTeamB:changeTeam }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}