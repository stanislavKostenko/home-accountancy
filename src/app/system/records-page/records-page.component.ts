import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {takeUntil}                                       from 'rxjs/operators';
import {Subject, Subscription}                           from 'rxjs';

import {CategoryInterface} from '@interfaces/category.interface';
import {environment}       from '@env/environment';
import {Animations}        from '@animations/animation';
import {ApiService}        from '@services/api.service';

@Component({
  selector: 'ha-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ Animations.enterLeaveOpacity ]
})
export class RecordsPageComponent implements OnInit, OnDestroy {
  public icons: any = environment.icons;
  public isEditable: boolean = false;
  public isLoaded: boolean = false;
  public categories: CategoryInterface[] = [];
  public subscription: Subscription[] = [];
  public spinnerColor: string = 'primary';
  public spinnerMode: string = 'indeterminate';
  public spinnerValue: number = 80;


  private ngUnsubscribe: Subject<boolean> = new Subject();
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.subscription.push(
      this.apiService.getCategories()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: CategoryInterface[]) => {
          this.categories = data;
          this.isLoaded = true;
        })
    );
  }

  newCategoryAdded(category: CategoryInterface) {
    this.categories.push(category);
  }

  editCategory(category: CategoryInterface) {
    const categoryIndex = this.categories
      .findIndex((item: CategoryInterface) => item.id === category.id);
    this.categories[categoryIndex] = category;
    console.log(this.categories);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

    this.subscription.map((item: Subscription) => item.unsubscribe());
  }
}
