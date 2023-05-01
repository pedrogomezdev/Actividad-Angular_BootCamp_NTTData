import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ViajesComponent } from 'app/modules/admin/viajes/viajes.component';
import {CommonModule} from  '@angular/common';

const ViajesRoutes: Route[] = [
    {
        path     : '',
        component: ViajesComponent
    }
];

@NgModule({
    declarations: [
        ViajesComponent
    ],
    imports     : [
        RouterModule.forChild(ViajesRoutes),
        CommonModule
    ]
})
export class ViajesModule
{
}
