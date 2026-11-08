import { View, Text, Pressable } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View className="flex-1 bg-space-900 items-center justify-center px-8">
      <Text className="text-6xl mb-4">🌌</Text>
      <Text className="text-white text-3xl font-extrabold text-center">
        Welcome to CosmoFlix
      </Text>
      <Text className="text-mist text-base text-center mt-3 mb-8">
        Your launchpad for the best space and sci-fi movies. Ready for takeoff?
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Movies")}
        className="bg-accent rounded-full px-8 py-4 active:opacity-80"
      >
        <Text className="text-space-900 text-lg font-extrabold">
          Browse Movies →
        </Text>
      </Pressable>
    </View>
  );
}
