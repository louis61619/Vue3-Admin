import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 6, // 24/6 = 4 1920為一排4個
    lg: 8,
    md: 12,
    sm: 24,
    xm: 24
  },
  formItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '請輸入id'
    },
    {
      field: 'name',
      label: '用戶名',
      placeholder: '請輸入用戶名'
    },
    {
      field: 'password',
      label: '密碼',
      type: 'password',
      placeholder: '請輸入用戶名'
    },
    {
      field: 'sport',
      label: '喜歡的運動',
      placeholder: '請輸入用戶名',
      type: 'select',
      options: [
        {
          label: '籃球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'soccer'
        },
        {
          label: '羽毛球',
          value: 'tennis'
        }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '創建時間',
      otherOptions: {
        startPlaceholder: '開始時間',
        endPlaceholder: '結束時間',
        type: 'daterange'
      }
    }
  ]
}
