import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/app/components/Hero';

describe('Hero component', () => {
    it('displays the complete text', () => {
        render(<Hero />);

        const header1Elements = screen.getAllByRole('heading');
        const specificText = /Aqui, você está prestes a embarcar em uma jornada intergaláctica através dos meus projetos, onde cada site é uma estrela brilhante no vasto céu do desenvolvimento de front-end/;

        header1Elements.forEach(element => {
            if (element.textContent) {
                expect(screen.getByText(element.textContent)).toBeInTheDocument();
            }
        });

        expect(screen.getByText(specificText)).toBeInTheDocument();
    });
});