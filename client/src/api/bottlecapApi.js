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
  // console.log(data);
  try {
    //Build the query string
    let url = "/api/bottlecaps/query?";
    if (data.search) {
      url = url + `search=${data.search}`;
    }
    if (data.filterInfo) {
      if (data.filterInfo.filter) {
        if (data.search) {
          url = url + "&";
        }
        data.filterInfo.filter.forEach((filter, index) => {
          if (index === 0) {
            url = url + `filter[]=${filter}`;
          } else {
            url = url + `&filter[]=${filter}`;
          }
        });
      }
      if (data.filterInfo.category) {
        if (data.search || data.filterInfo.filter) {
          url = url + "&";
        }
        url = url + `category=${data.filterInfo.category}`;
      }
      if (data.filterInfo.forTrade) {
        if (data.search || data.filterInfo.filter) {
          url = url + "&";
        }
        url = url + `forTrade=${data.filterInfo.forTrade}`;
      }
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
