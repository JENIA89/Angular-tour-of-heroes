import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
    imports:[
    CommonModule,
    NzInputModule
    ],
    declarations:[HeroSearchComponent],
    exports:[HeroSearchComponent]
})

export class HeroSearchModule {}