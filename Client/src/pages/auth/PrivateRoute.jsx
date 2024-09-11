import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP}/user/user-auth`,
          {
            headers: {
              Authorization: auth.token,
            },
          }
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      } finally {
        setLoading(false);
      }
    };
    if (auth?.token) {
      authCheck();
    } else {
      setOk(false);
      setLoading(false);
    }
  }, [auth?.token]);

  if (loading) {
    // Render a loading spinner or message while checking authentication
    return <div>Loading...</div>;
  }

  return ok ? <Outlet /> : <Navigate to="/login" />;
}
