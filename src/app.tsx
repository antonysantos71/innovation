import { ThemeProvider } from "./contexts/theme/theme-provider";
import { Routers } from "./routers";
export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routers />
    </ThemeProvider>
  );
}
