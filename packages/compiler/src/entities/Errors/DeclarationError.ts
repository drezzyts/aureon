import CompilerError from "./CompilerError";

export default class DeclarationError extends CompilerError {
  identifier: string;

  constructor(message: string, line: number, column: number, identifier: string) {
    super(message, line, column);
    this.identifier = identifier;
  }
}
