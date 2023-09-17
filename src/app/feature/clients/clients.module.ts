import { NgForOf, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../../shared/navigation/navbar.module';
import { ClientsComponent } from './clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    NgForOf,
    NavbarModule,
    NgbCarouselModule,
    NgOptimizedImage,
    NgbPopover,
  ],
  providers: [NgbPopover],
})
export class ClientsModule {}
