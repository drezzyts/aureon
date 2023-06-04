import { LexemeType } from "../enums/LexemeType";

export const DELIMITERS = {
  "{": LexemeType.OpenBrace,
  "}": LexemeType.CloseBrace,
  "(": LexemeType.OpenParenthesis,
  ")": LexemeType.CloseParenthesis,
  ";": LexemeType.SemiColon,
  ":": LexemeType.Colon,
  ",": LexemeType.Comma,
  "@": LexemeType.At
}