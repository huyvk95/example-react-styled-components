import {View} from '../ui-component';
import styled from 'styled-components';
import TodoItem, {TodoItemProps} from './TodoItem';

const Wrap = styled(View)`
  margin-bottom: 23px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const TodoList = ({datas}: {datas: TodoItemProps[]}) => {
  return (
    <Wrap>
      <List>
        {datas.map((o, i) => (
          <TodoItem data={o} key={i} />
        ))}
      </List>
    </Wrap>
  );
};

export default TodoList;
