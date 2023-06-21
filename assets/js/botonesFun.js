export function funcionalidadBotones(boton, pantalla){
    //obtener valores y el texto
    let texto = pantalla.innerText
    let accion = boton.value
    

    switch(accion){
        case 'DEL':
            let nuevoTexto = texto.slice(0, -1)
            if(nuevoTexto != ""){
                pantalla.innerText = nuevoTexto
            }else{
                pantalla.innerText = "0"
            }                
            break;
        case 'mas':
            var valorLocaOperacion = localStorage.getItem("operacion")
            if(!valorLocaOperacion){                
                let operacion = `${texto} +`;
                localStorage.setItem('operacion', operacion)
            }else{            
                valorLocaOperacion = valorLocaOperacion + ` ${texto} +`
                localStorage.setItem('operacion', valorLocaOperacion)
            }
            
            pantalla.innerText = "0"

            break;
        case 'menos':   
            var valorLocaOperacion = localStorage.getItem("operacion")         
            if(!valorLocaOperacion){                
                let operacion = `${texto} -`;
                localStorage.setItem('operacion', operacion)
            }else{            
                valorLocaOperacion = valorLocaOperacion + ` ${texto} -`
                localStorage.setItem('operacion', valorLocaOperacion)
            }
            
            pantalla.innerText = "0"
            break;
        case 'punto':
            let ultimoC = texto.slice(-1)
            console.log(ultimoC)
            if(ultimoC != "."){
                pantalla.innerText = texto + "."
            }
            
            break;
        case 'dividir':
            var valorLocaOperacion = localStorage.getItem("operacion")         
            if(!valorLocaOperacion){                
                let operacion = `${texto} /`;
                localStorage.setItem('operacion', operacion)
            }else{            
                valorLocaOperacion = valorLocaOperacion + ` ${texto} /`
                localStorage.setItem('operacion', valorLocaOperacion)
            }
            
            pantalla.innerText = "0"
            break;
        case 'multipli':
            var valorLocaOperacion = localStorage.getItem("operacion")         
            if(!valorLocaOperacion){                
                let operacion = `${texto} *`;
                localStorage.setItem('operacion', operacion)
            }else{            
                valorLocaOperacion = valorLocaOperacion + ` ${texto} *`
                localStorage.setItem('operacion', valorLocaOperacion)
            }
            
            pantalla.innerText = "0"
            break;
        case 'reset':
            //reseteo de la pantalla
            pantalla.innerText = "0";

            //reseteo de la operacion
            localStorage.removeItem('operacion')
            break;
        case 'igual':
            var textLocal = localStorage.getItem('operacion')
            textLocal = textLocal + ` ${texto}`
            var total = eval(textLocal)
            pantalla.innerText = total;
            
            localStorage.removeItem('operacion')
            console.log(textLocal)

            break;
        default:
            if(texto === "0"){
                pantalla.innerText = accion
            }else{
                let newtexto = texto + accion
                pantalla.innerText = newtexto
            }
            break;        
    }
    


    console.log(accion, pantalla)    
    
}