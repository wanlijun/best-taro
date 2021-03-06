import React, { useState } from 'react';
import {
  Form,
  FormItem,
  FormInput,
  CaptchaBtn
} from '@/components/Form';
import { View } from '@tarojs/components';
import styles from './index.module.less';

export default () => {
  const error = {
    msg: '发生错误啦'
  }
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
        />
      </FormItem>
      <FormItem
        label='密码'
      >
        <FormInput
          password
          placeholder='请输入'
          suffix={
            <CaptchaBtn requestCaptcha={() => Promise.resolve()} />
          }
        />
      </FormItem>
    </Form>
    </View>
    
  )
};