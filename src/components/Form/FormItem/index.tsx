import { View } from '@tarojs/components';
import classnames from 'classnames';
import { FormContext } from '@/components/Form/Form';
import styles from './index.module.less';
import { useContext } from 'react';

export interface IFormItemProps {
  /**
   *
   * @description 类型
   * @default     line
   */
  type?: 'line' | 'border';
  /**
   * @description 标签 
   */
  label?: React.ReactNode;
  /**
   * @description 标签宽度
   */
  labelWidth?: string;
  /**
   * @description 标签样式
   */
  labelCss?: string;
  /**
   * @description 子节点
   */
  children: React.ReactNode;
   /**
   * @description 是否必填，注意设置true只会在label上加上*,不会自动加上校验
   */
  required?: boolean;
}
const FormItem: React.FC<IFormItemProps> = ({ type, label,　labelWidth, labelCss, children, required}) => {
  const labelCssMerge = classnames([styles.label, labelCss,  { [styles.required] : required }])
  const formContext = useContext(FormContext);
  
  const itemType = type ||  formContext.type || 'line';
  const itemCss = classnames([itemType === 'border' ? styles.border : styles.line])
  
  const itemLabelWidth = labelWidth || formContext.labelWidth || 'auto';
  return (
    <View>
      <View
        className={itemCss}
      >
        <View
          style={{ width: itemLabelWidth }}
          className={labelCssMerge}
        >
          {label}
        </View>
      <View className={styles.children}>
        {children}
      </View>
    </View>
    </View>

  )
}
export default FormItem;