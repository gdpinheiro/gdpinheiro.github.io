import NotFound from '../pages/NotFound';
import LessonsLearned from '../projects/lessons-learned';
import PixelsArt from '../projects/pixels-art';
import ShoppingCart from '../projects/shopping-cart';
import TodoList from '../projects/todo-list';
import Trybewarts from '../projects/trybewarts';
import FrontendOnlineStore from '../projects/frontend-online-store';
import MovieCardsLibrary from '../projects/movie-cards-library';
import StarWarsPlanetsSearch from '../projects/starwars-planets-search';
import Trivia from '../projects/trivia';
import Trybetunes from '../projects/trybetunes';
import Trybewallet from '../projects/trybewallet';
import Tryunfo from '../projects/tryunfo';

function projectToRender(currentPage) {
  switch (currentPage) {
    case 'frontend-online-store':
      return <FrontendOnlineStore />;
    case 'lessons-learned':
      return <LessonsLearned />;
    case 'movie-cards-library':
      return <MovieCardsLibrary />;
    case 'pixels-art':
      return <PixelsArt />;
    case 'shopping-cart':
      return <ShoppingCart />;
    case 'star-wars-planets-search':
      return <StarWarsPlanetsSearch />;
    case 'todo-list':
      return <TodoList />;
    case 'trivia':
      return <Trivia />;
    case 'trybetunes':
      return <Trybetunes />;
    case 'trybewallet':
      return <Trybewallet />;
    case 'trybewarts':
      return <Trybewarts />;
    case 'tryunfo':
      return <Tryunfo />;
    default:
      return <NotFound />;
  }
}

export default projectToRender;
