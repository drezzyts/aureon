import IStructureProperty from "../Expressions/IStructureProperty";
import IStatement from "../IStatement";

export default interface IStructureDeclaration extends IStatement {
  kind: "StructureDeclaration",
  name: string,
  properties: IStructureProperty[]
}