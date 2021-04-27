const  tareas = document.getElementById('tareas');
const  tareasCompletadas = document.getElementById('tareas-completadas');
const tituloArrastra = document.getElementById('indicacion');
const btnDisabled = document.getElementById('mensaje-block');
const block = document.getElementById('block');


const listaTareas = Sortable.create(tareas, {
	group: {
		name: 'lista-tareas', 
		pull: true
	}, 
	animation: 300, // Tiempo animacion
	easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)", // Cambio de animacion
	handle: ".fas", // Desde donde arrastrar
	filter: ".titulo", // Permite limitar el movimiento 
	ghostClass: "sortable-ghost", //
	chosenClass: "sortable-chosen", 
	dragClass: "sortable-drag", 
	onEnd:  () => {
		tituloArrastra.classList.add('hide');
	},
	
});

Sortable.create(tareasCompletadas, {
	group: {
		name: 'lista-tareas'
	}, 
	animation: 300, // Tiempo animacion
	easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)", // Cambio de animacion
	handle: ".fas", // Desde donde arrastrar
	filter: ".titulo", // Permite limitar el movimiento 
	ghostClass: "sortable-ghost", //
	chosenClass: "sortable-chosen", 
	dragClass: "sortable-drag", 
	store : {
		set : (sortable) =>{
			const orden = sortable.toArray();
			orden.length ===1 ? tituloArrastra.classList.remove('hide') : '';
		  }
	}
});


block.addEventListener('click', () => {
	const estado = listaTareas.option('disabled');
	listaTareas.option('disabled', !estado);
	if(estado){
		btnDisabled.classList.add('dis');
		block.textContent = "Block"
	}else{
		btnDisabled.classList.remove('dis');
		block.textContent = 'Unlock';
	}
});