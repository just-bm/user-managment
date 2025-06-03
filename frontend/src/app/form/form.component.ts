import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder, @Inject(FormService) private formService: FormService) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.formGroup.valid) {
      this.formService.submitForm(this.formGroup.value).subscribe({
        next: () => {
          this.success = true;
          this.formGroup.reset();
          this.submitted = false;
          setTimeout(() => this.success = false, 3000); // Hide success message after 3s
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          // Add error handling UI if needed
        }
      });
    }
  }
}



