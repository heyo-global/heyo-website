module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1376,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [/mobile/, /node_modules/ ], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1376
    }
  },
};
