import MovieList from "../components/MovieList";

export default function PopularPage({ navigation }) {
  return <MovieList title="Popular Now" category="Popular" navigation={navigation} />;
}
