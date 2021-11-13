
export function cambiar_tema(main_back,toogle_back,scren_back,key_back,key_shadow,key_toggleB,key_toggleS,key_footB,key_footS,text_color,contenedor,header,mostrar,botones,boton,del,reset,igual,labels,slider){
    contenedor.style.background = main_back;
    mostrar.style.backgroundColor = scren_back;
    mostrar.style.color = text_color;
    header.style.color = text_color;
    botones.style.backgroundColor = toogle_back;
    
    if (text_color == 'white'){
        boton.forEach(element =>{
            element.style.backgroundColor = key_footB;  
            element.style.boxShadow = `0 5px ${key_footS}`;
            element.style.color = 'hsl(221, 14%, 31%)';
        });
    }else{
        
    boton.forEach(element => {
        element.style.backgroundColor = key_footB;  
        element.style.boxShadow = `0 5px ${key_footS}`;
        element.style.color = text_color; 
    });
    }

    reset.style.backgroundColor = key_back;
    reset.style.boxShadow = `0 5px ${key_shadow}`;
    reset.style.color = 'white';

    
    del.style.backgroundColor = key_back;
    del.style.boxShadow = `0 5px ${key_shadow}`;
    del.style.color = 'white';

    igual.style.backgroundColor = key_toggleB;
    igual.style.boxShadow= `0 5px ${key_toggleS}`;
    igual.style.color = 'white';

    labels.forEach(element =>{
        element.style.background = toogle_back;
    });

    slider.style.backgroundColor = key_toggleB;
};