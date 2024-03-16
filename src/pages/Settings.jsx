import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { getReports } from "../services/apiModerator";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  function handler(e) {
    e.preventDefault();
    const reports = getReports();
    console.log(reports);
  }

  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
      <Button onClick={(e) => handler(e)} />
    </Row>
  );
}

export default Settings;
