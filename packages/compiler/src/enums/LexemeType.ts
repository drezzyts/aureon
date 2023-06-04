export enum LexemeType {
  Number,
  String, 

  Identifier,
  Structure, //structure keyword

  OpenBrace, //{
  CloseBrace, //}
  OpenParenthesis, //(
  CloseParenthesis, //)
  
  At, //@
  Comma, //,
  Colon, //:
  SemiColon, //;
  
  EOF // End Of File
}