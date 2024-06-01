import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  console.log("Protected Route");
  const navigate = useNavigate();
  const { isLoading, error, data: user } = useUser();

  // Если идет загрузка, показать спиннер
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // Если произошла ошибка
  if (error) {
    console.error(error);
    navigate("/error");
  }

  // Если пользователь не аутентифицирован, перенаправить на страницу входа
  if (user?.role !== "authenticated") {
    navigate("/login");
  }

  // Если пользователь аутентифицирован, отрендерить дочерний компонент
  if (user?.role === "authenticated") {
    return children;
  }
}

export default ProtectedRoute;

// function ProtectedRoute({ children }) {
//   console.log("Protected Route");
//   const navigate = useNavigate();

//   const { isLoading, user, isAuthenticated } = useUser();
//   console.log("ISAUTHENTICATED", user, isAuthenticated, isLoading);

//   useEffect(
//     function () {
//       if (!isAuthenticated /* && !isLoading */) {
//         navigate("/login");
//       }
//     },
//     [isAuthenticated, isLoading, user, navigate],
//   );

//   // 3. While loading, show a spinner
//   if (!isLoading)
//     return (
//       <FullPage>
//         <Spinner />
//       </FullPage>
//     );

//   // 4. If there IS a user, render the app
//   if (isAuthenticated) return children;
// }

// export default ProtectedRoute;
