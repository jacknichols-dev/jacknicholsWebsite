import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevComponent implements OnInit {
  constructor(public auth: AuthService, public ref: ChangeDetectorRef) {}

  ngOnInit() {}
}
