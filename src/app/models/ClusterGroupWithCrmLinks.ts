import { ClusteredNameRow } from "./ClusteredNameRow";

export class ClusterGroupWithCrmLinks {
    __type: string;
    ClusteredNameRowList: ClusteredNameRow[];
    CrmLinkList: any[]; // ניתן להחליף בהתאם למבנה אם קיים
    contact: any; // ניתן להחליף בהתאם למבנה אם קיים
  }