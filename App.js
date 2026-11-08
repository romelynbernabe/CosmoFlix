import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";
import LatestPage from "./pages/LatestPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import RecommendedPage from "./pages/RecommendedPage";

const Tab = createBottomTabNavigator();

// Category screens are registered in the navigator but hidden from the bottom nav
const HIDDEN_SCREENS = [
  { name: "Latest", component: LatestPage },
  { name: "TopRated", component: TopRatedPage },
  { name: "Popular", component: PopularPage },
  { name: "Recommended", component: RecommendedPage },
];

const TAB_ICONS = {
  Home: "home",
  Movies: "film",
  Profile: "person",
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#161D40" }}
      >
        <StatusBar style="light" />
        <TopBar />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: "#FFB703",
              tabBarInactiveTintColor: "#8F9BC7",
              tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
              tabBarStyle: {
                backgroundColor: "#161D40",
                borderTopColor: "#222B5C",
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name={TAB_ICONS[route.name] ?? "ellipse"}
                  size={size}
                  color={color}
                />
              ),
            })}
          >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Movies" component={MoviesPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />

            {HIDDEN_SCREENS.map((screen) => (
              <Tab.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={{
                  tabBarButton: () => null,
                  tabBarItemStyle: { display: "none" },
                }}
              />
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
