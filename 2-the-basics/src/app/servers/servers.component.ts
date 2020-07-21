import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!'
  serverName = 'Test Server'
  serverCreated = false // Defaults serverCreated to false at the application start

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  } // Default method from TypeScript, first to be loaded.
    // Defines a timeout the the allowNewServer event listener to be trigered.

  ngOnInit() {} //  lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.

  onCreateServer() {
    this.serverCreated = true // Changes the serverCreated status to true when onCreateServer method is fired trough the click event listener.
    this.serverCreationStatus = 'Server was created! The server name is ' + this.serverName
  } // Method that is called when the "Add Server button is clicked"

  onUpdateServerName(event: Event) { 
    this.serverName = (<HTMLInputElement>event.target).value
  } // Method that listens for the event target on the form for changes in the input.
}
