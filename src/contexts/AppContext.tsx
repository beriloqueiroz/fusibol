'use client'
import { getFormations } from "@/formations";
import { IPlayer, ITeam } from "@/types";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  teamA: ITeam
  teamB: ITeam
  setTeamA: (team:ITeam) => void
  setTeamB: (team:ITeam) => void
  savePlayer: (team:string, player:IPlayer) =>void
  saveTeam: (team:ITeam) => void
  deleteTeam: (team:ITeam) => void
}

const initialTeamA: ITeam = { 
  formation:'4-4-2', 
  id: 'A', 
  name:'A', 
  color:"#444444",
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
const initialTeamB: ITeam = { formation:'4-4-2', id: 'B', name:'B', color:"#FF0000",
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

  function saveTeam(team:ITeam) {
    if (team.id==='A')
      setTeamA(team)
    else setTeamB(team)
    localStorage.setItem(team.name, JSON.stringify(team))
  }

  function deleteTeam(team:ITeam) {
    if (team.id==='A')
      setTeamA(initialTeamA)
    else setTeamB(initialTeamB)
    localStorage.removeItem(team.name)
  }

  function getTeam(name:string, id:string) :ITeam {
    return JSON.parse(localStorage.getItem(name) ?? JSON.stringify(id=='A'?initialTeamA:initialTeamB))  as ITeam
  }  

  function savePlayer(team:string, player:IPlayer) {
    if (team == 'A') {
      teamA.players = teamA.players.map(p=>{
        if (p.id===player.id) {
          p.x= player.x
          p.y= player.y
          p.name=player.name
          p.number=player.number
        }
        return p;
      })
      saveTeam(teamA);
    }
    if (team == 'B') {
      teamB.players = teamB.players.map(p=>{
        if (p.id===player.id) {
          p.x= player.x
          p.y= player.y
          p.name=player.name
          p.number=player.number
        }
        return p;
      })
      saveTeam(teamB);
    }
  }

  return (
    <AppContext.Provider value={{ teamA, teamB, setTeamA: saveTeam, setTeamB:saveTeam, savePlayer, saveTeam, deleteTeam }}>
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
