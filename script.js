const translations = {
  es: {
    nav_unit:'La suite',nav_operators:'Para operadores',nav_specs:'Especificación',nav_estimate:'Estimación',nav_contact:'Contacto',
    hero_eyebrow:'Alicante, España · Unidad hospitality',hero_title:'Una suite hotelera modular, diseñada alrededor de la vista.',hero_lead:'MIRA Suite 25 es una habitación modular premium para hoteles, glampings y alojamientos rurales que quieren añadir alojamiento de alto valor sin construir una ampliación completa.',cta_explore:'Explorar la suite',cta_pilot:'Hablar de un sitio piloto',stat_area:'m² de unidad',stat_guests:'huéspedes',stat_product:'producto único',hero_card_kicker:'Unidad principal',
    unit_eyebrow:'El producto',unit_title:'Una única suite de 25 m², refinada para hospitality.',unit_text:'En lugar de ofrecer muchos modelos diferentes, MIRA se centra en una unidad cuidadosamente diseñada: una suite hotelera modular con dormitorio, baño, coffee corner y vida exterior sombreada.',plan_bath:'Baño',plan_service:'Pared técnica',plan_bed:'Cama king',plan_lounge:'Coffee / lounge',plan_view:'Vista panorámica',plan_terrace:'Terraza',
    feature_view_title:'Construida alrededor de la vista',feature_view_text:'La fachada principal se define por una gran ventana panorámica, convirtiendo el paisaje en el principal lujo de cada suite.',feature_hotel_title:'Interior de nivel hotelero',feature_hotel_text:'Baño, climatización, acceso inteligente, escenas de luz, almacenamiento y un rincón hospitality se planifican como un solo producto.',feature_site_title:'Instalación específica por ubicación',feature_site_text:'Cada ubicación debe revisar planificación local, permisos, acceso, servicios y uso hospitality antes de instalar.',
    operators_eyebrow:'Para operadores',operators_title:'Para lugares que ya tienen huéspedes — y espacio para crecer.',operators_text:'MIRA está pensada para negocios hospitality, no para uso privado de “ponerla en cualquier sitio”. El cliente ideal tiene una base turística legal, un buen paisaje y necesidad de habitaciones extra premium.',op_hotels_title:'Hoteles boutique',op_hotels_text:'Añade suites premium independientes sin modificar el edificio principal.',op_glamp_title:'Glampings',op_glamp_text:'Mejora de tiendas a habitaciones modulares de alto confort con mejor potencial de ADR.',op_rural_title:'Retiros rurales',op_rural_text:'Convierte vistas, silencio y terreno en unas pocas estancias de alta calidad.',op_camps_title:'Campings y fincas',op_camps_text:'Crea una categoría premium para parejas, teletrabajadores o viajeros slow.',
    mood_eyebrow:'Estilo',mood_title:'Calma escandinava. Luz mediterránea.',mood_text:'Madera cálida, tonos minerales claros, texturas de lino, terrazas sombreadas y detalles negros tranquilos. Una suite premium sin ser ruidosa.',mat_wood:'Madera termo',mat_linen:'Tonos lino',mat_stone:'Piedra y arena',mat_olive:'Gris oliva',mat_shadow:'Sombra profunda',
    specs_eyebrow:'Especificación',specs_title:'Un producto, tres niveles de equipamiento.',specs_text:'La unidad base permanece igual. El nivel de autonomía, acabados y equipamiento hospitality se adapta al operador y al lugar.',spec_area_label:'Superficie',spec_layout_label:'Distribución',spec_layout_value:'Dormitorio, baño, coffee corner, fachada lista para terraza',spec_use_label:'Uso',spec_use_value:'Hoteles, glamping, rural hospitality, campings, fincas',spec_location_label:'Ubicación base',spec_note_label:'Importante',spec_note_value:'Permisos, uso del suelo, servicios, acceso y requisitos contra incendios/sanitarios deben revisarse para cada sitio.',
    estimate_eyebrow:'Estimación para operador',estimate_title:'¿Qué podría añadir una suite a tus ingresos por habitaciones?',estimate_text:'Una estimación simple de ingresos brutos para conversación. No incluye limpieza, comisiones, suministros, financiación, impuestos, permisos o mantenimiento.',calc_rate:'Tarifa media por noche',calc_occ:'Ocupación',calc_units:'Número de suites',calc_result_label:'Bruto anual estimado',
    process_eyebrow:'Proceso',process_title:'De la revisión del sitio a la suite piloto.',step_1_title:'Revisión del sitio',step_1_text:'Revisamos uso, acceso, vistas, servicios y viabilidad legal con profesionales locales.',step_2_title:'Configuración',step_2_text:'Elegir nivel de acabado, fachada, terraza, paleta interior y opciones de autonomía.',step_3_title:'Producción',step_3_text:'La suite se produce como producto repetible, con pared técnica e interior hotelero planificados desde el inicio.',step_4_title:'Plan de entrega',step_4_text:'Transporte, apoyos, instalación, conexiones y entrega se planifican según el lugar.',
    contact_eyebrow:'Con base en Alicante, España',contact_title:'Sitios piloto y colaboraciones hospitality.',contact_text:'Los datos de contacto son provisionales. Esta primera versión está lista para probar el concepto con hoteles, glampings y alojamientos rurales.',form_name:'Nombre',form_email:'Email',form_type_1:'Hotel / hotel boutique',form_type_2:'Glamping / camping',form_type_3:'Finca rural / retiro',form_type_4:'Otro sitio hospitality',form_message:'Cuéntanos sobre tu ubicación',form_button:'Solicitar concepto',
    footer_note:'MIRA Suite es un sitio conceptual para una unidad modular premium de hospitality. Permisos específicos, clasificación del suelo, instalación y requisitos operativos deben revisarse antes de cada proyecto.'
  }
};
const packages = {
  premium:{kicker:'Recommended',title:'Premium hospitality fit-out',text:'Hotel-grade materials, refined lighting, smart lock, built-in storage, bathroom, climate control and a shaded terrace package.',list:['Premium interior palette','Smart access and lighting scenes','Bathroom and coffee corner','Terrace-ready façade']},
  essential:{kicker:'Entry fit-out',title:'Essential guest-room package',text:'A simpler fit-out for operators who already manage external amenities or want to scale multiple units with a tighter budget.',list:['Core room and bathroom','Durable finishes','Climate control','Prepared service wall']},
  offgrid:{kicker:'Nature sites',title:'Off-grid ready package',text:'A version prepared for rural or low-infrastructure locations, with solar-ready roof, water storage and autonomy options to be engineered per site.',list:['Solar-ready roof','Water storage option','Low-consumption systems','Technical checks per site']}
};
const packagesEs = {
  premium:{kicker:'Recomendado',title:'Equipamiento hospitality premium',text:'Materiales de nivel hotelero, iluminación refinada, cerradura inteligente, almacenamiento integrado, baño, climatización y paquete de terraza sombreada.',list:['Paleta interior premium','Acceso inteligente y escenas de luz','Baño y coffee corner','Fachada lista para terraza']},
  essential:{kicker:'Equipamiento inicial',title:'Paquete esencial de habitación',text:'Un acabado más simple para operadores que ya gestionan servicios externos o quieren escalar varias unidades con presupuesto más ajustado.',list:['Habitación y baño base','Acabados resistentes','Climatización','Pared técnica preparada']},
  offgrid:{kicker:'Sitios naturales',title:'Paquete preparado off-grid',text:'Versión preparada para ubicaciones rurales o con poca infraestructura, con cubierta lista para solar, almacenamiento de agua y opciones de autonomía a definir por sitio.',list:['Cubierta lista para solar','Opción de depósito de agua','Sistemas de bajo consumo','Revisión técnica por ubicación']}
};
let currentLang='en';
const fmt = new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0});
function updateCalc(){
  const rate=+document.querySelector('[data-rate]').value, occ=+document.querySelector('[data-occ]').value, units=+document.querySelector('[data-units]').value;
  document.querySelector('[data-rate-out]').textContent=`€${rate}`;
  document.querySelector('[data-occ-out]').textContent=`${occ}%`;
  document.querySelector('[data-units-out]').textContent=units;
  document.querySelector('[data-result]').textContent=fmt.format(rate*365*(occ/100)*units);
}
function setPackage(name){
  document.querySelectorAll('.package-tab').forEach(b=>b.classList.toggle('active',b.dataset.package===name));
  const data=(currentLang==='es'?packagesEs:packages)[name]||packages.premium;
  document.querySelector('[data-package-kicker]').textContent=data.kicker;
  document.querySelector('[data-package-title]').textContent=data.title;
  document.querySelector('[data-package-text]').textContent=data.text;
  document.querySelector('[data-package-list]').innerHTML=data.list.map(i=>`<li>${i}</li>`).join('');
  document.querySelector('[data-package-visual]').dataset.packageVisual=name;
}
function setLang(lang){
  currentLang=lang;
  document.documentElement.lang=lang==='es'?'es':'en';
  document.querySelector('[data-lang-toggle]').textContent=lang==='es'?'EN':'ES';
  if(lang==='es'){
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(translations.es[k]) el.textContent=translations.es[k];});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(translations.es[k]) el.placeholder=translations.es[k];});
  } else { location.reload(); return; }
  const active=document.querySelector('.package-tab.active')?.dataset.package || 'premium';
  setPackage(active);
}
window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('input[type=range]').forEach(i=>i.addEventListener('input',updateCalc));
  updateCalc();
  document.querySelectorAll('.package-tab').forEach(b=>b.addEventListener('click',()=>setPackage(b.dataset.package)));
  setPackage('premium');
  document.querySelector('[data-lang-toggle]').addEventListener('click',()=>setLang(currentLang==='en'?'es':'en'));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const header=document.querySelector('[data-header]');
  window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
  const glow=document.querySelector('[data-glow]');
  window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
});
