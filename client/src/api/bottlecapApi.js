import { handleJsonResponse, handleError } from "./apiUtils";

export async function getAllBottlecaps() {
  try {
    const response = await fetch("/api/bottlecaps", {
      headers: { Accept: "application/json" },
    });
    return handleJsonResponse(response);
  } catch (error) {
    handleError(error);
  }
}

export async function getBottlecapsBySearchAndFilter(data) {
  try {
    //Build the query string
    let url = "/api/bottlecaps/query?";
    if (data.search) {
      url = url + `search=${data.search}`;
    }
    if (data.filter) {
      if (data.search) {
        url = url + "&";
      }
      data.filter.forEach((filter, index) => {
        if (index === 0) {
          url = url + `filter[]=${filter}`;
        } else {
          url = url + `&filter[]=${filter}`;
        }
      });
    }
    // console.log(url);

    //Send fetch request and handle response
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    return handleJsonResponse(response);
  } catch (error) {
    handleError(error);
  }
}
