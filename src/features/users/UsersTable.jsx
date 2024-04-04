import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

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
  // const { bookings, isLoading, count } = useBookings();

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName={"bookings"} />;

  const { users, isLoading, count } = useUsers(0);
  const { language } = useLocalization();

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
          render={(user) => <UserRow key={user.id} user={user} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UsersTable;
