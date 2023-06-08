const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
const h1 = document.createElement("h1");
const form = document.createElement("form");
const labelNames = document.createElement('label');
const inputNames = document.createElement("input");
const labelAge = document.createElement('label');
const inputAge = document.createElement('input');
const labelCity = document.createElement('label');
const selectCity = document.createElement('select');
const optionLibertad = document.createElement('option');
const optionParqueSanMartin = document.createElement('option');
const optionMerlo = document.createElement('option');
const inputEnviar = document.createElement('input');


h1.innerHTML = "Formulario de alta de personas";
labelNames.innerHTML = "Nombre y Apellido";
labelAge.innerHTML = "Edad";
labelCity.innerHTML = "Ciudad";
optionLibertad.innerHTML = "Libertad";
optionParqueSanMartin.innerHTML = "Parque San Martin";
optionMerlo.innerHTML = "Merlo Centro";


form.setAttribute("id", "miFormulario");

inputNames.setAttribute('type', 'text');
inputNames.setAttribute('class', 'controls');
labelNames.appendChild(inputNames);

inputAge.setAttribute('type', 'number');
inputAge.setAttribute('min', '18');
inputAge.setAttribute('class', 'controls');
labelAge.appendChild(inputAge);

selectCity.setAttribute('class', 'controls');
optionLibertad.setAttribute('value', 'Libertad');
optionParqueSanMartin.setAttribute('value', 'Parque San Martin');
optionMerlo.setAttribute('value', 'Merlo Centro');
selectCity.appendChild(optionLibertad);
selectCity.appendChild(optionParqueSanMartin);
selectCity.appendChild(optionMerlo);
labelCity.appendChild(selectCity);

inputEnviar.setAttribute('type', 'submit');
inputEnviar.setAttribute('value', 'enviar');
inputEnviar.setAttribute('class', 'enviar');

form.appendChild(labelNames);
form.appendChild(labelAge);
form.appendChild(labelCity);
form.appendChild(inputEnviar);
div.appendChild(h1);
div.appendChild(form);
body.appendChild(div);
