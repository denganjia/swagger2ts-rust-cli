# Swagger2TS-Rust_Cli

这是一个根据**远程**`swagger`文档来生成 `Typescript` `interface` 的命令行工具。
使用 Rust 编写，速度够快。

# 参数

```bash
Simple program to generate the typescript interface by swagger json
Options:
  -C, --config <config file path> path for config file
  -h, --help                 Print help
  -V, --version              Print version
```

# 安装

```bash
npm i swagger2ts-rust-cli -D

yarn add swagger2ts-rust-cli -D
```

# 使用

```json
{
	"scripts": {
		"trans-swagger": "swagger2ts --C <config file path>"
	}
}
```

```bash
yarn trans-swagger
// or
npm run trans-swagger
```

# Config 配置

默认会在项目的根目录下查询**swagger2ts.json**文件,可手动传入配置文件

| 配置项         | 子配置            | 描述                                                              | 默认值 | 类型      |
| -------------- | ----------------- | ----------------------------------------------------------------- | ------ | --------- |
| filename       | -                 | 存储 interface 的文件名                                           | 无     | `string`  |
| url            | -                 | swagger json 文件的请求地址                                       | 无     | `string`  |
| outdir         | -                 | 输出的目录                                                        | 无     | `string`  |
| request        | -                 | 是否同时生成 api 请求函数                                         | 无     | `boolean` |
| request_config |                   | 生成 api 函数的配置                                               | 无     |           |
| -              | function_template | api 函数模板，示例模板请看[下方](##function_template)             | 无     | `string`  |
| -              | ignore_path       | 需要忽略的 url 前缀                                               | 无     | `string`  |
| -              | prefix            | 需要在 api 函数文件头部添加的字符串，可以在此处传入需要导入的东西 | 无     | `string`  |
| -              | split             | 是否要根据模块拆分成不同的文件(**待实现**)                        | 无     | `boolean` |

## function_template

```json
{
	"function_template": "//{description}\nexport function {name} (params?:{parameter})  {\n return http.{method}<{response}>({url},params);\n}\n"
}
```

> 在程序运行的时候会将`{xxx}`替换成对应的数据

| 参数        | 解读           |
| ----------- | -------------- |
| description | 接口描述       |
| name        | 接口名称       |
| parameter   | 接口参数类型   |
| method      | 请求方式       |
| response    | 接口返回值类型 |
| url         | 接口请求地址   |

~~默认会在运行的目录下的`api`文件中生成一个`index.d.ts`文件，里面包含了 swagger 的 definitions 或 openapi 的 components/schemas 里定义的数据结构，只转化名称为**全英文**的 definitions/schemas~~

目前除了 interface 是指定存放目录以外，api 函数统一输出在 config.outdir 下面的`api.ts`文件中。

非合法的 interface 名称会转换成`Interface_{名称hash后后6位}`
