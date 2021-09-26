import React from 'react';
import { View } from '@tarojs/components';


export interface IFormProps {
  /**
   *
   * @description 类型
   * @default     line
   */
  type?: 'line' | 'border';
  /**
   * @description 标签的宽度
   */
  labelWidth?: string;
  /**
   * @description 错误信息
   */
  error?: any;
   /**
   * @description 子节点
   */
  children?: any;
}
export type IFormContext = Omit<IFormProps, "children">

export const FormContext = React.createContext({
  type: 'line',
  labelWidth: 'auto',
  error: null,
} as IFormContext);

const Form: React.FC<IFormProps> = ({ type = 'line',labelWidth, error, children}) => {
  
  const formProps: IFormContext = {
    type,
    labelWidth,
    error,
  }
  return (
    <FormContext.Provider value={formProps}>
      <View>{children}</View>
    </FormContext.Provider>
  )
}
export default Form;