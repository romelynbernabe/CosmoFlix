import { View, Text } from "react-native";

// TODO: replace these with your own details
const PROFILE = {
  name: "ROmelyn D. Bernabe",
  course: "Bachelor of Science in Information Technology",
  yearSection: "3 - 7",
  studentNumber: "2023-00000",
  school: "Cavite State University - Main Campus",
  favoriteGenre: "Sci-Fi",
};

const ROWS = [
  { label: "Course", value: PROFILE.course },
  { label: "Year & Section", value: PROFILE.yearSection },
  { label: "Student No.", value: PROFILE.studentNumber },
  { label: "School", value: PROFILE.school },
  { label: "Favorite Genre", value: PROFILE.favoriteGenre },
];

export default function ProfilePage() {
  return (
    <View className="flex-1 bg-space-900 items-center px-6 pt-8">
      <View className="w-28 h-28 rounded-full bg-space-700 border-4 border-accent items-center justify-center">
        <Text className="text-5xl">🧑‍🚀</Text>
      </View>

      <Text className="text-white text-2xl font-extrabold mt-4">
        {PROFILE.name}
      </Text>
      <Text className="text-mist text-sm mb-6">CosmoFlix Member</Text>

      <View className="w-full bg-space-800 border border-space-700 rounded-2xl p-4">
        {ROWS.map((row) => (
          <View key={row.label} className="mb-3">
            <Text className="text-mist text-xs uppercase tracking-wider">
              {row.label}
            </Text>
            <Text className="text-white text-base font-semibold">
              {row.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
