import React from 'react';
import { screen, render } from '@testing-library/react';
import { mockFetch } from 'utils';
import UserDetails from '.';

const MOCK_USER_DATA = {
  avatar_url: 'http://fake-avatar-mock-url.com',
  name: 'username',
  bio: 'Lorem ipsum',
};

describe('UserDetails', () => {
  describe('User info', () => {
    test('show user data when user fetched', async () => {
      jest
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() => mockFetch(MOCK_USER_DATA));

      render(<UserDetails name="test" />);

      expect(await screen.findByText(/username/i)).toBeInTheDocument();
      expect(await screen.findByText(/Lorem ipsum/i)).toBeInTheDocument();
    });

    test('show error message when user fetch fails', async () => {
      jest
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() => Promise.reject(new Error('test-error')));

      render(<UserDetails name="test" />);

      expect(await screen.findByText(/test-error/i)).toBeInTheDocument();
    });

    test('show loading during user fetching', async () => {
      jest
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() => mockFetch(MOCK_USER_DATA));

      render(<UserDetails name="test" />);

      expect(await screen.findByTestId(/loader/i)).toBeInTheDocument();
    });
  });
});
