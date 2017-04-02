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
let n = idUsuariosP.length;

idUsuariosP.push(obtenerUsuarios());

setInterval(() => {
  console.log("Listando usuarios");
  for (var i = n; i < idUsuariosP.length; i++) {
    actualizaNotificaciones(idUsuariosP[i]);
  }
  n = idUsuariosP.length;

}, 3000);



setInterval(() => {
  idUsuariosP.push(obtenerUsuarios());
}, 3000);

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