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
  const changeText = (evt: any) => {
    console.log(evt, '---')
    setValue('12345')
  }
  const [value, setValue] = useState('123');
  return (
    <Form
      type='border'
      labelWidth='60px'
      error={error}
    >
      <FormItem>
        <FormInput
          placeholder='请输入'
          value={value}
          onCustomChange={changeText}
        />
      </FormItem>
    </Form>
  )
};