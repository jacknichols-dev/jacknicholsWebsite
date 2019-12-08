import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPortfolio } from '../../../../../models/portfolio.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { NotifyService } from '../../services/notify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-portfolio',
  templateUrl: './manage-portfolio.component.html',
  styleUrls: ['./manage-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagePortfolioComponent {
  portfolioCollection: AngularFirestoreCollection<IPortfolio>;
  portfolioDocs: Observable<IPortfolio[]>;
  success: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private afs: AngularFirestore, private notify: NotifyService) {
    this.portfolioCollection = this.afs.collection('portfolio');
    this.portfolioDocs = this.portfolioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IPortfolio;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  savePortfolio(portfolio: IPortfolio) {
    this.portfolioCollection.add(portfolio).then(data => {
      this.notify.success('💓' + portfolio.name + ' added to your portfolio!');
      this.success.next(true);
      this.success.next(false);
    });
  }

  updatePortfolio(id: string, portfolio: IPortfolio) {
    this.portfolioCollection
      .doc(id)
      .update(portfolio)
      .then(data => {
        this.notify.success('😍 That portfolio just got better');
      });
  }

  deletePortfolio(id: string, confirm: boolean) {
    if (confirm) {
      this.portfolioCollection
        .doc(id)
        .delete()
        .then(event => {
          this.notify.success('💩 Flushed that portfolio away 🚽');
        });
    }
  }
}
