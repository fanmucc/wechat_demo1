const app = getApp()
Component({
    properties: {
        backgroundColor: {
            type: String,
            value: '#F0F4F8'
        },
        home: {
            type: Boolean,
            value: false
        },
        back: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        screen: {
            type: Boolean,
            value: true
        },
        borderBottom: {
            type: Boolean,
            value: true
        }
    },
    data: {
        height: 0,
        left: 0,
        top: 0,
        boxHeight: 0,
        width:0,
        textWidth: 0
    },
    lifetimes: {
        attached () {
            this.reLeftBoxPagePosition();
            // 获取tabbar高度值
            var obj = this.createSelectorQuery().in(this);
            obj.select('.custom-navigation').boundingClientRect(function (res) {
                wx.setStorageSync('navigationHeight', res.height)
            }).exec()
        }
    },
    methods: {
        reLeftBoxPagePosition () {
            const height = app.globalData.getMenuButton.bottom + 10;
            const left = app.globalData.screenWidth - app.globalData.getMenuButton.right;
            const boxHeight = app.globalData.getMenuButton.height;
            const width = app.globalData.getMenuButton.width;
            const top = app.globalData.getMenuButton.top;
            const textWidth = app.globalData.screenWidth - app.globalData.getMenuButton.width * 2 - 20
            this.setData({
                height,
                left,
                boxHeight,
                width,
                top,
                textWidth
            })
        }
    }
})