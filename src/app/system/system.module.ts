import {NgModule}                from '@angular/core';
import {CommonModule}            from '@angular/common';
import {HttpClientModule}        from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
}                                from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule}       from '@fortawesome/angular-fontawesome';
import {NgxChartsModule}         from '@swimlane/ngx-charts';

import {SharedModule}           from '../shared/shared.module';
import {SystemRoutingModule}    from './system-routing.module';
import {SystemComponent}        from './system.component';
import {BillPageComponent}      from './bill-page/bill-page.component';
import {HistoryPageComponent}   from './history-page/history-page.component';
import {PlanningPageComponent}  from './planning-page/planning-page.component';
import {RecordsPageComponent}   from './records-page/records-page.component';
import {SideNavComponent}       from './side-nav/side-nav.component';
import {TopBarComponent}        from './top-bar/top-bar.component';
import {ProgressBarComponent}   from '../components/progress-bar/progress-bar.component';
import {CurrencyCardComponent}  from './bill-page/currency-card/currency-card.component';
import {BillCardComponent}      from './bill-page/bill-card/bill-card.component';
import {AddEventsComponent}     from './records-page/add-events/add-events.component';
import {AddCategoriesComponent} from './records-page/add-categories/add-categories.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FontAwesomeModule,
    MatTableModule,
    HttpClientModule,
    NgxChartsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SideNavComponent,
    TopBarComponent,
    ProgressBarComponent,
    BillCardComponent,
    CurrencyCardComponent,
    AddEventsComponent,
    AddCategoriesComponent
  ]
})
export class SystemModule {
}
