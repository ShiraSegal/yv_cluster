import { bookIdDetails } from "./book-id-details.model";

export class clusterGroupWithCrmLinks {
    bookIdDetailsList: bookIdDetails[];
    CrmLinkList: any[]; // ניתן להחליף בהתאם למבנה אם קיים
    contact: any; // ניתן להחליף בהתאם למבנה אם קיים


    constructor(
        bookIdDetailsList: bookIdDetails[],
        CrmLinkList: any[],
        contact: any
    ) {
        this.bookIdDetailsList = bookIdDetailsList;
        this.CrmLinkList = CrmLinkList;
        this.contact = contact;
    }
}