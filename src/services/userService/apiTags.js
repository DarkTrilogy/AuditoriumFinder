import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/tags";

// DONE
export async function addTags(userid, tagsId) {
  const tags = tagsId && tagsId.length > 1 ? tagsId.split(", ") : tagsId;
  // console.log(
  //   "ADD TAGS1",
  //   userid,
  //   tagsId,
  //   typeof tagsId,
  //   `${prefixUrl}/add?id=${tags.join("&id=")}`,
  // );
  const response = await fetch(`${prefixUrl}/add?id=${tags.join("&id=")}`, {
    method: "POST",
    headers: {
      userid: userid,
    },
  });

  const data = await response.json();
  console.log("ADD TAGS2", data);
  return data;
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
