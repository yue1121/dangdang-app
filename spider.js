var Crawler = require("crawler")
var url = require('url')
var c = new Crawler({
    maxConnections:10,
    forceUTF8:true,
    incomingEncoding:'gb2312'
})
c.queue([{
    uri:'http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-1',
    callback:(err,result,$)=>{
        console.log($('title').text())
        $('.bang_list li').each((index,li)=>{
            console.log($(li).find('.name').text())
        })
    }
}])

