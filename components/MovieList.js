import { View, Text, ScrollView, Pressable } from "react-native";
import { MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) => movie.categories.includes(category));

  return (
    <View className="flex-1 bg-space-900 px-4 pt-4">
      <View className="flex-row items-center mb-4">
        <Pressable
          onPress={() => navigation.navigate("Movies")}
          className="bg-space-700 rounded-full px-3 py-1 mr-3"
        >
          <Text className="text-accent font-bold">← Back</Text>
        </Pressable>
        <Text className="text-white text-xl font-extrabold">{title}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
