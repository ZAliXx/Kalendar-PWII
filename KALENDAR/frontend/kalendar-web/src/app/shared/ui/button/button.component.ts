import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type KdButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'kd-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: KdButtonVariant = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
}
