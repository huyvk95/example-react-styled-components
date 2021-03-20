import styled from 'styled-components';
import {Button, TextInput, View} from '../ui-component';

const Wrap = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  display: flex;
  flex: 1;
  margin-right: 5px;
`;

const ButtonAdd = styled(Button)`
  width: 43px;
  font-weight: 800;
  font-size: 25px;
`;

const TodoInput = () => {
  return (
    <Wrap>
      <Input placeholder="Add your new todo" />
      <ButtonAdd>+</ButtonAdd>
    </Wrap>
  );
};

export default TodoInput;
