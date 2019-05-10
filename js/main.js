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
    'cvin' : 'VINOS',
    'carp' : 'Carpaccio',
    'carpd' : 'Solomillo de buey, parmesano, focaccia',
    'zucc' : 'Crema zucchini',
    'zuccd' : 'Crema de calabacín, picatostes, parmesano',
    'caprd' : 'Tomate, mozzarella, bocconcini, orégano, aceite de albahaca',
    'cheffd' : 'Mezclum, cherry, pollo, queso, maíz, manzana caramelizada, picatostes, zanahoria, huevos, salsa especial',
    'pizz' : 'Pizza',
    'pizzp' : 'desde 8,95€',
    'pizzd' : 'Muchas variantes para elegir, desde Margherita hasta Affumicata',
    'past' : 'Pasta',
    'pastp' : 'desde 8,75€',
    'pastd' : 'Se pueden elegir todo tipo de pastas, y las salsas varían desde la Alfredo hasta la "Gorgonzola e noci"',
    'forn' : 'Pasta al horno',
    'fornp' : 'desde 9,75€',
    'fornd' : 'Puede escoger entre lasaña de carne o canelones de carne, espinacas o frutas de mar',
    'ris' : 'Risotto',
    'risp' : 'desde 10,50€',
    'risd' : 'Gran variedad de arroces, ¡incluyendo paella!',
    'tira' : 'Tiramisú',
    'che' : 'Tarta de queso',
    'ched' : 'Queso, moras y arándanos',
    'pan' : 'Pannacotta alla fragola',
    'pand' : 'Flan de nata con fresa',
    'pro' : 'Profiteroles',
    'prod' : 'Con chocolate caliente',
    'mard' : 'Rioja - tinto, blanco o rosado',
    'lamd' : 'Italia - tinto, blanco o rosado',
    'tord' : 'Penedés - rosado',
    'sand' : 'Penedés - tinto',
    'dow' : '¡Descarga la carta completa!',
    'frase' : '"Cocinar con amor te alimenta el alma"',
    'equipo' : 'Nuestro equipo',
    'coc' : 'Cocinera',
    'due' : 'Dueños',
    'cam' : 'Camarero',
    'jul' : 'Julia y Antonio',
    'llev' : 'Para llevar',
    'gal' : 'Galería',
    'cont' : 'CONTACTO',
    'hor' : 'HORARIO',
    'lun' : 'LUNES',
    'mar' : 'MARTES',
    'mie' : 'MIÉRCOLES',
    'jue' : 'JUEVES',
    'vie' : 'VIERNES',
    'sab' : 'SÁBADO',
    'dom' : 'DOMINGO',
    'map' : 'MAPA'
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
    'cvin' : 'VINS',
    'carp' : 'Carpaccio',
    'carpd' : 'Filet de bou, parmesà, focaccia',
    'zucc' : 'Crema zucchini',
    'zuccd' : 'Crema de carbassó, crostons, parmesà',
    'caprd' : 'Tomàquet, mozzarella, bocconcini, orenga, oli d\'alfàbrega',
    'cheffd' : 'Assortiment, tomàquet cherry, blat de moro, poma caramel•litzada, crostons, pastanaga, ou, pollastre, formatge i salsa rosa.  ',
    'pizz' : 'Pizza',
    'pizzp' : 'des de 8,95€',
    'pizzd' : 'Moltes variants per triar, des Margherita fins Affumicata',
    'past' : 'Pasta',
    'pastp' : 'des de 8,75€',
    'pastd' : 'Es poden triar tot tipus de pastes, i les salses varien des de la Alfredo fins a la "Gorgonzola e noci"',
    'forn' : 'Pasta al forn',
    'fornp' : 'des de 9,75€',
    'fornd' : 'Pot escollir entre lasanya de carn o canelons de carn, espinacs o fruites de mar',
    'ris' : 'Risotto',
    'risp' : 'des de 10,50€',
    'risd' : 'Gran varietat d\'arrossos, incloent paella!',
    'tira' : 'Tiramisú',
    'che' : 'Pastís de formatge',
    'ched' : 'Formatge, mores i nabius',
    'pan' : 'Pannacotta alla fragola',
    'pand' : 'Flam de nata amb maduixa',
    'pro' : 'Profiterols',
    'prod' : 'Amb xocolata calenta',
    'mard' : 'Rioja - negre, blanc o rosat',
    'lamd' : 'Itàlia - negre, blanc o rosat',
    'tord' : 'Penedès - rosat',
    'sand' : 'Penedès - negre',
    'dow' : 'Descarrega la carta complerta!',
    'frase' : '"Cuinar amb amor t\'alimenta l\'ànima"',
    'equipo' : 'El nostre equip',
    'coc' : 'Cuinera',
    'due' : 'Propietaris',
    'cam' : 'Cambrer',
    'jul' : 'Julia i Antonio',
    'llev' : 'Per emportar',
    'gal' : 'Galeria',
    'cont' : 'CONTACTE',
    'hor' : 'HORARI',
    'lun' : 'DILLUNS',
    'mar' : 'DIMARTS',
    'mie' : 'DIMECRES',
    'jue' : 'DIJOUS',
    'vie' : 'DIVENDRES',
    'sab' : 'DISSABTE',
    'dom' : 'DIUMENGE',
    'map' : 'MAPA'
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
    'cvin' : 'WINES',
    'carp' : 'Carpaccio',
    'carpd' : 'Sirloin steak, parmesan, focaccia',
    'zucc' : 'Zucchini cream',
    'zuccd' : 'Zucchini cream, croutons, parmesan',
    'caprd' : 'Tomato, mozzarella, bocconcini, oregano, basil oil',
    'cheffd' : 'Varied leaf salads, cherry tomato, chicken, cheese, sweet corn, caramelized apple, croutons, carrot, egg and special sauce',
    'pizz' : 'Pizza',
    'pizzp' : 'from 8,95€',
    'pizzd' : 'Many variants to choose from, from Margherita to Affumicata',
    'past' : 'Pasta',
    'pastp' : 'from 8,75€',
    'pastd' : 'You can choose all kinds of pasta, and the sauces vary from the Alfredo to the "Gorgonzola e noci"',
    'forn' : 'Baked pasta',
    'fornp' : 'from 9,75€',
    'fornd' : 'You can choose between meat lasagna or meat cannelloni, spinach or sea fruits',
    'ris' : 'Risotto',
    'risp' : 'from 10,50€',
    'risd' : 'Great variety of rice, including paella!',
    'tira' : 'Tiramisu',
    'che' : 'Cheesecake',
    'ched' : 'Cheese, blackberries and blueberries',
    'pan' : 'Pannacotta alla fragola',
    'pand' : 'Cream flan with strawberry',
    'pro' : 'Profiteroles',
    'prod' : 'With hot chocolate',
    'mard' : 'Rioja - red, white or pink',
    'lamd' : 'Italy - red, white or pink',
    'tord' : 'Penedés - pink',
    'sand' : 'Penedés - red',
    'dow' : 'Download the full menu!',
    'frase' : '"Cooking with love feeds your soul"',
    'equipo' : 'Our team',
    'coc' : 'Cook',
    'due' : 'Owners',
    'cam' : 'Waiter',
    'jul' : 'Julia and Antonio',
    'llev' : 'Takeaway',
    'gal' : 'Gallery',
    'cont' : 'CONTACT',
    'hor' : 'OPENING TIMES',
    'lun' : 'MONDAY',
    'mar' : 'TUESDAY',
    'mie' : 'WEDNESDAY',
    'jue' : 'THURSDAY',
    'vie' : 'FRIDAY',
    'sab' : 'SATURDAY',
    'dom' : 'SUNDAY',
    'map' : 'MAP'
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
    'op3' : '«Блюда, которые мы заказали, были хорошими, можно сказать, что они были домашними».',
    'op4' : '«Очень хорошая пиццерия, с отличной едой и вниманием».',
    'ct' : 'Меню',
    'cent' : 'ЗАКУСКИ',
    'cprin' : 'ГЛАВНЫЙ',
    'cpo' : 'ДЕСЕРТЫ',
    'cvin' : 'ВИНА',
    'carp' : 'Карпаччо',
    'carpd' : 'Стейк филе, пармезан, фокачча',
    'zucc' : 'Крем из цуккини',
    'zuccd' : 'Крем из кабачков, сухариков, пармезана',
    'caprd' : 'Помидор, моцарелла, боккончини, орегано, базиликовое масло',
    'cheffd' : 'Листья салата, помидоры черри, курица, сыр, кукуруза, карамелизованное яблоко, сухарики, морковь, яйца и специальный соус',
    'pizz' : 'Пицца',
    'pizzp' : 'от 8,95€',
    'pizzd' : 'Много вариантов на выбор, от Margherita до Affumicata',
    'past' : 'Паста',
    'pastp' : 'от 8,75€',
    'pastd' : 'Вы можете выбрать все виды пасты, и соусы варьируются от Аlfredo до "Gorgonzola e noci"',
    'forn' : 'Запеченная паста',
    'fornp' : 'от 9,75€',
    'fornd' : 'Вы можете выбрать между мясом лазаньи или мясом каннеллони, шпинатом или морепродуктами',
    'ris' : 'Risotto',
    'risp' : 'от 10,50€',
    'risd' : 'Большое разнообразие риса, в том числе паэлья!',
    'tira' : 'Тирамису',
    'che' : 'Сырный пирог',
    'ched' : 'Сыр, ежевика и черника',
    'pan' : 'Панна Котта с Фраголлой',
    'pand' : 'Крем-флан с клубникой',
    'pro' : 'Профитроли',
    'prod' : 'С горячим шоколадом',
    'mard' : 'Риоха - красная, белая или розовая',
    'lamd' : 'Италия - красный, белый или розовый',
    'tord' : 'Penedés - розовый',
    'sand' : 'Penedés - красный',
    'dow' : 'Загрузите полное меню!',
    'frase' : '"Готовка с любовью питает вашу душу"',
    'equipo' : 'Наша команда',
    'coc' : 'повар',
    'due' : 'Владельцы',
    'cam' : 'Oфициант',
    'jul' : 'Julia и Antonio',
    'llev' : 'навынос',
    'gal' : 'Галерея',
    'cont' : 'КОНТАКТ',
    'hor' : 'ВРЕМЯ ОТКРЫТИЯ',
    'lun' : 'ПОНЕДЕЛЬНИК',
    'mar' : 'ВТОРНИК',
    'mie' : 'СРЕДА',
    'jue' : 'ЧЕТВЕРГ',
    'vie' : 'ПЯТНИЦА',
    'sab' : 'СУББОТА',
    'dom' : 'ВОСКРЕСЕНЬЕ',
    'map' : 'КАРТА'
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
