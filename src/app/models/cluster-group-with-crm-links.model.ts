import { BookIdDetails } from "./book-id-details.model";

export class ClusterGroupWithCrmLinks {
    bookIdDetailsList: BookIdDetails[];
    crmLinkList: any[]; // ניתן להחליף בהתאם למבנה אם קיים
    contact: any; // ניתן להחליף בהתאם למבנה אם קיים

    constructor(
        bookIdDetailsList: BookIdDetails[],
        crmLinkList: any[],
        contact: any
    ) {
        this.bookIdDetailsList = bookIdDetailsList;
        this.crmLinkList = crmLinkList;
        this.contact = contact;
    }
}