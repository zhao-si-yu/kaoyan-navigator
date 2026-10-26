# 考研择校查询（网页版）

考研院校专业数据查询：招生计划、考试科目、复试线、统考名额等指标，支持多专业横向对比。

本仓库为 **GitHub Pages 纯静态版**：数据打包在 `data/snapshot.json`，无需后端、无需登录、无需本地爬虫，打开网页即可用。

## 数据规模（2027 年硕士招生目录）

- **5,926 条** 招生记录
- 覆盖 **605 所**招生单位 / **271 个**专业
- 一行 = 一个「年份 + 学校 + 学院 + 专业 + 培养方式」的唯一组合，22 字段 schema
- 数据来源：中国研究生招生信息网「硕士专业目录」（官方口径），抓取日期 2026-10-26
- 缺失字段留空，显示为「—」，不填 0

## 本地运行

纯静态站点，任意 HTTP 服务器即可：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

也可以直接双击 `index.html`（部分浏览器对本地 JSON 有跨域限制，建议起服务）。

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)` → 保存。
约 1 分钟后访问 `https://<用户名>.github.io/<仓库名>/`。

## 数据更新

数据每年 9—10 月研招网发布新目录后更新一次：

```bash
# 1) 抓取（需研招网登录 Cookie）
python crawler/zsml_crawler.py --cookie-file crawler/cookie.txt --all --year 2027
# 2) 聚合导出（按「年份+学校+学院+专业+培养方式」去重）
python crawler/export_records.py --year 2027
# 3) 重新生成快照（同时写入 kaoyan-web 与 kaoyan-gh）
python kaoyan-web/gen_snapshot.py
# 4) 提交
git add -A && git commit -m "data: 更新 2027 招生目录" && git push
```

## 功能

- 关键词搜索（学校 / 学院 / 专业名 / 专业代码），结果分页加载
- 专业详情：历年招生计划、考试科目、招生口径
- 多专业横向对比（最多 4 个，本地存储）
- 科目变化标红提示

## 字段说明

| 字段 | 含义 |
| --- | --- |
| `year` | 招生年度（研究生入学年份） |
| `school` / `college` | 招生单位 / 院系所 |
| `major_code` / `major_name` | 专业代码 / 专业名称 |
| `study_mode` | 全日制 / 非全日制 |
| `degree_type` | 学术学位 / 专业学位 |
| `planned_total` | 专业招生计划（不含推免） |
| `source_url` | 研招网原始页面 |
| `notes` | 考试科目与招生口径原文 |
