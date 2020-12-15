Page({
    data: {
        btn: true,
        value: '',
        placeholder: {
            'daren': '请输入达人名、抖音号、链接',
            'video': '请输入视屏号、链接'
        }
    },
    btnTap (event) {
        console.log(event)
        const btn = this.data.btn
        const value = event.currentTarget.dataset.search;
        if (btn && value == 'daren') return
        else if (!btn && value == 'video') return
        else {
            if (value == 'daren') {
                this.setData({
                    btn: true
                })
            } else {
                this.setData({
                    btn: false
                })
            }
        }
        
    }
})