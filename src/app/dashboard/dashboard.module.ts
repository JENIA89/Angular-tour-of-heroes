import { ButtonModule } from './../button/button.module';
import { NzSpinnerModule } from './../spinner/NzSpinner.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutindModule } from './dashboard-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutindModule,
        NzSpinnerModule,
        ButtonModule
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}