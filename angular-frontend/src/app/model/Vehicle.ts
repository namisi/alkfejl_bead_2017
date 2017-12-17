export class Vehicle {
  id: number;
  manufactureDate: number;
  costPerDay: number;
  manufacturer: String;
  type: String;
  licensePlateNr: String;

  constructor(manufacturer?: String, type?: String, licensePlateNr?: String, costPerDay?: number, manufactureDate?: number, id?: number) {
    this.manufactureDate = manufactureDate;
    this.costPerDay = costPerDay;
    this.manufacturer = manufacturer;
    this.type = type;
    this.licensePlateNr = licensePlateNr;
    this.id = id;
  }
}
