
const {createApp} = Vue;

createApp({
  
  data(){
    return{

      images: [
        {
         title: 'Svezia',
         description: 'Una vita senza amore è come un anno senza estate',
         url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
        },
        {
         title: 'Perù',
         description: 'Signora Presidente, il Perù è sempre stata la nostra pecora nera in America latina',
         url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
        },
        {
         title: 'Chile',
         description: 'Il Cile è un paese maschilista: l\'aria è talmente densa di testosterone che è un miracolo se alle donne non spuntano i peli in faccia',
         url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
        },
        {
         title: 'Argentina',
         description: 'La storia di Buenos Aires sta scritta nel suo elenco telefonico',
         url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
        },
        {
         title: 'Colombia',
         description: 'In Colombia avere le allucinazioni è una normalità',
         url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
        }
      ],

      counter: 0,
      isForward: true,
      isStop: false

    }
  },

  methods: {

    // funzione per bottini avanti e indietro
    nextPrev(isNext){
      isNext ? this.counter++ : this.counter--;
      // condizioni per loop infinito 
      if(this.counter < 0) this.counter = this.images.length - 1;
      if(this.counter === this.images.length) this.counter = 0;
    },

    // funzione autoplay che contiene il setinterval che a sua volta lancia nextprev con l'arrow function
    // passo il data ilForward per avere il controllo sul senso di scorrimento
    autoplay(){
      setInterval(() => {
        // condizione per lanciare la funzione (stop con doppio click)
        if(!this.isStop) this.nextPrev(this.isForward);
      },3000)
    }

  },

  // APP MONTATA 
  mounted(){

    // lancio la funzione autoplay 
    this.autoplay();
  }

}).mount('#app');

