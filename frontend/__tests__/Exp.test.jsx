// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {expect, it, describe} from '@jest/globals';
import '@testing-library/jest-dom';
import Exp from '../src/components/Exp';

describe(Exp, () => {
    it('renders all experiences', () => {
        render(<Exp />);
        const exps = screen.getAllByTitle(/experience/i);
        expect(exps.length).toBe(6);
    })

    it('opens modal when clicked', async () => {
        render(<Exp/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        // const exps = screen.getAllByTitle(/experience/i);

        // exps.forEach(async exp => {
        //     userEvent.click(exp);
        //     const modal = await screen.findByRole('dialog');
        //     expect(modal).toBeInTheDocument();
        //     userEvent.click(document.body);
        // })

        const exp = screen.getAllByTitle(/experience/i)[0];
        userEvent.click(exp);
        const modal = await screen.findByRole('dialog');
        expect(modal).toBeInTheDocument();
    })

    it('closes modal when clicking oustide of modal', async () => {
        render(<Exp/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        const exp = screen.getAllByTitle(/experience/i)[0];
        userEvent.click(exp);

        const modal = await screen.findByRole('dialog');
        expect(modal).toBeInTheDocument();

        const overlay = document.querySelector('.ReactModal__Overlay');
        expect(overlay).toBeInTheDocument();

        act(() => {
            userEvent.click(overlay);
        })
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    })


})