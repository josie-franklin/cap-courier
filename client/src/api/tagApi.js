import { handleJsonResponse, handleError } from "./apiUtils";

export async function getAllTags() {
    try {
      const response = await fetch("/api/tags", {
        headers: { Accept: "application/json" },
      });
      return handleJsonResponse(response);
    } catch (error) {
      handleError(error);
    }
  }