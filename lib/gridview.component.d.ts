import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class GridviewComponent implements OnInit {
    data: Observable<any[]> | undefined;
    numberFields: string[];
    dateFields: string[];
    excludeFields: string[];
    keys: BehaviorSubject<string[]>;
    loading: boolean;
    constructor();
    ngOnInit(): void;
    isNumberField(field: string): boolean;
    isDateField(field: string): boolean;
    isFieldExcluded(field: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridviewComponent, "lib-gridview", never, { "data": { "alias": "dataTable"; "required": false; }; "numberFields": { "alias": "numberFields"; "required": false; }; "dateFields": { "alias": "dateFields"; "required": false; }; "excludeFields": { "alias": "excludedFields"; "required": false; }; }, {}, never, never, true, never>;
}
