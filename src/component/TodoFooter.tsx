import styled from 'styled-components';
import {Button, Text, View} from '../ui-component';

const Wrap = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonClear = styled(Button)`
  height: 30px;
`;

const TodoFooter = () => {
  return (
    <Wrap>
      <Text>You have 4 pending tasks</Text>
      <ButtonClear>Clear All</ButtonClear>
    </Wrap>
  );
};

export default TodoFooter;
