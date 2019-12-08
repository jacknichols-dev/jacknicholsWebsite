import { firestore } from 'firebase';

export interface ISkillPortfolio {
  name: string;
  link: string;
}

export interface ISkill {
  name: string;
  description: string;
  firstUsed: firestore.Timestamp;
  image: string;
  portfolioItems: ISkillPortfolio[];
  tags: string[];
  id: string;
  createdAt: Date;
}
