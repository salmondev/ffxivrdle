import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { GAME_TITLE } from './constants/strings'
import { VALID_GUESSES } from './constants/validGuesses'
import { WORDS } from './constants/wordlist'

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

test('renders App component', () => {
  render(<App />)
  const linkElement = screen.getByText(GAME_TITLE)
  expect(linkElement).toBeInTheDocument()
})

test('valid guesses should be in lowercase', () => {
  const allLower = VALID_GUESSES.every((word) => word === word.toLowerCase())
  expect(allLower).toBe(true)
})
test('valid guesses contains no duplicates', () => {
  const uniqueWords = [...new Set(VALID_GUESSES)]
  expect(uniqueWords.length).toBe(VALID_GUESSES.length)
})
test('valid guesses only contains words with 5 letters', () => {
  const badWords = VALID_GUESSES.filter((word) => word.length !== 5)
  console.log(badWords)
  expect(badWords).toEqual([])
})

test('word list should be in lowercase', () => {
  const allLower = WORDS.every((word) => word === word.toLowerCase())
  expect(allLower).toBe(true)
})
test('word list contains no duplicates', () => {
  const uniqueWords = [...new Set(WORDS)]
  expect(uniqueWords.length).toBe(WORDS.length)
})
test('word list  only contains words with 5 letters', () => {
  const badWords = WORDS.filter((word) => word.length !== 5)
  expect(badWords).toEqual([])
})

test('every word in wordlist should be a valid guess', () => {
  const missingWords = WORDS.filter((word) => !VALID_GUESSES.includes(word))
  expect(missingWords).toEqual([])
})
