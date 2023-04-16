module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0], // 不校验type大小写
    'type-empty': [0],  // 不校验type是否为空
    'scope-empty': [0], // 不校验scope是否为空
    'scope-case': [0],  // 不校验scope大小写
    'subject-full-stop': [0, 'never'],  // 不校验subject是否以.结尾
    'subject-case': [0, 'never'], // 不校验subject大小写
    'header-max-length': [0, 'always', 72], // 不校验header最大长度
  },
}