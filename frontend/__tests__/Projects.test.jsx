// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {expect, it, jest, describe} from '@jest/globals';
import '@testing-library/jest-dom';
import Projects from '../src/components/Projects';

jest.mock('react-loading-indicators/OrbitProgress', () => 'mocked-orbit-progress');

describe(Projects, () => {
    it('renders all projects', () => {
        render(<Projects />);
        const projs = screen.getAllByTitle(/project/i);
        expect(projs.length).toBe(9);
    })

    it('opens modal when clicked', async () => {
        render(<Projects/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        // const projs = screen.getAllByTitle(/project/i);

        // projs.forEach(async proj => {
        //     userEvent.click(proj);
        //     const modal = await screen.findByRole('dialog');
        //     expect(modal).toBeInTheDocument();
        //     userEvent.click(document.body);
        // })

        const proj = screen.getAllByTitle(/project/i)[0];
        userEvent.click(proj);
        const modal = await screen.findByRole('dialog');
        expect(modal).toBeInTheDocument();
    })

    it('closes modal when clicking oustide of modal', async () => {
        render(<Projects/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        const proj = screen.getAllByTitle(/project/i)[0];
        userEvent.click(proj);

        const modal = await screen.findByRole('dialog');
        expect(modal).toBeInTheDocument();

        const overlay = document.querySelector('.ReactModal__Overlay');
        expect(overlay).toBeInTheDocument();

        act(() => {
            userEvent.click(overlay);
        });
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    })
})