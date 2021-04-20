import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from "@angular/core";
import { MessagesComponent } from './messages.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        NzButtonModule
    ]
         ,
    declarations:[MessagesComponent],
    exports:[MessagesComponent]
})

export class MessagesModule {}