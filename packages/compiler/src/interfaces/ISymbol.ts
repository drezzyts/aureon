export default interface ISymbol {
  readonly name: string,
  readonly type: string;
  readonly position: number;
  readonly line: number;
}