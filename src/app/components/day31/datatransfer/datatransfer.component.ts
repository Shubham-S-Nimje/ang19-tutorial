import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datatransfer',
  imports: [],
  templateUrl: './datatransfer.component.html',
  styleUrl: './datatransfer.component.css',
})
export class DatatransferComponent {
  @Input() user: string = '';
  @Input() brother: string = '';
}
