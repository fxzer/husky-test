module.exports = {
  // 配置 conventional-changelog 格式的来源
  // 可以是一个 git 仓库地址或一个本地地址
  preset: 'husky-test',

  // 配置输出到哪个文件中
  outputUnreleased: true,
  outputFile: 'CHANGELOG.md'
};
