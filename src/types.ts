// src/types.ts
export interface IPlayer {
  id: number;
  x: number;
  y: number;
  number: string;
  name: string;
  color: string;
  team: string;
  isBench: boolean;
}

export interface ITeam {
  id: 'A' | 'B';
  name: string;
  formation: string;
  players: IPlayer[];
  isHidden?: boolean;
}

export interface IPosition {
  x: number;
  y: number;
}

export type TFormationKey = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-5-1' | '4-2-4' | '3-4-3' | '4-2-3-1' | '4-1-4-1';