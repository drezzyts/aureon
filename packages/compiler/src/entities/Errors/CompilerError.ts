export default class CompilerError {
  message: string;
  line: number;
  column: number;

  constructor(message: string, line: number, column: number) {
    this.message = message;
    this.line = line;
    this.column = column;
  }
}
