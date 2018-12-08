const db = wx.cloud.database()
const conference_room_list = db.collection('conference_room_list')

Page({
  db.collection('conference_room_list').add({
    data: {
      conference_room_capability: "100",
    },
    success: function (res) {
      console.log(res)
    }
  })
})
