import { SapirClusterDetail } from "./sapir-cluster-detail.model";

export class SapirClusterModel {
    bookIdList: string[];
    sapirClusterDetails: SapirClusterDetail[];
    comments: string | null;
    level: string | null;
    groupHasMultimedia: boolean;
    groupId: string | null;
    statusCode: number;
  }