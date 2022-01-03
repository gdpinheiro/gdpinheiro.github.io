import NotFound from '../pages/NotFound';
import LessonsLearned from '../projects/lessons-learned';
import PixelsArt from '../projects/pixels-art';
import ShoppingCart from '../projects/shopping-cart';
import TodoList from '../projects/todo-list';
import Trybewarts from '../projects/trybewarts';

function projectToRender(currentPage) {
  switch (currentPage) {
    case 'lessons-learned':
      return <LessonsLearned />;
    case 'pixels-art':
      return <PixelsArt />;
    case 'shopping-cart':
      return <ShoppingCart />;
    case 'todo-list':
      return <TodoList />;
    case 'trybewarts':
      return <Trybewarts />;
    default:
      return <NotFound />;
  }
}

export default projectToRender;
