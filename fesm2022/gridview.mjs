import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { DatePipe, DecimalPipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

class GridviewService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: GridviewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: GridviewService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: GridviewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class GridviewComponent {
    constructor() {
        this.numberFields = [];
        this.dateFields = [];
        this.excludeFields = [];
        this.keys = new BehaviorSubject([]);
        this.loading = false;
    }
    ngOnInit() {
        if (this.data != undefined) {
            this.loading = true;
            this.data?.subscribe({
                next: (res) => {
                    this.keys.next(Object.keys(res[0]));
                    this.loading = false;
                }, error: (err) => {
                    this.loading = false;
                }
            });
        }
    }
    isNumberField(field) {
        return this.numberFields.includes(field);
    }
    isDateField(field) {
        return this.dateFields.includes(field);
    }
    isFieldExcluded(field) {
        return this.excludeFields.includes(field);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: GridviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: GridviewComponent, isStandalone: true, selector: "lib-gridview", inputs: { data: ["dataTable", "data"], numberFields: "numberFields", dateFields: "dateFields", excludeFields: ["excludedFields", "excludeFields"] }, providers: [DatePipe, DecimalPipe], ngImport: i0, template: `
    <div  *ngIf="loading; else table">
      <span class="spinner-border"></span>
      <h6>Generating table, please wait.</h6>
    </div>
    <ng-template #table>
      <table class="table table-bordered table-hover">
        <thead class="table-primary">
          <tr>
            <ng-container *ngFor="let col of keys | async">
              <th *ngIf="!isFieldExcluded(col)">
                {{col}}
              </th>
            </ng-container>         
          </tr>
        </thead>
      
        <tbody>
          <tr *ngFor="let row of data | async">
            <ng-container *ngFor="let col of keys | async">
              <td *ngIf="!isFieldExcluded(col)" [class]="{
              'text-right': isNumberField(col) 
              }">
                {{isNumberField(col) ? (row[col] | number): row[col] }}
              </td>
            </ng-container>
          </tr>
        </tbody>
      </table>
    </ng-template>
  `, isInline: true, styles: [".text-right{text-align:right}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.DecimalPipe, name: "number" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: GridviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-gridview', template: `
    <div  *ngIf="loading; else table">
      <span class="spinner-border"></span>
      <h6>Generating table, please wait.</h6>
    </div>
    <ng-template #table>
      <table class="table table-bordered table-hover">
        <thead class="table-primary">
          <tr>
            <ng-container *ngFor="let col of keys | async">
              <th *ngIf="!isFieldExcluded(col)">
                {{col}}
              </th>
            </ng-container>         
          </tr>
        </thead>
      
        <tbody>
          <tr *ngFor="let row of data | async">
            <ng-container *ngFor="let col of keys | async">
              <td *ngIf="!isFieldExcluded(col)" [class]="{
              'text-right': isNumberField(col) 
              }">
                {{isNumberField(col) ? (row[col] | number): row[col] }}
              </td>
            </ng-container>
          </tr>
        </tbody>
      </table>
    </ng-template>
  `, standalone: true, imports: [NgIf, NgFor, CommonModule], providers: [DatePipe, DecimalPipe], styles: [".text-right{text-align:right}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input,
                args: ['dataTable']
            }], numberFields: [{
                type: Input,
                args: ['numberFields']
            }], dateFields: [{
                type: Input,
                args: ['dateFields']
            }], excludeFields: [{
                type: Input,
                args: ['excludedFields']
            }] } });

/*
 * Public API Surface of gridview
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GridviewComponent, GridviewService };
//# sourceMappingURL=gridview.mjs.map
