import styled from 'styled-components';
import TodoFooter from '../component/TodoFooter';
import TodoInput from '../component/TodoInput';
import {TodoItemProps} from '../component/TodoItem';
import TodoList from '../component/TodoList';
import {Text, View} from '../ui-component';

let datas: TodoItemProps[] = [
  {todo: 'Buy a new gaming laptop'},
  {todo: 'Complete a previous task'},
  {todo: 'Create video for YouTube'},
  {todo: 'Create a new portfolio site'},
];

const TodoWrap = styled(View)`
  border-radius: 10px;
  width: 340px;
  background: white;
  padding: 30px 20px;
`;

const TodoTitle = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

function TodoView() {
  return (
    <TodoWrap>
      <TodoTitle>Todo App</TodoTitle>
      <TodoInput />
      <TodoList datas={datas} />
      <TodoFooter />
    </TodoWrap>
  );
}

export default TodoView;
