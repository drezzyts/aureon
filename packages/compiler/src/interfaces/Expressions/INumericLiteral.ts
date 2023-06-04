import IExpression from "../IExpression";

export default interface INumericLiteral extends IExpression {
  kind: 'NumericLiteral',
  value: number
}