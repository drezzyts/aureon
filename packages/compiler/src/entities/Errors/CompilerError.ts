export default class CompilerError {
  message: string;
  line: number;
  position: number;

  constructor(message: string, line: number, position: number) {
    this.message = message;
    this.line = line;
    this.position = position;
  }
}
