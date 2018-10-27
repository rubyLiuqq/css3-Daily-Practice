const express=require('express');
const open=require('opn');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const app = express();

const filePath = path.resolve(__dirname, 'src');
const outputPath = path.join(filePath, 'index.html');

fs.readdir(filePath, (err, files) => {
  let iframeArray = [];

  files.forEach((filename) => {
    // 获取当前文件的绝对路径
    const filedir = path.join(filePath, filename);
    // 根据文件路径获取文件信息，返回一个fs.Stats对象
    fs.stat(filedir, (error, stats) => {
      if (stats.isDirectory()) {
        // 读取每个文件夹
        iframeArray.push(`<iframe src="${path.join(filename, 'index.html')}" width="30%" height="450"></iframe>`);
      }
    })
  });

  fs.readFile('./module.html', 'utf-8', (err, html) => {
    const $ = cheerio.load(html);
    $('.content').append(iframeArray.join(' '));

    fs.exists(outputPath, (exists) => {
      if (exists) {
        //  删除
        fs.unlink(outputPath, (error) => {
          if (error) {
            return false;
          }
        });
      }

      fs.writeFile(__dirname + "/src/index.html", $.html(), () => {
        app.use(express.static(path.join(__dirname, 'src')));
        app.listen(8090);

        open("http://localhost:8090");
      });
    });
  });
});
