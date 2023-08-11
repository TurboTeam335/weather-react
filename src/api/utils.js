export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((error) => {
      throw new Error(error.message);
    });
  }
};
