import CompilerError from "./CompilerError";

export default class InternalError extends CompilerError {

  constructor(message: string, line: number, column: number) {
    super(message, line, column);
  }
}
