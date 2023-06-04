import ISymbol from "../../interfaces/ISymbol";

export default class Symbol implements ISymbol{
  readonly name: string;
  readonly type: string;
  readonly position: number;
  readonly line: number;

  public constructor(data: ISymbol){
    this.name = data.name;
    this.type = data.type;
    this.position = data.position;
    this.line = data.line;
  }
}
