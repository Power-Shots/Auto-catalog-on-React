const LocalStorageService = {

    getAllCars: () => {
        let carsList = JSON.parse(localStorage.setItem('carsData'));
        if(carsList){
            return carsList;
        }
        else{
            return [];
        }
    },

    postCarsList: (carsArr) => {
        localStorage.setItem('carsData', JSON.stringify(carsArr));
    },

    addCar:(car) => {
        let carsList = this.getAllCars();       
        carsList = [car, ...carsList];
        localStorage.setItem('carsData', JSON.stringify(carsList));
    },

    deleteCarById: (id)=> {
        let carsList = this.getAllCars();
        carsList = carsList.filter(car => car.id !== id);
        localStorage.setItem('carData', JSON.stringify(carsList));
    },
}

export default LocalStorageService;