import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsuariosComponent } from 'app/modules/admin/usuarios/usuarios.component';
import {FormsModule} from '@angular/forms';

const UsuariosRoutes: Route[] = [
    {
        path     : '',
        component: UsuariosComponent
    }
];

@NgModule({
    declarations: [
        UsuariosComponent
    ],
    imports     : [
        RouterModule.forChild(UsuariosRoutes),
        CommonModule,
        FormsModule
    ]
})
export class UsuariosModule
{
}
