import styled, {ThemeProvider} from 'styled-components';
import TodoView from './view/TodoView';

let theme = {
  colorPrimary: 'rgb(132,81,225)',
  colorSecondary: 'rgb(215,88,71)',
  colorText: 'black',
  colorTextButton: 'white',
  fontSize: '14px',
  fontSizeTitle: '25px',
  fontFamily: 'Arial',
  paddingElement: '10px',
  borderRadius: '3px',
  heightElement: '40px',
};

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(223, 122, 152, 1) 0%,
    rgba(113, 72, 156, 1) 100%
  );
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <TodoView />
      </Background>
    </ThemeProvider>
  );
}

export default App;
