const reproductor = {
    cancion: '',
    reproducir : id => console.log(`reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar : id =>console.log(`borrando cancion... ${id}`),
    crearPlaylist : nombre => console.log(`creando la playlist de ${nombre}`),
    reproducirPlaylist : nombre => console.log(`reproducir play list de ${nombre}`),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`agregando ${cancion}`);
    },
    get obetenerCancion(){
        console.log(`${this.cancion}`)
    }
    
}
reproductor.nuevaCancion = 'Enter sandman'
reproductor.obetenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(200);
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist('Rock 90s')
reproductor.reproducirPlaylist('Heavy Metal')