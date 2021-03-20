import styled from 'styled-components';
import {Text} from '../ui-component';

export type TodoItemProps = {
  todo: string;
};

const Wrap = styled.li`
  padding: ${({theme}) => theme.paddingElement};
  background-color: rgb(242, 242, 242);
  border-radius: ${({theme}) => theme.borderRadius};
  margin-bottom: 7px;
`;

const TodoItem = ({data}: {data: TodoItemProps}) => {
  let {todo} = data;
  return (
    <Wrap>
      <Text>{todo}</Text>
    </Wrap>
  );
};

export default TodoItem;
