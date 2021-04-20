import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinnerModule } from './../spinner/NzSpinner.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule,
        NzSpinnerModule,
        NzButtonModule,
        NzInputModule,
        FormsModule,   
    ],
    declarations:[HeroesComponent]
})

export class HeroesModule {}