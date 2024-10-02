const chort = "2406-FTB-MT-WEB-PT"; // creating corhort
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api${chort}`; //creating API URL for later use

//create get all reqest
export async function getAllPuppys() {
  const response = await fetch(`${API_URL}/players`);
  const data = await response.json();
  return data;
}

// create get single request

//create a post request

// create delete request
