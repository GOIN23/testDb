export enum videoQuality {
  a144 = "P144",
  a240 = "P240",
  a360 = "P360",
  a480 = "P480",
  a720 = "P720",
  a1080 = "P1080",
  a1440 = "P1440",
  a2160 ="P2160",
}


export type videoT = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: videoQuality[];
};


export type FieldError = {
  message: string;
  field: string;
};

export type APIErrorResult = {
  errorsMessages: FieldError[];
};

export type requestBody = {
  title: string;
  author: string;
  availableResolutions: videoQuality[];
};

export type dbT = {
  video: videoT[];
};

export type CreateVideoInputModel ={
  title:string,
  author:string,
  availableResolutions:videoQuality[] 
}

export const arrvideo: videoQuality[] = [
  videoQuality.a1080,
  videoQuality.a144,
  videoQuality.a1440,
  videoQuality.a2160,
  videoQuality.a240,
  videoQuality.a360,
  videoQuality.a480,
  videoQuality.a720,
];