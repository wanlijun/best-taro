# Form
可以为FormItem统一设置组件样式，标签宽度等属性

```jsx
import React, { useState } from 'react';
import {
  Form,
  FormItem,
  FormInput,
  CaptchaBtn
} from '@/components/Form';

const Login = () => {
  return (
    <Form
      type='line'
      labelWidth='60px'
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
        />
      </FormItem>
    </Form>
  )
}
export default Login;
```