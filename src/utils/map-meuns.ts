import { RouteRecordRaw } from 'vue-router'

export function mapMenuRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先加載所有的route
  const allRoutes: RouteRecordRaw[] = []
  // 第二個參數為是否遞規進行查找
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((path) => {
    const route = require('../router/main' + path.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 對所有的route進行篩選
  // type === 1 取出children
  // type === 2 對應url

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
