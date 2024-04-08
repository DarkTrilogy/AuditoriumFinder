import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useProfile } from "./useProfile";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import FormRow2 from "../../ui/FormRow2";

function UpdateUserDataForm({ nickname, currentTags }) {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  // const { data: user } = useUser();
  const { user, isLoading } = useProfile();
  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);
  const [nick, setNick] = useState(nickname);
  const [tags, setTags] = useState(currentTags);
  const [newTags, setNewTags] = useState([]);

  if (isLoading) return <Spinner />;

  function handleSubmit(e) {
    console.log("Tags10", tags, newTags);
    e.preventDefault();
    if (!nick) return;
    updateUser(
      { nickname: nick, avatar, newTags },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  function handleCancel() {
    setNick(user.nickname);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={user.email} disabled />
      </FormRow>

      <FormRow label="Nickname">
        <Input
          type="text"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow2 label="Tags">
        {tags?.map((tag) => (
          <Tag key={tag.name} type="green" descriptionPosition="right">
            {tag.name}
            <span className="tag-description">{tag.description}</span>
          </Tag>
        ))}
        <Input
          placeholder="Add a tag..."
          type="text"
          value={newTags}
          onChange={(e) => setNewTags(e.target.value)}
          id="tags"
          disabled={isUpdating}
          small
        />
      </FormRow2>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
