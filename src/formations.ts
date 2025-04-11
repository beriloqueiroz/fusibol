
interface PlayerPosition {
  isBench: boolean;
  id: number;
  number?: number;
  x: number;
  y: number;
}

interface Formation {
  [formationName: string]: PlayerPosition[];
}

function getJerseyNumber(id: number): number {
  // Mapeamento de posições para números de camisa tradicionais
  const positionNumbers: Record<number, number> = {
    1: 1,   // Goleiro
    2: 4,   // Zagueiro esquerdo
    3: 2,   // Zagueiro direito
    4: 6,   // Lateral esquerdo
    5: 3,   // Lateral direito
    6: 5,   // Volante
    7: 8,   // Meia central
    8: 7,   // Meia ofensivo
    9: 9,   // Centroavante
    10: 10, // Segundo atacante
    11: 11, // Ponta direita
  };

  // Para reservas (ids 12-22), usamos o próprio id como número
  return id <= 11 ? positionNumbers[id] : id;
}

const formations: Formation = {
  '4-4-2': [
    { isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { isBench: false, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
    { isBench: false, id: 3, x: 10, y: 70 }, // Zagueiro direito
    { isBench: false, id: 4, x: 15, y: 10 }, // Lateral esquerdo
    { isBench: false, id: 5, x: 15, y: 90 }, // Lateral direito
    { isBench: false, id: 6, x: 25, y: 40 }, // Volante esquerdo
    { isBench: false, id: 7, x: 25, y: 60 }, // Volante direito
    { isBench: false, id: 8, x: 35, y: 20 }, // Ala esquerdo
    { isBench: false, id: 9, x: 35, y: 80 }, // Ala direito
    { isBench: false, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
    { isBench: false, id: 11, x: 45, y: 60 },  // Centroavante direito

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-3-3': [
    { isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { isBench: false, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
    { isBench: false, id: 3, x: 10, y: 70 }, // Zagueiro direito
    { isBench: false, id: 4, x: 15, y: 10 }, // Lateral esquerdo
    { isBench: false, id: 5, x: 15, y: 90 }, // Lateral direito
    { isBench: false, id: 6, x: 25, y: 50 }, // Volante
    { isBench: false, id: 7, x: 35, y: 30 }, // Meia esquerdo
    { isBench: false, id: 8, x: 35, y: 70 }, // Meia direito
    { isBench: false, id: 9, x: 45, y: 50 }, // Centroavante
    { isBench: false, id: 10, x: 45, y: 20 }, // Ponta esquerda
    { isBench: false, id: 11, x: 45, y: 80 },  // Ponta direita

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '3-5-2': [
    { isBench: false, id: 1, x: 5, y: 50 }, // Goleiro
    { isBench: false, id: 2, x: 12, y: 30 }, // Zagueiro esquerdo
    { isBench: false, id: 3, x: 12, y: 50 }, // Zagueiro central
    { isBench: false, id: 4, x: 12, y: 70 }, // Zagueiro direito
    { isBench: false, id: 5, x: 30, y: 10 }, // Lateral esquerdo
    { isBench: false, id: 6, x: 30, y: 90 }, // Lateral direito
    { isBench: false, id: 7, x: 25, y: 35 }, // Volante esquerdo
    { isBench: false, id: 8, x: 25, y: 65 }, // Volante direito
    { isBench: false, id: 9, x: 35, y: 50 }, // Meia
    { isBench: false, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
    { isBench: false, id: 11, x: 45, y: 60 },  // Centroavante direito

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '5-3-2': [
    { isBench: false, id: 1, x: 5, y: 50 },   // Goleiro
    { isBench: false, id: 2, x: 12, y: 30 },  // Zagueiro esquerdo
    { isBench: false, id: 3, x: 12, y: 50 },  // Zagueiro central
    { isBench: false, id: 4, x: 12, y: 70 },  // Zagueiro direito
    { isBench: false, id: 5, x: 15, y: 10 },  // Lateral esquerdo
    { isBench: false, id: 6, x: 15, y: 90 },  // Lateral direito
    { isBench: false, id: 7, x: 30, y: 40 },  // Volante
    { isBench: false, id: 8, x: 30, y: 60 },  // Meia central
    { isBench: false, id: 9, x: 40, y: 50 },  // Meia ofensivo
    { isBench: false, id: 10, x: 45, y: 30 },  // Atacante esquerdo
    { isBench: false, id: 11, x: 45, y: 70 },   // Atacante direito

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-5-1': [
    { isBench: false, id: 1, x: 5, y: 50 },
    { isBench: false, id: 2, x: 10, y: 30 },
    { isBench: false, id: 3, x: 10, y: 70 },
    { isBench: false, id: 4, x: 15, y: 10 },
    { isBench: false, id: 5, x: 15, y: 90 },
    { isBench: false, id: 6, x: 25, y: 20 },
    { isBench: false, id: 7, x: 25, y: 80 },
    { isBench: false, id: 8, x: 30, y: 40 },
    { isBench: false, id: 9, x: 30, y: 60 },
    { isBench: false, id: 10, x: 35, y: 50 },
    { isBench: false, id: 11, x: 45, y: 50 },  // Único atacante

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-2-4': [
    { isBench: false, id: 1, x: 5, y: 50 },
    { isBench: false, id: 2, x: 10, y: 30 },
    { isBench: false, id: 3, x: 10, y: 70 },
    { isBench: false, id: 4, x: 15, y: 10 },
    { isBench: false, id: 5, x: 15, y: 90 },
    { isBench: false, id: 6, x: 25, y: 40 },
    { isBench: false, id: 7, x: 25, y: 60 },
    { isBench: false, id: 8, x: 40, y: 20 },
    { isBench: false, id: 9, x: 40, y: 80 },
    { isBench: false, id: 10, x: 40, y: 40 },
    { isBench: false, id: 11, x: 40, y: 60 },

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '3-4-3': [
    { isBench: false, id: 1, x: 5, y: 50 },
    { isBench: false, id: 2, x: 12, y: 30 },
    { isBench: false, id: 3, x: 12, y: 50 },
    { isBench: false, id: 4, x: 12, y: 70 },
    { isBench: false, id: 5, x: 25, y: 20 },
    { isBench: false, id: 6, x: 25, y: 80 },
    { isBench: false, id: 7, x: 30, y: 40 },
    { isBench: false, id: 8, x: 30, y: 60 },
    { isBench: false, id: 9, x: 45, y: 20 },
    { isBench: false, id: 10, x: 45, y: 80 },
    { isBench: false, id: 11, x: 45, y: 50 },

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-2-3-1': [
    { isBench: false, id: 1, x: 5, y: 50 },
    { isBench: false, id: 2, x: 10, y: 30 },
    { isBench: false, id: 3, x: 10, y: 70 },
    { isBench: false, id: 4, x: 15, y: 10 },
    { isBench: false, id: 5, x: 15, y: 90 },
    { isBench: false, id: 6, x: 25, y: 40 },
    { isBench: false, id: 7, x: 25, y: 60 },
    { isBench: false, id: 8, x: 35, y: 50 },  // CAM
    { isBench: false, id: 9, x: 40, y: 30 },  // Ponta esquerda
    { isBench: false, id: 10, x: 40, y: 70 },  // Ponta direita
    { isBench: false, id: 11, x: 45, y: 50 },  // Centroavante

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ],
  '4-1-4-1': [
    { isBench: false, id: 1, x: 5, y: 50 },
    { isBench: false, id: 2, x: 10, y: 30 },
    { isBench: false, id: 3, x: 10, y: 70 },
    { isBench: false, id: 4, x: 15, y: 10 },
    { isBench: false, id: 5, x: 15, y: 90 },
    { isBench: false, id: 6, x: 25, y: 50 },  // Volante
    { isBench: false, id: 7, x: 35, y: 20 },
    { isBench: false, id: 8, x: 35, y: 80 },
    { isBench: false, id: 9, x: 35, y: 40 },
    { isBench: false, id: 10, x: 35, y: 60 },
    { isBench: false, id: 11, x: 45, y: 50 },

    { isBench: true, id: 12, x: 5, y: 110 },  // Reserva
    { isBench: true, id: 13, x: 10, y: 110 },  // Reserva
    { isBench: true, id: 14, x: 15, y: 110 },  // Reserva
    { isBench: true, id: 15, x: 20, y: 110 },  // Reserva
    { isBench: true, id: 16, x: 25, y: 110 },  // Reserva
    { isBench: true, id: 17, x: 30, y: 110 },  // Reserva
    { isBench: true, id: 18, x: 5, y: 120 },  // Reserva
    { isBench: true, id: 19, x: 10, y: 120 },  // Reserva
    { isBench: true, id: 20, x: 15, y: 120 },  // Reserva
    { isBench: true, id: 21, x: 20, y: 120 }, // Reserva
    { isBench: true, id: 22, x: 25, y: 120 }  // Reserva
  ]
};

export function getFormations() {
  const formationsMirror: Formation = formations
  Object.keys(formations).forEach(k => {
    formationsMirror[k] = formations[k].map(f => ({
      ...f,
      number: getJerseyNumber(f.id),
      x: f.x - 5,
    }))
  });
  return formationsMirror;
}

export const defaultFormationLabel = '4-4-2'

export const defaultFormation = formations[defaultFormationLabel]
