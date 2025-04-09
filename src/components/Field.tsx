'use client';
import { useAppContext } from '@/contexts/AppContext';
import Player from './Player';

export default function Field() {
  const {teamA, teamB} = useAppContext();

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
    <div className='w-full bg-green-800'>
    <div style={{width:sizes.field.c*factor, height: sizes.field.l*factor}} className={`relative m-auto bg-green-700 border-4 border-white`}>
      {/* Linhas do campo */}
      <div style={{width:sizes.area.c*factor, height:sizes.area.l*factor}} className={`absolute border-2 border-white border-l-0 border-solid left-0 top-1/2 transform -translate-y-1/2`}></div>
      <div style={{width:sizes.littleArea.c*factor, height:sizes.littleArea.l*factor}} className={`absolute border-2 border-white border-l-0 border-solid left-0 top-1/2 transform -translate-y-1/2`}></div>
      <div style={{width:sizes.dot.c*factor, height:sizes.dot.l*factor, left:sizes.dot.dis*factor}} className={`absolute bg-amber-50 border-2 border-white rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
    
      <div className={`absolute inset-0 border-2 border-white border-solid left-1/2`}></div>
      <div style={{width: sizes.circle.c*factor, height: sizes.circle.l*factor}} className={`absolute border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
      <div style={{width: sizes.dot.c*factor, height: sizes.dot.l*factor}} className={`absolute  bg-amber-50 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
     
      <div style={{width:sizes.area.c*factor, height: sizes.area.l*factor}} className="absolute border-2 border-white border-r-0 border-solid right-0 top-1/2 transform -translate-y-1/2"></div>
      <div style={{width:sizes.littleArea.c*factor, height: sizes.littleArea.l*factor}} className="absolute border-2 border-white border-r-0 border-solid right-0 top-1/2 transform -translate-y-1/2"></div>
      <div style={{width:sizes.dot.c*factor, height: sizes.dot.l*factor, right:sizes.dot.dis*factor}} className="absolute bg-amber-50 border-2 border-white rounded-full top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
     
      {teamA.players.map((player) => (
        <Player
          key={`${teamB.id}-${player.id}`}
          player={player}

        />
      ))}
      {teamB.players.map((player) => (
        <Player
          key={`${teamB.id}-${player.id}`}
          player={player}
        />
      ))}
    </div>
    </div>
  );
}