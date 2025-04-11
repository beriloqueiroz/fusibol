'use client'
import { getFormations } from "@/formations";
import { IPlayer, ITeam } from "@/types";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  teamA: ITeam
  teamB: ITeam
  saveTempPlayer: (player:IPlayer,side: 'A' | 'B') =>void
  saveTeam: (team:ITeam,side: 'A' | 'B') => void
  saveTempTeam: (team:ITeam, side:'A' | 'B') => void
  resetTempTeam: (side:'A' | 'B') => void
  deleteTeam: (team:ITeam) => void
  getTeam: (name:string)=>ITeam[]
  loadTeams: ()=>ITeam[]
  teams: ITeam[]
}

const initialTeamA: ITeam = { 
  formation:'4-4-2', 
  name:'', 
  color:"#444444",
  players: getFormations()['4-4-2'].map(f=>({
    color:"#444444",
    id: f.id,
    isBench: f.isBench,
    name:'',
    number: f.number ?? '',
    team:'',
    x:f.x,
    y:f.y}))
};
const initialTeamB: ITeam = { 
  formation:'4-4-2', 
  name:'', 
  color:"#FF0000",
  players: getFormations()['4-4-2'].map(f=>({
    color:"#FF0000",
    id: f.id,
    isBench: f.isBench,
    name:'',
    number: f.number ?? '',
    team:'',
    x:f.x,
    y:f.y}))
};

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [teamA, setTeamA] = useState<ITeam>(initialTeamA)
  const [teamB, setTeamB] = useState<ITeam>(initialTeamB)
  const [teams, setTeams] = useState<ITeam[]>([])

  function saveTempTeam(team:ITeam, size:'A' | 'B') {
    if (size==='A')
      setTeamA(team)
    else setTeamB(team)
  }

  function resetTempTeam(size:'A' | 'B') {
    if (size==='A')
      setTeamA(initialTeamA)
    else setTeamB(initialTeamB)
  }

  function saveTeam(team:ITeam, side: 'A' | 'B') {
    if (side==='A')
      setTeamA(team)
    else setTeamB(team)
    localStorage.setItem(team.name, JSON.stringify(team))
  }

  function deleteTeam(team:ITeam) {
    localStorage.removeItem(team.name)
    loadTeams()
  }

  function getTeam(name:string) :ITeam[] {
    if (name.length<2) return []
    const matches = [];
    if (!localStorage) return []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.toLowerCase()?.startsWith(name)) {
        const item = localStorage.getItem(key);
        if (item == null) continue;
        matches.push(JSON.parse(item));
      }
    }
    return matches as ITeam[]
  } 
  
  function loadTeams() :ITeam[] {
    const matches = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key){
        const item = localStorage.getItem(key);
        if (item == null) continue;
        try {
        const itemObj:ITeam = JSON.parse(item);
        if (!itemObj.name || itemObj.name.length<1) continue;
        matches.push(itemObj);
        } catch (e) {
          console.error(e)
          continue;
        }        
      }
    }
    setTeams(matches)
    return matches
  } 

  function saveTempPlayer(player:IPlayer, side:'A'|'B') {
    if (side == 'A') {
      teamA.players = teamA.players.map(p=>{
        if (p.id===player.id) {
          p.x= player.x
          p.y= player.y
          p.name=player.name
          p.number=player.number
        }
        return p;
      })
      if (teamA.name == '') teamA.name='A'
      saveTempTeam(teamA, side);
    }
    if (side == 'B') {
      teamB.players = teamB.players.map(p=>{
        if (p.id===player.id) {
          p.x= player.x
          p.y= player.y
          p.name=player.name
          p.number=player.number
        }
        return p;
      })
      if (teamA.name == '') teamA.name='B'
      saveTempTeam(teamB, side);
    }
  }

  return (
    <AppContext.Provider value={{ teamA, teamB, saveTeam, saveTempPlayer, deleteTeam, getTeam, resetTempTeam, loadTeams, saveTempTeam , teams}}>
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
