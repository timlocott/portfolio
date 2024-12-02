import React, { act } from 'react';
import { findByTestId, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {expect, it, jest, describe} from '@jest/globals';
import '@testing-library/jest-dom';
import Exp from '../src/components/Exp';

describe(Exp, () => {
    it('renders all experiences', () => {
        render(<Exp />);
        const exps = screen.getAllByTitle(/experience/i);
        expect(exps.length).toBe(6);
    })

    it('opens modal when clicked', async () => {
        const handleClick = jest.fn();
        render(<Exp handleClick={handleClick}/>);

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


})