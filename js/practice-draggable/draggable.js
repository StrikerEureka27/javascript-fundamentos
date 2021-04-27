const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');


new  Sortable(lista1, {
    animation: 150,
    group: {
        name: 'shared',
        pull: 'clone'
    },
    
});


new Sortable(lista2, {
    animation: 150, 
    group: {
        name: 'shared',
        pull: 'clone'
    },
});

