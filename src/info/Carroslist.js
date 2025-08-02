
import car1 from './carros/img1.jpg'
import car2 from './carros/img2.jpg'
import car3 from './carros/img3.webp'
import car4 from './carros/img4.jpeg'
import car5 from './carros/img5.jpeg'
import car6 from './carros/img6.jpg'

//Pra colocar um carro como vendido, precisa colocar "sold:true"

const catalogue = [


    {
      id:1,
      name:'ECOSPORT XLT 2.0 AUTOMÁTICA',
      desc:`Completa, 
       Bancos em couro,
       Ar condicionado,
       Direção hidráulica,
       Travas e vidros elétricos, 
       Calçado de pneus, 
       Lataria e estofamento em ótimo estado.`,
      price:'R$210.900,00',
      year:'2012',
      imgs:[
        car1, car2, car3, car4,
      ],
      sold:false
    },


    {
      id:2,
      name:'HYUNDAI HB20 1.0 COMPLETO',
      desc:`ÚNICO DONO,
      Direção elétrica,
      Ar condicionado,
      Travas e vidros elétricos,
      Alarme,
      Lataria e estofamento em ótimo estado.
      
      Carro igual a novo!`,
      price:'R$210.900,00',
      year:'2018',
      imgs:[
        car2, car3, car4, car5,
      ]
    },


    {
      id:3,
      name:'CRUZE 1.8 AUTOMÁTICO',
      desc:`Bancos em couro, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Alarme, Quatro pneus novos, Lataria e estofamento em ótimo estado.`,
      price:'R$210.900,00',
      year:'2013',
      imgs:[
        car6, car1, car2, car3,
      ]
    },


    {
      id:4,
      name:'MONTANA 1.4 COMPLETA',
      desc:`2º dono, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Computador de bordo, Calçada de pneus, 4 amortecedores novos, Revisada`,
      price:'R$210.900,00',
      year:'2012',
      imgs:[
       car3, car1, car2, car4,
      ]
    },


    {
      id:5,
      name:'CHEVROLET CLASSIC 1.0',
      desc:`Completo, Ar condicionado, Direção hidráulica, Vidros e travas elétricas, Alarme, Rodas de liga leve, Calçado de pneus, Lataria e estofamento em ótimo estado. Revisado.`,
      price:'R$210.900,00',
      year:'2015',
      imgs:[
        car5, car1, car4, car6,
      ]
    },


    {
      id:6,
      name:'STRADA WORKING C.S. 1.4',
      desc:`Ar condicionado, Direção hidráulica, Travas e Vidros elétricos, Rodas de liga leve, Lataria e estofamento em bom estado. Revisada.`,
      price:'R$210.900,00',
      year:'2013',
      imgs:[
        car4, car6, car3, car2,
      ],
      sold:true,
    },


  ]

export default catalogue