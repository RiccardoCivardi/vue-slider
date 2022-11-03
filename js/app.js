/*
Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- al click su una thumb, visualizzare in grande l’immagine corrispondente
- aggiungere la classe active alla thumb attiva
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!
*/

const images = [
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
];