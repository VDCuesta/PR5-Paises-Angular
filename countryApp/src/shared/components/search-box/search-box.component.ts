import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Output() searchEvent = new EventEmitter<string>();
  
  //Maneja propagar los datos de nuestro input con output
  addNewItem(search: string) {
    this.searchEvent.emit(search);
  }
}
