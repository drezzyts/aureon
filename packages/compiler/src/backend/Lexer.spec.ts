import { expect, test } from "vitest";
import Lexer from "./Lexer";

test('create lexer instance', () => {
  const lexer = new Lexer('');

  expect(lexer).toBeInstanceOf(Lexer)
})

test('create simple structure', () => {
  const lexer = new Lexer('structure Users { }');
  const tokens = lexer.lex();

  expect(tokens.length).greaterThan(0)
  expect(tokens).toBeInstanceOf(Array)
})

test('create structure with simple property', () => {
  const lexer = new Lexer('structure Users { id string }')
  const tokens = lexer.lex();

  expect(tokens.length).greaterThan(0)
  expect(tokens).toBeInstanceOf(Array)
})

test('invalid symbol error', () => {
  const lexer = new Lexer(']');
  expect(() => {
    return lexer.lex()
  }).toThrow();
})

test('invalid string literal error', () => {
  const lexer = new Lexer('"a');

  expect(() => {
    return lexer.lex()
  }).toThrow();
})