'use client'
import { IPlayer } from "@/types";
import { useState } from "react";


type ModalProps = {
  player: IPlayer
  close:()=>void
  edit:({name, number}:{name:string, number: string})=>void
}


export function ModalPlayer({player, close, edit}:ModalProps) {
  const [name, setName] = useState(player.name);
  const [number, setNumber] = useState(player.number);

  const handleSave = () => {
    edit({name,number});
    close();
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Editar Jogador</h3>
          <button 
            onClick={close}
            className="text-gray-500 hover:text-gray-700 w-10 h-10 text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="playerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do jogador"
              className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2"
            />
          </div>
          
          <div>
            <label htmlFor="playerNumber" className="block text-sm font-medium text-gray-700">
              Número:
            </label>
            <input
              type="text"
              id="playerNumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Número da camisa"
              maxLength={2}
              className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}