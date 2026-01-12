import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  toDos: Todo[];
};

export const TodoList = (props: Props) => {
  return (
    <section className="TodoList">
      {props.toDos.map(elem => {
        return <TodoInfo key={elem.id} toDoInfo={elem} />;
      })}
    </section>
  );
};
