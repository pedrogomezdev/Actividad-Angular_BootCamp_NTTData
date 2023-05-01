import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BienvenidaComponent } from 'app/modules/admin/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';

const BienvenidaRoutes: Route[] = [
    {
        path     : '',
        component: BienvenidaComponent
    }
];

@NgModule({
    declarations: [
        BienvenidaComponent
    ],
    imports     : [
        RouterModule.forChild(BienvenidaRoutes),
        CommonModule,
        FormsModule
    ]
})
export class BienvenidaModule
{
}
