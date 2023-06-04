import { expect, test } from 'vitest';
import Symbol from './Symbol';
import ISymbol from '../../interfaces/ISymbol';

test('create an symbol', () => {
  const props: ISymbol = {
    name: 'id',
    type: 'StructureProperty',
    line: 2,
    column: 10
  }
  const symbol = new Symbol(props)

  expect(symbol).toBeInstanceOf(Symbol);
  expect(symbol.name).toEqual('id');
})