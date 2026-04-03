import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedColor = signal('#ff0000');

  onColorChange(newColor: string) {
    this.selectedColor.set(newColor);
  }
  copyColor() {
    navigator.clipboard.writeText(this.selectedColor()).then(() => {
      alert('Color code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy color code: ', err);
    });
  }
}
