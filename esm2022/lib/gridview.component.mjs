import { Component, Input } from '@angular/core';
import { NgIf, NgFor, CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { GridviewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3JpZHZpZXcvc3JjL2xpYi9ncmlkdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFdkMsTUF3Q2EsaUJBQWlCO0lBUTVCO1FBTnVCLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDdEIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFdEQsU0FBSSxHQUE4QixJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBR3pCLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztnQkFDbkIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs4R0FyQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsZ05BRmpCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQywwQkFwQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQseUdBS1MsSUFBSSw2RkFBRSxLQUFLLGtIQUFFLFlBQVk7O1NBR3hCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQXhDN0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVCxjQUlXLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLGFBQ3pCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQzswRUFHZCxJQUFJO3NCQUF2QixLQUFLO3VCQUFDLFdBQVc7Z0JBQ0ssWUFBWTtzQkFBbEMsS0FBSzt1QkFBQyxjQUFjO2dCQUNBLFVBQVU7c0JBQTlCLEtBQUs7dUJBQUMsWUFBWTtnQkFDTSxhQUFhO3NCQUFyQyxLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdJZiwgTmdGb3IsIENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUsIERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ncmlkdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIHRhYmxlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCI+PC9zcGFuPlxuICAgICAgPGg2PkdlbmVyYXRpbmcgdGFibGUsIHBsZWFzZSB3YWl0LjwvaDY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICN0YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzcz1cInRhYmxlLXByaW1hcnlcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2Yga2V5cyB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgIDx0aCAqbmdJZj1cIiFpc0ZpZWxkRXhjbHVkZWQoY29sKVwiPlxuICAgICAgICAgICAgICAgIHt7Y29sfX1cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPiAgICAgICAgIFxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICBcbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGRhdGEgfCBhc3luY1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGtleXMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICA8dGQgKm5nSWY9XCIhaXNGaWVsZEV4Y2x1ZGVkKGNvbClcIiBbY2xhc3NdPVwie1xuICAgICAgICAgICAgICAndGV4dC1yaWdodCc6IGlzTnVtYmVyRmllbGQoY29sKSBcbiAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgIHt7aXNOdW1iZXJGaWVsZChjb2wpID8gKHJvd1tjb2xdIHwgbnVtYmVyKTogcm93W2NvbF0gfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2dyaWR2aWV3LmNvbXBvbmVudC5jc3MnXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGUsIERlY2ltYWxQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkdmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnZGF0YVRhYmxlJykgZGF0YTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbnVtYmVyRmllbGRzJykgbnVtYmVyRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoJ2RhdGVGaWVsZHMnKSBkYXRlRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoJ2V4Y2x1ZGVkRmllbGRzJykgZXhjbHVkZUZpZWxkczogc3RyaW5nW10gPSBbXTtcblxuICBrZXlzOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRhPy5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5rZXlzLm5leHQoT2JqZWN0LmtleXMocmVzWzBdKSlcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc051bWJlckZpZWxkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJGaWVsZHMuaW5jbHVkZXMoZmllbGQpO1xuICB9XG5cbiAgaXNEYXRlRmllbGQoZmllbGQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRhdGVGaWVsZHMuaW5jbHVkZXMoZmllbGQpO1xuICB9XG5cbiAgaXNGaWVsZEV4Y2x1ZGVkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlRmllbGRzLmluY2x1ZGVzKGZpZWxkKTtcbiAgfVxufVxuIl19