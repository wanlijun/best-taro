import React from 'react';
import { Input, View } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import { BaseEventOrig } from '@tarojs/components/types/common';
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
  onCustomBlur?: (event:BaseEventOrig<InputProps.inputValueEventDetail>, name: string) => void;
  /**
   * @description 用户自定义onchange事件 
   */
  onCustomChange?: (event:BaseEventOrig<InputProps.inputEventDetail>) => void;
  suffix?: React.ReactNode
}
type IInputProps = Omit<InputProps, 'value' | 'ref' | 'name' | 'onBlur'>
export interface IFormInputProps extends IFormInputBaseProps, Partial<ControllerRenderProps>, IInputProps {

}
const FormInput: React.FC<IFormInputProps> = (props) => {
  const {
    type,
    onCustomBlur,
    onCustomChange,
    onBlur,
    onChange,
    name,
    suffix,
    ...remainProps
  } = props;

  const changeProxy = (evt: BaseEventOrig<InputProps.inputEventDetail>) => {
    if (onChange) {
      onChange(evt);
    }
    if (onCustomChange) {
      onCustomChange(evt)
    }
  }

  const blurProxy = (evt: BaseEventOrig<InputProps.inputValueEventDetail>) => {
    if (onBlur) {
      onBlur();
    }
    if (onCustomBlur) {
      onCustomBlur(evt, name)
    }
  }
  return (
    <View className={styles.inputBox}>
       <Input
         className={`${styles.baseInput} sc-form-input`}
         type={type || 'text'}
         onInput={changeProxy}
         onBlur={blurProxy}
         name={name}
         {...remainProps}
       />
       {
        suffix &&  <View className={styles.suffix}>{suffix}</View>
       }
      
    </View>
   
  )
}
export default FormInput;