import React from 'react';
import Form from '@/components/Form/Form';
import FormItem from '@/components/Form/FormItem';

export default () => {
  const error = {
    msg: '发生错误啦'
  }
  return (
    <Form
      type='border'
      labelWidth='60px'
      error={error}
    >
      <FormItem>test content</FormItem>
    </Form>
  )
};