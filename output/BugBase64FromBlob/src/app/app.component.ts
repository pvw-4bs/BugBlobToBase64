import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
  }
  ngAfterViewInit(): void {
    this.router.navigate(['/BugBase64FromBlob']);
  }
  title = 'BugBase64FromBlob';
}

