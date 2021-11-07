import carsData from '../../dataBase/carsData.json';

const LocalStorageService = {
  getAllCars() {
    let carsList = localStorage.getItem('carsData');
    if (carsList) {
      carsList = JSON.parse(carsList);
      return carsList;
    } else {
      LocalStorageService.postCarsList(carsData);
      return carsData;
    }
  },

  getCarById(id) {
    if (id) {
      let data = LocalStorageService.getAllCars();
      let car = data.filter((item) => item.id === id);
      if (car.length === 0) {
        return {};
      }
      return car[0];
    } else {
      throw new Error('Не удалось получить машину по id');
    }
  },

  postCarsList(carsArr) {
    if (carsArr) {
      localStorage.setItem('carsData', JSON.stringify(carsArr));
    } else {
      throw new Error('Не удалось отправить массив');
    }
  },

  addCar(car) {
    if (car) {
      let carsList = LocalStorageService.getAllCars();
      carsList = [car, ...carsList];
      LocalStorageService.postCarsList(carsList);
    } else {
      throw new Error('Не удалось добавить');
    }
  },

  editCar(id, car) {
    if (id && car) {
      let carsList = LocalStorageService.getAllCars();
      let index = carsList.findIndex((item) => item.id === id);
      carsList[index] = car;
      LocalStorageService.postCarsList(carsList);
    } else {
      throw new Error('Не удалось отредактировать');
    }
  },

  deleteCarById(id) {
    if (id) {
      let carsList = LocalStorageService.getAllCars();
      carsList = carsList.filter((car) => car.id !== id);
      LocalStorageService.postCarsList(carsList);
    } else {
      throw new Error('Не удалось удалить');
    }
  },
};

export default LocalStorageService;
