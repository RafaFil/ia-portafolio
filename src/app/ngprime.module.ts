import { NgModule } from '@angular/core'

import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { ToolbarModule } from 'primeng/toolbar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FieldsetModule } from 'primeng/fieldset';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { ListboxModule } from 'primeng/listbox';

const NgPrimeComponents = [
    ButtonModule,
    ChipsModule,
    ToolbarModule,
    ScrollPanelModule,
    FieldsetModule,
    PaginatorModule,
    CardModule,
    DividerModule,
    SplitterModule,
    InputTextModule,
    CarouselModule,
    ListboxModule
];

@NgModule({
    imports: [NgPrimeComponents],
    exports: [NgPrimeComponents],
})
export class NgPrimeModule {}