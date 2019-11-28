import React from 'react';
import { verificarValor, constructFizzBuzzRender, getFizzBuzzItems } from '../components/FizzBuzz.jsx';

test('o numero 3 deve ser Fizz', () => {
    expect(verificarValor(3)).toBe('Fizz');
});

test('o numero 5 deve ser Buzz', () => {
    expect(verificarValor(5)).toBe('Buzz');
});

test('o numero 15 deve ser FizzBuzz', () => {
    expect(verificarValor(15)).toBe('FizzBuzz');
});

test('Buzz deve retornar com a classe buzz', () => {
    expect(constructFizzBuzzRender('Buzz')).toStrictEqual(<span className="buzz">Buzz</span>)
})

test('deve retornar os spans 1 2 Buzz', () => {
    expect(getFizzBuzzItems("3")).matchesElement([<span className="number">1</span>, <span className="number">2</span>, <span className="fizz">Fizz</span>])
})