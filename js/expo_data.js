/*testing data sample*/
var slides = [{
    tags: {
        title: 'INFORME TÉCNICO JURIDICO MODALIDAD PRACTICA FORENSE REALIZADO EN EL DEPARTAMENTO JURÍDICO DE PETRO SAN FELIX PDVSA',
        pasante: 'Duran Brito, Fiorella del Carmen',
        cedula: 'V18416750',
        asesor_acad: 'Abg. Omar Martínez',
        asesor_ext: 'Abg. Yazmin Zapata',
        fecha: 'Barcelona, Octubre 2019'
    },
    template: 'portada'
}, {
    tags: {
        title: 'Introducción',
        text: `Pasantías en la empresa Mixta Petro San Felix, S.A.
        <img class="ubicacion" src="images/ubicacion.png" />
        `,
        id: 'intro',
        css: `<style>
    div#intro>h2 {
        /* margin: auto; */
        text-align: center;
    }
    
    div#intro>p {
        text-align: center;
        vertical-align: middle;
    }
    
    div#intro {
        margin: auto;
        /* height: min-content; */
        /* vertical-align: middle; */
        align-content: center;
        vertical-align: middle;
        /* bottom: auto; */
   
    }
    img.ubicacion {
        width: 80%;
        opacity: 0.9;
        padding: 5%;
    }
    </style>`
    },
    item_id: "",
    template: 'items',
    items: []
    
}, {
    tags: {
        title: 'Departamento Jurídico de Petro San Felix S.A.',
        text: '',
        image: 'pdvsa-logo.png',
        logo_class: 'logo_petro', //Colocar foto panoramica de petro 
        organigrama: 'organigrama.svg',
        item_id: "emp"
    },
    template: 'empresa',
    items: []
}, {
    tags: {
        title: 'Actividades realizadas durante las pasantías',
        text: `<script>var a = new Controls("act");</script>`,
        item_id:"act",
        id: "acts",
        css: `
        <style>
        li.act {
            margin-bottom: 1em;
            padding: 1;
            font-size: 1em
            }
            div#acts>ul {
                margin: auto;
            }
            
            div#acts>h2 {
                margin-left: center;
                margin: 5%;
            }
        </style>
        `
    },
    template: 'items',
    items: [{
        'item_text': 'Inducción con la presentación de los integrantes de la gerencia legal.',
        'item_id': 'act'
    }, {
        'item_text': 'Orientación de las actividades inherentes a la gerencia legal por la Abg. Yazmín Zapata.',
        'item_id': 'act'
    }, {
        'item_text': 'Revisión de leyes, reglamentos, y normativas internas de Petro San Felix S.A.',
        'item_id': 'act'
    }, {
        'item_text': 'Análisis de las normativas, leyes y reglamentos para la relación con archivos de casos realizados por la gerencia.',
        'item_id': 'act'
    }, {
        'item_text': 'La pasante con la abogada adscrita al departamento realizó una modificación de contrato (equilibrios económicos).',
        'item_id': 'act'
    }, {
        'item_text': 'Apoyo a la presidencia y la gerencia de contratación, para la recepción de contratístas en discusiones, reuniones relacionadas con los contratos, y otras actividades legales de la empresa.',
        'item_id': 'act'
    }, {
        'item_text': 'Asesoría para el pasante por su asesor externo con el informe práctico forense.',
        'item_id': 'act'
    }]
}, {
    tags: {
        title: 'Caso #1',
        text: 'Explicar la solicitud de declaratoria de emergencia comprobada basada en la: REACTIVACION DE LA CONTINUIDAD OPERACIONAL DE LOS SISTEMAS DE DESTILACIÓN ATMOSFÉRICA, UNIDAD 11 Y COQUIFICACIÓN RETARDADA, UNIDAD 12 DEL MEJORADOR DE LA EMPRESA MIXTA PETRO SAN FELIX, S.A., como consecuencia de la condición operacional.',
        descripcion: 'A causa de la ruptura  de accesorios y partes internas de las Torres de Destilación Atmosférica (01C101) y Fraccionadora de Coque (01C201) se generó un incremento de presión súbita en el tren de Pre-calentamiento, ocasionando una ruptura en la línea de tubería identificada con el código P11026; la cual es una línea de desvió de los intercambiadores 01E116 A/B, lo que produjo fuga de producto masivo,  afectando todas las áreas adyacentes al tren del referido tren de pre-calentamiento.',
        items_title: '',
        legal: `<div style="width: 100%; margin-bottom: 1.5%">Ley de contrataciones públicas</div><div class="imgcont"> <img class="art-img" src="images/caso11.svg" /></div>`,
        doctrina: ''
    },
    template: 'caso',
    items: [/* {
        'item_text': 'Originada por circunstancias imprevistas.'
    }, {
        'item_text': 'Daños graves en el momento o futuro inmediato.'
    }, {
        'item_text': 'La solicitud tenga caracter urgente e inaplazable.'
    }, {
        'item_text': 'Impedir o limitar los efectos del daño.'
    }, {
        'item_text': 'Debe ser específica e individualmente para cada contratación.'
    } */]
}, {
    tags: {
        title: 'Caso #2',
        text: 'Explicar y analizar las modificiaciones de contrato ejecutadas en la empresa mixta Petro San Felix S.A.',
        descripcion: 'El contrato es un documento jurídico que regula la ejecución de una obra, prestación de un servicio o suministro de bienes incluidas las órdenes de compra y órdenes de servicio. Debe contener: precio, cantidades, forma de pago, tiempo, forma de entrega, condiciones, fecha de suscripción y oferta. Dichos contratos, una vez formalizados en la figura del addendum o adenda, entre los cuales recoge o contiene las modificaciones o enmiendas al contrato posterior a su firma.',
        items_title: '',
        legal: `<div style="width: 100%; margin-bottom: 1.5%">Ley de contrataciones públicas</div> <div class="imgcont"> <img class="art-img" src="images/caso21.svg" /></div>`,
        doctrina: ''
    },
    template: 'caso',
    items: [/* {
        'item_text': 'Cambio en cantidad de la actividad contratada.'
    }, {
        'item_text': 'Cambio de alcance.'
    }, {
        'item_text': 'Variaciones en montos, tarifas o precios unitarios.'
    }, {
        'item_text': 'Modificaciones en el plazo de ejecución o plazo de entrega.'
    }, {
        'item_text': 'Consideraciones particulares de la prorroga.'
    }, {
        'item_text': 'Revocación del contrato.'
    }, {
        'item_text': 'Adhesión a contrato existente.'
    }, {
        'item_text': 'Equilibrios económicos.'
    }, {
        'item_text': 'Cierre de contrato.'
    } */]
}, {
    tags: {
        title: 'final'
    },
    template: 'final',
    conclus: [{
        'item2_text': 'Las pasantías como forma idónea para la adquisición y aplicación de conocimientos en el área del derecho.'
    }, {
        'item2_text': 'Experiencia en el área de la industria petrolera, derecho corporativo.'
    }, {
        'item2_text': 'Herramientas para la resolución de problemas en el departamento jurídico de Petro San Felix S.A.'
    }, {
        'item2_text': 'Profundización de normas, reglamentos y leyes en el área de contratación.'
    }, {
        'item2_text': 'Se presentaron dos casos jurídicos, el primero con una declaratoria de emergancia y la adjudicación directa, y el segundo, se explican las diferentes modificaciones de contrato y el equilibrio económico como uno de los tipos de modificaciones actualmente más frecuentes.'
    }],
    recoms: [{
        'item3_text': 'Crear doctrinas internas.'
    }, {
        'item3_text': 'Proyectar y prevenir en la redacción de los contratos.'
    }, {
        'item3_text': 'Simplificar la cantidad de documentos solicitados a las contratistas.'
    }, {
        'item3_text': 'Declarar al departamento Jurídico los planes de mantenimiento y paradas.'
    }, {
        'item3_text': 'Crear un departamento exclusivo para las adjudicaciones directas en emergencia comprobada.'
    }]
}]
