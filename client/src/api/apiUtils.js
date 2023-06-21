export async function handleJsonResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error calling api - ${response.statusText}`);
    }
  }
  
  export async function handleEmptyResponse(response) {
    if (response.ok) {
      return true;
    } else {
      throw new Error(`Error calling api - ${response.statusText}`);
    }
  }
  
  export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }