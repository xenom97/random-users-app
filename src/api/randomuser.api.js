import { serializeRandomUsers } from "./seriliazations/randomuser.seriliazation";

const BASE_URL = new URL("https://randomuser.me/api/");

export const getRandomUsers = ({ page, gender, seed }) => {
  BASE_URL.search = new URLSearchParams({
    page,
    results: 10,
    inc: ["login", "name", "email", "phone", "picture", "gender"],
    gender,
    seed,
  });

  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => serializeRandomUsers(data))
    .catch((error) => console.log(error));
};
