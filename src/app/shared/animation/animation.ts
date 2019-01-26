import {animate, state, style, transition, trigger} from '@angular/animations';

export namespace Animations {
  export const rotateIcons = trigger('RotateIcons', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translate(-50%, -50%) rotateZ(720deg)',
        position: 'absolute',
        top: '50%',
        left: '50%'
      }),
      animate('250ms 150ms ease-in', style({
        transform: 'translate(-50%, -50%) rotateZ(0)',
        opacity: 1,
      }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({
        opacity: 0,
        transform: 'translate(-50%, -50%) rotateZ(720deg)',
      }))
    ])
  ]);

  export const rotateSingleIcon = trigger('RotateSingleIcon', [
    state('initial', style({transform: 'rotateZ(0)'})),
    transition('* <=> *', animate('300ms 100ms ease-in',
      style({transform: 'rotateZ(720deg)'}))),
  ]);
  export const enterLeave = trigger('EnterLeave', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('300ms ease-in', style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ]),
    transition(':leave', [
      animate('250ms ease-in', style({
        transform: 'translateX(-100%)',
        opacity: 0
      }))
    ])
  ]);

  export const enterLeaveTop = trigger('EnterLeave', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('300ms ease-in', style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ]),
    transition(':leave', [
      animate('250ms ease-in', style({
        transform: 'translateY(-100%)',
        opacity: 0
      }))
    ])
  ]);

  export const enterLeaveOpacity = trigger('EnterLeave', [
    transition(':enter', [
      style({opacity: 0}),
      animate(500)
    ]),
    transition(':leave', [
      animate(500, style({opacity: 1}))
    ])
  ]);

  export const openClose = trigger('OpenClose', [
      state('initial', style({width: '80px'})),
      state('final', style({width: '230px'})),
      transition('initial <=> final', animate('300ms 100ms ease-in')),
    ]);

  export const fadeInOut = trigger('FadeInOut', [
    state('start', style({width: 0})),
    state('finish', style({width: '100%'})),
    transition('start => finish', animate('200ms 50ms ease-in')),
    transition('finish => start', animate('100ms 50ms ease-in')),
  ]);

  export const centerStart = trigger('CenterStart', [
    state('start', style({padding: '1rem 0.5rem 1rem 2rem'})),
    state('finish', style({padding: '0.875rem'})),
    transition('start => finish', animate('200ms 50ms ease-in')),
    transition('finish => start', animate('100ms 50ms ease-in')),
  ]);
}


