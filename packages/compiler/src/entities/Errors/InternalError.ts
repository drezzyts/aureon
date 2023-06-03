import CompilerError from "./CompilerError";

export default class InternalError extends CompilerError {

  constructor(message: string, line: number, position: number) {
    super(message, line, position);
  }
}
