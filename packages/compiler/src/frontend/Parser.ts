import CompilerError from "../entities/Errors/CompilerError";
import SymbolTable from "../entities/SymbolTable/SymbolTable";

import { LexemeType } from "../enums/LexemeType";
import IStatement from "../interfaces/IStatement";

import IToken from "../interfaces/IToken";
import IProgram from "../interfaces/Statements/IProgram";

import Lexer from "./Lexer";

export default class Parser {
  public symbols: SymbolTable;
  public lexer: Lexer;
 
  constructor(public tokens: IToken[], public code: string) {
    this.symbols = new SymbolTable();
    this.lexer = new Lexer(code);
  }

  public isEOF(): boolean {
    return this.tokens[0].type == LexemeType.EOF;
  }

  public swap(): IToken {
    return this.tokens.shift() as IToken 
  }

  public at(): IToken {
    return this.tokens[0]
  }

  public expect(type: LexemeType) {
    const token = this.swap();
    if(!token || token.type !== type) {
      throw new CompilerError(`Expected ${type}, but received ${token.type}!`, token.line, token.column)
    }

    return token;
  }

  public parse() {
    const program: IProgram = {
      kind: 'Program',
      body: []
    }

    while(!this.isEOF()){
      program.body.push({} as IStatement)
    }

    return program;
  }
}