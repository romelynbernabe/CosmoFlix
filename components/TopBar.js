import { View, Text } from "react-native";

export default function TopBar() {
  return (
    <View
      className="flex-row items-center justify-center bg-space-800 py-3 border-b border-space-700"
      style={{ elevation: 4 }}
    >
      <Text className="text-2xl mr-2">🚀</Text>
      <Text className="text-xl font-extrabold tracking-widest text-accent">
        COSMOFLIX
      </Text>
    </View>
  );
}
