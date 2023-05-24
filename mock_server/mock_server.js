const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'application/json');

  // 根据请求路径返回不同的 mock 数据
  /*z*/if (req.url === '/api/users') {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } 
  else if (req.url === '/api/posts') {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(posts));
  } 
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// 启动服务器并监听指定端口
const port = 5173;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

