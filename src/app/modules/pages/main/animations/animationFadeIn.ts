import { trigger, style, animate, transition } from '@angular/animations';

export const fadeInUpAnimation = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
