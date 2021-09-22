import carData from "../../dataBase/CarsData";

const LocalStorageService = {

    getAllCars: () => {
        let carsList = localStorage.getItem('carsData');
        if(carsList){
            carsList = JSON.parse(carsList)
            return carsList;
        }
        else{
            LocalStorageService.postCarsList(carData);
            return carData;
        }
    },

    getCarById: (id) => {
        if(id) {
            let data = LocalStorageService.getAllCars();
            let car = data.filter(item => item.id === id);
            if(car.length === 0){
                return {};
            }
            return car[0];
        }
        else {throw ( new Error('Не удалось получить машину по id') )}
    },

    postCarsList: (carsArr) => {
        if(carsArr){
            localStorage.setItem('carsData', JSON.stringify(carsArr));
        }
        else {throw ( new Error('Не удалось отправить массив') )}
    },

    addCar:(car) => {
        if(car){
            let carsList = LocalStorageService.getAllCars();       
            carsList = [car, ...carsList];
            LocalStorageService.postCarsList(carsList);
        }
        else {throw ( new Error('Не удалось добавить') )}
    },

    editCar: (id, car) => {
        if(id && car){
            let data = LocalStorageService.getAllCars();
            let index = data.findIndex(item => item.id === id);
            data[index] = car;
            LocalStorageService.postCarsList(data);
        }
        else {throw ( new Error('Не удалось отредактировать') )}
    },

    deleteCarById: (id)=> {
        if(id){
            let carsList = LocalStorageService.getAllCars();
            carsList = carsList.filter(car => car.id !== id);
            LocalStorageService.postCarsList(carsList);
        }
        else {throw ( new Error('Не удалось удалить') )}
    },
}

export default LocalStorageService;