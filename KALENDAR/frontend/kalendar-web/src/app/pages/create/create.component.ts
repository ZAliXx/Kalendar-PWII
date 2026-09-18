import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent, CardComponent, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loading = false;

  categorias = ['Evento', 'Borrador', 'Tarea', 'Idea'];

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    date: ['', [Validators.required]],
    category: [this.categorias[0], [Validators.required]],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  get title() {
    return this.form.controls.title;
  }

  get date() {
    return this.form.controls.date;
  }

  get content() {
    return this.form.controls.content;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // TODO: reemplazar por la llamada real al servicio de publicaciones (API .NET)
    setTimeout(() => {
      this.loading = false;
      console.log('Nueva publicacion:', this.form.value);
      this.router.navigate(['/dashboard']);
    }, 800);
  }
}
