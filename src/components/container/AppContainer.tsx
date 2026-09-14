import type { ReactNode } from "react";
import { useAppSelectore } from "../../redux/reduxHooks";

const AppContainer = ({children} : {children : ReactNode}) => {
  const { theme } = useAppSelectore((state) => state.uiManagerReduser);

  return (
  <main className={theme}>
    {children}
  </main>
);
};

export default AppContainer;
