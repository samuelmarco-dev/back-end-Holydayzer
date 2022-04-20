import arrayHolidays from "./dados.js";
import transformData from "./transformData.js";

function feriadosMes(idMes) {
    const arrayDatas = transformData(arrayHolidays);
    const mes = idMes.length === 1 ? `0${idMes}` : idMes;
    const arrFeriadosId = [];

    for(let i = 0; i < arrayDatas.length; i++){
        const arrDate = arrayDatas[i].split("/");
        if(arrDate[1] === mes){
            arrFeriadosId.push(arrayDatas[i]);
        }
    }
    return arrFeriadosId;
}

export default feriadosMes;