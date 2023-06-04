import { LexemeType } from "../enums/LexemeType";

export default interface IToken {
  value: string,
  type: LexemeType,
  line: number,
  column: number
}