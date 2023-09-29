import Building from './6-sky_high';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
