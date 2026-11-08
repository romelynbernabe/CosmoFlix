import MovieList from "../components/MovieList";

export default function RecommendedPage({ navigation }) {
  return <MovieList title="Recommended For You" category="Recommended" navigation={navigation} />;
}
