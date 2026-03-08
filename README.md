# 🧺 SKU 洗词工具

电商 SKU 智能改写工具，AI 驱动，一键"洗词"降低平台比价识别概率。

---

## 🚀 部署步骤（5分钟搞定）

### 第一步：上传到 GitHub

1. 打开 [github.com](https://github.com) 登录
2. 点 `+` → `New repository` → 名字填 `sku-washer` → `Create`
3. 把本文件夹里所有文件上传进去

### 第二步：一键部署到 Vercel

1. 打开 [vercel.com](https://vercel.com)，用 GitHub 登录
2. 点 `Add New Project` → 选 `sku-washer` 仓库 → `Deploy`

### 第三步：设置 API Key（必须！）

部署完成后进入 `Settings → Environment Variables`，添加：

| 变量名 | 值 |
|--------|-----|
| `VECTORENGINE_API_KEY` | `sk-21IglzG8TtcksTtH3uSgmNLPkMSqvxBJ2iJibOVRMtc8aGsM` |
| `API_BASE_URL` | `https://api.vectorengine.ai` |
| `API_MODEL` | `gpt-5.4` |

保存后点 `Redeploy` 重新部署一次。

### 第四步：分享链接 🎉

你会得到一个网址如 `https://sku-washer-xxx.vercel.app`，发给小伙伴直接用！

---

## 📁 项目结构

```
sku-washer/
├── public/index.html   # 前端页面
├── api/wash.js         # 后端代理（解决跨域）
├── vercel.json         # 部署配置
└── package.json
```

## 🔒 安全说明

API Key 存在 Vercel 环境变量里，不会暴露给用户，安全可靠。
