import React from 'react';
import { Input } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import { ControllerRenderProps } from "react-hook-form";
import styles from './index.module.less';

// input 的属性分为三部分，
// 1.项目定义的属性, type, onCustomBlur,onCustomChange
// 2.react-form-hook产生的属性
// 3.input原生支持的属性

interface IFormInputBaseProps {
  /**
   * @description 用户自定义失焦事件 
   */
  onCustomBlur?: (event:any, name: string) => void;
  /**
   * @description 用户自定义onchange事件 
   */
  onCustomChange?: (event:any) => void;
}
type IInputProps = Omit<InputProps, 'value' | 'ref' | 'name' | 'onBlur'>
interface IFormInputProps extends IFormInputBaseProps, Partial<ControllerRenderProps>, IInputProps {

}
const FormInput: React.FC<IFormInputProps> = (props) => {
  const {
    type,
    onCustomBlur,
    onCustomChange,
    onBlur,
    onChange,
    name,
    ...remainProps
  } = props;

  const changeProxy = (evt:any) => {
    if (onChange) {
      onChange(evt);
    }
    if (onCustomChange) {
      onCustomChange(evt)
    }
    evt.detail.value = '12233s'
    return '12323'
  }

  const blurProxy = (evt:any) => {
    if (onBlur) {
      onBlur();
    }
    if (onCustomBlur) {
      onCustomBlur(evt, name)
    }
  }
  return (
    <Input
      className={`${styles.normal} sc-from-input`}
      type={type || 'text'}
      onInput={changeProxy}
      onBlur={blurProxy}
      name={name}
      {...remainProps}
    />
  )
}
export default FormInput;