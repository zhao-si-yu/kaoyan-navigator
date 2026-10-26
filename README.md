# 考研择校查询（网页版）

考研院校专业历年数据查询：复试线、统考名额、报录比、录取分数分布等 12 项指标，支持多年对比。

**在线版（实时数据）**：数据来自研招网硕士专业目录爬虫管道 + 云数据库，实时更新。

本仓库为 **GitHub Pages 静态版**：数据打包在 `data/snapshot.json`（定期由爬虫重新生成），无需后端、无需登录。

## 数据规模

- 覆盖 572 所招生单位 / 216 个专业（持续增长，全量抓取进行中）
- 一行 = 一个「年份 + 学校 + 学院 + 专业」，22 字段 schema

## 本地运行

纯静态站点，任意 HTTP 服务器即可：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

## 数据更新

```bash
# 爬虫（需研招网登录 Cookie，见 crawler/zsml_crawler.py）
python crawler/zsml_crawler.py --cookie-file crawler/cookie.txt --all
# 重新生成快照
cd kaoyan-web && python gen_snapshot.py
# 拷贝到本仓库后提交推送即可
```

## 功能

- 关键词搜索（学校 / 学院 / 专业名 / 专业代码）
- 专业详情：近 3 年逐年 12 项指标，缺失数据显示「—」（区别于 0）
- 多专业横向对比（最多 4 个，本地存储）
- 科目变化标红提示
