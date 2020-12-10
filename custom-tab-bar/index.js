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
            this.tabBarList()
        }
    },
    methods: {
        // 事件方法
        tabBarList () {
            console.log('我被触发了')
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
                    iconClassName: 'iconfont icon icon-home',
                    text: '购物中心',
                    pagePath: '/pages/cart/cart'
                },
                {
                    index: 2,
                    iconClassName: 'iconfont icon icon-home',
                    text: '个人中心',
                    pagePath: '/pages/user/user'
                },
            ];
            this.setData({
                list: tabBarList
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