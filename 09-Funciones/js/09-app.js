const reproducto = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...')
    },
    borrar : function(id){
        console.log(`borrando cancion... ${id}`);
    },
    crearPlaylist : function(nombre){
        console.log(`creando la playlist de ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`reproducir play list de ${nombre}`)
    }
}

reproducto.reproducir(30);
reproducto.reproducir(200);
reproducto.pausar();
reproducto.borrar(30)