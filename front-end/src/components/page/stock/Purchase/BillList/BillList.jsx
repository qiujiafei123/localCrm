import genBasicPage from '../../../../HOC/genBasicPage'
import columns from './columns'
import apiInfo from './apiInfo'
import menus from './menus'
import Search from './Search'

export default genBasicPage({
  columns,
  apiInfo,
  menus,
  Search,
  displayTotal: true,
  displayLineBtn: false
  // lineBtns: [
  //   {
  //     id: '',
  //     name: '编辑',
  //     className: 'link'
  //   },
  // ]
})
