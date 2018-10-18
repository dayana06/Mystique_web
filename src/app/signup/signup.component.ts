import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms'
import $ = require('jquery');
import { ViewChild } from '@angular/core';
import { NgxStepperModule, StepperOptions, NgxStepperComponent } from 'ngx-stepper';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
  toShow: Boolean;
  likesToShow: Ilike[];
  valueLikesToShow: IvalueLike[];
  states: Istate[];
  cities: Icity[];
  likeToShow: Ilike;
  userToSignUp: IsignUp = { nombre: "", apellido: "", cedula: "", correo: "", contrasenia: "", fecha_nacimiento: null, id_ciudad: null, direccion: "", telefono: "", perfil: [] };
  form: FormGroup;
  stateSelectedForCitySelectCharge: Number;

  name: String;
  lastname: String;
  id: String;
  email: String;
  password: String;
  genre: Number;
  birthday: Date;
  address: String;
  state: Number;
  city: Number;
  phonenumber: String;
  likesToSubscribe: IlikesToSubscribe[] = [];
  userExists: Boolean;
  users = {} as any;

  toPush: IlikesToSubscribe = { likeId: "", valueLikeId: "" };

  @ViewChild('stepperDemo')
  public steppers: NgxStepperComponent;

  public selectLikes(): void {
    this.userExists = false;
    var datepicker = document.querySelector('.datepicker');
    var instanceDatepicker = M.Datepicker.getInstance(datepicker);
    if ($("input").hasClass("invalid")) {
      $("input.invalid").focus();
      return;
    }
    if (this.name == '') {
      $("#nombre").focus();
      M.toast({ html: 'Se debe llenar el campo Nombres' });
      return;
    }
    if (this.lastname == '') {
      $("#apellidos").focus();
      M.toast({ html: 'Se debe llenar el campo Apellidos' });
      return;
    }
    if (this.id == '') {
      $("#cedula").focus();
      M.toast({ html: 'Se debe llenar el campo Cédula' });
      return;
    }
    if (this.email == '') {
      $("#correo").focus();
      M.toast({ html: 'Se debe llenar el campo Correo' });
      return;
    }
    if (this.password == '') {
      $("#contraseña").focus();
      M.toast({ html: 'Se debe llenar el campo Contraseña' });
      return;
    }
    if (this.birthday == null && instanceDatepicker.date == null) {
      $("#fecha_nacimiento").focus();
      M.toast({ html: 'Se debe elegir una Fecha de nacimiento' });
      return;
    }
    if (this.address == '') {
      $("#direccion").focus();
      M.toast({ html: 'Se debe llenar el campo Dirección' });
      return;
    }
    if (this.state == null) {
      $("#stateSelect").focus();
      M.toast({ html: 'Se debe elegir un Estado' });
      return;
    }
    if (this.city == null) {
      $("#citySelect").focus();
      M.toast({ html: 'Se debe elegir una Ciudad' });
      return;
    }
    if (this.phonenumber == '') {
      $("#telefono").focus();
      M.toast({ html: 'Se debe llenar el campo Teléfono' });
      return;
    }
    this.userExist();
    if (this.userExists) {
      return;
    }
    this.steppers.showFeedback('Por favor, espere ...');
    this.steppers.next();
  }

  public goBack(): void {
    this.steppers.showFeedback('Por favor, espere ...');
    this.steppers.back();
  }

  constructor(fb: FormBuilder, private signupService: SignupService) {
    this.toShow = true;
    this.signupService.getParameters().subscribe(likeToShow => {
      this.likesToShow = likeToShow.data;
    });
    this.signupService.getValuesLike().subscribe(likeToShow => {
      this.valueLikesToShow = likeToShow.data;
    });

    this.signupService.getStates().subscribe(states => {
      this.states = states.data;
    });

    this.signupService.getCities().subscribe(cities => {
      this.cities = cities.data;
    });
    this.signupService.getUser().subscribe(user => {
      this.users = user.data; 
    });

    this.form = fb.group({
      // define your control in you form
      contraseña: ['', Validators.required],
      repetirContrasea: ['', Validators.required]
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  userExist() {
    for (let item of this.users) {
      if (item.correo == this.email) {
        M.toast({ html: 'Ya existe un usuario con dicho correo' });
        this.userExists = true;
        break;
      }
    }
  }

  ngOnInit() {
    this.initSubscriptionForm();
    var datepicker = document.querySelector('.datepicker');
    var instanceDatepicker = M.Datepicker.init(datepicker, {
      defaultDate: new Date(2000, 1, 1),
      format: 'dd mmmm, yyyy',
      yearRange: [1950, (new Date()).getFullYear() - 18],
      container: 'body'
    });


    var collapsible = document.querySelector('.collapsible');
    var instanceCollapsible = M.Collapsible.init(collapsible);

    setTimeout(function () {
      var stateSelect = document.querySelector('.state');
      var instanceStateSelect = M.FormSelect.init(stateSelect, null);
    }, 2500);


    setTimeout(function () {
      var citySelect = document.querySelector('.city');
      var instanceCitySelect = M.FormSelect.init(citySelect, null);
    }, 2500);

  }

  chargeCitySelect() {
    $('.city').prop('disabled', false);
    var stateSelect = document.querySelector('.state');
    var instanceState = M.FormSelect.getInstance(stateSelect);
    this.stateSelectedForCitySelectCharge = Number($("#stateSelect").val().toString());
    setTimeout(function () {
      var citySelect = document.querySelector('.city');
      var instanceCitySelect = M.FormSelect.init(citySelect, null);
    }, 1000);
  }

  initSubscriptionForm() {
    this.name = '';
    this.lastname = '';
    this.id = '';
    this.email = '';
    this.password = '';
    this.genre = null;
    this.birthday = null;
    this.phonenumber = '';
    this.address = '';
    this.state = null;
    this.city = null;
  }

  onSubmit() {
    var datepicker = document.querySelector('.datepicker');
    var instanceDatepicker = M.Datepicker.getInstance(datepicker);
    this.genre = Number($('input[name=genero]:checked').attr('id').toString());
    if ($("#stateSelect").val() != null) {
      this.state = Number($("#stateSelect").val().toString());
    }
    if ($("#stateSelect").val() != null) {
      this.city = Number($("#stateSelect").val().toString());
    }
    this.userToSignUp.nombre = this.name;
    this.userToSignUp.apellido = this.lastname;
    this.userToSignUp.cedula = this.id;
    this.userToSignUp.correo = this.email;
    this.userToSignUp.contrasenia = this.password;
    this.userToSignUp.perfil.push(this.genre);
    this.userToSignUp.fecha_nacimiento = instanceDatepicker.date;
    this.userToSignUp.telefono = this.phonenumber;
    this.userToSignUp.direccion = this.address;
    this.userToSignUp.id_ciudad = this.city;
    for (let item of this.likesToSubscribe) {
      this.userToSignUp.perfil.push(Number(item.valueLikeId));
    }
    this.signupService.signUp(this.userToSignUp).subscribe(data => { M.toast({ html: "Bienvenido!. Revisa tu correo, en los próximos minutos recibirás un correo con las instrucciones para seguir disfrutando de nuestros servicios." }); }, Error => { M.toast({ html: "Lo sentimos, intente de nuevo más tarde." }); });
  }

  chargeLikes(likeId, valueLikeId) {
    this.toPush = { likeId: "", valueLikeId: "" };
    let pos: number = -1;
    this.toPush.likeId = likeId;
    this.toPush.valueLikeId = valueLikeId;
    pos = this.likesToSubscribe.findIndex(x => x.likeId == likeId);
    if (pos == -1) {
      this.likesToSubscribe.push(this.toPush);
    } else {

      this.likesToSubscribe.splice(pos, 1);
      this.likesToSubscribe.push(this.toPush);
    }
  }
}

export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('contraseña').value;
    let confirmPassword = AC.get('repetirContrasea').value;
    if (password != confirmPassword) {
      AC.get('repetirContrasea').setErrors({ MatchPassword: true })
      $("#repetirContrasea").addClass("invalid");
    } else {
      return null
    }
  }
}

interface Ilike {
  id: String;
  nombre: String;
  estatus: String;
  id_tipo_parametro: String;
}
interface IvalueLike {
  id: String;
  id_parametro: String;
  nombre: String;
  estatus: String;
  descripcion: String;
  fecha_creacion: Date;
}
interface Istate {
  id: Number;
  name: String;
}
interface Icity {
  id: Number;
  idState: Number;
  name: String;
}
interface IlikesToSubscribe {
  likeId: String;
  valueLikeId: String;
}
interface IsignUp {
  correo: String;
  contrasenia: String;
  nombre: String;
  apellido: String;
  cedula: String;
  telefono: String;
  direccion: String;
  id_ciudad: Number;
  fecha_nacimiento: Date;
  perfil: Number[];
}