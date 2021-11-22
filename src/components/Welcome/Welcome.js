import { Link } from 'react-router-dom';
import { Button } from 'antd';
import antdStyles from 'antd/dist/antd.css';
import styles from './Welcome.css';

export default function Welcome() {
  return (
    <main>
      <h1>Welcome to Users test project</h1>
      <Link to="/users">
        <Button>Start</Button>
      </Link>
    </main>
  );
}
