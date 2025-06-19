import { valueCodeItem } from "./value-code-item.model";


export class clusteredNameRow {
    __type: string;
    bookid: string;
    firstname: valueCodeItem;
    lastname: valueCodeItem;
    fatherfirstname: valueCodeItem;
    motherfirstname: valueCodeItem;
    placeofbirth: valueCodeItem;
    permanentplace: valueCodeItem;
    dateofbirth: valueCodeItem;
    source: valueCodeItem;
    spousefirstname: valueCodeItem;
    maidenname: string;
    isclustered: number;
    existsclusterid: string;
    relatedfnamegroupid: number | null;
    ishasrelatedfname: boolean;
    ind: number;
    hasrelatedgroups: boolean;
    score: string;
    numberofsuggestions: number;
    relatedfnamelist: any; // ניתן להחליף בהתאם למבנה אם קיים

    constructor(
        __type: string,
        bookid: string,
        firstname: valueCodeItem,
        lastname: valueCodeItem,
        fatherfirstname: valueCodeItem,
        motherfirstname: valueCodeItem,
        placeofbirth: valueCodeItem,
        permanentplace: valueCodeItem,
        dateofbirth: valueCodeItem,
        source: valueCodeItem,
        spousefirstname: valueCodeItem,
        maidenname: string,
        isclustered: number,
        existsclusterid: string,
        relatedfnamegroupid: number | null,
        ishasrelatedfname: boolean,
        ind: number,
        hasrelatedgroups: boolean,
        score: string,
        numberofsuggestions: number,
        relatedfnamelist: any
    ) {
        this.__type = __type;
        this.bookid = bookid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.fatherfirstname = fatherfirstname;
        this.motherfirstname = motherfirstname;
        this.placeofbirth = placeofbirth;
        this.permanentplace = permanentplace;
        this.dateofbirth = dateofbirth;
        this.source = source;
        this.spousefirstname = spousefirstname;
        this.maidenname = maidenname;
        this.isclustered = isclustered;
        this.existsclusterid = existsclusterid;
        this.relatedfnamegroupid = relatedfnamegroupid;
        this.ishasrelatedfname = ishasrelatedfname;
        this.ind = ind;
        this.hasrelatedgroups = hasrelatedgroups;
        this.score = score;
        this.numberofsuggestions = numberofsuggestions;
        this.relatedfnamelist = relatedfnamelist;
    }
}