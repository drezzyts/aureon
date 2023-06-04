import IExpression from "../IExpression";
import IStatement from "../IStatement";

export default interface IProgram extends IStatement {
  kind: 'Program',
  body: (IStatement | IExpression)[]
} 