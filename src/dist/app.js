"use strict";

function actualizaNotificaciones(id) {
  console.log("Usuario " + id + " actualizado xx");
}

function obtenerUsuarios() {
  console.log('Leyendo nuevos usuarios');
  var min = 12345;
  var max = 23456;
  return Math.floor(Math.random() * (max - min)) + min;
}

var idUsuariosP = [];
var n = idUsuariosP.length;

idUsuariosP.push(obtenerUsuarios());

setInterval(function () {
  console.log("Listando usuarios");
  for (var i = n; i < idUsuariosP.length; i++) {
    actualizaNotificaciones(idUsuariosP[i]);
  }
  n = idUsuariosP.length;
}, 3000);

setInterval(function () {
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