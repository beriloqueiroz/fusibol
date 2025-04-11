'use client';
import { useAppContext } from '@/contexts/AppContext';
import { IPlayer, ITeam } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { ModalPlayer } from './ModalPlayer';
import { useWindowSize } from '@/hooks/useWindowSize';

interface IPlayerProps {
  player: IPlayer;
  team: ITeam
  fieldLimits: IFieldLimits
  side: 'A' | 'B'
}

export interface IFieldLimits {
  min: {
    c: number,
    l: number
  },
  max: {
    c: number,
    l: number
  },
}

export default function Player({player, team, fieldLimits, side}:IPlayerProps) {

const playerSpacesX = 10; 
const playerSpacesY = 6;
const fieldSizeX  = fieldLimits.max.c;
const fieldSizeY  = fieldLimits.max.l;

function positionConversion(p:IPlayer, side:'A' | 'B'):{x:number, y:number}{
  if (side=='B') {
    if (p.isBench) return {x:fieldSizeX-p.x*playerSpacesX, y:p.y*playerSpacesY}
    return {x:fieldSizeX-(p.x-5)*playerSpacesX, y:fieldSizeY-(p.y)*playerSpacesY}
  }
  if (p.isBench) return {x:p.x*playerSpacesX, y:p.y*playerSpacesY}
  return {x:(p.x-5)*playerSpacesX, y:p.y*playerSpacesY}
} 

function positionConversionBack(x:number, y: number, side: 'A' | 'B', isBench: boolean):{x:number, y:number}{
  if (side=='B') {
    if (isBench) return {x:(x)/playerSpacesX, y:y/playerSpacesY}
    return {x:(x)/playerSpacesX, y:y/playerSpacesY}
  }
  if (isBench) return {x:(x)/playerSpacesX, y:y/playerSpacesY}
  return {x:(x)/playerSpacesX+5, y:y/playerSpacesY}
} 

  const {saveTempPlayer} = useAppContext();
  const [position, setPosition] = useState<{ x: number; y: number }>(positionConversion(player, side));
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const draggableRef = useRef<HTMLButtonElement>(null);
  const rect = draggableRef.current?.parentElement?.getBoundingClientRect();

  const { scrollX, scrollY } = useWindowSize();
  const playerSizeX = rect?.left ?? 0 + scrollX;
  const playerSizeY = rect?.top ?? 0 + scrollY;
  const [timeClick, setTimeClick] = useState(Date.now());

  const handleMouseDown = (e: React.MouseEvent) => {
      if (!draggableRef.current) return;
      setTimeClick(Date.now());
      const rect = draggableRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left + playerSizeX,
        y: e.clientY - rect.top + playerSizeY,
      });
      setIsDragging(true);
    };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    let x = e.clientX - offset.x;
    let y = e.clientY - offset.y;
    // Limita a posição do jogador dentro do campo
    x = Math.max(fieldLimits.min.c, Math.min(x, fieldLimits.max.c)); // Limita entre 0% e 100%
    y = Math.max(fieldLimits.min.l, Math.min(y, fieldLimits.max.l)); // Limita entre 0% e 100%
    setPosition({
      x,y
    });  
    
  };

  function editPlayer({name,number}:{name:string, number:string|number}) {
    player.name=name;
    player.number=number;
    saveTempPlayer(player, side)
  }

  const handleMouseUp = () => {
    setIsDragging(false);

    if (Date.now()-timeClick <= 90) {
      setIsModalOpen(true)
      return;
    }

    const {x, y} = positionConversionBack(position.x, position.y, side, player.isBench);
    player.x = x;
    player.y = y;
    saveTempPlayer(player, side)
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, [isDragging, offset]); 

  useEffect(()=>{
    setPosition(positionConversion(player, side))
  },[team])


  return (
    <>
      <button className='absolute hover:opacity-45' ref={draggableRef} type='button' 
      style={{left: `${position.x}px`, top: `${position.y}px`}} 
      onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>    
        <span className="absolute top-[-20] left-0 text-sm text-center w-max">{player.name}</span>
        <div className={`
          w-10 h-10 rounded-full
          flex items-center justify-center text-white
          text-xs cursor-pointer select-none z-1 m-auto 
          ${isDragging ? 'cursor-grabbing shadow-lg' : 'cursor-grab'}
        `} style={{ backgroundColor: `${player.color}`}}>
          <span className="text-sm">{player.number}</span>
          {/* <span className="text-sm">({player.y})({position.y}-{fieldSizeY}) </span> */}
        </div>
      </button>
      
      {isModalOpen && (
        <ModalPlayer player={player} close={()=>setIsModalOpen(false)} edit={editPlayer}/>
        )}
    </>
  );
}