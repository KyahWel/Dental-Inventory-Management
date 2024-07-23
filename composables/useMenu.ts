export const useSidebarMenu = () => {
  const route = useRoute()

  const isActivePage = (path:String):Boolean => {
    return path == route.path
  }
  const routes = [
    {icon:'BarChartOutlined', label:'Dashboard', path:'/app/dashboard'},
    {icon:'DollarOutlined', label:'Prices', path:'/app/prices'},
    {icon:'DropboxOutlined', label:'Stocks', path:'/app/stocks'},
    {icon:'FundOutlined', label:'Sales', path:'/app/sales'}
  ]


  return {
    routes,
    isActivePage
  }
}