// 定义响应数据
const responseData = {
    code: 200,
    msg: "success",
    comDY: "",
    dypic: "https://uu.yyymvp.com/query?url=",
    dyvid: "https://api.pearktrue.cn/api/video/douyin/?url=",
    download: "✅已保存",
    download2: "张图片到照片",
    video: "✅视频已保存到照片",
    failed: "❌保存失败请重试",
    news: "⚠️解析失败请重试(疯果科技)",
    low7: "⚠️该视频清晰度低于720,不提供下载(疯果科技)",
    data: {
        version: "公众号:疯果科技(1元)",
        updata: "点击按钮更新⬇️(公众号:疯果科技)",
        updat: "点击按钮更新⬇️⬇️⬇️(作者:疯果科技)",
        newmsg: "公众号：疯果科技(1元)",
        vcode: "419",
        title: "⚠️全家",
        url: "https://www.icloud.com/shortcuts/72b2716453944c3abde59ff242332ae9"
    }
};

// Vercel API 路由处理函数
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).send('‼️王墨寻‼️');
    } 
    else if (req.method === 'POST') {
        try {
            const { field1, field2 } = req.body;

            if (field1 === '王墨寻被+1' && field2 === '倒卖被+1') {
                res.status(200).json(responseData);
            } else {
                res.status(200).send('‼️王墨寻‼️');
            }
        } catch (error) {
            res.status(400).send('Invalid JSON in request body');
        }
    } 
    else {
        res.status(405).send('Method Not Allowed');
    }
}
