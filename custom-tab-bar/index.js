//Component Object
const app = getApp()
Component({
    properties: {},
    data: {
        selected: 0,
        isShowTabBar: app.globalData.isShowTabBar,
        list: [],
        switchLock: false,
        color: '#7A7E83',
        selectedColor: '#3cc51f',
        iphoneModel: app.globalData.iphoneModel
    },
    lifetimes: {
        // 组件声明周期
        attached () {
            // 节点树完成后，可以使用setData渲染节点，但是无法操作节点
            this.tabBarList();
            // 获取tabbar高度值
            var obj = this.createSelectorQuery().in(this);
            obj.select('.tab-bar').boundingClientRect(function (res) {
                wx.setStorageSync('tabBarHeight', res.height)
            }).exec()
        }
    },
    methods: {
        // 事件方法
        tabBarList () {
            let tabBarList = []
            tabBarList = [
                {
                    index: 0,
                    iconClassName: 'iconfont icon icon-home',
                    text: '首页',
                    pagePath: '/pages/index/index'
                },
                {
                    index: 1,
                    iconClassName: 'iconfont icon icon-shangpin',
                    text: '商品',
                    pagePath: '/pages/cart/cart'
                },
                {
                    index: 2,
                    iconClassName: 'iconfont icon icon-nickname',
                    text: '我的',
                    pagePath: '/pages/user/user'
                },
            ];
            this.setData({
                list: tabBarList
            })
        },
        // 点击切换tabbar页面事件
        switchTap (event) {
            const path = event.currentTarget.dataset.path;
            const index = event.currentTarget.dataset.index;
            console.log(index, path)
            // 页面跳转
            wx.switchTab({
                url: path,
                fail: function () {

                },
                success: function () {

                },
                comlpete: function () {

                }
            })
        }
    },
    // created: function(){

    // },
    // attached: function(){

    // },
    // ready: function(){

    // },
    // moved: function(){

    // },
    // detached: function(){

    // },
});