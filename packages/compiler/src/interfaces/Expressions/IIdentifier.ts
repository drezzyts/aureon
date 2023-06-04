import IExpression from "../IExpression";

export default interface IIdentifier extends IExpression {
  kind: 'Identifier',
  name: string
}