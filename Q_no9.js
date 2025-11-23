function displayCar(){
    console.log("this is car");
}
function displaytruck(){
    console.log("this is truck")
}
function displayBike(){
    console.log("this is bike")
}
function vehicleInfo(vehicleCategory,callbackfn){
    console.log("vehicle category:",vehicleCategory);
    callbackfn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displaytruck)
vehicleInfo("Bike", displayBike)