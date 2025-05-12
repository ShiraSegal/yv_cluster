import { ValueCodeItem } from "./value-code-item.model";

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
    RelatedFnameGroupId: string | null;
    IsHasRelatedFname: boolean;
    Ind: number;
    HasRelatedGroups: boolean;
    Score: number | null;
    NumberOfSuggestions: number;
    RelatedFnameList: any | null;
  }
  
 