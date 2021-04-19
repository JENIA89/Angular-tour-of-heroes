import { ButtonModule } from './../button/button.module';
import { NzSpinnerModule } from './../spinner/NzSpinner.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from './heroes.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule,
        NzSpinnerModule,
        ButtonModule
    ],
    declarations:[HeroesComponent]
})

export class HeroesModule {}