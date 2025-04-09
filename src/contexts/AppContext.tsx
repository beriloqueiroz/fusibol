'use client'
import { getFormations } from "@/formations";
import { ITeam } from "@/types";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  teamA: ITeam
  teamB: ITeam
  setTeamA: (team:ITeam) => void
  setTeamB: (team:ITeam) => void
}

const initialTeamA: ITeam = { 
  formation:'4-4-2', 
  id: 'A', 
  name:'Ceará', 
  players: getFormations()['4-4-2'].map(f=>({
    color:"#444444",
    id: f.id,
    isBench:f.isBench,
    name:'',
    number:'',
    team:'A',
    x:f.x*10-40,
    y:f.y*6}))
};
const initialTeamB: ITeam = { formation:'4-4-2', id: 'B', name:'Fortaleza',
  players: getFormations(true)['4-4-2'].map(f=>({
    color:"#FF0000",
    id: f.id,
    isBench:f.isBench,
    name:'',
    number:'',
    team:'B',
    x:f.x,
    y:f.y}))

};

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