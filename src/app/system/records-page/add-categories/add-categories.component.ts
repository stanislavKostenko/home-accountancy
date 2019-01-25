import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {ApiService} from '@services/api.service';
import {CategoryInterface} from '@interfaces/category.interface';
import {Animations} from '@animations/animation';


@Component({
  selector: 'ha-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ Animations.rotateIcons, Animations.enterLeave ]
})
export class AddCategoriesComponent implements OnInit, OnDestroy {
  public subscription: Subscription[] = [];
  public isEditable: boolean = false;
  public currentState: string = 'initial';
  private ngUnsubscribe: Subject<boolean> = new Subject();

  @Output() public addNewCategory: EventEmitter<CategoryInterface> = new EventEmitter<CategoryInterface>();
  @Input() public icons: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let {limit} = form.value;
    const {categoryName} = form.value;
    limit < 0 ? limit *= -1 : limit *= 1;
    const category = new CategoryInterface(categoryName, limit);
    this.addCategory(category, form);
  }

  addCategory(category: CategoryInterface, form: NgForm) {
    this.subscription.push(
      this.apiService.addCategory(category)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: CategoryInterface) => {
          form.reset();
          form.form.patchValue({limit: 1});
          this.addNewCategory.emit(data);
        })
    );
  }

  handleEdit() {
    this.isEditable = !this.isEditable;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

    this.subscription.map((item: Subscription) => item.unsubscribe());
  }
}
