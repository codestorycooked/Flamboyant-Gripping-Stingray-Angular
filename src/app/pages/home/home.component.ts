import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw48yr: string = ' '
  rawvfqe: string = ' '
  rawrdw2: string = ' '
  rawetmm: string = ' '
  raw87wp: string = ' '
  raw9p16: string = ' '
  raw9bj7: string = ' '
  rawz24x: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Flamboyant Gripping Stingray')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Flamboyant Gripping Stingray',
      },
    ])
  }
}
