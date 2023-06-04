import SymbolTable from "../entities/SymbolTable/SymbolTable";

export default class Lexer {
  private readonly SymbolTable: SymbolTable;
  
  constructor() {
    this.SymbolTable = new SymbolTable()
  }
}