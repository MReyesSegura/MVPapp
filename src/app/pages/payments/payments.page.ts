import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-payments',
    templateUrl: './payments.page.html',
    styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
    dataSet: any[] = []
    dataSetTwo: any[] = []
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

        this.dataSetTwo = [
            {
                title: 'Item 1',
                amount: 50.25,
                date: '2024-01-22 09:30:00',
                folio: 'F1001',
            },
            {
                title: 'Item 2',
                amount: 120.75,
                date: '2024-01-23 14:45:00',
                folio: 'F1002',
            },
            {
                title: 'Item 3',
                amount: 75.5,
                date: '2024-01-24 11:00:00',
                folio: 'F1003',
            },
            {
                title: 'Item 4',
                amount: 33.9,
                date: '2024-01-25 16:20:00',
                folio: 'F1004',
            },
            {
                title: 'Item 5',
                amount: 65.0,
                date: '2024-01-26 13:15:00',
                folio: 'F1005',
            },
            {
                title: 'Item 6',
                amount: 90.3,
                date: '2024-01-27 10:45:00',
                folio: 'F1006',
            },
            {
                title: 'Item 7',
                amount: 42.8,
                date: '2024-01-28 15:05:00',
                folio: 'F1007',
            },
            {
                title: 'Item 8',
                amount: 110.0,
                date: '2024-01-29 12:30:00',
                folio: 'F1008',
            },
            {
                title: 'Item 9',
                amount: 28.6,
                date: '2024-01-30 17:10:00',
                folio: 'F1009',
            },
            {
                title: 'Item 10',
                amount: 150.4,
                date: '2024-01-31 09:00:00',
                folio: 'F1010',
            },
        ]

        this.dataSetTwo.forEach((e) => {
            e.amount = e.amount.toFixed(2)
        })
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
