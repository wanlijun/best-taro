import React, { useState, useEffect } from 'react';
import {Text} from "@tarojs/components";
import {
  createTimer
} from '@/utils/createTimer';
import styles from './index.module.less';

export interface CaptchaBtnProps {
  /**
   *
   * @description 秒数
   * @default     60
   */
  second?: number,
   /**
   * @description 获取验证码的请求 
   */
  requestCaptcha: () => Promise<any>,
}
const CaptchaBtn: React.FC<CaptchaBtnProps> = ({ second = 30, requestCaptcha}) => {
  const  [sec, setSec] = useState(second);
  const startTimerRef = React.useRef<{
    timerStart: (duration?: number) => void
  }>();

  useEffect(() => {
    const updateSec = () => {
      setSec((value) => {
        return value - 1
      })
    }
    const expireCb = () => {
      setSec(second)
    }
    const clearCb = () => {
      setSec(second)
    }
    const {
      clearTimer,
      timerStart
    } = createTimer(second, updateSec, expireCb, clearCb);
    startTimerRef.current = { timerStart };
    return () => {
      clearTimer();
    };
  }, [second])

  const clickHandle = () => {
    const timerStart = startTimerRef?.current?.timerStart;
    timerStart?.();
  }
  if(sec < second) {
    return (
      <Text>
        {sec}s重新发送
      </Text>
    )
  }
  return (
    <Text className={styles.normal} onClick={clickHandle}>
      获取验证码
    </Text>
  )
}
export default CaptchaBtn;