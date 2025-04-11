import { IPerson } from "@/types"
import { useState } from "react";
import { ModalName } from "./ModalName";
import { useAppContext } from "@/contexts/AppContext";

interface IFixedPersonProps {
  person:IPerson
  side:'A'|'B'|'B1'|'B2'|'J'
}


export function FixedPerson({person, side}:IFixedPersonProps) {
  const {saveTempPerson} = useAppContext();

  function editPlayer({name}:{name:string}) {
    person.name=name;
    saveTempPerson(person, side)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
      setIsModalOpen(true)
  };

  return (
     <>
          <button className='absolute hover:opacity-45 text-center' type='button' 
          style={{left: `${person.x}px`, top: `${person.y}px`}}  onClick={onClick}>    
            <span className="absolute top-[-20] left-0 text-sm m-auto text-center w-max">{person.name}</span>
            <div className={`
              w-10 h-10 rounded-full
              flex items-center justify-center text-white
              text-xs cursor-pointer select-none z-1 m-auto 
            `} style={{ backgroundColor: `${person.color}`}}>
            </div>
          </button>
          
          {isModalOpen && (
            <ModalName person={person} close={()=>setIsModalOpen(false)} edit={editPlayer}/>
            )}
        </>
  )
}