import ISymbol from "../../interfaces/ISymbol";

export default class Symbol implements ISymbol{
  readonly name: string;
  readonly type: string;
  readonly column: number;
  readonly line: number;

  public constructor(data: ISymbol){
    this.name = data.name;
    this.type = data.type;
    this.column = data.column;
    this.line = data.line;
  }
}
