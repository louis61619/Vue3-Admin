export const contentConfig = {
  showIndexColumn: true,
  showSelectColum: true,
  title: '商品列表',
  propsList: [
    {
      prop: 'name',
      label: '商品名稱',
      minWidht: 80
    },
    {
      prop: 'oldPrice',
      label: '原價格',
      minWidht: 80,
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '現價格',
      minWidht: 80
    },
    {
      prop: 'imgUrl',
      label: '商品圖片',
      minWidht: 100,
      slotName: 'image'
    },
    {
      prop: 'status',
      label: '狀態',
      minWidht: 100,
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '創建時間',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新時間',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ]
}
