import { StructurePropertyType } from "../../types/StructurePropertyType";
import IExpression from "../IExpression";
import IDecoratorDeclaration from "../Statements/IDecoratorDeclaration";

export default interface IStructureProperty extends IExpression {
  kind: 'StructureProperty',
  type: StructurePropertyType,
  name: string,
  decorators: IDecoratorDeclaration[];
}