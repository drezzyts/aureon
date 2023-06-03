interface ISymbol {
  readonly name: string,
  readonly type: string;
  readonly position: number;
  readonly line: number;
}

export default class Symbol implements ISymbol{
  readonly name: string;
  readonly type: string;
  readonly position: number;
  readonly line: number;

  public constructor(data: ISymbol){
    Object.assign(this, data);
  }
}
