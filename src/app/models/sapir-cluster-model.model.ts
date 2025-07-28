import { BookIdDetails } from "./book-id-details.model";
import { SapirClusterDetail } from "./sapir-cluster-detail.model";

export class SapirClusterModel {
    bookIdList: BookIdDetails[];
    // sapirClusterDetails: SapirClusterDetail[];
    comments: string | null;
    level: string | null;
    groupHasMultimedia: boolean;
    groupId: string | null;
    statusCode: number;
  }