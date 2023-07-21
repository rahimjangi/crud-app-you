import { Component } from '@angular/core'; 



@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.css'],
})

export class AddFeatureComponent {
  imageUrl: string | null = null;
  selectedFile: File | null = null;

  constructor() { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
    // console.log(this.selectedFile);
  }

  saveImageLocally() {
    if (this.imageUrl && this.selectedFile) {
      // You can save the image locally here.
      // However, remember that it's not recommended to save directly in the 'assets' folder.
      // Instead, consider using a temporary storage or local storage to store the image.
      // For example, you can use the 'localStorage' to store it as a base64 string.
      localStorage.setItem('uploadedImage', this.imageUrl);
      alert('Image saved locally.');
    }
  }
}
