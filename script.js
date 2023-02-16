var Vehicles = /** @class */ (function () {
    function Vehicles(bName, type, price, image, color) {
        this.bName = bName;
        this.type = type;
        this.price = price;
        this.color = color;
        this.image = image;
    }
    Vehicles.prototype.printCarName = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.image, "\" class=\"card-img-top\" alt=\"").concat(this.bName, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title Model\">").concat(this.bName, "</h5>\n          <p class=\"fuel\">Type: ").concat(this.type, "</p>\n          <p class=\"year\">Available Colour: ").concat(this.color, "</p>\n          <p class=\"location\"> Price: ").concat(this.price, "\u20AC</p>\n          <a href=\"#\" class=\"btn btn-primary\">Buy</a>\n        </div>\n      </div>");
    };
    return Vehicles;
}());
var astonMartin = document.getElementById("carname");
var astonMartindb7 = new Vehicles("Aston Martin", "sportscar", 50000, "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg", "red");
astonMartin.innerHTML = astonMartindb7.printCarName();
var Porsche = document.getElementById("carname2");
var Porsche911 = new Vehicles("Porsche 911 Turbo", "sportscar", 60000, "https://cdn.pixabay.com/photo/2017/11/09/16/07/porsche-911-turbo-2933964__340.jpg", "silver");
Porsche.innerHTML = Porsche911.printCarName();
var Audi = document.getElementById("carname3");
var AudiA7 = new Vehicles("Audi A7", "Limousine", 40000, "https://cdn.pixabay.com/photo/2021/06/27/18/47/audi-6369736__340.jpg", "black");
Audi.innerHTML = AudiA7.printCarName();
var VW = document.getElementById("carname4");
var VWBeetle = new Vehicles("VW Beetle", "Coupe", 30000, "https://cdn.pixabay.com/photo/2017/10/03/17/26/vw-2813334__340.jpg", "yellow");
VW.innerHTML = VWBeetle.printCarName();
