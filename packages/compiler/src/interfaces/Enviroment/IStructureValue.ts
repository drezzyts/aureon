import IDataValue from "./IDataValue";
import IStructurePropertyValue from "./IStructurePropertyValue";

export default interface IStructureValue extends IDataValue {
  type: 'structure',
  name: string,
  properties: Map<string, IStructurePropertyValue>
}