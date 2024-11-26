// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import '@testing-library/jest-dom';
import Home from '../src/components/home';

jest.mock('../assets/profilePic.jpg', () => 'mocked-profile-pic.jpg');


test('renders the app', () => {
    render(<Home />);
    const name = screen.getByText("TIM COTTRELL");
    expect(name).toBeInTheDocument();
});
