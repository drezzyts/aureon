import IExpression from "../IExpression";

export default interface IBooleanLiteral extends IExpression {
  kind: 'BooleanLiteral',
  value: boolean
}