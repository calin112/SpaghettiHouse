//Smooth scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Navbar Collapse

$(document).ready(function(){
  $('.nav-hide').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
});

//Preloader

$(window).on('load',function(){
  $('.preloader').addClass('complete')
})

//Loading icon

$(window).on('load',function(){
  $('.loader').addClass('complete')
})

//Slowdown myVideo

var vid = document.getElementById("myVideo");
vid.playbackRate = 0.8;

window.onload=function(){
  document.getElementById("myVideo").play();
}

//Translation

var arrLang = {
  'es' : {
    'nosotros' : 'Nosotros',
    'opiniones' : 'Opiniones',
    'carta' : 'Carta',
    'equipo' : 'Equipo',
    'takeaway' : 'Para llevar',
    'galeria' : 'Galería',
    'contacto' : 'Contacto',
    'idioma' : 'Español',
    'np1' : 'Spaghetti House es más que un restaurante italiano, nace de la propuesta de fusionar lo mejor de la cocina italiana y de nuestra cocina mediterránea. Nuestro éxito se basa en la elaboración de todos nuestros platos utilizando siempre los mejores productos y la experiencia de nuestros experimentados chefs. ',
    'np2' : 'En nuestros restaurantes de Salou y de Vilaseca, podrá encontrar una amplia variedad de platos italianos como pizzas, pasta, carpaccio, risotto… y de platos típicos de nuestra gastronomía. También disponemos de una amplia oferta de platos sin gluten.',
    'np3' : 'Nuestros restaurantes se encuentran muy bien situados, cerca de la playa, del pueblo pesquero de Cambrils y del parque tematico de Port Aventura. ',
    'ot' : 'Qué opinan nuestros clientes...',
    'op1' : '"¡Un 10 por la gran carta de comida sin gluten de la que disponen!"',
    'op2' : '"Las pizzas están buenísimas y la pasta también. Las raciones son abundantes."',
    'op3' : '"Todos los platos que pedimos estaban realmente buenos, se notaba que eran caseros."',
    'op4' : '"Pizzería muy bonita, con una comida y atención excelentes."',
    'ct' : 'La Carta',
    'cent' : 'ENTRANTES',
    'cprin' : 'PRINCIPALES',
    'cpo' : 'POSTRES',
    'cvin' : 'VINOS'

  },
  'ca' : {
    'nosotros' : 'Nosaltres',
    'opiniones' : 'Opinions',
    'carta' : 'Carta',
    'equipo' : 'Equip',
    'takeaway' : 'Per emportar',
    'galeria' : 'Galeria',
    'contacto' : 'Contacte',
    'idioma' : 'Català',
    'np1' : 'Spaghetti House és més que un restaurant italià, neix de la proposta de fusionar el millor de la cuina italiana i de la nostra cuina mediterrània. El nostre èxit es basa en l\'elaboració de tots els nostres plats utilitzant sempre els millors productes i l\'experiència dels nostres experimentats xefs.',
    'np2' : 'En els nostres restaurants de Salou i de Vila-seca, podrà trobar una àmplia varietat de plats italians com pizzes, pasta, carpaccio, risotto... i de plats típics de la nostra gastronomia. També disposem d\'una àmplia oferta de plats sense gluten.',
    'np3' : 'Els nostres restaurants es troben molt ben situats, a prop de la platja, del poble pesquer de Cambrils i del parc temàtic de Port Aventura.',
    'ot' : 'Què opinen els nostres clients...',
    'op1' : '"Un 10 per la gran carta de menjar sense gluten de la qual disposen!"',
    'op2' : '"Les pizzes estan boníssimes i la pasta també. Les racions són abundants."',
    'op3' : '"Tots els plats que vam demanar estaven realment bons, es notava que eren casolans."',
    'op4' : '"Pizzeria molt bonica, amb un dinar i atenció excel·lents."',
    'ct' : 'La Carta',
    'cent' : 'ENTRANTS',
    'cprin' : 'PRINCIPALS',
    'cpo' : 'POSTRES',
    'cvin' : 'VINS'
  },
  'en' : {
    'nosotros' : 'About Us',
    'opiniones' : 'Reviews',
    'carta' : 'Menu',
    'equipo' : 'Team',
    'takeaway' : 'Takeaway',
    'galeria' : 'Gallery',
    'contacto' : 'Contact',
    'idioma' : 'English',
    'np1' : 'Spaghetti House is more than an Italian restaurant, born from the proposal to merge the best of Italian cuisine and our Mediterranean cuisine. Our success is based on the preparation of all our dishes using always the best products and the experience of our experienced chefs.',
    'np2' : 'In our restaurants in Salou and Vilaseca, you can find a wide variety of Italian dishes such as pizzas, pasta, carpaccio, risotto... and typical dishes of our cuisine. We also have a wide range of gluten-free dishes.',
    'np3' : 'Our restaurants are very well located, close to the beach, the fishing village of Cambrils and the thematic park of Port Aventura.',
    'ot' : 'What our customers say...',
    'op1' : '"A 10 for the great gluten-free food menu they have!"',
    'op2' : '"The pizzas are delicious and the pasta is too, the portions are plentiful."',
    'op3' : '"All the dishes we ordered were really good, you could tell they were homemade."',
    'op4' : '"Very nice pizzeria, with excellent food and attention."',
    'ct' : 'The Menu',
    'cent' : 'STARTERS',
    'cprin' : 'MAIN DISHES',
    'cpo' : 'DESSERTS',
    'cvin' : 'WINES'
  },
  'ru' : {
    'nosotros' : 'О нас',
    'opiniones' : 'Отзывы',
    'carta' : 'Меню',
    'equipo' : 'Оборудование',
    'takeaway' : 'Вынос',
    'galeria' : 'Галерея',
    'contacto' : 'Контакт',
    'idioma' : 'Pусский',
    'np1' : 'Spaghetti House - это больше, чем итальянский ресторан, родившийся в результате предложения объединить лучшее из итальянской кухни и нашей средиземноморской кухни. Наш успех основан на приготовлении всех наших блюд с использованием всегда лучших продуктов и опыте наших опытных поваров.',
    'np2' : 'В наших ресторанах в Салоу и Виласеке вы можете найти широкий выбор итальянских блюд, таких как пицца, паста, карпаччо, ризотто... и традиционные блюда нашей кухни. У нас также есть широкий ассортимент безглютеновой посуды.',
    'np3' : 'Наши рестораны очень удачно расположены, недалеко от пляжа, рыбацкой деревни Камбрильс и тематического парка Порт Авентура.',
    'ot' : 'Что говорят наши клиенты...',
    'op1' : '«10 за отличное безглютеновое меню!»',
    'op2' : '«Пицца вкусная, паста тоже, порции обильные».',
    'op3' : '«Все блюда, которые мы заказали, были действительно хорошими, можно сказать, что они были домашними».',
    'op4' : '«Очень хорошая пиццерия, с отличной едой и вниманием».',
    'ct' : 'Меню',
    'cent' : 'ЗАКУСКИ',
    'cprin' : 'ГЛАВНЫЙ',
    'cpo' : 'ДЕСЕРТЫ',
    'cvin' : 'ВИНА'
  }
};

  $(function() {
    $('.translate').click(function(){
      var lang = $(this).attr('id');

      $('.lang').each(function(index, element){
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
