import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawy8px: string = ' '
  raw0y5c: string = ' '
  raw4hw5: string = ' '
  rawxwyf: string = ' '
  rawyxx5: string = ' '
  rawcqdn: string = ' '
  raw8htg: string = ' '
  rawi0c2: string = ' '
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
