import { ConfigProvider, theme } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
export const ThemeProvider = (props: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(darkThemeMq.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    darkThemeMq.addEventListener("change", listener);
    return () => darkThemeMq.removeEventListener("change", listener);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};
