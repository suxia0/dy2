const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 解析 JSON 请求体
app.use(express.json());

// 定义响应数据
const responseData = {
    "code": 200,
    "msg": "success",
    "comDY": "",
    "dypic": "https://uu.yyymvp.com/query?url=",
    "dyvid": "https://api.pearktrue.cn/api/video/douyin/?url=",
    "download": "✅已保存",
    "download2": "张图片到照片",
    "video": "✅视频已保存到照片",
    "failed": "❌保存失败请重试",
    "news": "⚠️解析失败请重试(疯果科技)",
    "low7": "⚠️该视频清晰度低于720,不提供下载(疯果科技)",
    "data": {
        "version": "公众号:疯果科技(1元)",
        "updata": "点击按钮更新⬇️(公众号:疯果科技)",
        "updat": "点击按钮更新⬇️⬇️⬇️(作者:疯果科技)",
        "newmsg": "公众号：疯果科技(1元)",
        "vcode": "419",
        "title": "⚠️盗用全家",
        "url": "https://www.icloud.com/shortcuts/72b2716453944c3abde59ff242332ae9"
    }
};

// 处理 GET 请求
app.get('/', (req, res) => {
    res.status(200).send('‼️王墨寻‼️妈妈被女儿被，全家光光🤬');
});

// 处理 POST 请求
app.post('/', (req, res) => {
    try {
        const { field1, field2 } = req.body;
        if (field1 === '王墨寻妈妈被+1' && field2 === '倒卖者妈妈被+1') {
            res.status(200).json(responseData);
        } else {
            res.status(200).send('‼️王墨寻‼️妈妈被女儿被，全家光光🤬');
        }
    } catch (error) {
        res.status(400).send('Invalid JSON in request body');
    }
});

// 处理不支持的请求方法
app.all('*', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
