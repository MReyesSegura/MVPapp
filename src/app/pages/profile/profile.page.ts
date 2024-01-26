import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { UtilService } from 'src/app/services/util.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    language: string = 'Español'
    cfdi: string = 'false'
    email: string = 'mario.reyes@lklpay.com.mx'
    rfc: string = 'RESM090909UOI'
    social: string = 'LKLPAY SA de CV'
    password: string = ''
    passwordC: string = ''
    profileActive: boolean = true
    passwordActive: boolean = false

    constructor(private navCtrl: NavController, private util: UtilService) {}

    ngOnInit() {}

    goToPassword() {
        this.profileActive = false
        this.passwordActive = true
    }

    goToProfile() {
        this.profileActive = true
        this.passwordActive = false
    }

    saveProfileinformation() {
        if (!this.util.isValidEmail(this.email)) {
            this.util.showToast('Correo invalido', 'danger')
            return
        }

        if (
            this.language != null &&
            this.language !== '' &&
            this.cfdi != null &&
            this.cfdi !== '' &&
            this.email != null &&
            this.email !== '' &&
            this.rfc != null &&
            this.rfc !== '' &&
            this.social != null &&
            this.social !== ''
        ) {
            this.util.showToast(
                'La información fue actualizada de manera exitosa',
                'success'
            )
        } else {
            this.util.showToast(
                'Completa todos los campos para actualizar la información',
                'danger'
            )
        }
    }

    savePasswordInformation() {
        if (this.password !== this.passwordC) {
            this.util.showToast('Las contraseñas deben ser identicas', 'danger')
            return
        }

        if (!this.util.isValidPassword(this.password)) {
            this.util.showToast(
                'Agrega una contraseña con el formato correcto',
                'danger'
            )
            return
        }

        this.util.showToast(
            'La contraseña fue actualizada correctamente',
            'success'
        )
    }

    back() {
        this.navCtrl.back()
    }
}
