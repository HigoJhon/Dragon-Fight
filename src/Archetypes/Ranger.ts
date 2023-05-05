import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdRangerInstances = 0;
  private _energyType: EnergyType;
        
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdRangerInstances += 1;
  }
        
  get energyType(): EnergyType {
    return this._energyType;
  }
        
  static createdArchetypeInstances(): number {
    return Ranger._createdRangerInstances;
  }
}