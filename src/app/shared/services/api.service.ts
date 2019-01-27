import {Injectable}        from '@angular/core';
import {HttpClient}        from '@angular/common/http';
import {Observable}        from 'rxjs';
import {map}               from 'rxjs/operators';

import {environment}       from '@env/environment';
import {BillInterface}     from '@interfaces/bill.interface';
import {CurrencyInterface} from '@interfaces/currency.interface';
import {UserInterface}     from '@interfaces/user.interface';
import {CategoryInterface} from '@interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${environment.mainApiUrl}/users?email=${email}`)
      .pipe(map((response: UserInterface) => response));
  }

  createNewUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${environment.mainApiUrl }/users`, user)
      .pipe(map((response: UserInterface) => response));

  }

  getBill(): Observable<BillInterface> {
    return this.http.get<BillInterface>(environment.mainApiUrl + '/bill')
      .pipe(map((data: BillInterface ) => data));
  }

  getCurrencyConversion(): Observable<CurrencyInterface[]> {
    return this.http.get<CurrencyInterface[]>(environment.currencyApi)
      .pipe(map((data: CurrencyInterface[]) => data));
  }

  addCategory(category: CategoryInterface): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>(environment.mainApiUrl + '/categories', category)
      .pipe(map((data: CategoryInterface) => data));
  }

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(environment.mainApiUrl + '/categories')
      .pipe(map((data: CategoryInterface[]) => data));
  }

  updateCategory(category: CategoryInterface): Observable<CategoryInterface> {
    return this.http.put<CategoryInterface>(environment.mainApiUrl + '/categories/' + category.id , category)
      .pipe(map((data: CategoryInterface) => data));
  }
}
