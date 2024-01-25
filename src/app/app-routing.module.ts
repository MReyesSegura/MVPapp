import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'folder/:id',
        loadChildren: () =>
            import('./pages/folder/folder.module').then(
                (m) => m.FolderPageModule
            ),
    },
    {
        path: 'accesses',
        loadChildren: () =>
            import('./pages/accesses/accesses.module').then(
                (m) => m.AccessesPageModule
            ),
    },
    {
        path: 'directory',
        loadChildren: () =>
            import('./pages/directory/directory.module').then(
                (m) => m.DirectoryPageModule
            ),
    },
    {
        path: 'emergencies',
        loadChildren: () =>
            import('./pages/emergencies/emergencies.module').then(
                (m) => m.EmergenciesPageModule
            ),
    },
    {
        path: 'events',
        loadChildren: () =>
            import('./pages/events/events.module').then(
                (m) => m.EventsPageModule
            ),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then((m) => m.LoginPageModule),
    },
    {
        path: 'notices',
        loadChildren: () =>
            import('./pages/notices/notices.module').then(
                (m) => m.NoticesPageModule
            ),
    },
    {
        path: 'payments',
        loadChildren: () =>
            import('./pages/payments/payments.module').then(
                (m) => m.PaymentsPageModule
            ),
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./pages/profile/profile.module').then(
                (m) => m.ProfilePageModule
            ),
    },
    {
        path: 'statements',
        loadChildren: () =>
            import('./pages/statements/statements.module').then(
                (m) => m.StatementsPageModule
            ),
    },
    {
        path: 'votes',
        loadChildren: () =>
            import('./pages/votes/votes.module').then((m) => m.VotesPageModule),
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
