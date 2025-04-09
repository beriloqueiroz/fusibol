'use client';
import { useAppContext } from '@/contexts/AppContext';
import { IPlayer } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { ModalPlayer } from './ModalPlayer';

interface IPlayerProps {
  player: IPlayer;
}

export default function Player({player}:IPlayerProps) {
  const {teamA, teamB, setTeamA, setTeamB} = useAppContext();
  const [position, setPosition] = useState<{ x: number; y: number }>({x:player.x, y:player.y});
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const draggableRef = useRef<HTMLDivElement>(null);
  const playerSizeX = 140;
  const playerSizeY = 16;
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
  
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      setPosition({
        x,y
      });
      savePlayer(player.team, player.name, player.number, x, y)
      
    };

    function savePlayer(team:string, name:string, number:string, x:number, y:number) {
      if (team == 'A') {
        teamA.players = teamA.players.map(p=>{
          if (p.id===player.id) {
            p.x= x
            p.y= y
            p.name=name
            p.number=number
          }
          return p;
        })
        setTeamA(teamA);
      }
      if (team == 'B') {
        teamB.players = teamB.players.map(p=>{
          if (p.id===player.id) {
            p.x= x
            p.y= y
            p.name=name
            p.number=number
          }
          return p;
        })
        setTeamB(teamB);
      }
    }

    function editPlayer({name,number}:{name:string, number:string}) {
      savePlayer(player.team, name, number, player.x, player.y)
    }
  
    const handleMouseUp = () => {
      setIsDragging(false);

      if (Date.now()-timeClick <= 70) {
        setIsModalOpen(true)
      }
    };
  
    useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, offset]); 
  
  return (
    <div className='absolute' ref={draggableRef}  style={{left: `${position.x}px`, top: `${position.y}px`}} onMouseDown={handleMouseDown}>    
      <span className="text-sm text-center">{player.name}</span>

      <div className={`
        w-10 h-10 rounded-full bg-red-500
        flex items-center justify-center text-white
        text-xs cursor-pointer select-none z-1 m-auto
        ${isDragging ? 'cursor-grabbing shadow-lg' : 'cursor-grab'}
      `}>
        <span className="text-sm">{player.number}</span>
      </div>

      {isModalOpen && (
        <ModalPlayer player={player} close={()=>setIsModalOpen(false)} edit={editPlayer}/>
        )}
    </div>
  );
}