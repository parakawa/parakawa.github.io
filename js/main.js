
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).resize(function(){
 if($(window).width()<320){
  $('.ih-item').removeClass('top_to_bottom');
 }
});

$(window).size(function(){
 if($(window).width()<1200){
 $(".info-back").children("p").hide()
 }
});



function leerDiv(div){
  var url;
  var id=$(div).attr('id');
  switch(id){
    case "paty":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Paty%20Arakawa&tl=es&total=1&idx=0&textlen=12&tk=405004.6381&client=t&prev=input&ttsspeed=1"
        break;
    case "desarrolladora":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=desarrolladora%20frontend%20junior&tl=es&total=1&idx=0&textlen=30&tk=951809.569568&client=t&prev=input";
        break;
    case "mi-nombre":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Mi%20nombre%20es%20Paty%2C%20nac%C3%AD%20en%20Lima%20hace%2026%20a%C3%B1os.%20Empec%C3%A9%20a%20interesarme%20por%20la%20programaci%C3%B3n%20cuando%20me%20ense%C3%B1aron%20a%20programar%20un%20juego%20en%20C%2B%2B.%20Hago%20web%20porque%20s%C3%A9%20que%20a%20trav%C3%A9s%20de%20ella%20puedo%20hacer%20dos%20cosas%3A&tl=es&total=3&idx=0&textlen=198&tk=225368.345785&client=t&prev=input"
        break;
    case "sobre":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=sobre%20m%C3%AD&tl=es&total=1&idx=0&textlen=8&tk=527504.932465&client=t&prev=input";
        break;
    case "portafolio-title":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=portafolio&tl=es&total=1&idx=0&textlen=10&tk=320248.185369&client=t&prev=input";
        break;
    case "proyectos":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Proyectos%20en%20los%20que%20he%20colaborado&tl=es&total=1&idx=0&textlen=34&tk=196604.313629&client=t&prev=input";
        break;
    case "flatness":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=flatness&tl=es&total=1&idx=0&textlen=8&tk=256791.384502&client=t&prev=input";
        break;
    case "flatness-text":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Este%20trabajo%20permiti%C3%B3%20acercarme%20al%20concepto%20de%20Grid%20System.%20Fue%20realizado%20a%20tan%20s%C3%B3lo%20seis%20semanas%20de%20haber%20iniciado%20Laboratoria.%20Ya%20hab%C3%ADamos%20aprendido%20lo%20m%C3%A1s%20b%C3%A1sico%20de%20HTML%20y%20CSS%2C&tl=es&total=2&idx=0&textlen=179&tk=56703.453533&client=t&prev=input";
        break;
    case "estudio":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Estudio%20W&tl=es&total=1&idx=0&textlen=9&tk=915369.770379&client=t&prev=input";
        break;
    case "estudio-text":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Este%20proyecto%20fue%20desarrollado%20en%20un%20examen%20de%206%20horas.%20Apliqu%C3%A9%20lo%20aprendido%20en%20torno%20a%20Jade%20y%20Sass.%20Fue%20al%20t%C3%A9rmino%20de%20la%20Unidad%202%20de%20Laboratoria.&tl=es&total=1&idx=0&textlen=146&tk=650821.1038503&client=t&prev=input";
        break;
    case "primes":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=primes&tl=es&total=1&idx=0&textlen=6&tk=454388.55318&client=t&prev=input";
        break;
    case "primes-text":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=P%C3%A1gina%20construida%20por%20encargo%20de%20Laboratoria%20y%20hecha%20en%20Bootstrap.&tl=es&total=1&idx=0&textlen=66&tk=242554.361880&client=t&prev=input";
        break;
    case "makerlab":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=makerlab&tl=es&total=1&idx=0&textlen=8&tk=918653.537247&client=t&prev=input";
        break;
    case "makerlab-text":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Desarroll%C3%A9%20el%20frontend%20de%20este%20trabajo%20en%20el%20marco%20de%20una%20amanecida%20de%20desarrollo%20de%20MakerLab%2C%20en%20una%20marat%C3%B3nica%20sesi%C3%B3n%20de%2024%20horas.%20El%20proyecto%20contin%C3%BAa%20en%20curso%2C%20y%20al%20t%C3%A9rmino%20de%20%C3%A9ste%2C&tl=es&total=2&idx=0&textlen=185&tk=805173.688087&client=t&prev=input";
        break;
    case "cip":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Colegio%20de%20Ingenieros%20del%20Per%C3%BA&tl=es&total=1&idx=0&textlen=30&tk=305885.171071&client=t&prev=input";
        break;
    case "cip-text":
        url="https://translate.google.com/translate_tts?ie=UTF-8&q=Realic%C3%A9%20este%20proyecto%20en%20calidad%20de%20freelancer%20Trabajo%20de%20la%20mano%20con%20un%20backend%20para%20automatizar%20el%20despliegue%20de%20m%C3%A1s%20de%20300%20p%C3%A1ginas%20asociadas.&tl=es&total=2&idx=1&textlen=144&tk=650505.1039339&client=t&prev=input";
        break;
    case "whatsapp":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Whatsapp%20Web&tl=es&total=1&idx=0&textlen=12&tk=837437.717274&client=t&prev=input";
        break;
    case "whatsapp-text":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=%C3%9Altimo%20examen%20de%20Laboratoria%20en%20la%20cual%20apliqu%C3%A9%20todos%20los%20conocimientos%20adquiridos%20en%20manipulaci%C3%B3n%20del%20DOM%20con%20Javascript.%20En%20este%20examen%20me%20sirvi%C3%B3%20mucho%20la%20experiencia%20de%20ense%C3%B1ar%20en%20MakerLab.&tl=es&total=1&idx=0&textlen=192&tk=904148.785715&client=t&prev=input";
        break;
    case "contacto-text":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=contacto&tl=es&total=1&idx=0&textlen=8&tk=741155.883140&client=t&prev=input";
        break;
    case "numeros":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=numero%20de%20tel%C3%A9fono%20990548941&tl=es&total=1&idx=0&textlen=28&tk=674894.817833&client=t&prev=input";
        break;
    case "correo":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=correo%20paty.arakawa%40gmail.com&tl=es&total=1&idx=0&textlen=29&tk=818191.674536&client=t&prev=input";
        break;
    case "descarga":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Aqu%C3%AD%20puedes%20descargar%20mi%20cv&tl=es&total=1&idx=0&textlen=27&tk=620240.999479&client=t&prev=input";
        break;
    case "descarga":
        url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Aqu%C3%AD%20puedes%20descargar%20mi%20cv&tl=es&total=1&idx=0&textlen=27&tk=620240.999479&client=t&prev=input";
        break;
    default:
        alert("bug")
  }
  
  var audio = $("#audio")[0];

      $("#audio").attr("src", url);

      audio.play();

}

function stop(){
  var audio = $("#audio")[0];
    audio.pause();
}

function invidentes(){
    alert("Activar audio. Pasa el mouse por los textos para escuchar");
    var audio = $("#audio")[0];
    var url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Bienvenido%20a%20mi%20portafolio!%20Est%C3%A1s%20en%20la%20versi%C3%B3n%20web%20para%20invidentes%2C%20al%20pasar%20el%20mouse%20por%20los%20textos%20escuchar%C3%A1s%20el%20contenido%20de%20los%20mismos.&tl=es&total=1&idx=0&textlen=140&tk=100891.507132&client=t&prev=input"
      $("#audio").attr("src", url);

      audio.play();

  $("#paty").attr("onmouseover", "leerDiv(this)");
  $("#paty").attr("onmouseout", "stop()");
  $("#desarrolladora").attr("onmouseover", "leerDiv(this)");
  $("#desarrolladora").attr("onmouseout", "stop()");
  $("#mi-nombre").attr("onmouseover", "leerDiv(this)");
  $("#mi-nombre").attr("onmouseout", "stop()");
  $("#portafolio-title").attr("onmouseover", "leerDiv(this)");
  $("#portafolio-title").attr("onmouseout", "stop()");
  $("#sobre").attr("onmouseover", "leerDiv(this)");
  $("#sobre").attr("onmouseout", "stop()");
  $("#proyectos").attr("onmouseover", "leerDiv(this)");
  $("#proyectos").attr("onmouseout", "stop()");
  $("#flatness").attr("onmouseover", "leerDiv(this)");
  $("#flatness").attr("onmouseout", "stop()");
  $("#flatness-text").attr("onmouseover", "leerDiv(this)");
  $("#flatness-text").attr("onmouseout", "stop()");
  $("#estudio").attr("onmouseover", "leerDiv(this)");
  $("#estudio").attr("onmouseout", "stop()");
  $("#estudio-text").attr("onmouseover", "leerDiv(this)");
  $("#estudio-text").attr("onmouseout", "stop()");
  $("#primes").attr("onmouseover", "leerDiv(this)");
  $("#primes").attr("onmouseout", "stop()");
  $("#primes-text").attr("onmouseover", "leerDiv(this)");
  $("#primes-text").attr("onmouseout", "stop()");
  $("#makerlab").attr("onmouseover", "leerDiv(this)");
  $("#makerlab").attr("onmouseout", "stop()");
  $("#makerlab-text").attr("onmouseover", "leerDiv(this)");
  $("#makerlab-text").attr("onmouseout", "stop()");
  $("#cip").attr("onmouseover", "leerDiv(this)");
  $("#cip").attr("onmouseout", "stop()");
  $("#cip-text").attr("onmouseover", "leerDiv(this)");
  $("#cip-text").attr("onmouseout", "stop()");
  $("#whatsapp").attr("onmouseover", "leerDiv(this)");
  $("#whatsapp").attr("onmouseout", "stop()");
  $("#whatsapp-text").attr("onmouseover", "leerDiv(this)");
  $("#whatsapp-text").attr("onmouseout", "stop()");
  $("#contacto-text").attr("onmouseover", "leerDiv(this)");
  $("#contacto-text").attr("onmouseout", "stop()");
  $("#numeros").attr("onmouseover", "leerDiv(this)");
  $("#numeros").attr("onmouseout", "stop()");
  $("#correo").attr("onmouseover", "leerDiv(this)");
  $("#correo").attr("onmouseout", "stop()");
  $("#descarga").attr("onmouseover", "leerDiv(this)");
  $("#descarga").attr("onmouseout", "stop()");
}


