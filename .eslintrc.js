module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": "off", // 사용하지 않는 변수에 대해서 에러처리 하지 말라고 설정 추가 
    "vue/multi-word-component-names": 'off', // 단일 단어도 컴포넌트로 등록할 수 있도록 설정 추가 
    "no-constant-condition": 'off'
  }
}