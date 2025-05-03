import { ValueCodeItem } from "./ValueCodeItem";

export class ClusteredNameRow {
    __type: string;
    BookId: string;
    FirstName: ValueCodeItem;
    LastName: ValueCodeItem;
    FatherFirstName: ValueCodeItem;
    MotherFirstName: ValueCodeItem;
    PlaceOfBirth: ValueCodeItem;
    PermanentPlace: ValueCodeItem;
    DateOfBirth: ValueCodeItem;
    Source: ValueCodeItem;
    SpouseFirstName: ValueCodeItem;
    MaidenName: string;
    IsClustered: number;
    ExistsClusterId: string;
    RelatedFnameGroupId: number | null;
    IsHasRelatedFname: boolean;
    Ind: number;
    HasRelatedGroups: boolean;
    Score: string;
    NumberOfSuggestions: number;
    RelatedFnameList: any; // ניתן להחליף בהתאם למבנה אם קיים
  }