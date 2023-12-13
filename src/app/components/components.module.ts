import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { Question } from './question/question.component'

@NgModule({
  declarations: [
    NavigationLinks,
    NavigationLinks1,
    GalleryCard3,
    FeatureCard,
    Question,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationLinks,
    NavigationLinks1,
    GalleryCard3,
    FeatureCard,
    Question,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
