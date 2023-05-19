# Swagger2TS-Rust_Cli

这是一个根据**远程**`swagger`文档中的`definitions`来生成 `Typescript` `interface` 的命令行工具。
使用 Rust 编写，速度够快。

# 参数

```bash
Simple program to generate the typescript interface by swagger json

Usage: swagger2ts.exe [OPTIONS] --url <URL>

Options:
  -u, --url <URL>            Url for Swagger Json
  -f, --filename <FILENAME>  The output file name [default: index.d.ts]
  -o, --outdir <OUTDIR>      The path of the output [default: api]
  -h, --help                 Print help
  -V, --version              Print version
```

# 安装

```bash
npm i swagger2ts-rust-cli -D

yarn add swagger2ts-rust-cli -D
```

# 使用

```bash
swagger2ts --url "some-swagger-doc-url"
```

默认会在运行的目录下的`api`文件中生成一个`index.d.ts`文件，里面包含了 swagger 的 definitions 里定一个的数据结构，只转化名称为**全英文**的 definitions
