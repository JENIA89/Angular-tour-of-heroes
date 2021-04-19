import { NgModule } from "@angular/core";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDemoSpinBasicComponent } from "./NzDemoSpinBasicComponent.component";

@NgModule({
    imports:[NzSpinModule],
    declarations: [NzDemoSpinBasicComponent],
    exports: [NzDemoSpinBasicComponent]
})

export class NzSpinnerModule {}