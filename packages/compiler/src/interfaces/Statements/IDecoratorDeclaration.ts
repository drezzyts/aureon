import IBooleanLiteral from "../Expressions/IBooleanLiteral";
import INumericLiteral from "../Expressions/INumericLiteral";
import IStringLiteral from "../Expressions/IStringLiteral";
import IStatement from "../IStatement";

export default interface IDecoratorDeclaration extends IStatement {
  kind: 'DecoratorDeclaration',
  parameters: (IStringLiteral | INumericLiteral | IBooleanLiteral)[],
  name: string
}