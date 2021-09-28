/**
 * 倒计时
 * @param cb 每秒执行的回调
 * @param expireCb 到期执行的回调
 * @param clearCb　清除定时器执行的回调
 * @param seconds　指定倒计时，单位s
 * @return 清除定时器的函数
 */
export function createTimer(
  seconds: number,
  cb: () => void,
  expireCb?: () => void,
  clearCb?: () => void,
) {
  let timer: number | undefined;
  function timerStart (duration?: number) {
    let durationValue = duration || seconds;
    if (!duration) {
      if (cb) {
        cb();
      }
      durationValue--;
      timerStart(durationValue);
    } else {
      timer = setTimeout(() => {
        if (cb) {
          cb();
        }
        durationValue--;
        if (durationValue < 1) {
          clearTimer();
          if (expireCb) {
            expireCb();
          }
        } else {
          timerStart(durationValue);
        }
      }, 1000);
    }
  }
  function clearTimer() {
    clearTimeout(timer);
    timer = undefined;
    if (clearCb) {
      clearCb();
    }
  }
  return {clearTimer, timerStart};
}