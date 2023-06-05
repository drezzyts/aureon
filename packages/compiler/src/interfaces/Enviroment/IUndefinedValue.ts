import IDataValue from "./IDataValue";

export default interface IUndefinedValue extends IDataValue {
  type: 'undefined',
  value: undefined
}