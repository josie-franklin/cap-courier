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

// export async function getBottlecapsBySearch(input) {
//   try {
//     const response = await fetch(`/api/bottlecaps/${input}/`, {
//       headers: { Accept: "application/json" },
//     });
//     return handleJsonResponse(response);
//   } catch (error) {
//     handleError(error);
//   }
// }
