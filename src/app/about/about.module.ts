import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {CollegeComponent} from './college/college.component';
import { LoaderModule } from '../loader/loader.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [CollegeComponent],
    imports: [CommonModule, AboutRoutingModule, LoaderModule, TranslateModule]
})
export class AboutModule {
}
