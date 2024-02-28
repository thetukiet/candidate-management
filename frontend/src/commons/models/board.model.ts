import { Stage } from './stage.model';

export interface Board {
  sort: any;
  set(boards: Board): unknown;
  update: any;
  name: string;
  columns: Stage[];
}
