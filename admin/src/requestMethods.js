import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// Initialize the TOKEN variable
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// Check if 'persist:root' exists in localStorage and safely retrieve the accessToken

// const persistedState = localStorage.getItem("persist:root");
// if (persistedState) {
//   try {
//     const currentUser = JSON.parse(JSON.parse(persistedState).user).currentUser;
//     TOKEN = currentUser ? currentUser.accessToken : ""; // Set the TOKEN if exists
//   } catch (error) {
//     console.error("Error parsing accessToken from localStorage:", error);
//   }
// }

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
