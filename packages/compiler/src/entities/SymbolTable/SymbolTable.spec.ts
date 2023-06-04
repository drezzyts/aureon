import { expect, test } from "vitest";
import SymbolTable from "./SymbolTable";
import Symbol from "./Symbol";

// -----------------CREATE-------------------
test('create an symbol table', () => {
  const table = new SymbolTable();

  expect(table).toBeInstanceOf(SymbolTable);
})

test('create an symbol table block', () => {
  const table = new SymbolTable();
  table.createBlock('test', 0, 0);

  expect(table.blocks.size).toEqual(1);
})

test('cannot create an existent block in symbol table', () => {
  const table = new SymbolTable();
  table.createBlock('test', 0, 0);

  expect(() => {
    return table.createBlock('test', 1, 1);
  }).toThrow();
})
// -----------------INSERT-------------------
test('insert an symbol in symbol table block', () => {
  const table = new SymbolTable();
  const symbol = new Symbol({ 
    name: 'symbol-test',
    type: 'any', 
    line: 0, 
    position: 0 
  });

  table.createBlock('test', 0, 0);
  table.enterBlock('test');
  
  expect(table.insert(symbol)).toBeUndefined();
})

test('cannot insert an existent symbol in symbol table', () => {
  const table = new SymbolTable();
  const symbol = new Symbol({ 
    name: 'symbol-test',
    type: 'any', 
    line: 0, 
    position: 0 
  });
  table.createBlock('test', 0, 0);
  table.enterBlock('test');
  table.insert(symbol);

  expect(() => {
    return table.insert(symbol)
  }).toThrow();
})

test('cannot insert a symbol into an invalid symbol table block', () => {
  const table = new SymbolTable();
  const symbol = new Symbol({ 
    name: 'symbol-test',
    type: 'any', 
    line: 0, 
    position: 0 
  });

  expect(() => { 
    return table.insert(symbol) 
  }).toThrow();
})

// -----------------LOOKUP-------------------
test('lookup an symbol in symbol table block', () => {
  const table = new SymbolTable();
  const symbol = new Symbol({ 
    name: 'symbol-test',
    type: 'any', 
    line: 0, 
    position: 0 
  });

  table.createBlock('test', 0, 0);
  table.enterBlock('test');
  table.insert(symbol)

  expect(table.lookup('symbol-test')).toEqual(symbol);
})

test('cannot lookup a symbol into an invalid symbol table block', () => {
  const table = new SymbolTable();

  expect(() => { 
    return table.lookup('symbol-test') 
  }).toThrow();
})

// -----------------REMOVE-------------------
test('remove an symbol in symbol table block', () => {
  const table = new SymbolTable();
  const symbol = new Symbol({ 
    name: 'symbol-test',
    type: 'any', 
    line: 0, 
    position: 0 
  });

  table.createBlock('test', 0, 0);
  table.enterBlock('test');
  table.insert(symbol)

  expect(table.remove('symbol-test')).toBeUndefined();
  expect(table.lookup('symbol-test')).toBeUndefined();
})

test('cannot remove a symbol into an invalid symbol table block', () => {
  const table = new SymbolTable();
  
  expect(() => { 
    return table.remove('symbol-test') 
  }).toThrow();
})

test('cannot remove an inexistent symbol in symbol table', () => {
  const table = new SymbolTable();
  
  table.createBlock('test', 0, 0);
  table.enterBlock('test');

  expect(() => {
    return table.remove('symbol-test')
  }).toThrow();
})

// -----------------ENTER-------------------
test('enter inside a symbol table block', () => {
  const table = new SymbolTable();

  table.createBlock('test', 0, 0);
  table.enterBlock('test');

  expect(table.currentBlock).toEqual('test');
})

test('cannot enter into an invalid symbol table block', () => {
  const table = new SymbolTable();

  expect(() => {
    return table.enterBlock('test');
  }).toThrow();
})

// -----------------EXIT-------------------
test('exit inside a symbol table block', () => {
  const table = new SymbolTable();

  table.createBlock('test', 0, 0);
  table.enterBlock('test');
  table.exitBlock();

  expect(table.currentBlock).toBeUndefined();
})








