const chort = "2406-FTB-MT-WEB-PT"; // creating corhort
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api${chort}`; //creating API URL for later use

//create get all reqest
export async function getAllPuppys() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    "there was an error in your get request", error;
  }
}

// create get single request
export async function getOnePuppy(id) {
  try {
    const reponse = await fetch(`${API_URL}/players/${id}`);
    const data = await reponse.json();
    return data;
  } catch (error) {
    "there was an error in your get single request", error;
  }
}
//create a post request
export async function createPuppy(name, breed, imageUrl, teamId) {
  try {
    const reponse = fetch(`${API_URL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        breed,
        imageUrl,
        teamId,
      }),
    });
    const puppy = await reponse.json();
    return puppy;
  } catch (error) {
    "there was an error is your post request", error;
  }
}
// create delete request
export async function deletePuppy(id) {
  try {
    const reponse = await fetch(`${API_URL}/players/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    "there was an error in your delete request", error;
  }
}
