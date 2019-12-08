import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { ISkill } from '../../../../../models/skill.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotifyService } from '../../services/notify.service';
import { IPortfolio } from '../../../../../models/portfolio.model';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageSkillsComponent {
  skillsCollection: AngularFirestoreCollection<ISkill>;
  skillDocs: Observable<ISkill[]>;
  portfolioDocs: Observable<IPortfolio[]>;
  portfolioCollection: AngularFirestoreCollection<IPortfolio>;
  success: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private afs: AngularFirestore, private notify: NotifyService) {
    this.skillsCollection = this.afs.collection('skills');
    this.skillDocs = this.skillsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ISkill;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.portfolioCollection = this.afs.collection('portfolio');
    this.portfolioDocs = this.portfolioCollection.valueChanges();
  }

  saveSkill(skill: ISkill) {
    this.skillsCollection.add(skill).then(data => {
      this.notify.success('❤️ ' + skill.name + ' skill added!');
      this.success.next(true);
      this.success.next(false);
    });
  }

  updateSkill(id: string, skill: ISkill) {
    this.skillsCollection
      .doc(id)
      .update(skill)
      .then(data => {
        this.notify.success('😍 That skill just got better');
      });
  }

  deleteSkill(id: string, confirm: boolean) {
    if (confirm) {
      this.skillsCollection
        .doc(id)
        .delete()
        .then(event => {
          this.notify.success('💩 Flushed that skill away 🚽');
        });
    }
  }
}
