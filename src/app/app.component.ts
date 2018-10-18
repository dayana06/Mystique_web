import { Component } from '@angular/core';
import $ = require('jquery');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MystiqueWeb';
}

export interface Ititle {
  id_sistema: number;
  id: number;
  titulo: String;
  boton: String;
  descripcion: String;
  tipo_seccion: String;
  estatus: String;
  fecha_creacion: Date;
  visible: Boolean;
}

export interface Icards {
  id_sistema: number;
  id: number;
  titulo: String;
  button: String;
  descripcion: String;
  tipo_imagen: String;
  imagen: String;
  estatus: String;
  fecha_creacion: Date;
}

export interface Ibussiness {
  id: number;
  rif: String;
  nombre: String;
  hora_inicio_trabajo: Date;
  hora_fin_trabajo: Date;
  imagen: String;
  estatus: String;
  id_sistema: Number;
  fecha_creacion: Date;
  direccion: String;
}

export interface IbussinessContact {
  id: number;
  id_negocio: Number;
  tipo_contacto: String;
  id_ciudad: Number;
  descripcion: String;
  estatus: String;
  visible: Boolean;
  fecha_creacion: Date;
}

export interface Isystem {
  id: number;
  imagen: String;
  estatus: String;
  nombre: String;
  fecha_creacion: Date;
}

export interface Itip {
  id: number;
  titulo: String;
  descripcion: String;
  imagen: String;
  fecha_creacion: String;
  autor: String;
  estatus: String;
  id_sistema: Number;
}

export interface Iservice {
  id: Number;
  estatus: String;
  idtiposervicio: Number;
  nombre: String;
  descripcion: String;
  duracion: Number;
  imagen: String;
}

export interface Ipromo {
  id: Number;
  id_servicio: Number;
  nombre: String;
  descripcion: String;
  imagen: String;
  fecha_inicio: Date;
  fecha_fin: Date;
  estatus: String;
  precio_promocion: Number;
  porcentaje_descuento: Number;
  fecha_creacion: Date;
}

export interface Iemployee {
  id: Number;
  id_ciudad: String;
  idusuario: Number;
  nombre: String;
  apellido: String;
  direccion: String;
  telefono: String;
  estatus: String;
  imagen: String;
  especialidad: String;
  id_usuario: String;
  fecha_creacion: String;
  fecha_nacimiento: String;
  cedula: String;
}

export interface IsocialNetwork {
  id: Number;
  id_negocio: Number;
  nombre: String;
  url: String;
  estatus: String;
  fecha_creacion: Date;
  visible: Boolean;
}

export interface IserviceCategory {
  id: Number;
  nombre: String;
  estatus: String;
  fecha_creacion: Date;
}

export interface Ispecialty {
  id: Number;
  id_categoria_servicio: Number;
  id_empleado: Number;
  estatus: String;
  fecha_creacion: Date;
}

export interface IserviceKind {
  id: Number;
  id_categoria_servicio: Number;
  nombre: String;
  descripcion: String;
  estatus: String;
  fecha_creacion: Date;
}

export interface Iservice {
  id: Number;
  imagen: String;
  id_tipo_servicio: Number;
  nombre: String;
  precio: Number;
  descripcion: String;
  duracion: Number;
  estatus: String;
  fecha_creacion: Date;
  visible: Boolean;
}

export interface IbusinessGoals {
  id: Number;
  titulo: String;
  descripcion: String;
  estatus: String;
  id_negocio: Number;
  visible: Boolean;
  fecha_creacion: Date;
}

export interface Icity {
  id: Number;
  nombre: String;
  id_estado: String;
  estatus: String;
}

export interface Istate {
  id: Number;
  nombre: String;
  estatus: String;
}