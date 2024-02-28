import { Candidate } from './candidate.model';

export interface Stage {
  name: string;
  code: string;
  theme: string;
  displayIndex: number;
  movableStages: string[];
  subInfo: object | null;
  candidates: Candidate[];
  id: string | null;
}
