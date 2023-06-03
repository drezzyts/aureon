import CompilerError from "./CompilerError";

export default class DeclarationError extends CompilerError {
  identifier: string;

  constructor(message: string, line: number, position: number, identifier: string) {
    super(message, line, position);
    this.identifier = identifier;
  }
}
