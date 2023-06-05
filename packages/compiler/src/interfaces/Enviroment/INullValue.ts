import IDataValue from "./IDataValue";

export default interface INullValue extends IDataValue {
  type: 'null',
  value: null
}