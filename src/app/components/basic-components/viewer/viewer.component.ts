import { Component, Input, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonSmallComponent } from '../icon-button-small/icon-button-small.component';


@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonSmallComponent, CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureName: string = '';
  @ViewChild('imageElement') imageElementRef!: ElementRef<HTMLImageElement>;
  pictureUrl: string = '';
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  rotate: number = 0;
  scaleIndex: number = 0;
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
    if (this.scaleIndex < 5) {
      this.scaleIndex++;
      this.updateTransform();
      console.log('zoomIn:', this.zoomClass);
    }
  }

  zoomOut() {
    if (this.scaleIndex > 0) {
      this.scaleIndex--;
      this.updateTransform();
      console.log('zoomOut:', this.zoomClass);
    }
  }

  rotateLeft() {
    console.log('rotateLeft called');
    this.rotate -= 90;
    this.updateTransform();
  }

  rotateRight() {
    console.log('rotateRight called');
    this.rotate += 90;
    this.updateTransform();
  }

  updateTransform() {
    const imgElement = this.imageElementRef?.nativeElement;
    // const imgElement = document.querySelector('.printable-image') as HTMLElement;
    if (imgElement) {
      imgElement.style.transform = `rotate(${this.rotate}deg) scale(${1 + this.scaleIndex * 0.1})`;
    }
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