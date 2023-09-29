import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* eslint-disable */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(Floors) {
    this._floors = Floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}