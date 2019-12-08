import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() name: string;
  @Input() size: string;
  @Input() color: string;
  get absUrl() {
    return window.location.href;
  }
}
