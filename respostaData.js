import transformData from "./transformData.js";
import arrayHolidays from "./dados.js";

function respostaArrayData() {
    const holidaysFormat = transformData(arrayHolidays);
    let arrayResposta = [];
    for(let i = 0; i < arrayHolidays.length; i++){
        arrayResposta.push({...arrayHolidays[i], date: holidaysFormat[i]});
    }
    return arrayResposta;
}

export default respostaArrayData;