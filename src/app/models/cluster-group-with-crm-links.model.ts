import { clusteredNameRow } from "./clustered-name-row.model";

export class clusterGroupWithCrmLinks {
    __type: string;
    clusteredNameRowList: clusteredNameRow[];
    CrmLinkList: any[]; // ניתן להחליף בהתאם למבנה אם קיים
    contact: any; // ניתן להחליף בהתאם למבנה אם קיים


    constructor(
        __type: string,
        clusteredNameRowList: clusteredNameRow[],
        CrmLinkList: any[],
        contact: any
    ) {
        this.__type = __type;
        this.clusteredNameRowList = clusteredNameRowList;
        this.CrmLinkList = CrmLinkList;
        this.contact = contact;
    }
}