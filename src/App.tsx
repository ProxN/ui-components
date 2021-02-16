import styled from 'styled-components';
import Button from './components/Button';
import { GlobalStyles } from './styles';
import { ReactComponent as DownloadIcon } from './assets/download.svg';

const Main = styled.main`
  padding: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & > div {
    margin-bottom: 3rem;
    display: flex;
  }
  button {
    margin-right: 1rem;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Main>
        <div>
          <Button>Default</Button>
          <Button color='primary'>Primary</Button>
          <Button color='secondary'>Secondary</Button>
          <Button color='danger'>Danger</Button>
          <Button color='warning'>Warning</Button>
          <Button color='success'>Success</Button>
        </div>
        <div>
          <Button outline>Default</Button>
          <Button color='primary' outline>
            Primary
          </Button>
          <Button color='secondary' outline>
            Secondary
          </Button>
          <Button color='danger' outline>
            Danger
          </Button>
          <Button color='warning' outline>
            Warning
          </Button>
          <Button color='success' outline>
            Success
          </Button>
        </div>
        <div>
          <Button link>Default</Button>
          <Button color='primary' link>
            Primary
          </Button>
          <Button color='secondary' link>
            Secondary
          </Button>
          <Button color='danger' link>
            Danger
          </Button>
          <Button color='warning' link>
            Warning
          </Button>
          <Button color='success' link>
            Success
          </Button>
        </div>
        <div>
          <Button shape='round'>Default</Button>
          <Button color='primary' shape='round'>
            Primary
          </Button>
          <Button color='secondary' shape='round'>
            Secondary
          </Button>
          <Button color='danger' shape='round'>
            Danger
          </Button>
          <Button color='warning' shape='round'>
            Warning
          </Button>
          <Button color='success' shape='round'>
            Success
          </Button>
        </div>
        <div style={{ width: '30rem' }}>
          <Button color='primary' block>
            Primary Block
          </Button>
        </div>
        <div style={{ width: '30rem' }}>
          <Button color='primary' block loading>
            Primary Block
          </Button>
        </div>
        <div>
          <Button color='primary' icon={<DownloadIcon />}>
            Download
          </Button>
          <Button color='primary' icon={<DownloadIcon />} />
          <Button color='primary' shape='circle' icon={<DownloadIcon />} />
          <Button color='primary' shape='round' icon={<DownloadIcon />} />
        </div>
        <div>
          <Button disabled>Default</Button>
          <Button disabled outline color='primary'>
            Primary
          </Button>
          <Button disabled color='secondary'>
            Secondary
          </Button>
          <Button disabled color='danger'>
            Danger
          </Button>
          <Button disabled color='warning'>
            Warning
          </Button>
          <Button disabled color='success'>
            Success
          </Button>
        </div>
      </Main>
    </div>
  );
}

export default App;
