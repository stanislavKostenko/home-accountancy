// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {
  faArchive,
  faCreditCard,
  faDollarSign,
  faEdit,
  faEuroSign,
  faHistory,
  faHryvnia,
  faPen,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

export const environment = {
  mainApiUrl: 'http://localhost:3000',
  currencyApi: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  production: false,
  icons: {
    UAH: faHryvnia,
    USD: faDollarSign,
    EU: faEuroSign,
    edit: faPen,
    add: faPlus,
  },
  single: [
    {
      'name': 'Gain',
      'value': 15
    },
    {
      'name': 'Expenses',
      'value': 25
    },
    {
      'name': 'Balance',
      'value': 35
    }
  ],

  multi: [
    {
      'name': 'Germany',
      'series': [
        {
          'name': '2010',
          'value': 7300000
        },
        {
          'name': '2011',
          'value': 8940000
        }
      ]
    },

    {
      'name': 'USA',
      'series': [
        {
          'name': '2010',
          'value': 7870000
        },
        {
          'name': '2011',
          'value': 8270000
        }
      ]
    },

    {
      'name': 'France',
      'series': [
        {
          'name': '2010',
          'value': 5000002
        },
        {
          'name': '2011',
          'value': 5800000
        }
      ]
    }
  ],

  historyTable: [
    {
      equal: '222222',
      date: new Date().toLocaleDateString(),
      category: 'Products',
      type: 'Expenses',
      action: 'Open'
    },

    {
      equal: '1122211',
      date: new Date().toLocaleDateString(),
      category: 'Vacation',
      type: 'Gain',
      action: 'Open'
    }
  ],

  sideNavButtons: [
    {
      title: 'Bill',
      icon: faCreditCard,
      link: 'bill'
    },
    {
      title: 'History',
      icon: faHistory,
      link: 'history'
    },
    {
      title: 'Planning',
      icon: faArchive,
      link: 'planning'
    },
    {
      title: 'Records',
      icon: faEdit,
      link: 'records'
    },
  ]
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
