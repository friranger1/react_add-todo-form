import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import usersFromServer from '../../api/users';

type Props = { toDoInfo: Todo };

export const UserInfo = (props: Props) => {
  const user: User | undefined = usersFromServer.find(
    u => u.id === props.toDoInfo.userId,
  );

  return (
    <a className="UserInfo" href={'mailto:' + (!user ? '' : user.email)}>
      {user?.name}
    </a>
  );
};
