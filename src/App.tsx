import styled from 'styled-components';
import ButtonComponents from './ButtonComponents';
import Input from './components/Input';
import { ReactComponent as DownloadIcon } from './assets/download.svg';

import { GlobalStyles } from './styles';

const Main = styled.main`
  padding: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & > div > div {
    margin-bottom: 3rem;
    display: flex;
  }
  & > div {
    width: 40rem;
  }
  button {
    margin-right: 1rem;
  }
  /* & input {
    margin-bottom: 1rem;
  } */
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Main>
        <div>
          <Input placeholder='Small size' inputSize='small' />
          <Input placeholder='Default size' />
          <Input placeholder='Large size' inputSize='large' />
          <Input placeholder='Left Icon' iconLeft={<DownloadIcon />} />
          <Input placeholder='Left Icon' rightIcon={<DownloadIcon />} />
        </div>
        {/* <ButtonComponents /> */}
      </Main>
    </div>
  );
}

export default App;
