// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import {expect, it, jest, describe} from '@jest/globals';
import '@testing-library/jest-dom';
import Home from '../src/components/Home';

jest.mock('../assets/profilePic.jpg', () => 'mocked-profile-pic.jpg');

describe(Home, () => {
    it('renders the app', () => {
        render(<Home />);
        const name = screen.getByText("TIM COTTRELL");
        expect(name).toBeInTheDocument();
    });
})
