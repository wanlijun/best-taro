import { View } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.less';

export interface IFormItemProps {
  /**
   *
   * @description 类型
   * @default     line
   */
  formItemType?: 'line' | 'border';
  /**
   * @description 标签 
   */
  label?: any;
  /**
   * @description 标签样式
   */
  labelCss?: string;
  /**
   * @description 子节点
   */
  children?: any;
   /**
   * @description 是否必填，注意设置true只会在label上加上*,不会自动加上校验
   */
  required?: boolean;
}
const FormItem: React.FC<IFormItemProps> = ({ formItemType = 'line', label, labelCss, children, required}) => {
  const labelCssMerge = classnames([styles.label, labelCss,  { [styles.required] : required }])
  return (
    <View>
      <View className={formItemType === 'border' ? styles.borderFormItem : styles.lineFormItem}>
        <View
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