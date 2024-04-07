import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
import Register from "./pages/Register";
import Moderator from "./pages/Moderator";
import Report from "./pages/Report";
import Reports from "./pages/Reports";
import Friends from "./pages/Friends";
import Friend from "./pages/Friend";
import Users from "./pages/Users";
import User from "./pages/User";
import Buildings from "./pages/Buildings";
import { LocalizationProvider } from "./context/LocalizationContext";
import WelcomePage from "./pages/WelcomePage";
import Building from "./pages/Building";
import Audience from "./pages/Audience";
import Audiences from "./pages/Audiences";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <LocalizationProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to={"welcome"} />} />
                <Route path="welcome" element={<WelcomePage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<Checkin />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:userId" element={<User />} />
                <Route path="friends" element={<Friends />} />
                <Route path="friends/:friendId" element={<Friend />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
                <Route path="buildings" element={<Buildings />} />
                <Route path="buildings/:buildingId" element={<Building />} />
                {/* <Route
                  path="buildings/:buildingId/audience"
                  element={<Audiences />}
              /> */}
                <Route
                  path="buildings/:buildingId/audience/:audienceId"
                  element={<Audience />}
                />
              </Route>

              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout showOutlet={true} checkForModerator={true} />
                  </ProtectedRoute>
                }
              >
                <Route path="moderator" element={<Moderator />} />
                <Route path="reports" element={<Reports />} />
                <Route path="reports/:reportId" element={<Report />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </LocalizationProvider>
  );
}

export default App;
