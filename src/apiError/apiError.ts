import { APIErrorResult } from "../type/typeVideos";

export const apiError: APIErrorResult = {
  errorsMessages: [
    {
      message: "invalid data",
      field: "title",
    },
  ],
};
