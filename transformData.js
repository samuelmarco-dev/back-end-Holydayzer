function transformData(arr) {
    const arrayHolidaysTransform = [];

    for (let i = 0; i < arr.length; i++) {
        const arrDate = arr[i].date.split("/");
        const dia = arrDate[1].length === 1 ? `0${arrDate[1]}` : arrDate[1];
        const mes = arrDate[0].length === 1 ? `0${arrDate[0]}` : arrDate[0];
        
        const dataFormat = [dia, mes, arrDate[2]];
        arrayHolidaysTransform.push(dataFormat.join("/"));
    }
    return arrayHolidaysTransform;
}

export default transformData;