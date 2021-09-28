import React, { useState } from 'react';
import {
  Form,
  FormItem,
  FormInput
} from '@/components/Form';
import { View } from '@tarojs/components';
import styles from './index.module.less';

export default () => {
  const error = {
    msg: '发生错误啦'
  }
  const [value, setValue] = useState('123');
  return (
    <View className={styles.box}>
      <Form
        type='line'
        labelWidth='60px'
        error={error}
      >
      <FormItem
        label='用户名'
      >
        <FormInput
          placeholder='请输入'
          value={value}
          onCustomChange={(evt) => {
            console.log(evt, '====>')
            console.log(evt.detail.value, '---')
            setValue('12345')
          }}
        />
      </FormItem>
      <FormItem
        label='密码'
      >
        <FormInput
          password
          placeholder='请输入'
          suffix='获取验证码'
        />
      </FormItem>
    </Form>
    </View>
    
  )
};