import SymbolTable from "../entities/SymbolTable/SymbolTable";

import IIdentifier from "../interfaces/Expressions/IIdentifier";
import IExpression from "../interfaces/IExpression";
import IStatement from "../interfaces/IStatement";

import Enviroment from "./Enviroment";

export default class Interpreter {
  
  public constructor(public symbols: SymbolTable, public env: Enviroment) {}

  public evaluate(node: (IStatement | IExpression)) {
    switch(node.kind) {
      case 'Identifier':
        return this.evaluateIdentifier(node as IIdentifier)
    }
  }

  private evaluateIdentifier(identifier: IIdentifier) {

  }
}