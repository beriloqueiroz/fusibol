'use client';
import { ITeam } from '@/types';
import { useRef } from 'react';
import Player from './Player';
import { FixedPerson } from './FixedPerson';

export default function Field({teamA, teamB}:{teamA:ITeam,teamB:ITeam}) {
  const ref = useRef<HTMLDivElement>(null)

  const sizeLimit = {
    min: {
      c: 0,
      l: 0
    },
    max: {
      c: 1013,
      l: 600,
      lr: 718, //limite area de reserva
    },
  }

  const factor = 3;
  const sizes = {
    field: {
      c:351,
      l:215
    },
    circle: {
      c:58,
      l:58
    },
    dot: {
      c:2,
      l:2,
      dis: 35.75,
    },
    area: {
      c: 53,
      l: 130
    },
    littleArea: {
      c: 17.75,
      l: 59.25
    }
  }

  return (
    <div className='w-[1053px] bg-green-800 h-[920px] flex'>
      <div ref={ref} style={{width:sizes.field.c*factor, height: sizes.field.l*factor}} 
      className={`relative m-auto bg-green-700 border-1 border-white`}>
        {/* Linhas do campo */}
        <div style={{width:sizes.area.c*factor, height:sizes.area.l*factor}} className={`absolute border-2 border-white border-l-0 border-solid left-0 top-1/2 transform -translate-y-1/2`}></div>
        <div style={{width:sizes.littleArea.c*factor, height:sizes.littleArea.l*factor}} className={`absolute border-2 border-white border-l-0 border-solid left-0 top-1/2 transform -translate-y-1/2`}></div>
        <div style={{width:sizes.dot.c*factor, height:sizes.dot.l*factor, left:sizes.dot.dis*factor}} className={`absolute bg-amber-50 border-2 border-white rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
      
        <div className={`absolute inset-0 border-white border-0 border-l-2 border-solid left-1/2`}></div>
        <div style={{width: sizes.circle.c*factor, height: sizes.circle.l*factor}} className={`absolute border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
        <div style={{width: sizes.dot.c*factor, height: sizes.dot.l*factor}} className={`absolute  bg-amber-50 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
      
        <div style={{width:sizes.area.c*factor, height: sizes.area.l*factor}} className="absolute border-2 border-white border-r-0 border-solid right-0 top-1/2 transform -translate-y-1/2"></div>
        <div style={{width:sizes.littleArea.c*factor, height: sizes.littleArea.l*factor}} className="absolute border-2 border-white border-r-0 border-solid right-0 top-1/2 transform -translate-y-1/2"></div>
        <div style={{width:sizes.dot.c*factor, height: sizes.dot.l*factor, right:sizes.dot.dis*factor}} className="absolute bg-amber-50 border-2 border-white rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
        {teamA.players.map((player) => (
              <Player
                key={`${'A'}-${player.id}`}
                player={player}
                team={teamA}
                fieldLimits={sizeLimit}
                side='A'
              />
        ))}

        {teamB.players.map((player) => (
              <Player
                key={`${'B'}-${player.id}`}
                player={player}
                team={teamB}
                fieldLimits={sizeLimit}
                side='B'
              />
        ))}

        <FixedPerson side='A' person={{...teamA.coach,x:400, y:700}}/>
        <FixedPerson side='A' person={{...teamB.coach,x:600, y:700}}/>

        <FixedPerson side='A' person={{color:"#c2a92e", name:'Bandeira 1',x:400, y:-80}}/>
        <FixedPerson side='J' person={{color:"yellow", name:'Arbitro',x:500, y:-80}}/>
        <FixedPerson side='A' person={{color:"#c2a92e", name:'Bandeira 2',x:600, y:-80}}/>
      </div>
    </div>
  );
}