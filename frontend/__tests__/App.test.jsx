// eslint-disable-next-line no-unused-vars
import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {expect, it, jest, describe} from '@jest/globals';
import '@testing-library/jest-dom';
import App from '../src/App';

jest.mock('react-loading-indicators/OrbitProgress', () => 'mocked-orbit-progress');

describe('Header', () => {
    it('renders correctly', () => {
        render(<App />);

        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument();

        const home = screen.getByRole('link', {name: /Home/i});
        expect(home).toBeInTheDocument();

        const projects = screen.getByRole('link', {name: /Projects/i});
        expect(projects).toBeInTheDocument();

        const experience = screen.getByRole('link', {name: /Experience/i});
        expect(experience).toBeInTheDocument();

        const skills = screen.getByRole('link', {name: /Skills/i});
        expect(skills).toBeInTheDocument();

        const contact = screen.getByRole('link', {name: /Contact/i});
        expect(contact).toBeInTheDocument();
    })

    it('navigates to the correct links', async () => {
        const user = userEvent.setup()
        render(<App />)

        const home = screen.getByRole('link', {name: /Home/i});
        act(() => {
            user.click(home);
        });
        expect(await screen.findByText(/TIM COTTRELL/i)).toBeInTheDocument();

        const projects = screen.getByRole('link', {name: /Projects/i});
        act(() => {
            user.click(projects);
        });
        expect(await screen.findByText(/Web Development/i)).toBeInTheDocument();

        const experience = screen.getByRole('link', {name: /Experience/i});
        act(() => {
            user.click(experience);
        });
        expect(await screen.findByText(/experience/i)).toBeInTheDocument();

        // TODO: Uncomment when skills is implemented
        // const skills = screen.getByRole('link', {name: /Skills/i});
        // act(() => {
        //     user.click(skills);
        // });
        // expect(await screen.findByText(//i)).toBeInTheDocument();

        const contact = screen.getByRole('link', {name: /Contact/i});
        act(() => {
            user.click(contact);
        });
        expect(await screen.findByText(/Interested in my past work?/i)).toBeInTheDocument();
    })
});