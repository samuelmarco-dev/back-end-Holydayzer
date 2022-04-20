import express from 'express';
import cors from 'cors';

import arrayHolidays from './dados.js';
import transformData from './transformData.js';
import valiadarFeriado from './validarFeriado.js';
import feriadosMes from './feriadosMes.js';

const appServer = express();
appServer.use(cors());

appServer.get('/holidays', (request, response) =>{
    response.send(arrayHolidays);
});

appServer.get('/is-today-holiday', (request, response) =>{
    const dataHoje = new Date().toLocaleDateString();
    const holidaysFormat = transformData(arrayHolidays);
    const isTodayHoliday = valiadarFeriado(holidaysFormat, dataHoje);

    if(isTodayHoliday === -1){
        response.send('Não, hoje não é feriado');
    }
    else{
        response.send(`Sim, hoje é ${arrayHolidays[isTodayHoliday].name}`);
    }
});

appServer.get('/holidays/:idMes', (request, response)=>{
    const id = request.params.idMes;
    let resultado;

    if(id > 12 || id < 1){
        response.send('Mês inválido');
    }else{
        resultado = feriadosMes(id);
        if(resultado.length === 0){
            response.send('Não há feriados neste mês');
        }else{
            response.send(resultado);
        }
    }
});

appServer.listen(4000);