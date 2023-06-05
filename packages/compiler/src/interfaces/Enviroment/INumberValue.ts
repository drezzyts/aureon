import IDataValue from "./IDataValue";

export default interface INumberValue extends IDataValue {
  type: 'number',
  value: number
}