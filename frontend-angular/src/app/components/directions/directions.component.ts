import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
  inputNumber: number | null = null;
  result: number | null = null;
  loading: boolean = false;
  conversationSummary: string = '';
  userDataSummary: string = '';

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

  fetchConversationSummary() {
    fetch('http://localhost:8001/summarize_conversations')
      .then(response => response.text())
      .then(data => {
        this.conversationSummary = data;
      })
      .catch(() => {
        alert('Error fetching conversation summary');
      });
  }

  fetchUserDataSummary() {
    fetch('http://localhost:8001/summarize_user_data')
      .then(response => response.text())
      .then(data => {
        this.userDataSummary = data;
      })
      .catch(() => {
        alert('Error fetching user data summary');
      });
  }

  ngOnInit() {
    this.fetchConversationSummary();
    this.fetchUserDataSummary();
  }
}