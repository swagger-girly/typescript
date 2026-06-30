# Changelog

## 0.1.0-alpha.1 (2026-06-30)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/swagger-girly/typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#24](https://github.com/swagger-girly/typescript/issues/24)) ([72a139d](https://github.com/swagger-girly/typescript/commit/72a139dd04a7c0df17a7300b7b38b9c961ea5604))
* **api:** manual updates ([8eea1d3](https://github.com/swagger-girly/typescript/commit/8eea1d3f121f6aaf8a07ade8ced5c77ae9e942db))
* **api:** manual updates ([fd6a33c](https://github.com/swagger-girly/typescript/commit/fd6a33c6da46b1251d23f238abbcc62162fe2065))
* **api:** manual updates ([0478605](https://github.com/swagger-girly/typescript/commit/04786056e8e72c5476cd431444799ff56b72e37c))
* **api:** manual updates ([cb36eb8](https://github.com/swagger-girly/typescript/commit/cb36eb889e5ea7ed6322ce388edc1349990d549f))
* **api:** manual updates ([2bd18d4](https://github.com/swagger-girly/typescript/commit/2bd18d43047edb41ec8d8b208c607cdda06af384))
* **api:** manual updates ([3a1d5b9](https://github.com/swagger-girly/typescript/commit/3a1d5b9204c12f15cd075c0f7d6e3e6ef019c62b))
* **api:** manual updates ([4d150de](https://github.com/swagger-girly/typescript/commit/4d150de5e73490a5c8b51450cea384b28dda0160))
* **api:** manual updates ([b3683a9](https://github.com/swagger-girly/typescript/commit/b3683a9b686f6f07d06c8474c8deb0ec0009b5fc))
* **api:** manual updates ([d80004e](https://github.com/swagger-girly/typescript/commit/d80004e893b9aacf0867155dbb4bd24bcb482867))
* **api:** manual updates ([e5a5668](https://github.com/swagger-girly/typescript/commit/e5a5668857b5a98e6ac7a00c662f2bafa5f73743))
* **api:** manual updates ([1aea7cc](https://github.com/swagger-girly/typescript/commit/1aea7ccce27a3b425f4ad0440d2a3b8006cd9150))
* **api:** manual updates ([7665765](https://github.com/swagger-girly/typescript/commit/7665765a8d0cc485315b74dba9c617c20bc10b63))
* **api:** manual updates ([6dd416c](https://github.com/swagger-girly/typescript/commit/6dd416c9210784a2a35647b428e885af748e024e))
* **client:** accept RFC6838 JSON content types ([#25](https://github.com/swagger-girly/typescript/issues/25)) ([f3ecb09](https://github.com/swagger-girly/typescript/commit/f3ecb09e4578b2ba5d9aae2da4680176cd04edb1))
* **client:** improve logging ([#11](https://github.com/swagger-girly/typescript/issues/11)) ([4ab10f9](https://github.com/swagger-girly/typescript/commit/4ab10f9268e20572a160a9ce98ea4c61aca50b67))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#35](https://github.com/swagger-girly/typescript/issues/35)) ([729a925](https://github.com/swagger-girly/typescript/commit/729a92551f412d6423c46b4e6c00bd490ddb4423))
* **client:** fix export map for index exports, accept BunFile ([#7](https://github.com/swagger-girly/typescript/issues/7)) ([bb79010](https://github.com/swagger-girly/typescript/commit/bb79010e63a4ffab50d0aa43efeff734f16c6a2a))
* **client:** fix TypeError with undefined File ([#19](https://github.com/swagger-girly/typescript/issues/19)) ([c2209e1](https://github.com/swagger-girly/typescript/commit/c2209e1c4be7102ea6163ed5d632cf8e0e982e38))
* **client:** mark some request bodies as optional ([#10](https://github.com/swagger-girly/typescript/issues/10)) ([edb3734](https://github.com/swagger-girly/typescript/commit/edb3734ed70833c01aaa13a9de210ea3f7f1f434))
* **client:** send `X-Stainless-Timeout` in seconds ([#33](https://github.com/swagger-girly/typescript/issues/33)) ([0bca456](https://github.com/swagger-girly/typescript/commit/0bca456098e4cfcfca6ebf1bc79c5cc6005f3847))
* **client:** send all configured auth headers ([#38](https://github.com/swagger-girly/typescript/issues/38)) ([cbf6f3d](https://github.com/swagger-girly/typescript/commit/cbf6f3ddb5b592ae9bab41751dd555b1c0c5bb9b))
* **client:** send content-type header for requests with an omitted optional body ([d3b0bb3](https://github.com/swagger-girly/typescript/commit/d3b0bb3c59e3a5498dc62a37103671359265cf20))
* **exports:** ensure resource imports don't require /index ([#27](https://github.com/swagger-girly/typescript/issues/27)) ([ed9e697](https://github.com/swagger-girly/typescript/commit/ed9e6978de73c34261bad9ba631d4426f55e899f))
* **internal:** add mts file + crypto shim types ([#28](https://github.com/swagger-girly/typescript/issues/28)) ([db2ce48](https://github.com/swagger-girly/typescript/commit/db2ce48f0b4c1bc7bd3ee66715ea3fd66baab276))
* **internal:** clean up undefined File test ([#20](https://github.com/swagger-girly/typescript/issues/20)) ([efcc1dd](https://github.com/swagger-girly/typescript/commit/efcc1ddbd706b72f707f93de09e701a1966f8ed8))
* **internal:** fix file uploads in node 18 jest ([d1adb8f](https://github.com/swagger-girly/typescript/commit/d1adb8fadf87510b0029c78eb8ae1a1e973ee8f8))
* **mcp:** fix query options parsing ([07d24a6](https://github.com/swagger-girly/typescript/commit/07d24a66b42b40272e552d6cb909c66b6c8623cb))
* **mcp:** remove unused tools.ts ([#36](https://github.com/swagger-girly/typescript/issues/36)) ([3a15dd9](https://github.com/swagger-girly/typescript/commit/3a15dd9bfa8d7cf792dbfa2915a7733f209740a3))
* **tests:** manually reset node:buffer File ([#21](https://github.com/swagger-girly/typescript/issues/21)) ([7e075cf](https://github.com/swagger-girly/typescript/commit/7e075cfdac3775670d7af370d0bb927e4b83ed03))


### Chores

* ci build action ([5aa7d2e](https://github.com/swagger-girly/typescript/commit/5aa7d2e8b47721050ce2c2f80b06a4a5ce132b20))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#32](https://github.com/swagger-girly/typescript/issues/32)) ([2108b92](https://github.com/swagger-girly/typescript/commit/2108b9229b5f61bfcb616bdd516effbba99a1478))
* **client:** only accept standard types for file uploads ([#16](https://github.com/swagger-girly/typescript/issues/16)) ([2419498](https://github.com/swagger-girly/typescript/commit/24194988217f1c8baad79aa99b87540f875d5e7a))
* configure new SDK language ([59c5241](https://github.com/swagger-girly/typescript/commit/59c5241ec91aab47ee83237f10bac52376913028))
* configure new SDK language ([372e779](https://github.com/swagger-girly/typescript/commit/372e7799a23fc2272ce001acc29a616445f88775))
* **docs:** improve docs for withResponse/asResponse ([#23](https://github.com/swagger-girly/typescript/issues/23)) ([b6923c7](https://github.com/swagger-girly/typescript/commit/b6923c7e6c990c06a9fb2e47e3f76c7b46d6be6d))
* **exports:** cleaner resource index imports ([#30](https://github.com/swagger-girly/typescript/issues/30)) ([fc1665d](https://github.com/swagger-girly/typescript/commit/fc1665dc4d49f511936ba85898060532bead0566))
* **exports:** stop using path fallbacks ([#31](https://github.com/swagger-girly/typescript/issues/31)) ([e54f5cf](https://github.com/swagger-girly/typescript/commit/e54f5cfaacdab7e96c236db914c640bf1ed8ce3c))
* go live ([#1](https://github.com/swagger-girly/typescript/issues/1)) ([0d56ace](https://github.com/swagger-girly/typescript/commit/0d56ace46bb5b7ea05d040bf2ca48b64f797904b))
* **internal:** add aliases for Record and Array ([#34](https://github.com/swagger-girly/typescript/issues/34)) ([d49c9f8](https://github.com/swagger-girly/typescript/commit/d49c9f83f1701e8fe9d1d769d10c489191af4ae1))
* **internal:** codegen related update ([d989308](https://github.com/swagger-girly/typescript/commit/d989308c3c3be527356a5293f13c50acc6822ec2))
* **internal:** codegen related update ([979767e](https://github.com/swagger-girly/typescript/commit/979767e9a626bb746c11d0c5a44c1e28966ae734))
* **internal:** codegen related update ([#13](https://github.com/swagger-girly/typescript/issues/13)) ([19c177d](https://github.com/swagger-girly/typescript/commit/19c177d3dded5de1f7c49569e793d9701082843b))
* **internal:** codegen related update ([#8](https://github.com/swagger-girly/typescript/issues/8)) ([618c8da](https://github.com/swagger-girly/typescript/commit/618c8dab87bf92583083f409155cc839f5e8beff))
* **internal:** codegen related update ([#9](https://github.com/swagger-girly/typescript/issues/9)) ([f0b5eb2](https://github.com/swagger-girly/typescript/commit/f0b5eb282a2dfd4e3d1bdb52808cfa4b26bec8fb))
* **internal:** constrain synckit dev dependency ([#18](https://github.com/swagger-girly/typescript/issues/18)) ([6a97f8a](https://github.com/swagger-girly/typescript/commit/6a97f8a8aa400bde83a6c767f74c6fd38c71147f))
* **internal:** fix tests failing on node v18 ([#17](https://github.com/swagger-girly/typescript/issues/17)) ([4a4a8c1](https://github.com/swagger-girly/typescript/commit/4a4a8c1c574e6923ee88ed7a60f3aa1fd8797176))
* **internal:** improve node 18 shims ([8969b55](https://github.com/swagger-girly/typescript/commit/8969b5517c378733e7dbc4a203c732b83dae1da7))
* **internal:** migrate to eslint v9 ([#5](https://github.com/swagger-girly/typescript/issues/5)) ([e4c089f](https://github.com/swagger-girly/typescript/commit/e4c089fbdd76d7c42c36fe1bf40aa8f028723810))
* **internal:** minor client file refactoring ([#29](https://github.com/swagger-girly/typescript/issues/29)) ([d1d5478](https://github.com/swagger-girly/typescript/commit/d1d5478ebe05a2aeb2f51a47f5804547146b0ae0))
* **internal:** reduce CI branch coverage ([11eef14](https://github.com/swagger-girly/typescript/commit/11eef147fb997deb45c541edca0105909589342f))
* **internal:** remove extra empty newlines ([#26](https://github.com/swagger-girly/typescript/issues/26)) ([9f889b5](https://github.com/swagger-girly/typescript/commit/9f889b575f2f5c714a4e6972a3a6d64eb92b5021))
* **internal:** remove unnecessary todo ([#14](https://github.com/swagger-girly/typescript/issues/14)) ([eff72ea](https://github.com/swagger-girly/typescript/commit/eff72eaae8ccf8fd5960e9f35d8570ebed731698))
* **internal:** remove unused method ([#4](https://github.com/swagger-girly/typescript/issues/4)) ([cb347d8](https://github.com/swagger-girly/typescript/commit/cb347d81726bbb6365a9c10a31aaa1f9067021c2))
* **internal:** update eslint config ([#6](https://github.com/swagger-girly/typescript/issues/6)) ([f2d96b0](https://github.com/swagger-girly/typescript/commit/f2d96b0bd22adf13399143f551f675f48acc08a6))
* **internal:** upload builds and expand CI branch coverage ([bbea32b](https://github.com/swagger-girly/typescript/commit/bbea32b513ea044e8e3e2b238f2ccf5b07fb8096))
* **tests:** improve enum examples ([#39](https://github.com/swagger-girly/typescript/issues/39)) ([d19dab7](https://github.com/swagger-girly/typescript/commit/d19dab7d74963f50359685e6ee671ba8d4c5ab22))
* **types:** improved go to definition on fetchOptions ([#22](https://github.com/swagger-girly/typescript/issues/22)) ([41734bf](https://github.com/swagger-girly/typescript/commit/41734bf1e033c3200e37f94367e97ee47cd8b7df))
* update SDK settings ([fba2235](https://github.com/swagger-girly/typescript/commit/fba223572fe5dfcebcaea4d363eb2ab360d854cc))
* update SDK settings ([2989f5c](https://github.com/swagger-girly/typescript/commit/2989f5c625ce5d3a9a3d191b3ca790e80b11c221))
* update SDK settings ([#3](https://github.com/swagger-girly/typescript/issues/3)) ([8031bdf](https://github.com/swagger-girly/typescript/commit/8031bdf4b4b190a826240b51c8c62e4053c5c1e8))


### Documentation

* swap examples used in readme ([#37](https://github.com/swagger-girly/typescript/issues/37)) ([adb0f67](https://github.com/swagger-girly/typescript/commit/adb0f6716abf8dfc1c8abccca0c211e8b8748bf5))
* update URLs from stainlessapi.com to stainless.com ([#15](https://github.com/swagger-girly/typescript/issues/15)) ([3d2989f](https://github.com/swagger-girly/typescript/commit/3d2989ff8cd3cd96195b0c021072b0facd42faa2))
