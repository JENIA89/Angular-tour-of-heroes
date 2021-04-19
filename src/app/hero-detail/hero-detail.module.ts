import { NzSpinnerModule } from './../spinner/NzSpinner.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        HeroDetailRoutingModule,
        NzSpinnerModule
    ],
    declarations:[HeroDetailComponent]
})

export class HeroDetailModule {}