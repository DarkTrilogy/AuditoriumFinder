import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { MODERATOR_EMAIL } from "../utils/constants";
import Spinner from "./Spinner";

const StyledLayount = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const ModeratorLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout({ showOutlet, checkForModerator }) {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner />;
  console.log("APP LAYOUT", user, MODERATOR_EMAIL);

  return (
    <>
      {localStorage.getItem("email") === MODERATOR_EMAIL ? (
        <ModeratorLayout>
          <Header
            isModerator={localStorage.getItem("email") === MODERATOR_EMAIL}
          />
          <Sidebar role="moderator" />

          <Main>
            <Container>
              {showOutlet && <Outlet />}
              {/* <Moderator /> */}
              {/* <Outlet /> */}
            </Container>
          </Main>
        </ModeratorLayout>
      ) : (
        <StyledLayount>
          <Header />
          <Sidebar />

          <Main>
            <Container>{!checkForModerator && <Outlet />}</Container>
          </Main>
        </StyledLayount>
      )}
    </>
  );
}

export default AppLayout;
