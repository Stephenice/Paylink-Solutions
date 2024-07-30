import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserDetailCard from './UserDetailCard';

describe('UserDetailCard', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    socialMediaHandle: '@johndoe',
    profileImgSrc: 'https://example.com/profile.jpg',
    bio: 'Software Engineer at OpenAI',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
  };

  it('should render user details correctly', () => {
    render(<UserDetailCard user={mockUser} />);

    // Check if name is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check if social media handle is rendered
    expect(screen.getByText('@johndoe')).toBeInTheDocument();

    // Check if bio is rendered
    expect(screen.getByText('Software Engineer at OpenAI')).toBeInTheDocument();

    // Check if location is rendered
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();

    // Check if website link is rendered
    expect(screen.getByText('https://johndoe.com')).toBeInTheDocument();

    // Check if profile image is rendered with correct alt text
    const profileImage = screen.getByAltText('John Doe') as HTMLImageElement;
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toBe('https://example.com/profile.jpg');
  });

  it('should have functioning buttons', () => {
    render(<UserDetailCard user={mockUser} />);

    // Check if View CV button is rendered
    expect(screen.getByText('View CV')).toBeInTheDocument();

    // Check if Message button is rendered
    expect(screen.getByText('Message')).toBeInTheDocument();
  });
});
