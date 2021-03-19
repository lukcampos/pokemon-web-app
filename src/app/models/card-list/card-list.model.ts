import { Card} from "../card/card.model"

export interface CardList {
  data: Array<Card>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
