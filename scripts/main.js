import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"console.log("algoooo", "olaa");
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>\n                           <td>").concat(c.descripcion, "</td>\n                           <td>").concat(c.link, "</td>\n                           <td><img class=\"align-middle\" src=\"").concat(c.portada, "\" width=\"auto\" height=\"70\" alt=\"\"></td>");
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(dataSeries);
var objetoParaPonerPromedio = document.getElementById('promedio');
function calcularPromedioTemporadas(series) {
    var numeroDeSeries = series.length;
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.temporadas; });
    var promedio = total / numeroDeSeries;
    return promedio.toString();
}
var promedioTemporadas = calcularPromedioTemporadas(dataSeries);
var elementoNuevoConPromedio = document.createElement("span");
elementoNuevoConPromedio.innerHTML = promedioTemporadas;
objetoParaPonerPromedio.appendChild(elementoNuevoConPromedio);
