import { IPlayer } from "./types";

interface PlayerPosition {
  player: undefined | IPlayer; // Substitua Player pelo tipo real do seu jogador
  isBench: boolean;
  id: number;
  x: number;
  y: number;
}

interface Formation {
  [formationName: string]: PlayerPosition[];
}

const formations: Formation = {
  '4-4-2': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 }, // Zagueiro direito
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 }, // Lateral esquerdo
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 }, // Lateral direito
    { player: undefined, isBench: false, id: 6, x: 25, y: 40 }, // Volante esquerdo
    { player: undefined, isBench: false, id: 7, x: 25, y: 60 }, // Volante direito
    { player: undefined, isBench: false, id: 8, x: 35, y: 20 }, // Ala esquerdo
    { player: undefined, isBench: false, id: 9, x: 35, y: 80 }, // Ala direito
    { player: undefined, isBench: false, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
    { player: undefined, isBench: false, id: 11, x: 45, y: 60 },  // Centroavante direito

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-3-3': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 }, // Zagueiro direito
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 }, // Lateral esquerdo
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 }, // Lateral direito
    { player: undefined, isBench: false, id: 6, x: 25, y: 50 }, // Volante
    { player: undefined, isBench: false, id: 7, x: 35, y: 30 }, // Meia esquerdo
    { player: undefined, isBench: false, id: 8, x: 35, y: 70 }, // Meia direito
    { player: undefined, isBench: false, id: 9, x: 45, y: 50 }, // Centroavante
    { player: undefined, isBench: false, id: 10, x: 45, y: 20 }, // Ponta esquerda
    { player: undefined, isBench: false, id: 11, x: 45, y: 80 },  // Ponta direita

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '3-5-2': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { player: undefined, isBench: false, id: 2, x: 12, y: 30 }, // Zagueiro esquerdo
    { player: undefined, isBench: false, id: 3, x: 12, y: 50 }, // Zagueiro central
    { player: undefined, isBench: false, id: 4, x: 12, y: 70 }, // Zagueiro direito
    { player: undefined, isBench: false, id: 5, x: 30, y: 10 }, // Lateral esquerdo
    { player: undefined, isBench: false, id: 6, x: 30, y: 90 }, // Lateral direito
    { player: undefined, isBench: false, id: 7, x: 25, y: 35 }, // Volante esquerdo
    { player: undefined, isBench: false, id: 8, x: 25, y: 65 }, // Volante direito
    { player: undefined, isBench: false, id: 9, x: 35, y: 50 }, // Meia
    { player: undefined, isBench: false, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
    { player: undefined, isBench: false, id: 11, x: 45, y: 60 },  // Centroavante direito

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '5-3-2': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },   // Goleiro
    { player: undefined, isBench: false, id: 2, x: 12, y: 30 },  // Zagueiro esquerdo
    { player: undefined, isBench: false, id: 3, x: 12, y: 50 },  // Zagueiro central
    { player: undefined, isBench: false, id: 4, x: 12, y: 70 },  // Zagueiro direito
    { player: undefined, isBench: false, id: 5, x: 15, y: 10 },  // Lateral esquerdo
    { player: undefined, isBench: false, id: 6, x: 15, y: 90 },  // Lateral direito
    { player: undefined, isBench: false, id: 7, x: 30, y: 40 },  // Volante
    { player: undefined, isBench: false, id: 8, x: 30, y: 60 },  // Meia central
    { player: undefined, isBench: false, id: 9, x: 40, y: 50 },  // Meia ofensivo
    { player: undefined, isBench: false, id: 10, x: 45, y: 30 },  // Atacante esquerdo
    { player: undefined, isBench: false, id: 11, x: 45, y: 70 },   // Atacante direito

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-5-1': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 },
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 },
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 },
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 },
    { player: undefined, isBench: false, id: 6, x: 25, y: 20 },
    { player: undefined, isBench: false, id: 7, x: 25, y: 80 },
    { player: undefined, isBench: false, id: 8, x: 30, y: 40 },
    { player: undefined, isBench: false, id: 9, x: 30, y: 60 },
    { player: undefined, isBench: false, id: 10, x: 35, y: 50 },
    { player: undefined, isBench: false, id: 11, x: 45, y: 50 },  // Único atacante

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-2-4': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 },
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 },
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 },
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 },
    { player: undefined, isBench: false, id: 6, x: 25, y: 40 },
    { player: undefined, isBench: false, id: 7, x: 25, y: 60 },
    { player: undefined, isBench: false, id: 8, x: 40, y: 20 },
    { player: undefined, isBench: false, id: 9, x: 40, y: 80 },
    { player: undefined, isBench: false, id: 10, x: 40, y: 40 },
    { player: undefined, isBench: false, id: 11, x: 40, y: 60 },

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '3-4-3': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },
    { player: undefined, isBench: false, id: 2, x: 12, y: 30 },
    { player: undefined, isBench: false, id: 3, x: 12, y: 50 },
    { player: undefined, isBench: false, id: 4, x: 12, y: 70 },
    { player: undefined, isBench: false, id: 5, x: 25, y: 20 },
    { player: undefined, isBench: false, id: 6, x: 25, y: 80 },
    { player: undefined, isBench: false, id: 7, x: 30, y: 40 },
    { player: undefined, isBench: false, id: 8, x: 30, y: 60 },
    { player: undefined, isBench: false, id: 9, x: 45, y: 20 },
    { player: undefined, isBench: false, id: 10, x: 45, y: 80 },
    { player: undefined, isBench: false, id: 11, x: 45, y: 50 },

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-2-3-1': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 },
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 },
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 },
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 },
    { player: undefined, isBench: false, id: 6, x: 25, y: 40 },
    { player: undefined, isBench: false, id: 7, x: 25, y: 60 },
    { player: undefined, isBench: false, id: 8, x: 35, y: 50 },  // CAM
    { player: undefined, isBench: false, id: 9, x: 40, y: 30 },  // Ponta esquerda
    { player: undefined, isBench: false, id: 10, x: 40, y: 70 },  // Ponta direita
    { player: undefined, isBench: false, id: 11, x: 45, y: 50 },  // Centroavante

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-1-4-1': [
    { player: undefined, isBench: false, id: 1, x: 5, y: 50 },
    { player: undefined, isBench: false, id: 2, x: 10, y: 30 },
    { player: undefined, isBench: false, id: 3, x: 10, y: 70 },
    { player: undefined, isBench: false, id: 4, x: 15, y: 10 },
    { player: undefined, isBench: false, id: 5, x: 15, y: 90 },
    { player: undefined, isBench: false, id: 6, x: 25, y: 50 },  // Volante
    { player: undefined, isBench: false, id: 7, x: 35, y: 20 },
    { player: undefined, isBench: false, id: 8, x: 35, y: 80 },
    { player: undefined, isBench: false, id: 9, x: 35, y: 40 },
    { player: undefined, isBench: false, id: 10, x: 35, y: 60 },
    { player: undefined, isBench: false, id: 11, x: 45, y: 50 },

    { player: undefined, isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { player: undefined, isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { player: undefined, isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { player: undefined, isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ]
};


export function getFormations() {
  // const formationsMirror: Formation = formations
  // if (mirror) {
  //   Object.keys(formations).forEach(k => {
  //     formationsMirror[k] = formations[k].map(f => ({
  //       ...f,
  //       x: (1000 - f.x),
  //       y: f.y
  //     }))
  //   });
  //   return formationsMirror;
  // }
  // Object.keys(formations).forEach(k => {
  //   formationsMirror[k] = formations[k].map(f => ({
  //     ...f,
  //     x: f.x * 10 - 50,
  //     y: f.y * 6
  //   }))
  // });
  return formations;
}

export const defaultFormation = formations['4-4-2']