import { render, screen } from '@testing-library/react';
import App from './App';

test('renders admin view title', () => {
  render(<App />);
  const title = screen.getByText(/panel de administrador/i);
  expect(title).toBeInTheDocument();
});
