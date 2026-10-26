// 考研择校查询 - 运行配置
// mode: "cloud" = 实时查询云数据库（WorkBuddy 发布版）
//       "snapshot" = 读取本地 data/snapshot.json（GitHub Pages 静态版）
window.KAOYAN_CONFIG = {
    mode: "snapshot",
    endpoint: 'https://kaoyan-navigator-web.app.workbuddy.host',
    oauthRelayBaseUrl: 'https://www.workbuddy.cn/v2/as/genie-baas/oauth',
    publishableKey: 'wbpk_yv47rsk1gnVLk8BhEvpVgj_kjrJi3M0rDlqeM0uVEwwPQ5RZGQvw66P',
};
