import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const authInfo = useAuth();
  const router = useRouter();
  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    return <>{children}</>;
  }

  return router.push("/");
};

export const GuestRoute = ({ children }: Props) => {
  const authInfo = useAuth();
  const router = useRouter();
  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    return router.push("/");
  }

  return <>{children}</>;
};
