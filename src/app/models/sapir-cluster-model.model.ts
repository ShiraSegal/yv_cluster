import { sapirClusterDetail } from "./sapir-cluster-detail.model";

export class sapirClusterModel {
    BookIdList: string[];
    sapirClusterDetails: sapirClusterDetail[];
    Comments: string | null;
    Level: string | null;
    GroupHasMultimedia: boolean;
    GroupId: string | null;
    StatusCode: number;
  }