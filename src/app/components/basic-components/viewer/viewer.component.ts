import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonLargeComponent, CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureName: string = '';
  pictureUrl: string = '';
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  rotations = [
    'rot-0', 'rot-90', 'rot-180', 'rot-270'
  ];

  scales = [
    'scale-1', 'scale-1-1', 'scale-1-2', 'scale-1-3', 'scale-1-4', 'scale-1-5'
  ];
  scale: number = 1;
  rotate: number = 0;
  index: number = 0;
  scaleIndex: number = 0;
  rotationClass = 'rot-0';
  zoomClass = 'scale-1'; // Assuming you have a zoomClass property

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pictureName']) {
      this.updatePictureUrl();
    }
  }

  async updatePictureUrl() {
    const baseUrl = `/assets/images/${this.pictureName}`;
    const extensions = ['jpg', 'jpeg', 'png', 'gif', 'JPG', 'JPEG', 'PNG', 'GIF'];
    for (const ext of extensions) {
      const url = `${baseUrl}.${ext}`;
      const exists = await this.imageExists(url);
      if (exists) {
        this.pictureUrl = url;
        break;
      }
    }
  }

  imageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  zoomIn() {
    if (this.scaleIndex < this.scales.length - 1) {
      this.scaleIndex++;
      this.zoomClass = this.scales[this.scaleIndex];
      console.log('zoomIn:', this.zoomClass);
    }
  }

  zoomOut() {
    if (this.scaleIndex > 0) {
      this.scaleIndex--;
      this.zoomClass = this.scales[this.scaleIndex];
      console.log('zoomOut:', this.zoomClass);
    }
  }

  rotateLeft() {
    console.log('rotateLeft called');
    this.index = (this.index - 1 + this.rotations.length) % this.rotations.length;
    this.rotationClass = this.rotations[this.index];
    console.log('rotateLeft:', this.rotationClass);
  }

  rotateRight() {
    console.log('rotateRight called');
    this.index = (this.index + 1) % this.rotations.length;
    this.rotationClass = this.rotations[this.index];
    console.log('rotateRight:', this.rotationClass);
  }

  print() {
    const printContents = document.querySelector('.printable-image')?.outerHTML;
    if (printContents) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload the page to restore the original content
    } else {
      console.error('Failed to find print content');
    }
  }
}