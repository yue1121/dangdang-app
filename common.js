/**
 * common模块 把一些通用的配置信息写入此处
 */

// 书籍分类数据
// 数据说明
//  id          分类id
//  name        分类名字
//  base_url    根地址(用于拼接分页数据的地址)
//  page_count  总的获取数据页数
const bookTypes = [{
    id: "ertong",
    name: "儿童",
    base_url:'http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-',
    page_count:5
}, {
    id: "xiaoshuo",
    name: "小说",
    base_url:'http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-',
    page_count:5
}, {
    id: "lishi",
    name: "历史",
    base_url:'http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-',
    page_count:5
}];

module.exports = {bookTypes:bookTypes}
