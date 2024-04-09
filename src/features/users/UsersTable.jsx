import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";
import { useLocalization } from "../../context/LocalizationContext";
import {
  EMAIL_EN,
  EMAIL_RU,
  NICKNAME_EN,
  NICKNAME_RU,
  STATUS_EN,
  STATUS_RU,
} from "../../utils/constants";

function UsersTable() {
  const navigate = useNavigate();
  const { language } = useLocalization();
  const { data: users, isLoading, count } = useUsers();
  console.log("USERS123", users, isLoading, count);

  if (isLoading) return <Spinner />;

  if (!users.length) return <Empty resourceName={"users"} />;

  return (
    <Menus>
      <Table columns="2fr 2.5fr 2fr 0.5fr 0.5fr">
        <Table.Header>
          <div>{language === "en" ? NICKNAME_EN : NICKNAME_RU}</div>
          <div>{language === "en" ? EMAIL_EN : EMAIL_RU}</div>
          <div>{language === "en" ? STATUS_EN : STATUS_RU}</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={users}
          render={(user) => (
            <UserRow
              key={user.userid}
              user={user}
              onClick={() => navigate(`/users/${user.userid}`)}
              userid={user.userid}
            />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UsersTable;
