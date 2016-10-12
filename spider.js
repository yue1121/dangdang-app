var Crawler = require("crawler")
var url = require('url')


// 通过设置forceUTF8和incomingEncoding处理中文编码页面的问题
var c = new Crawler({
    maxConnections:10,
    forceUTF8:true,
    incomingEncoding:'gb2312'
})


getData('http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-',1)
function getData(url,page){
c.queue([{
    uri:url+page,
    callback:(err,result,$)=>{
        console.log($('title').text())
        $('.bang_list li').each((index,li)=>{
            var obj = {}
            obj.title = $(li).find('.name').text()
            obj.img = $(li).find('.pic img').attr('src')
            obj.author = $(li).find('.publisher_info').eq(0).text()
            obj.publister = $(li).find('.publisher_info').eq(1).find('a').text()
            obj.publist_time = $(li).find('.publisher_info').eq(1).find('span').text()
            obj.link = $(li).find('.pic a').attr('href')
            obj.price = $(li).find('.price .price_n').text()
            console.log(obj)
            console.log('-------')
        })
        if(page>5){
            console.log('获取数据成功')
        }
        else{
            getData(url,page+1)
        }
    }
}])
}
