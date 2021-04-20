import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinnerModule } from './../spinner/NzSpinner.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HeroDetailRoutingModule,
        NzSpinnerModule,
        NzButtonModule,
        NzInputModule,
        FormsModule
    ],
    declarations:[HeroDetailComponent]
})

export class HeroDetailModule {}