import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Упс... Сторінку не знайдено... </h1>
      <h2>Поверніться та спробуйте ще раз </h2>
      <ul>
        <li>
          <Link to={'/movies'}> Movies</Link>
        </li>
      </ul>
    </div>
  );
}
