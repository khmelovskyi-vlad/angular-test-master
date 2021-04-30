import {Component, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {default_college_translations} from '../translations';
import {TranslateService} from '@ngx-translate/core';
import { CollegeApiService } from '../../services/college-api.service';
import { AboutInterface } from '../../models/about.interface';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;
    translations?: Object;
    isLoading = true;

    constructor(
        private collegeApiService: CollegeApiService,
        private translate: TranslateService
    ) {
    }

    ngOnInit() {
        this.getCollege();
        this.translations = default_college_translations;
        this.isLoading = false;
    }
    getCollege(): void {
        this.collegeApiService.getCollege().pipe(debounceTime(100)).subscribe(college => {
            this.college = college;
            let obj = {};
            for (let key in college) {
                obj[key] = college[key];
            }
            this.translate.setTranslation('BG', obj);
        });
    }
}
