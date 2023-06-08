import { Component, Input } from '@angular/core';
import { NgIf, NgFor, CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class GridviewComponent {
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
              <td *ngIf="!isFieldExcluded(col)" [ngClass]="{
              'text-right': isNumberField(col) 
              }">
                {{isNumberField(col) ? (row[col] | number): row[col] }}
              </td>
            </ng-container>
          </tr>
        </tbody>
      </table>
    </ng-template>
  `, isInline: true, styles: [".text-right{text-align:right}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.DecimalPipe, name: "number" }] }); }
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
              <td *ngIf="!isFieldExcluded(col)" [ngClass]="{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3JpZHZpZXcvc3JjL2xpYi9ncmlkdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUEwQ3ZDLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7UUFOdUIsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUN0QixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUV0RCxTQUFJLEdBQThCLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUdELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2dCQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzhHQXJDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixnTkFGakIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLDBCQXBDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVCx5R0FLUyxJQUFJLDZGQUFFLEtBQUssa0hBQUUsWUFBWTs7MkZBR3hCLGlCQUFpQjtrQkF4QzdCLFNBQVM7K0JBQ0UsY0FBYyxZQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQsY0FJVyxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxhQUN6QixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7MEVBR2QsSUFBSTtzQkFBdkIsS0FBSzt1QkFBQyxXQUFXO2dCQUNLLFlBQVk7c0JBQWxDLEtBQUs7dUJBQUMsY0FBYztnQkFDQSxVQUFVO3NCQUE5QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ00sYUFBYTtzQkFBckMsS0FBSzt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSWYsIE5nRm9yLCBDb21tb25Nb2R1bGUsIERhdGVQaXBlLCBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZ3JpZHZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgICpuZ0lmPVwibG9hZGluZzsgZWxzZSB0YWJsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiPjwvc3Bhbj5cbiAgICAgIDxoNj5HZW5lcmF0aW5nIHRhYmxlLCBwbGVhc2Ugd2FpdC48L2g2PlxuICAgIDwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0YWJsZS1wcmltYXJ5XCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGtleXMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICA8dGggKm5nSWY9XCIhaXNGaWVsZEV4Y2x1ZGVkKGNvbClcIj5cbiAgICAgICAgICAgICAgICB7e2NvbH19XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4gICAgICAgICBcbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXRhIHwgYXN5bmNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBrZXlzIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiIWlzRmllbGRFeGNsdWRlZChjb2wpXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAndGV4dC1yaWdodCc6IGlzTnVtYmVyRmllbGQoY29sKSBcbiAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgIHt7aXNOdW1iZXJGaWVsZChjb2wpID8gKHJvd1tjb2xdIHwgbnVtYmVyKTogcm93W2NvbF0gfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2dyaWR2aWV3LmNvbXBvbmVudC5jc3MnXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGUsIERlY2ltYWxQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkdmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnZGF0YVRhYmxlJykgZGF0YTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbnVtYmVyRmllbGRzJykgbnVtYmVyRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoJ2RhdGVGaWVsZHMnKSBkYXRlRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoJ2V4Y2x1ZGVkRmllbGRzJykgZXhjbHVkZUZpZWxkczogc3RyaW5nW10gPSBbXTtcblxuICBrZXlzOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRhPy5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5rZXlzLm5leHQoT2JqZWN0LmtleXMocmVzWzBdKSlcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc051bWJlckZpZWxkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJGaWVsZHMuaW5jbHVkZXMoZmllbGQpO1xuICB9XG5cbiAgaXNEYXRlRmllbGQoZmllbGQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRhdGVGaWVsZHMuaW5jbHVkZXMoZmllbGQpO1xuICB9XG5cbiAgaXNGaWVsZEV4Y2x1ZGVkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlRmllbGRzLmluY2x1ZGVzKGZpZWxkKTtcbiAgfVxufVxuIl19