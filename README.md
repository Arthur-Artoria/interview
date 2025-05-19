# PNPM Workspace with TypeScript

这是一个使用pnpm工作空间(workspace)和TypeScript的示例项目。

## 项目结构

```
.
├── packages/
│   ├── core/          # 核心功能包
│   └── utils/         # 工具函数包（依赖于core）
├── package.json       # 根项目配置
├── pnpm-workspace.yaml # 工作空间配置
└── tsconfig.json      # TypeScript基础配置
```

## 可用命令

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 构建特定包

```bash
pnpm --filter @workspace/core build
```

### 清理构建产物

```bash
pnpm clean
```

## 开发指南

### 添加新包

1. 在`packages`目录下创建新目录
2. 初始化package.json
3. 配置tsconfig.json
4. 在src目录中编写代码

### 包之间的依赖

在package.json中使用`workspace:*`语法引用工作空间中的其他包：

```json
"dependencies": {
  "@workspace/core": "workspace:*"
}
```

### 发布

发布前需要构建所有包：

```bash
pnpm build
pnpm publish -r
```