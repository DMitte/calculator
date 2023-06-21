import {cambiar_tema} from "./themes.js";
import {funcionalidadBotones} from './botonesFun.js'

const container = document.querySelector('.container');
const header = document.querySelector('header');
const mostrar = document.querySelector('p');
const todos_botones = document.querySelector('#digitar');
const boton = document.querySelectorAll('.boton');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const igual = document.querySelector('#igual');
const labels = document.querySelectorAll('.sliderContainer label');
const slider = document.querySelector('.sliderContainer .slider');




document.body.addEventListener('change', function(e){
    let target = e.target;
    
    switch(target.id){
        case 'toggle3radio1':
            cambiar_tema('hsl(222, 26%, 31%)','hsl(223, 31%, 20%)','hsl(224, 36%, 15%)','hsl(225, 21%, 49%)','hsl(224, 28%, 35%)','hsl(6, 63%, 50%)','hsl(6, 70%, 34%)','hsl(30, 25%, 89%)','hsl(28, 16%, 65%)','white',container,header,mostrar,todos_botones,boton,del,reset,igual,labels,slider)
            break;

        case 'toggle3radio2':
            cambiar_tema('hsl(0, 0%, 90%)','hsl(0, 5%, 81%)','hsl(0, 0%, 93%)','hsl(185, 42%, 37%)','hsl(185, 58%, 25%)','hsl(25, 98%, 40%)','hsl(25, 99%, 27%)','hsl(45, 7%, 89%)','hsl(35, 11%, 61%)','hsl(60, 10%, 19%)',container,header,mostrar,todos_botones,boton,del,reset,igual,labels,slider)
            break;

        case 'toggle3radio3':
            cambiar_tema('hsl(268, 75%, 9%)','hsl(268, 71%, 12%)','hsl(268, 71%, 12%)','hsl(281, 89%, 26%)','hsl(285, 91%, 52%)','hsl(176, 100%, 44%)','hsl(177, 92%, 70%)','hsl(268, 47%, 21%)','hsl(290, 70%, 36%)','hsl(52, 100%, 62%)',container,header,mostrar,todos_botones,boton,del,reset,igual,labels,slider)
            break;
    }
})

boton.forEach(bot => {
    bot.addEventListener('click', () => {
        funcionalidadBotones(bot, mostrar)
    })
})