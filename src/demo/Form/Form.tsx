import React, { useState } from 'react';
import {
  Form,
  FormItem,
  FormInput
} from '@/components/Form';

export default () => {
  const error = {
    msg: '发生错误啦'
  }
  const [value, setValue] = useState('123');
  return (
    <Form
      type='border'
      labelWidth='80px'
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
    </Form>
  )
};