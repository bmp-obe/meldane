import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const headerAnimation: AnimationTriggerMetadata =
  trigger('scrollAnimation', [
    state('large', style({
      height: '85px',
      'background-color': 'transparent'
    })),
    state('small', style({
      height: '105px',
      'background-color': '#ffffff',
      'box-shadow': '0 2px 3px rgba(24, 23, 23, 0.43)'
    })),
    transition('transparent => solid', animate('150ms ease-in-out')),
    transition('solid => transparent', animate('150ms ease-in-out'))
  ]);
