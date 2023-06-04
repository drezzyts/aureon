import IExpression from "../IExpression";

export default interface IStringLiteral extends IExpression {
  kind: 'StringLiteral',
  value: string
}