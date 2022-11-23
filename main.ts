import { Serie } from './serie';

import { dataSeries } from './dataSeries.js';


const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"console.log("algoooo", "olaa");



function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {

    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.nombre}</td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>
                           <td>${c.descripcion}</td>
                           <td>${c.link}</td>
                           <td><img class="align-middle" src="${c.portada}" width="auto" height="70" alt=""></td>`;
    seriesTbody.appendChild(trElement);
  });
}
renderSeriesInTable(dataSeries);


const objetoParaPonerPromedio: HTMLElement = document.getElementById('promedio')!;

function calcularPromedioTemporadas(series: Serie[]): string {
    let numeroDeSeries: number = series.length;
    let total: number = 0;
    series.forEach((serie) => total = total + serie.temporadas);
    let promedio: number = total/numeroDeSeries;
    return promedio.toString();
}

var promedioTemporadas = calcularPromedioTemporadas(dataSeries);

const elementoNuevoConPromedio = document.createElement("span");
elementoNuevoConPromedio.innerHTML = promedioTemporadas;

objetoParaPonerPromedio.appendChild(elementoNuevoConPromedio);