// 定义响应数据
const responseData = {
    wm: "‼️王墨寻‼️妈妈被轮奸女儿被轮奸，全家死光光🤬",
    md: "‼️接口每调用一次王墨寻的妈妈被轮奸女儿被轮奸一次🤬",
    code: 200,
    msg: "success",
    comDY: "",
    dy-pic1: "https://parse.shuyuz.com/api/v2/douyin/info",
    get-dy-pic1: "http://api.yujn.cn/api/dy_jx.php?msg=",
    get-d1: "images",
    get-dy-pic2: "https://api.mmp.cc/api/Jiexi?url=",
    get-d2: "image_url",
    dy-pic2: "&kl=",
    dyvid: "https://www.hhlqilongzhu.cn/api/sp_jx/tuji.php?url=",
    dyvid2: "https://api.mmp.cc/api/Jiexi?url=",
    dy-live: "https://a.jiejing.fun/dylive?url=",
    dy-live2: "&kl",
    lj-pic: "images",
    lj-vid: "url",
    lj-vid2: "video_url_HQ",
    live-url: "https://qsy.jiejing.fun",
    live-vs: "31",
    word: "keyword",
    download: "✅已保存",
    download2: "张图片到照片",
    video: "✅视频已保存到照片",
    failed: "❌保存失败请重试",
    news: "⚠️解析失败请重试(疯果科技)",
    low7: "⚠️该视频清晰度低于720,不提供下载(疯果科技)",
    data: {
        version: "公众号:疯果科技1121",
        updata: "点击按钮更新⬇️(公众号:疯果科技)",
        updat: "点击按钮更新⬇️⬇️⬇️(作者:疯果科技)",
        newmsg: "公众号：疯果科技",
        vcode: "419",
        title: "⚠️全家",
        url: "https://www.icloud.com/shortcuts/d1be1643aef044199934378f5b1c0a10",
        md: "‼️接口每调用一次王墨寻的妈妈被轮奸女儿被轮奸一次🤬"
    }
};

// Vercel API 路由处理函数
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).send('‼️王墨寻‼️妈妈被轮奸+1');
    } 
    else if (req.method === 'POST') {
        try {
            const { field1, field2 } = req.body;

            if (field1 === '王墨寻妈妈被轮奸+1' && field2 === '倒卖妈妈被轮奸+1') {
                res.status(200).json(responseData);
            } else {
                res.status(200).send('‼️王墨寻‼️妈妈被轮奸+1');
            }
        } catch (error) {
            res.status(400).send('Invalid JSON in request body');
        }
    } 
    else {
        res.status(405).send('Method Not Allowed');
    }
}
