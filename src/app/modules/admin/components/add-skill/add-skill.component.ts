import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { IPortfolio } from '../../../../../models/portfolio.model';
import { Observable, Subscription } from 'rxjs';
import { MatSelectChange } from '@angular/material';
import { ISkill, ISkillPortfolio } from '../../../../../models/skill.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSkillComponent implements OnInit, OnDestroy {
  addSkillForm: FormGroup;
  tags: FormArray;
  formPortfolioItems: FormArray;
  subscription: Subscription;

  portfolioDocs: Observable<IPortfolio[]>;
  portfolioCollection: AngularFirestoreCollection<IPortfolio>;

  @Input() skill: ISkill;
  @Input() success: Observable<boolean>;
  @Output() submitSkill: EventEmitter<ISkill> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private afs: AngularFirestore) {
    this.portfolioCollection = this.afs.collection('portfolio');
    this.portfolioDocs = this.portfolioCollection.valueChanges();
  }

  ngOnInit() {
    this.subscription = this.success.subscribe((success: boolean) => {
      if (success) {
        this.buildForm();
      }
    });
    this.buildForm();
  }

  buildForm() {
    if (this.skill) {
      this.addSkillForm = this.formBuilder.group({
        name: new FormControl(this.skill.name, Validators.required),
        description: new FormControl(
          this.skill.description,
          Validators.required
        ),
        image: new FormControl(this.skill.image, Validators.required),
        firstUsed: new FormControl(
          this.skill.firstUsed ? this.skill.firstUsed.toDate() : new Date(),
          Validators.required
        ),
        tags: this.formBuilder.array([]),
        portfolioItems: this.formBuilder.array([]),
        createdAt: this.skill.createdAt
      });

      this.skill.tags.forEach((el: string) => {
        this.addTag(el);
      });

      this.skill.portfolioItems.forEach((el: ISkillPortfolio) => {
        this.addPortfolioItem(el);
      });
    } else {
      this.addSkillForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        firstUsed: new FormControl('', Validators.required),
        tags: this.formBuilder.array([this.createTag()]),
        portfolioItems: this.formBuilder.array([this.createPortfolioItem()]),
        createdAt: new Date(Date.now())
      });
    }
  }

  addTag(tag?: string) {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.push(this.createTag(tag));
  }

  addPortfolioItem(item?: ISkillPortfolio) {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems.push(this.createPortfolioItem(item));
  }

  createTag(tag?: string) {
    return this.formBuilder.control(tag ? tag : '');
  }

  createPortfolioItem(item?: ISkillPortfolio) {
    return this.formBuilder.group({
      name: new FormControl(item ? item.name : '', Validators.required),
      link: new FormControl(item ? item.link : '', Validators.required)
    });
  }

  deleteTag(i: number) {
    this.tags = this.addSkillForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  deletePortfolioItem(i: number) {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems.removeAt(i);
  }

  portfolioItemSelected(i: number, event: MatSelectChange) {
    this.formPortfolioItems = this.addSkillForm.get(
      'portfolioItems'
    ) as FormArray;
    this.formPortfolioItems
      .at(i)
      .setValue({ name: event.value.name, link: event.value.link });
  }

  get activeFormPortfolio() {
    return this.addSkillForm.get('portfolioItems') as FormArray;
  }

  submit() {
    return this.submitSkill.emit(this.addSkillForm.value);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
