import MovieList from "../components/MovieList";

export default function LatestPage({ navigation }) {
  return <MovieList title="Latest Releases" category="Latest" navigation={navigation} />;
}
