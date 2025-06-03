import { ClusteredNameRow } from "./clustered-name-row.model";

export class ClusterGroupWithCrmLinks {
    __type: string;
    ClusteredNameRowList: ClusteredNameRow[];
    CrmLinkList: any[]; // ניתן להחליף בהתאם למבנה אם קיים
    contact: any; // ניתן להחליף בהתאם למבנה אם קיים


    constructor(
        __type: string,
        ClusteredNameRowList: ClusteredNameRow[],
        CrmLinkList: any[],
        contact: any
    ) {
        this.__type = __type;
        this.ClusteredNameRowList = ClusteredNameRowList;
        this.CrmLinkList = CrmLinkList;
        this.contact = contact;
    }
}