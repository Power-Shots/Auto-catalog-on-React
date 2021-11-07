const SortService = {
  sortObjs(arr, key, reverse = false) {
    let sortedArr = [];

    if(key==='price' || key==="year"){
        sortedArr = arr.sort((a, b) => {
            if (+a[key] > +b[key]) {
              return 1;
            }
            if (+a[key] < +b[key] ) {
              return -1;
            }
            return 0;
        });
    }
    else{
        sortedArr = arr.sort((a, b) => {
            if (a[key].toLowerCase() > b[key].toLowerCase()) {
              return 1;
            }
            if (a[key].toLowerCase() < b[key].toLowerCase() ) {
              return -1;
            }
            return 0;
        });
    }
      
     
    if(reverse){
      sortedArr = sortedArr.reverse();
    }

    return sortedArr;
  },
};

export default SortService;
