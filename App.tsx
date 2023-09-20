import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";
import { Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && <Home />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
