import './App.scss';
import { TodoList } from './components/TodoList';
import React from 'react';
import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { Todo } from './types/Todo';

export const App = () => {
  const [titleInput, setTitleInput] = React.useState('');
  const [selectUser, setSelectUser] = React.useState('0');
  const [toDos, setToDos] = React.useState(todosFromServer);
  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();

    const newObj: Todo = {
      id: toDos.length + 1,
      title: titleInput,
      completed: false,
      userId: Number(selectUser),
    };

    setToDos([...toDos, newObj]);
    setTitleInput('');
    setSelectUser('0');
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <form onSubmit={sendForm}>
        <div className="field">
          <input
            type="text"
            data-cy="titleInput"
            value={titleInput}
            onChange={event => setTitleInput(event.target.value)}
          />
          {!titleInput ? (
            <span className="error">Please enter a title</span>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <select
            data-cy="userSelect"
            value={selectUser}
            onChange={event => setSelectUser(event.target.value)}
          >
            <option value="0" disabled>
              Choose a user
            </option>
            {usersFromServer.map(elem => {
              return <option value={elem.id} key={elem.id}>{elem.name}</option>;
            })}
          </select>
          {selectUser === '0' ? (
            <span className="error">Please choose a user</span>
          ) : (
            ''
          )}
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>

      <TodoList toDos={toDos} />
    </div>
  );
};
