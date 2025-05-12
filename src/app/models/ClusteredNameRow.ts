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

    constructor(
        __type: string,
        BookId: string,
        FirstName: ValueCodeItem,
        LastName: ValueCodeItem,
        FatherFirstName: ValueCodeItem,
        MotherFirstName: ValueCodeItem,
        PlaceOfBirth: ValueCodeItem,
        PermanentPlace: ValueCodeItem,
        DateOfBirth: ValueCodeItem,
        Source: ValueCodeItem,
        SpouseFirstName: ValueCodeItem,
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
        this.__type = __type;
        this.BookId = BookId;
        this.FirstName = FirstName;
        this.LastName = LastName;
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