import IDecoratorDeclaration from "../Statements/IDecoratorDeclaration";
import IDataValue from "./IDataValue";

export default interface IStructurePropertyValue extends IDataValue {
  type: 'structure-property',
  name: string,
  structurePropertyType: IDataValue,
  decorators: IDecoratorDeclaration[] 
}