export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else if (response.status === 404) {
    // Handle the specific case of a 404 error
    throw new Error("The specified city was not found. Please try again.");
  } else {
    // Handle other errors
    return response.json().then((error) => {
      throw new Error(error.message);
    });
  }
};


