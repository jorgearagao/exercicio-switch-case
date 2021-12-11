const resultado = document.querySelector('.resultado');

const data = new Date();

let diaSemana;
let mes;

switch (data.getDay()) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira';
        break;
    case 2:
        diaSemana = 'Terça-feira';
        break;
    case 3:
        diaSemana = 'Quarta-feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Terça-feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
}

switch (data.getMonth() + 1) {
    case 1:
        mes = 'Janeiro';
        break;
    case 2:
        mes = 'Fevereiro';
        break;
    case 3:
        mes = 'Março';
        break;
    case 4:
        mes = 'Abril';
        break;
    case 5:
        mes = 'Maio';
        break;
    case 6:
        mes = 'Junho';
        break;
    case 7:
        mes = 'Julho';
        break;
    case 8:
        mes = 'Agosto';
        break;
    case 9:
        mes = 'Setembro';
        break;
    case 10:
        mes = 'Outubro';
        break;
    case 11:
        mes = 'Novembro';
        break;
    case 12:
        mes = 'Dezembro';
        break;
}


resultado.innerHTML = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}
<br>${data.getHours()}:${data.getMinutes()}`;