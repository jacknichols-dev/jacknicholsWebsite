import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { IPortfolio } from '../../../../../models/portfolio.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPortfolioComponent implements OnInit, OnDestroy {
  addPortfolioForm: FormGroup;
  tags: FormArray;
  subscription: Subscription;

  @Output() submitPortfolio: EventEmitter<IPortfolio> = new EventEmitter();
  @Input() success: Observable<boolean>;
  @Input() portfolio: IPortfolio;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.subscription = this.success.subscribe((success: boolean) => {
      if (success) {
        this.buildForm();
      }
    });
    this.buildForm();
  }

  buildForm() {
    if (this.portfolio) {
      this.addPortfolioForm = this.formBuilder.group({
        name: new FormControl(this.portfolio.name, Validators.required),
        description: new FormControl(
          this.portfolio.description,
          Validators.required
        ),
        externalLink: new FormControl(
          this.portfolio.externalLink ? this.portfolio.externalLink : null
        ),
        link: new FormControl(this.portfolio.link, Validators.required),
        image: new FormControl(this.portfolio.image, Validators.required),
        tags: this.formBuilder.array([]),
        createdAt: this.portfolio.createdAt
      });

      this.portfolio.tags.forEach((el: string) => {
        this.addTag(el);
      });
    } else {
      this.addPortfolioForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        link: new FormControl('', Validators.required),
        externalLink: new FormControl(null),
        image: new FormControl('', Validators.required),
        tags: this.formBuilder.array([this.createTag()]),
        createdAt: new FormControl(new Date(Date.now()))
      });
    }
  }

  addTag(tag?: string) {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.push(this.createTag(tag));
  }

  createTag(tag?: string) {
    return this.formBuilder.control(tag ? tag : '');
  }

  deleteTag(i: number) {
    this.tags = this.addPortfolioForm.get('tags') as FormArray;
    this.tags.removeAt(i);
  }

  submit() {
    this.submitPortfolio.emit(this.addPortfolioForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
