import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-payments',
    templateUrl: './payments.page.html',
    styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
    dataSet: any[] = []
    total: number = 0
    paymentsActive: boolean = true
    historyActive: boolean = false

    constructor(private navCtrl: NavController) {}

    ngOnInit() {
        this.dataSet = [
            {
                Concepto: 'Product Purchase',
                Monto: 150.5,
                FechaLimitePago: '15 de Febrero del 2024',
            },
            {
                Concepto: 'Service Fee',
                Monto: 75.0,
                FechaLimitePago: '10 de Marzo del 2024',
            },
            {
                Concepto: 'Rent Payment',
                Monto: 1200.0,
                FechaLimitePago: '28 de Febrero del 2024',
            },
            {
                Concepto: 'Utility Bill',
                Monto: 90.75,
                FechaLimitePago: '05 de Marzo del 2024',
            },
            {
                Concepto: 'Grocery Shopping',
                Monto: 45.3,
                FechaLimitePago: '20 de Febrero del 2024',
            },
            {
                Concepto: 'Online Subscription',
                Monto: 10.99,
                FechaLimitePago: '15 de Marzo del 2024',
            },
            {
                Concepto: 'Dining Out',
                Monto: 65.25,
                FechaLimitePago: '25 de Febrero del 2024',
            },
            {
                Concepto: 'Health Insurance',
                Monto: 200.0,
                FechaLimitePago: '08 de Marzo del 2024',
            },
            {
                Concepto: 'Gift Purchase',
                Monto: 30.5,
                FechaLimitePago: '18 de Febrero del 2024',
            },
            {
                Concepto: 'Book Purchase',
                Monto: 22.99,
                FechaLimitePago: '02 de Marzo del 2024',
            },
        ]

        // this.total = this.dataSet.reduce((prev, current) => {
        //     return prev + current?.Monto
        // }, 0)
    }

    goToPayments() {
        this.paymentsActive = true
        this.historyActive = false
    }

    goToHistory() {
        this.paymentsActive = false
        this.historyActive = true
        this.total = 0
    }

    addingItem(event: any, amount: number) {
        if (!event.target.checked) {
            this.total = parseFloat((this.total - amount).toFixed(2))
        } else {
            this.total = parseFloat((this.total + amount).toFixed(2))
        }
    }

    back() {
        this.navCtrl.back()
    }
}
