

    arrRemove =(arr, value) =>{
        const index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }
