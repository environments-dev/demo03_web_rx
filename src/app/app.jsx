function actualizaNotificaciones(id) {
  console.log(`Usuario ${id} actualizado xx`);
}

function obtenerUsuarios() {
  console.log('Leyendo nuevos usuarios');
  let min = 12345;
  let max = 23456;
  return Math.floor(Math.random() * (max - min)) + min;
}

let idUsuariosP = [];

idUsuariosP.push(obtenerUsuarios());

for (var i = 0; i < idUsuariosP.length; i++) {
  console.log("Listando usuarios");
  actualizaNotificaciones(idUsuariosP[i]);
}


/*
var idUsuarios = Rx.Observable.create((leerNuevosUsuarios) => {
  setInterval(() => {
    leerNuevosUsuarios.next(obtenerUsuarios());
  }, 3000);
});

idUsuarios.subscribe((usuarioId) => {
  actualizaNotificaciones((usuarioId));
});
*/