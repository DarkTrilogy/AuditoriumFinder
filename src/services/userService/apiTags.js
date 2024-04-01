import { LOCALHOST } from "./constant";

const prefixUrl = LOCALHOST + "/tags";

export async function addTags(userid, tagId) {
  const response = await fetch(`${prefixUrl}/${userid}/add`, {
    method: "POST",
    body: JSON.stringify(tagId),
  });
  return response.json();
}

export async function removeTags(userid, tagId) {
  const response = await fetch(`${prefixUrl}/${userid}/remove`, {
    method: "POST",
    body: JSON.stringify(tagId),
  });
  return response.json();
}

export async function getListOfTags() {
  const response = await fetch(`${prefixUrl}`);
  return response.json();
}
