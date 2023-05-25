const cors = require('cors');
const http = require('http');
const fs = require('fs');

function readJsonFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const obj = JSON.parse(data);
    return obj;
  } catch (err) {
    throw err;
  }
};

// 创建服务器
const server = http.createServer((req, res) => {
  // 为了解决跨域并且解决重复发送的问题这样使用
  cors()(req, res, () => {
    // 请求处理逻辑
    console.log("server in");
    // 设置响应头，允许来自任意源的跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 设置响应头
    res.setHeader('Content-Type', 'application/json')

    // 读取mock数据,url是路径,data是数据
    const user = readJsonFile("./data/user.json");
    const people = readJsonFile("./data/people.json");


    // 根据请求路径返回不同的 mock 数据
    // url:/login
    /*z*/if (req.url === user.url) {
      console.log("in:", user.url);
      const ret = user.data;
      res.statusCode = 200;
      res.end(JSON.stringify(ret));
      console.log("out:", user.url);
    }
    // url:
    else if (req.url === people.url) {
      console.log("in:", people.url);
      const ret = people.data;
      res.statusCode = 200;
      res.end(JSON.stringify(ret));
    }
    // url:其他
    else {
      console.log("404 for:", req.url);
      res.statusCode = 404;
      res.end(JSON.stringify({message: 'mock server:Not found'}));
    }
  });// cors
});

// 启动服务器并监听指定端口
const port = 9703;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
