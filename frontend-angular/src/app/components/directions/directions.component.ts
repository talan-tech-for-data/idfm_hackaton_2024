import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent {
  inputNumber: number | null = null;
  result: number | null = null;
  loading: boolean = false;

  addTwo() {
    if (this.inputNumber !== null) {
      this.loading = true;
      fetch(`http://localhost:8000/add_two/${this.inputNumber}`)
        .then(response => response.json())
        .then(data => {
          this.result = data.result;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          alert('Error fetching data');
        });
    }
  }
}