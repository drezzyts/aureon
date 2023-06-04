export default interface ISymbol {
  readonly name: string,
  readonly type: string;
  readonly column: number;
  readonly line: number;
}