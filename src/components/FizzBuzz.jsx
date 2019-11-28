import React from 'react'
import '../styles/fizzbuzz.css'

const FizzBuzz = () => {
    return (
        <section id="fizzbuzz">
            <div className="fizzbuzz__top">
                <label className="fizzbuzz__label">Insira a quantidade: </label>
                <input type="text" className="fizzbuzz__input" />
            </div>
            <div className="fizzbuzz_bottom">
                <div className="numbers">{getFizzBuzzItems("30")}</div>
            </div>
        </section>
    )
}

const getFizzBuzzItems = maxValue => {
    let numbers = [];
    for (let number = 1; number < parseInt(maxValue) + 1; number++) {
        numbers.push(constructFizzBuzzRender(verificarValor(number)));
    }
    return numbers;
}

const verificarValor = number => {
    const isDivisbleByThree = number % 3 === 0;
    const isDivisibleByFive = number % 5 === 0;
    const isDivisibleByFifteen = isDivisbleByThree && isDivisibleByFive;

    switch (true) {
        case isDivisibleByFifteen: return 'FizzBuzz'
        case isDivisibleByFive: return 'Buzz'
        case isDivisbleByThree: return 'Fizz'
        default: return number
    }
}

const constructFizzBuzzRender = fizzBuzzValue => {
    switch (fizzBuzzValue) {
        case 'FizzBuzz': return <span  className="fizzbuzz">FizzBuzz</span>
        case 'Buzz': return <span className="buzz">Buzz</span>
        case 'Fizz': return <span className="fizz">Fizz</span>
        default: return <span className="number">{fizzBuzzValue}</span>
    }
}

export {FizzBuzz, verificarValor, getFizzBuzzItems, constructFizzBuzzRender};