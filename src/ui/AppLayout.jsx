import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { MODERATOR_EMAIL } from "../utils/constants";

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
  console.log("AppLayout");
  const { user } = useUser();
  const isModerator = user?.email === MODERATOR_EMAIL;

  return (
    <>
      {isModerator ? (
        <ModeratorLayout>
          <Header isModerator={isModerator} />
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
