# hue

一个开源的 Codex skill。它可以从 URL、品牌名、截图、参考图片、风格描述或本地代码库中学习任意品牌的设计语言，并将其整理成一套结构化设计包。

在线示例：**[hueapp.io](https://hueapp.io)**

## 你会得到什么

hue 默认会生成一套包含 3 个文件的设计包：

- `design-meta.yaml`：面向来源的采集与溯源记录
- `design-model.yaml`：轻量的结构化设计模型
- `DESIGN.md`：面向人的主设计文档，遵守 Google `design.md` 格式

其中，`DESIGN.md` 是主交付物：它包含 YAML frontmatter token 和 Markdown 设计说明，应该能通过官方校验：

```bash
npx @google/design.md lint DESIGN.md
```

`design-model.yaml` 仍用于 hue 自己的结构化复用，但不会再和 Markdown 做实现级细节镜像。hue 现在的默认目标是**生成轻量、可喂给 AI 页面生成工具的设计规范**，不是生成另一个可安装的 design skill。

## 安装

```bash
git clone https://github.com/dominikmartn/hue "${CODEX_HOME:-$HOME/.codex}/skills/hue"
```

`hue` 是一个**显式调用**的 skill。在 Codex 对话里，可以这样使用：

- “use hue to create a design document from cursor.com”
- “$hue generate a design-meta yaml, design-model yaml, and markdown document inspired by raycast”
- “use hue with this screenshot to generate a design system document”
- “use hue to analyze this local codebase and generate a reusable design package”
- “use hue to remix this existing design document to feel warmer and more editorial”

hue 默认优先通过 `browser-automation` / `agent-browser` 做直接浏览器级分析。每次 URL 分析都应使用具名 session，并在采集结束后关闭 session，避免残留 Chrome/headless 进程；如果直接访问受限，再依次退回到公开网页资料、本地代码或截图分析。

## 什么时候适合用 hue

当目标是**把一个来源设计语言提炼成可复用的设计文档**时，就适合用 `hue`。  
如果目标是直接做页面、直接写 UI、直接产出前端实现，那通常不是 hue 的默认使用方式。

适合的场景：

- 分析一个真实网站，并整理成可复用的设计系统文档
- 输入一个品牌名，先确认官网，再做完整设计语言分析
- 分析一组截图，抽取出更稳定的视觉规则
- 分析本地前端代码库，提取 token、组件和模式
- 把“风格描述”转成具体、可执行的设计系统
- 在已有 hue 设计包上做 remix，而不是从头重生成
- 对比两份设计文档，提升输出一致性和规范性

不属于默认场景的情况：

- 只是想“帮我做个 landing page”，但并不需要设计文档
- 目标是直接生成生产级 UI，而不是先沉淀设计描述
- 用户没有显式调用 hue，却想让它隐式接管通用 UI 工作

## 支持的输入类型

hue 当前支持以下输入方式：

- `brand name`
  hue 会先尽量找到对应品牌的官网，向用户确认后，再分析多个页面或表面。
- `url`
  hue 会直接检查线上页面，优先使用浏览器级 DOM / CSS / 截图分析，而不是依赖摘要式抓取。
- `local codebase`
  hue 会读取 token、组件、CSS 自定义属性、Tailwind 配置、主题文件和 stories 等。
- `screenshots / images`
  hue 会逐张分析截图，对比差异、暴露冲突，并把它们当作视觉证据使用。
- `description / vibe`
  hue 会把抽象的形容词转换成具体设计决策。
- `remix`
  hue 会读取已有设计产物，并对指定部分做外科手术式调整。

## 默认输出约定

默认情况下，`hue` 只会生成这 3 个文件：

- `design-meta.yaml`
- `design-model.yaml`
- `DESIGN.md`

`design-model.yaml` 仍然是 token-oriented 的结构化模型。组件层应该写具体参数，例如 `background`、`text`、`border`、`radius`、`padding`、`min_height`、`typography`、`shadow`、`hover`、`focus`、`disabled`，不要只写自然语言 summary。组件设计意图和使用说明放到 `DESIGN.md`。

像 HTML 预览、组件库页面、落地页、app screen，或者代码片段，都属于**按需扩展产物**，只有在用户明确提出时才会生成。

## 触发方式

`hue` 只应在**显式调用**时触发。典型触发语句包括：

- `use hue`
- `$hue`
- `create a design document`
- `generate a DESIGN.md`
- `generate a design-model yaml`
- `generate a design system document`
- `analyze this site and produce yaml + markdown`
- `remix this existing design document`

它不应该在普通的前端实现任务或通用 UI 任务里自动触发。

## refs 说明

所有参考文件都位于 [`references/`](/Users/guanwei/x/doit/hue/references)。  
这些 refs 并不是每次都会全部激活，而是按当前任务类型和输出目标来选择。

### 默认核心 refs

这些是当前默认主流程一定会用到的 refs：

- [`design-document-template.md`](/Users/guanwei/x/doit/hue/references/design-document-template.md)  
  控制官方格式 `DESIGN.md` 的 frontmatter token 和章节结构。
- [`design-meta-template.yaml`](/Users/guanwei/x/doit/hue/references/design-meta-template.yaml)  
  控制 `design-meta.yaml` 的结构。
- [`hero-stage.md`](/Users/guanwei/x/doit/hue/references/hero-stage.md)  
  控制 hero 背景、主体、关系层的分析方式和表达方式。
- [`icon-kits.md`](/Users/guanwei/x/doit/hue/references/icon-kits.md)  
  控制品牌图标无法直接复用时的 fallback icon kit 选择。
- [`responsive-behavior.md`](/Users/guanwei/x/doit/hue/references/responsive-behavior.md)  
  控制断点、折叠方式、触控尺寸等响应式描述。
- [`dos-donts.md`](/Users/guanwei/x/doit/hue/references/dos-donts.md)  
  控制 Do / Don't 这类实现规则如何写得更具体、更不啰嗦。

### 条件触发 refs

这些 refs 只会在某些品牌特征或某些明确请求下启用：

- [`background-shaders.md`](/Users/guanwei/x/doit/hue/references/background-shaders.md)  
  仅当品牌明显依赖 WebGL / shader 动态视觉，且 `hero_stage.background.medium` 应该是 `shader` 时启用。
- [`preview-template.md`](/Users/guanwei/x/doit/hue/references/preview-template.md)  
  当用户明确要求可视化预览或 `preview.html` 时启用。
- [`component-library-template.md`](/Users/guanwei/x/doit/hue/references/component-library-template.md)  
  当用户明确要求组件库视图或 `component-library.html` 时启用。
- [`landing-page-template.md`](/Users/guanwei/x/doit/hue/references/landing-page-template.md)  
  当用户明确要求生成 `landing-page.html` 时启用。
- [`app-screen-template.md`](/Users/guanwei/x/doit/hue/references/app-screen-template.md)  
  当用户明确要求生成产品内页面视图或 `app-screen.html` 时启用。

### 当前非默认或历史 refs

这些文件依然有参考价值，但不属于当前默认输出流程的一部分：

- [`background-graphics.md`](/Users/guanwei/x/doit/hue/references/background-graphics.md)  
  旧版背景图形模型，已经被 `hero-stage.md` 取代。
- [`components-template.md`](/Users/guanwei/x/doit/hue/references/components-template.md)  
  旧版独立组件文档模板。
- [`tokens-template.md`](/Users/guanwei/x/doit/hue/references/tokens-template.md)  
  旧版独立 tokens 文档模板。
- [`platform-mapping-template.md`](/Users/guanwei/x/doit/hue/references/platform-mapping-template.md)  
  更完整的平台实现映射模板。
- [`skill-template.md`](/Users/guanwei/x/doit/hue/references/skill-template.md)  
  旧版“生成一个独立 design skill” 的模板，而不是当前的文档包模板。

## refs 的触发规则

可以简单理解为：

- 如果用户要的是默认设计包，只启用核心 refs
- 如果用户要求 richer visual artifacts，就启用对应的 HTML 模板 refs
- 如果分析对象明显依赖 shader-heavy 动效身份，就启用 `background-shaders.md`
- 如果任务重点是规范性、稳定性或文档质量，`design-document-template.md`、`responsive-behavior.md`、`dos-donts.md` 会格外重要
- 如果用户要求对齐旧案例、旧输出或 legacy 结果，可以参考旧模板，但不应该默默替换当前默认流程

## 工作流概览

当前 hue 的工作流可以概括为：

1. 识别输入类型
2. 尽可能直接检查真实来源
3. 判断品牌更偏 `UI-rich` 还是 `content-rich`
4. 盘点 observed 和 derived 的组件
5. 分析 hero stage 和 iconography fallback
6. 生成一个中性的、可复用的系统名称
7. 产出 `design-meta.yaml`、`design-model.yaml` 和 `DESIGN.md`
8. 运行 `npx @google/design.md lint DESIGN.md` 校验 schema 和结构
9. 自检 Markdown 和 YAML 是否方向一致、是否该 source-agnostic 的地方做到了 source-agnostic、结构是否完整
10. 关闭本次使用的 `agent-browser` session

## 示例

`examples/` 目录中目前有 17 个品牌示例，用来展示 hue 可以支持的分析范围。其中 16 个是虚构品牌，1 个是真实案例（meadow ↦ mymind.com）。

| 品牌 | 风格特征 |
|---|---|
| atlas | 象牙白工程感，古典航海图 |
| auris | 高端音频，单色深色调 |
| drift | 高饱和粉色时尚电商 |
| fizz | Y2K 糖果感图片社交 |
| halcyon | 冷调青绿色雕塑玻璃感 |
| kiln | 深色烧制土壤感，熔岩陶土色 |
| ledger | 新闻纸社论感，金融报纸风 |
| meadow | 温暖奶油色社论气质（真实案例，来自 mymind-design） |
| orivion | 发光红紫色氛围 |
| oxide | 粗野单色计算协议风 |
| prism | 赛博全息 shader 引擎感 |
| relay | 瑞士交通导视，时刻表精度 |
| ridge | 石板绿开发平台 |
| solvent | 暖琥珀色生成式 shader |
| stint | 柔和紫色效率工具 |
| thrive | 鼠尾草绿色 wellness 轻模式 |
| velvet | 黑色社论型香氛品牌 |

很多示例目录里依然保留了较早期的 HTML 产物，比如 `landing-page.html`、`component-library.html`、`app-screen.html`。这些更适合作为参考构建和探索产物，不应被视为当前 skill 的默认输出契约。

## 运行环境预期

- 最佳情况：可用 `agent-browser`
- URL 采集使用具名 session
- 采集完成后关闭 session，避免残留进程
- 回退分析时：需要可访问公开网页资料
- 不依赖 Chrome DevTools MCP

## 许可证

MIT。可以 fork、改造、再利用。
