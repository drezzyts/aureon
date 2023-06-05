import IDataValue from "./IDataValue";

export default interface IBooleanValue extends IDataValue {
  type: 'boolean',
  value: boolean
}