import { View, Text, Image } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View className="flex-row bg-space-800 rounded-2xl p-3 mb-3 border border-space-700">
      <Image
        source={movie.image}
        style={{ width: 70, height: 105, borderRadius: 10 }}
        resizeMode="cover"
      />

      <View className="flex-1 ml-3 justify-between">
        <View>
          <Text className="text-white text-base font-bold" numberOfLines={1}>
            {movie.title}
          </Text>
          <Text className="text-mist text-xs mt-0.5">
            {movie.year} • {movie.categories.join(" · ")}
          </Text>
          <Text className="text-mist text-xs mt-1" numberOfLines={3}>
            {movie.desc}
          </Text>
        </View>
        <Text className="text-accent font-bold text-sm">★ {movie.rating}</Text>
      </View>
    </View>
  );
}
