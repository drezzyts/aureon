import { DELIMITERS } from "../constants/delimiters";

import CompilerError from "../entities/Errors/CompilerError";
import DeclarationError from "../entities/Errors/DeclarationError";
import InternalError from "../entities/Errors/InternalError";

import { LexemeType } from "../enums/LexemeType";

import IToken from "../interfaces/IToken";

export default class Lexer {
  private readonly tokens: IToken[];
  private char: string;
  private code: string[];
  private pos: number;
  private line: number;
  private column: number;

  constructor(code: string) {
    this.tokens = [];
    this.code = code.split('');
    this.pos = 0;
    this.line = 1;
    this.column = 0;
    this.char = code[this.pos];
  }

  public tokenize(type: LexemeType, value: string) {
    return {
      line: this.line,
      column: this.column,
      value,
      type
    } as IToken;
  }

  public next() {
    this.column++;
    this.pos++;
    this.char = this.code[this.pos]
  }

  private isString(input: string): boolean {
    return !/[^a-zA-Z]/g.test(input);
  }

  private isNumber(input: string): boolean {
    return !/[^0-9]/g.test(input);
  }

  private isSkippable(input: string): boolean {
    return input === " " || input === "\n" || input === "\t" || input === "\r"; 
  }

  private breakLine() {
    this.line++;
    this.column = 0;
  }

  public lex() {
    try {
      while(this.pos < this.code.length){
       
        if(Object.keys(DELIMITERS).includes(this.char)){
          const delimiter = this.char as keyof typeof DELIMITERS
          
          this.tokenize(DELIMITERS[delimiter], this.char)
          this.next();
       } else {

        if(this.char == '"'){
          let string = '';
          this.next();

          while(this.pos < this.code.length && this.char !== '"'){
            string += this.char
            this.next();
          }

          if(this.char !== '"') throw new SyntaxError('Expected symbol \'"\' to close string literals!')
          
          this.tokens.push(this.tokenize(LexemeType.String, string));
        } else if(this.isString(this.char)) {
          let identifier = '';
          
          while(this.pos < this.code.length && this.isString(this.char)){
            identifier += this.char;
            this.next();
          }

          if(identifier){
            if(identifier == 'structure') {
              this.tokens.push(this.tokenize(LexemeType.Structure, identifier))
            } else {
              this.tokens.push(this.tokenize(LexemeType.Identifier, identifier))
            }
          }
        } else if(this.isNumber(this.char)) {
          let number = '';

          while(this.pos < this.code.length && this.isNumber(this.char)){
            number += this.char;
            this.next();
          }

          this.tokens.push(this.tokenize(LexemeType.Number, number))
        } else if(this.isSkippable(this.char)) {
          while(this.pos < this.code.length && this.isSkippable(this.char)){
            if(this.char === '\n') this.breakLine();
            this.next();
          }
        } else {
          throw new SyntaxError(`Invalid symbol "${this.char}"!`)
        }
       }
      }
    } catch(error) {
      if(error instanceof DeclarationError){
        const message = `[Aureon]-[Lexer]-[DeclarationError]: ${error.message}\nLine ${this.line} | Column ${this.column}`
        console.error(message);
      }
      if(error instanceof InternalError){
        const message = `[Aureon]-[Lexer]-[InternalError]: ${error.message}\nLine: ${this.line} | Column: ${this.column}`
        console.error(message);
      }
      if(error instanceof CompilerError){
        const message = `[Aureon]-[Lexer]-[CompilerError]: ${error.message}\nLine: ${this.line} | Column: ${this.column}`
        console.error(message);
      }
      if(error instanceof SyntaxError){
        const message = `[Aureon]-[Lexer]-[SyntaxError]: ${error.message}\nLine: ${this.line} | Column: ${this.column}`
        console.error(message);
      }
    }

    return this.tokens;
  }
}