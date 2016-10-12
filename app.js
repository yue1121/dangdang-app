var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('./public'));

var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', './views');

// 引入common模块
const common = require('./common');
const bookTypes = common.bookTypes;


app.get('/types', (req, res) => {
    res.render('types', {
        types: bookTypes
    });
})

app.get('/list/:id', (req, res) => {
    var data = [];
    try{
      data = JSON.parse(fs.readFileSync(`./data/book_${req.params.id}.json`).toString());
    }
    catch(err){
      console.log(err);
    }

    // 筛选当前的数据分类信息
    var bookType = bookTypes.find((item) => {
        return item.id == req.params.id
    })
    res.render('list', {
        data: data,
        title: bookType.name
    });
})



app.listen(3000, () => {
    console.log('服务器运行于3000端口');
})
