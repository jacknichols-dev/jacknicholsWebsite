import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISkill } from '../../../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {
  @Input() skill: ISkill;
}
