import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useProfile } from "./useProfile";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import FormRow2 from "../../ui/FormRow2";

function UpdateUserDataForm({
  nickname,
  currentTags,
  telegramHandle,
  emailVisibility,
  telegramVisibility,
}) {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  // const { data: user } = useUser();
  const { user, isLoading } = useProfile();
  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);
  const [nick, setNick] = useState(nickname);
  const [telegramId, setTelegramId] = useState(telegramHandle);
  const [tags] = useState(currentTags);
  const [newTags, setNewTags] = useState([]);

  const [emailVisibilityTag, setEmailVisibilityTag] = useState(emailVisibility);
  const [telegramVisibilityTag, setTelegramVisibilityTag] =
    useState(telegramVisibility);

  const visibilityTagsColors = {
    PUBLIC: "green",
    PRIVATE: "red",
    FRIENDS_ONLY: "blue",
  };

  const visibilityTags = {
    PUBLIC: "Public",
    PRIVATE: "Private",
    FRIENDS_ONLY: "Friends only",
  };

  if (isLoading) return <Spinner />;

  function handleSubmit(e) {
    e.preventDefault();
    if (!nick) return;
    updateUser(
      {
        nickname: nick,
        avatar,
        newTags,
        emailVisibilityTag,
        telegramVisibilityTag,
      },
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
          <Tag
            key={tag.name}
            type="green"
            descriptionPosition="right"
            isSelected={true}
          >
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

      <FormRow label="Telegram ID">
        <Input
          type="text"
          value={telegramId}
          onChange={(e) => setTelegramId(e.target.value)}
          id="telegramId"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow2 label="Fields visibility" type="visibility">
        {Object.entries(visibilityTags).map(
          ([visibilityKey, visibilityValue]) => (
            <Tag
              key={visibilityKey}
              type={visibilityTagsColors[visibilityKey]}
              descriptionPosition="bottom"
              isSelected={visibilityKey === emailVisibilityTag}
              onClick={() => {
                setEmailVisibilityTag(visibilityKey);
                // Обновление emailVisibility
                // setEmailVisibility(visibilityKey);
              }}
            >
              {visibilityValue}
            </Tag>
          ),
        )}
      </FormRow2>
      <FormRow2 label="Telegram ID visibility" type="visibility">
        {Object.entries(visibilityTags).map(
          ([visibilityKey, visibilityValue]) => (
            <Tag
              key={visibilityKey}
              type={visibilityTagsColors[visibilityKey]}
              descriptionPosition="bottom"
              isSelected={visibilityKey === telegramVisibilityTag}
              onClick={() => {
                setTelegramVisibilityTag(visibilityKey);
                // Обновление telegramVisibility
                // setTelegramVisibility(visibilityKey);
              }}
            >
              {visibilityValue}
            </Tag>
          ),
        )}
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
