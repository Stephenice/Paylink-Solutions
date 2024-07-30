import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound Component', () => {
  it('should render 404 message and a link to the home page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Check for 404 message
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();

    // Check for the sorry message
    expect(screen.getByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();

    // Check for the link to home
    const linkElement = screen.getByRole('link', { name: /Go back to Home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
