// built-in imports 
import { useContext } from "react";

// user defined imports 
import { AuthContext } from "./context/AuthContext"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// third party imports 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {

    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/">
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />


                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;