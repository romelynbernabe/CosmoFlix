import { View, Text, Pressable } from "react-native";
import { CATEGORIES } from "../data/movies";

export default function MoviesPage({ navigation }) {
  return (
    <View className="flex-1 bg-space-900 px-4 pt-4">
      <Text className="text-white text-2xl font-extrabold mb-1">Movies</Text>
      <Text className="text-mist text-sm mb-4">Pick a category to explore</Text>

      {CATEGORIES.map((category) => (
        <Pressable
          key={category.id}
          onPress={() => navigation.navigate(category.screen)}
          className="flex-row items-center bg-space-800 border border-space-700 rounded-2xl p-4 mb-3 active:bg-space-700"
        >
          <Text className="text-4xl mr-4">{category.icon}</Text>
          <View className="flex-1">
            <Text className="text-accent text-lg font-bold">
              {category.title}
            </Text>
            <Text className="text-mist text-xs mt-0.5">{category.blurb}</Text>
          </View>
          <Text className="text-mist text-xl">›</Text>
        </Pressable>
      ))}
    </View>
  );
}
