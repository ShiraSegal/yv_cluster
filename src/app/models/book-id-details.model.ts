import { valueCodeItem } from "./value-code-item.model";

export class bookIdDetails {
    BookId: string;
    ExistsClusterId: string;
    Score: string;
    FirstName: valueCodeItem;
    LastName: valueCodeItem;
    FatherFirstName: valueCodeItem;
    MotherFirstName: valueCodeItem;
    SpouseFirstName: valueCodeItem;
    DateOfBirth: valueCodeItem;
    PlaceOfBirth: valueCodeItem;
    PermanentPlace: valueCodeItem;
    Source: valueCodeItem;
    MaidenName: string;
    IsClustered: number;
    RelatedFnameGroupId: number | null;
    IsHasRelatedFname: boolean;
    Ind: number;
    HasRelatedGroups: boolean;
    NumberOfSuggestions: number;
    RelatedFnameList: any; // ניתן להחליף בהתאם למבנה אם קיים

    constructor(
        BookId: string,
        FirstName: valueCodeItem,
        lastName: valueCodeItem,
        FatherFirstName: valueCodeItem,
        MotherFirstName: valueCodeItem,
        PlaceOfBirth: valueCodeItem,
        PermanentPlace: valueCodeItem,
        DateOfBirth: valueCodeItem,
        Source: valueCodeItem,
        SpouseFirstName: valueCodeItem,
        MaidenName: string,
        IsClustered: number,
        ExistsClusterId: string,
        RelatedFnameGroupId: number | null,
        IsHasRelatedFname: boolean,
        Ind: number,
        HasRelatedGroups: boolean,
        Score: string,
        NumberOfSuggestions: number,
        RelatedFnameList: any
    ) {
        this.BookId = BookId;
        this.FirstName = FirstName;
        this.LastName = lastName;
        this.FatherFirstName = FatherFirstName;
        this.MotherFirstName = MotherFirstName;
        this.PlaceOfBirth = PlaceOfBirth;
        this.PermanentPlace = PermanentPlace;
        this.DateOfBirth = DateOfBirth;
        this.Source = Source;
        this.SpouseFirstName = SpouseFirstName;
        this.MaidenName = MaidenName;
        this.IsClustered = IsClustered;
        this.ExistsClusterId = ExistsClusterId;
        this.RelatedFnameGroupId = RelatedFnameGroupId;
        this.IsHasRelatedFname = IsHasRelatedFname;
        this.Ind = Ind;
        this.HasRelatedGroups = HasRelatedGroups;
        this.Score = Score;
        this.NumberOfSuggestions = NumberOfSuggestions;
        this.RelatedFnameList = RelatedFnameList;
    }
}
