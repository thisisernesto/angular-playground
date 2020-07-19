/* Imports the component module from the Angular core files */
import { Component } from '@angular/core'

/* Decorator responsible for telling that the class we're creating
is a component, and writing some metadata about said component */
@Component({
  selector: 'app-server', // The selector should be a string, and should be unique.
  templateUrl: './server.component.html', // Points to the HTML file that is going to be used as template.
})

export class ServerComponent { }





