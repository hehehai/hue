# Linear 对比说明

这个文件把 `examples/linear/` 和当前库里三个最有参考价值的样本做对照：

- `examples/ridge/`：`grid-on-dark` 的开发平台 proof
- `examples/stint/`：`device-on-mesh` 的项目工具 proof
- `examples/meadow/`：当前 examples 里唯一一个真实品牌 benchmark

目标不是给它们排名，而是看清楚两件事：

1. 一个基于真实品牌分析得到的 `Linear` 样本，在 Hue 现有 proof library 里大概落在哪个位置。
2. 现有 examples 在“真实品牌还原”这件事上还缺什么。

## 简短结论

Linear 最接近 `ridge` 和 `stint`，但它比这两个样本都更克制。

- 和 `ridge` 比，Linear 没那么像 dashboard 品牌，也没那么依赖 monospace 做身份。
- 和 `stint` 比，Linear 的 hero 背景更弱，组件语言更紧、更机械。
- 和 `meadow` 比，Linear 几乎站在系统另一端：更重产品密度，更轻编辑气质，更强调控制感而不是氛围感。

这里最重要的结构差异是：

- `ridge` 和 `stint` 是 preset proof。
- `meadow` 和 `linear` 是品牌分析样本。

这意味着 `linear` 不该主要用“hero 是否够惊艳”来判断，而该用“这种克制感是否准确”来判断。

## 1. 在样本库里的位置

### `linear` vs `ridge`

相同点：

- 都是深色、`ui-rich`、以产品窗口为主角的构图。
- 都把产品表面本身当成主要识别信号。
- 文案都偏直接、偏操作语境，而不是诗意叙事。
- 都用小圆角和节制的强调色。

主要差异：

- `ridge` 是有意识构造出来的开发平台 proof，dot-grid 背景和绿色成功色都是它的身份核心。
- `linear` 的 hero 更接近近黑空场，只有极轻的环境抬升和冷紫蓝 signal。
- `ridge` 让 monospace 直接进入 headline 身份层。
- `linear` 让 Inter 做系统主脸，mono 只留给技术语境。
- `ridge` 更像 observability。
- `linear` 更像 issue tracking、planning 和 agent operations 的复合体。

实际理解：

- 如果说 `ridge` 是“dashboard 就是品牌”，那 Linear 更像“产品纪律本身就是品牌”。

### `linear` vs `stint`

相同点：

- 都是深色产品工具，hero 里都有设备/产品窗口。
- 都是冷色系、小圆角。
- 都把产品窗口放在装饰叙事之前。

主要差异：

- `stint` 是为了证明 `device-on-mesh`，所以紫色 mesh 背景必须明显存在。
- `linear` 更接近 `device-on-near-blank`，背景几乎是故意“拿掉”的。
- `stint` 是为了让 preset 足够清楚的 fiction。
- `linear` 带着真实品牌的复杂性，包括中性主 CTA、`/method` 页的 serif 编辑态、以及更不整齐但更真实的系统层次。
- `stint` 基本是一条车道。
- `linear` 至少是三条车道：系统 sans、代码 mono、偶发 editorial serif。

实际理解：

- `stint` 作为 proof 更干净。
- `linear` 作为 benchmark 更真实。

### `linear` vs `meadow`

相同点：

- 都不是 preset-first fiction，而是基于真实网站的分析样本。
- 都会诚实记录专有字体，再给出可用的 web fallback。
- 都有 observed / derived 的推导意识。

主要差异：

- `meadow` 是亮、暖、圆、松、偏编辑。
- `linear` 是暗、冷、紧、框、偏操作。
- `meadow` 让背景承担氛围。
- `linear` 通过把背景拿掉，让产品表面承担氛围。
- `meadow` 圆角更大，motion 更软。
- `linear` 圆角更紧，shadow stack 更轻，节奏更机械。

实际理解：

- `meadow` 在测试 Hue 能不能保留“温度”。
- `linear` 在测试 Hue 能不能保留“克制”。

## 2. Model 层的差异

### 顶层意图

`linear/design-model.yaml`

- 是真实品牌样本，明确拆成 `mono_for_code: true` 和 `mono_for_metrics: false`
- 记录了一个 editorial serif side-channel，但没有把它误写成全局 display 系统
- 加入了更明确的组件拆解，因为 Linear 的身份很大一部分在控件和面板细节里

`ridge` 和 `stint`

- 还在用旧字段 `mono_for_data`
- 重点是证明 hero-stage preset 和 palette / typography 的一致性
- 组件层停得更早

`meadow`

- 也是一个真实品牌样本
- observed / derived 的说明更完整
- 但目前也还停留在旧字段 `mono_for_data`

这意味着：

- `linear` 在 schema 使用上，其实比大多数 fiction examples 更接近当前规范的方向。
- 但就写作深度来说，`meadow` 仍然是更成熟的真实品牌参考。

### Typography

`linear`

- 主 display 还是 Inter Variable 的行为，不是 editorial serif
- mono 是真实存在的，但有明确边界
- serif 被记录为“编辑态例外”，而不是主系统

`ridge`

- 直接把 JetBrains Mono 推到 display 层，所以整个品牌明显更 infra-first

`stint`

- 基本是一条 Inter 车道，干净、统一、也更人工

`meadow`

- serif 驱动 display，neo-grotesque 做 body，几乎没有 mono 角色

这意味着：

- 如果要看“一个品牌如何同时拥有多个排版寄存器但仍然保持克制”，`linear` 是当前 examples 里更有价值的样本。

### Hero stage

`linear`

- `background.medium: absent`
- `hero.subject: device`
- `relation.type: shadow-only`
- 核心风格信号恰恰来自它拿掉了什么

`ridge`

- `background.medium: pattern`
- 可见 grid 是品牌的一部分

`stint`

- `background.medium: mesh`
- 可见紫色场是品牌的一部分

`meadow`

- `background.medium: painterly`
- 背景本身就是品牌声音

这意味着：

- Linear 暴露了 proof library 里的一个空档。
- 现在还没有一个标准样本，专门证明“device on almost nothing”这一路。

## 3. 组件语言的差异

这一层是 Linear 最重要的部分。

### Buttons

Linear 的主 marketing CTA 是中性填充，不是 accent 填充。

- 这在当前 example 集里并不常见。
- 大部分 examples 都会让 accent 去承担最显眼的 CTA 角色。
- Linear 把 accent 当 signal color，而不是默认填充色。

为什么重要：

- 如果生成结果一上来把所有主要按钮都刷成 accent，那它就已经偏离 Linear 了。

### Radii

Linear 的核心圆角是被压得很紧的：

- element `4`
- control `6`
- component `8`
- container `12`

它整体比 `meadow` 紧得多，和 `ridge`、`stint` 更近，但因为表面更黑、更平、更边框驱动，所以体感还会再硬一点。

为什么重要：

- Linear 不是“圆”。
- 它是“被精确软化过”。

### Elevation

Linear 基本不靠传统意义上的柔和 elevation。

它靠的是：

- inset stroke
- hairline border
- 极轻的 stacked shadow
- 被框出来的 panel depth

对比其他 examples：

- `meadow` 有真实的柔和空气阴影
- `ridge` 和 `stint` 更平，但仍然比 Linear 更像“干净抽象版”

为什么重要：

- Linear 需要比多数 proof examples 更细的组件微观写法。

## 4. Landing page 结构上的差异

### `linear/landing-page.html` 现在在做什么

- Header
- Hero + 居中的产品窗口
- Statement band
- 三段 features
- 模拟 customer-story 气质的 quote band
- Final CTA
- Footer

结构上仍然服从 examples 的 landing page 模式，但整体语气更像“benchmark rendering”，没那么像完整 campaign page。

### 和 `ridge` 的差异

- `ridge` 更像标准 proof page，`pricing` 和 `quote` 都更完整。
- `linear` 没有展开 pricing，而是把更多篇幅给产品表面的可信度。
- `ridge` 的任务是把 `grid-on-dark` 讲清楚。
- `linear` 的任务是不把一个本来就克制的品牌讲得太过。

### 和 `stint` 的差异

- `stint` 花更多 hero 篇幅去证明 preset 机制。
- `linear` 花更多篇幅证明“产品面板语言是否可信”。

### 和 `meadow` 的差异

- `meadow` 用 landing 来证明情绪和叙事温度。
- `linear` 用 landing 来证明操作语气和系统密度。

这意味着：

- `linear` 不会像 `meadow` 那样“显得漂亮”。
- 对这个品牌来说，这种不显摆反而更接近真实。

## 5. 这次对比说明了什么

### 现有样本库的强项

- 现有 examples 已经把几个 hero-stage 大类证明得比较清楚。
- `ridge` 和 `stint` 对于给 Linear 找位置很有帮助。
- `meadow` 证明了真实品牌分析的深度完全可以比 preset fiction 高很多。

### 现有样本库的缺口

- 还没有一个标准 proof 专门覆盖“device on nearly blank background”
- 多数 examples 的组件拆解仍然太浅
- examples 里新旧 mono 字段还混着用
- 样本库整体更偏向“视觉信号明显”的 hero 系统，对“靠克制成立”的品牌覆盖不够

## 6. 建议怎么看这个样本

建议按这个顺序看：

1. 打开 `examples/linear/design-model.yaml`
2. 把它的 `hero_stage`、`typography`、`components` 和 `ridge` 对照
3. 再把 `hero_stage` 和 `stint` 对照
4. 再看它的真实品牌注释层次和 `meadow` 的差异
5. 最后打开 `examples/linear/landing-page.html`
6. 问一个关键问题：

“这个页面是显得不够设计，还是它其实准确地保留了品牌的克制？”

对 Linear 来说，这就是核心 benchmark。一个稍微收着点的页面，往往比一个努力发光的页面更接近真实品牌。

## 7. 下一个最有价值的 benchmark

如果你想继续扩充这套 benchmark，我不建议马上再加一个暖色编辑品牌。

更有价值的下一个目标是：

- 再找一个同样克制，但 accent 逻辑不同的真实产品品牌
- 或者找一个真实 mesh / glow 更明显的品牌，让 Linear 能和另一个真实极点形成对照
- 或者找一个 marketing 和 product 分裂特别大的品牌，测试 model 是否能同时表达两者，而不是被其中一边压平

这样 `linear` 就不只是一个单点样本，而会成为一组真实 benchmark 里的中间坐标。
