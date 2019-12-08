import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { of } from 'rxjs';
import { IPortfolio } from '../../../../../models/portfolio.model';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPortfolioComponent {
  editing = false;
  success = of(false);
  @Input() portfolio: IPortfolio;
  @Output() delete: EventEmitter<boolean> = new EventEmitter();
  @Output() update: EventEmitter<IPortfolio> = new EventEmitter();
  constructor() {}

  updatePortfolio(portfolio: IPortfolio) {
    this.update.emit(portfolio);
  }

  deletePortfolio(id: string) {
    this.delete.emit(true);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}
