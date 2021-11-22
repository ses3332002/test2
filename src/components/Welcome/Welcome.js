import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Welcome.css';

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
