import { NzDemoButtonBasicComponent } from './NzDemoButtonBasic.component';
import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    imports:[NzButtonModule ],
    declarations: [NzDemoButtonBasicComponent],
    exports: [NzDemoButtonBasicComponent]
})

export class ButtonModule {}