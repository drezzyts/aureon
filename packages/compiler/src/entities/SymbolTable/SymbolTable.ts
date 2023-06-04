//Errors
import DeclarationError from '../Errors/DeclarationError';
import InternalError from '../Errors/InternalError';

//Utils
import Symbol from './Symbol';

export default class SymbolTable {
  public readonly blocks: Map<string, Symbol[]>;
  public currentBlock: string | undefined;

  public constructor() {
    this.blocks = new Map();
    this.currentBlock = undefined;
  }

  public createBlock(id: string, line: number, position: number) {
    if(this.blocks.has(id)) {
      const err = `There was an attempt to create a block that already exists!`;
      throw new DeclarationError(err, line, position, id);
    }
    this.blocks.set(id, []);
  }

  public enterBlock(id: string) {
    if(!this.blocks.has(id)) {
      const err = `There was an attempt to enter into an invalid block!`;
      throw new InternalError(err, NaN, NaN);
    }

    this.currentBlock = id;
    return true;
  }

  public exitBlock() {
    this.currentBlock = undefined;
    return true;
  }

  public insert(inputSymbol: Symbol) {
    if(!this.currentBlock || !this.blocks.has(this.currentBlock)) {
      const err = `There was an attempt to insert a symbol into an invalid block!`;
      throw new InternalError(err, NaN, NaN);
    }

    const block = this.blocks.get(this.currentBlock) as Symbol[];
    
    const fetchSymbol = block.find(symbolData => symbolData.name == inputSymbol.name);
    if(fetchSymbol) {
      const err = `There was an attempt to insert a symbol that already exists!`;
      throw new DeclarationError(err, inputSymbol.line, inputSymbol.column, inputSymbol.name);
    }

    block.push(inputSymbol)
    this.blocks.set(this.currentBlock, block);
  }

  public lookup(name: string, blockId?: string) {
    blockId ??= this.currentBlock;
    if(!blockId || !this.blocks.has(blockId)) {
      const err = `There was an attempt to lookup a symbol into an invalid block!`;
      throw new InternalError(err, NaN, NaN);
    }
    
    const block = this.blocks.get(blockId) as Symbol[];
    return block.find(symbolData => symbolData.name == name);
  }

  public remove(name: string, blockId?: string) {
    blockId ??= this.currentBlock;
    if(!blockId || !this.blocks.has(blockId)) {
      const err = `There was an attempt to remove a symbol into an invalid block!`;
      throw new InternalError(err, NaN, NaN);
    }

    const symbol = this.lookup(name, blockId);
    if(!symbol) {
      const err = `There was an attempt to remove a invalid symbol!`;
      throw new InternalError(err, NaN, NaN);
    }

    const block = this.blocks.get(blockId) as Symbol[];
    block.splice(block.indexOf(symbol), 1)
  }
}