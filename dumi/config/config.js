import path from 'path';

console.log(path.resolve(__dirname, '../../', 'src'), '---')
export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  title: 'best-taro',
  alias: {
    // taro结合umi的关键所在
    '@tarojs/components$': '@tarojs/components/dist-h5/react',
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/runtime': '@taro-hooks/website-runtime',
    '@/demo': path.resolve(__dirname, '../../', 'src/demo'),
    '@/components': path.resolve(__dirname, '../../', 'src/components'),
    '@/utils': path.resolve(__dirname, '../../', 'src/utils'),
  },
  define: {
    'process.env.TARO_ENV': 'h5',
    LOCATION_APIKEY: JSON.stringify('J3OBZ-WBJKG-M5DQZ-IJQ4V-FSK2H-BTBZV'),
    BUILD_MODE: JSON.stringify(undefined),
  },
};