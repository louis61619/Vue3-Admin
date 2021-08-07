import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  formItems: [
    {
      label: '用戶名',
      placeholder: '請輸入用戶名'
    },
    {
      label: '密碼',
      placeholder: '請輸入用戶名'
    },
    {
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
