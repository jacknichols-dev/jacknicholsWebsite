import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { ISkill } from '../../../../../models/skill.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSkillComponent {
  editing = false;
  success = of(false);
  @Input() skill: ISkill;
  @Output() delete: EventEmitter<boolean> = new EventEmitter();
  @Output() update: EventEmitter<ISkill> = new EventEmitter();
  constructor() {}

  updateSkill(skill: ISkill) {
    this.update.emit(skill);
  }

  deleteSkill(id: string) {
    this.delete.emit(true);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}
