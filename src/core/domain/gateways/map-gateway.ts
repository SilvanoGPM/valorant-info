import { Map } from '../entities/map';

export abstract class MapGateway {
  abstract getAll(): Promise<Map[]>;
}
