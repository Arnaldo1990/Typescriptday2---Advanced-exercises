class Vehicles{
    bName : string;
    type : string;
    price: number;
    color: string;
    image: string;
    constructor(bName: string, type: string, price: number, image: string, color: string) {
        this.bName = bName;
        this.type = type;
        this.price = price;
        this.color = color;
        this.image = image;
    }
    printCarName() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="${this.bName}">
        <div class="card-body">
          <h5 class="card-title Model">${this.bName}</h5>
          <p class="model">Type: ${this.type}</p>
          <p class="year">Available Colour: ${this.color}</p>
          <p class="location"> Price: ${this.price}€</p>
          <p class="kilometers left"> Kilometers: ${this.price}€</p>
          <p class="numbers of seats"> Seats: ${this.price}€</p>
          <p class="fuel type"> Fuel Type: ${this.price}€</p>
          <p class="year of production"> Produced in: ${this.price}€</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>`;
      }
      }
      class Motorbikes extends Vehicles{
        motorbike: string;
        trucks: string;
        fueltype: string;
        kilometers: string;
        seats: number;
        buildingLocation: string;

        constructor (bName: string, type: string, price: number, image: string, color: string, motorbike: string, trucks: string, fueltype: string, kilometers: string, seats: number, buildingLocation: string) {
            super(bName, type, price, image, color);
            this.motorbike = motorbike;
            this.trucks = trucks;
            this.fueltype = fueltype;
            this.kilometers = kilometers;
            this.seats = seats;
            this.buildingLocation = buildingLocation;
        }
      }
let astonMartin = document.getElementById("carname") as HTMLElement
let astonMartindb7 = new Vehicles ("Aston Martin", "sportscar", 50000, "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg","red");
astonMartin.innerHTML = astonMartindb7.printCarName();

let Porsche = document.getElementById("carname2") as HTMLElement
let Porsche911 = new Vehicles ("Porsche 911 Turbo", "sportscar", 60000, "https://cdn.pixabay.com/photo/2017/11/09/16/07/porsche-911-turbo-2933964__340.jpg", "silver");
Porsche.innerHTML = Porsche911.printCarName();

let Audi = document.getElementById("carname3") as HTMLElement
let AudiA7 = new Vehicles ("Audi A7", "Limousine", 40000, "https://cdn.pixabay.com/photo/2021/06/27/18/47/audi-6369736__340.jpg", "black");
Audi.innerHTML = AudiA7.printCarName();

let VW = document.getElementById("carname4") as HTMLElement
let VWBeetle = new Vehicles ("VW Beetle", "Coupe", 30000, "https://cdn.pixabay.com/photo/2017/10/03/17/26/vw-2813334__340.jpg", "yellow");
VW.innerHTML = VWBeetle.printCarName();

let Suzuki = document.getElementById("motorbike1") as HTMLElement
let Suzukisuperbike = new Vehicles ("Suzuki", "Bike", 25000, "https://cdn.pixabay.com/photo/2019/03/15/09/09/bike-4056618__340.jpg", "blue");
Suzuki.innerHTML = Suzukisuperbike.printCarName();

let MAN = document.getElementById("Truck1") as HTMLElement
let Truck1 = new Vehicles ("MAN", "Truck", 70000, "https://cdn.pixabay.com/photo/2017/08/17/05/59/peterbilt-2650184__340.jpg", "grey");
MAN.innerHTML = Truck1.printCarName();
