import { ValueCodeItem } from "./value-code-item.model";

export class BookIdDetails {
    bookId: string;
    clusterId: string;
    firstName: ValueCodeItem;
    lastName: ValueCodeItem;
    fatherFirstName: ValueCodeItem;
    motherFirstName: ValueCodeItem;
    spouseFirstName: ValueCodeItem;
    maidenName: string;
    dateOfBirth: ValueCodeItem;
    placeOfBirth: ValueCodeItem;
    permanentPlace: ValueCodeItem;
    source: ValueCodeItem;
    placeOfDeath: string;
    authenticDateOfBirth: string;
    restoredDateOfBirth: string;
    authenticDateOfDeath: string;
    restoredDateOfDeath: string;
    gender: string;
    fate: string;
    firstNameCode: string;
    fatherNameCode: string;
    lastNameCode: string;
    motherNameCode: string;
    spouseFirstNameCode: string;
    dateOfBirthCode: string;
    placeOfBirthCode: string;
    permanentPlaceCode: string;
    sourceCode: string;
    isClustered: number;
    existsClusterId: string;
    relatedFnameGroupId: any;
    ind: number;
    hasRelatedGroups: boolean;
    numberOfSuggestions: number;
    relatedFnameList: any;
    isHasRelatedFname: boolean;
    score: string;

    
    constructor(
        bookId: string,
        firstName: ValueCodeItem,
        lastName: ValueCodeItem,
        fatherFirstName: ValueCodeItem,
        motherFirstName: ValueCodeItem,
        placeOfBirth: ValueCodeItem,
        permanentPlace: ValueCodeItem,
        dateOfBirth: ValueCodeItem,
        source: ValueCodeItem,
        spouseFirstName: ValueCodeItem,
        maidenName: string,
        isClustered: number,
        existsClusterId: string,
        relatedFnameGroupId: number | null,
        isHasRelatedFname: boolean,
        ind: number,
        hasRelatedGroups: boolean,
        score: string,
        numberOfSuggestions: number,
        relatedFnameList: any
    ) {
        this.bookId = bookId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fatherFirstName = fatherFirstName;
        this.motherFirstName = motherFirstName;
        this.placeOfBirth = placeOfBirth;
        this.permanentPlace = permanentPlace;
        this.dateOfBirth = dateOfBirth;
        this.source = source;
        this.spouseFirstName = spouseFirstName;
        this.maidenName = maidenName;
        this.isClustered = isClustered;
        this.existsClusterId = existsClusterId;
        this.relatedFnameGroupId = relatedFnameGroupId;
        this.isHasRelatedFname = isHasRelatedFname;
        this.ind = ind;
        this.hasRelatedGroups = hasRelatedGroups;
        this.score = score;
        this.numberOfSuggestions = numberOfSuggestions;
        this.relatedFnameList = relatedFnameList;
    }
}