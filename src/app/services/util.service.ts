import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isLoading = false;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private menuCtrl: MenuController,
    private router: Router,
  ) { }

  async show(msg?: string) {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message: msg,
        spinner: 'bubbles',
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => {});
          }
        });
      }).catch(console.error);
  }

  async hide() {
    this.isLoading = false;
    
    return await this.loadingCtrl.dismiss().then(() => {}).catch(console.error);
  }

  async showToast(msg: string, colors: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      color: colors,
      position: 'bottom',
    });
    toast.present();
  }

  async showAlert(title: string, msg: string, icon: any, confirmation: string = 'Buen trabajo', confirmationText: string= 'Acción realizada de forma correcta') {
    Swal.fire({
      title: title,
      text: msg,
      icon: icon,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#efa400',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      backdrop: false,
      background: 'white',
    }).then((data) => {
      if(data.isConfirmed){
        Swal.fire({
          title: confirmation,
          text: confirmationText,
          icon: "success",
          showConfirmButton: true,
          showCancelButton: false,
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#efa400',
          backdrop: false,
          background: 'white',
        })
      }
    });
  }

  hasSession() {
    const token = localStorage.getItem('token');

    if (token && token != null && token !== 'null') {
      this.router.navigateByUrl('/route');
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.platform.backButton.observers.pop();
    this.router.navigateByUrl('/login');
    this.hide();
  }

  isValidEmail(email: string) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (emailfilter.test(email)) return true;
    return false;
  }


  isValidPhone(phone: string){
    const phoneFilter = /^\d{10}$/
    if (phoneFilter.test(phone)) return true;
    return false;
  }

  isValidPassword(password: string){
    const passwordFilter = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
    if (passwordFilter.test(password)) return true;
    return false;
  }
}
