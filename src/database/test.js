const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
// inserir dados na tabela 
   await saveOrphanage(db, {
      lat: "-29.683651",
      lng:"-51.241673,13",
      name: "Lar das Meninas",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "9880765434",
      images: [
          "https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

          "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      ].toString (),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      _hours: "Horário de visitas das 8h até 18h",
      open_on_weekends: "1"
});

// consultar dados na tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")

   
})