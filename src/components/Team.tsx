'use client'
import { useAppContext } from "@/contexts/AppContext";
import Player, { IFieldLimits } from "./Player";

export function Team({id, sizeLimit}:{id:string, sizeLimit:IFieldLimits}) {
  const {teamA, teamB} = useAppContext();
  
  if (id==='A') {
    return (
      <>
      {teamA.players.map((player) => (
                <Player
                  key={`${teamA.id}-${player.id}`}
                  player={player}
                  fieldLimits={sizeLimit}
                />
              ))}</>
    );
  }
  return (
    <>
    {teamB.players.map((player) => (
              <Player
                key={`${teamB.id}-${player.id}`}
                player={player}
                fieldLimits={sizeLimit}
              />
            ))}</>
  )  
}