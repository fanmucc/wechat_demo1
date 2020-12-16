import Toast from '@vant/weapp/toast/toast';
Page({
    data: {
        value: ''
    },
    onShow () {
        wx.getClipboardData({
            success: (res) => {
                Toast('轻抖已经读取您剪切板上的内容~');
                this.setData({
                    value: res.data
                })
            },
            fail: function (err) {
                console.log(err)
            }
        })
    }
})