// src/craco.config.js
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
        // 기타 옵션
        /*
            baseUrl: default 값은 './' ('./'는 root 폴더를 말함)
            aliases: alias 이름과 경로, default 값은 {}
            tsConfigPath: 만약 source가 tsconfig이라면 해당 파일 (path 관련) 이름 작성
            debug: 이 속성은 true일 시, 버그가 발생했을 때 console로 내용 확인 가능. default 값은 false
        */
      },
    },
  ],
};
