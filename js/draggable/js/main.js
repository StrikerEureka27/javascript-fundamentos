// Capturamos el componente que contienen la lista que deseamos manejar 
const lista = document.getElementById('lista');


// Llamamos a la clase Sortable y llamamos al metodo create
// Sortable.create ([ lista de elementos ][ objeto de configuracion ]) 
Sortable.create(lista, {
  animation: 150, 
  chosenClass: "sortable-chosen", 
  ghostClass: "sortable-ghost",
  dragClass: "sortable-drag",
  onEnd:  () => {
      console.log('se inserto un elemento');
  },
  group: "lista-persona", 
  store: {
      //Almacenar el orden de la lista
      set : (sortable) =>{
        const orden = sortable.toArray();
        console.log(orden);
        localStorage.setItem(sortable.options.group.name, orden.join(','));
      },
      get: (sortable) => {
         const orden = localStorage.getItem(sortable.options.group.name);
         console.log(orden);
         return orden ?  orden.split(',') : [];
      }
  }
});