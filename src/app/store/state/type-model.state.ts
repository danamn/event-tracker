import { TMField } from "../../model/type-model";

export type TypeModelState = {
  fields: TMField[];
};

export const initialTypeModelState: TypeModelState = {
  fields: []
};
