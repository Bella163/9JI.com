// import "./action";
import {
  REDUCE_GOOD,
  ADD_GOOD,
  REMOVE_GOOD,
  CHECK_ONE,
  CHECK_ALL,
  TOTAL_MONEY,
  ADD_TO_CART,
  EDIT_GOOD,
  CLOSE_BUY_BOX,
  STORE_AXIOS_DATA,
  SET_DETAIL_RENDERLIST,
  HAVE_GOOD
} from "./visibility";
const defaultState = {
  //renderlist:购物车渲染的列表
  renderlist: [],
  isAllChecked: false, //购物车是否全选
  cartTotalMoney: 0, //购物车总价
  cartTotalCount: 0, //购物车勾选的总商品数量
  isShowCartTotal: true, //是否显示购物车总价
  isShowDetailBuyBox: false, //是否显示详情页'加入购物车'的遮罩
  detailFooterInfo: "加入购物车", //详情页'加入购物车'遮罩的底部信息
  axiosData: null, //axios请求回来的所有数据
  detailRenderList: [], //详情页渲染列表数组
  haveGoods: false //购物车内是否有商品
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GOOD: //购物车单条商品加数量
      return {
        ...state,
        renderlist: action.payload
      };

    case REDUCE_GOOD: //购物车单条商品减数量
      return {
        ...state,
        renderlist: action.payload
      };

    case CHECK_ONE: //购物车勾选单条商品
      return {
        ...state,
        renderlist: action.payload.list,
        cartTotalCount: action.payload.len
      };

    case CHECK_ALL: //购物车商品全选
      return {
        ...state,
        isAllChecked: action.payload.allcheck,
        cartTotalCount: action.payload.len
      };

    case TOTAL_MONEY: //购物车总价
      return {
        ...state,
        cartTotalMoney: action.payload.Money,
        cartTotalCount: action.payload.len
      };

    case REMOVE_GOOD: //购物车删除商品
      return {
        ...state,
        renderlist: action.payload.renlist,
        cartTotalCount: action.payload.len
      };

    case EDIT_GOOD: //购物车编辑商品
      return {
        ...state,
        isShowCartTotal: action.payload
      };

    case CLOSE_BUY_BOX: //详情页关闭 "加入购物车"遮罩
      return {
        ...state,
        isShowDetailBuyBox: action.payload.showBuyBox,
        detailFooterInfo: action.payload.info
      };

    case STORE_AXIOS_DATA: //详情页存储请求回来的axios数据
      return {
        ...state,
        axiosData: action.payload
      };

    case SET_DETAIL_RENDERLIST: //设置 详情页的渲染数组
      return {
        ...state,
        detailRenderList: action.payload
      };
    case ADD_TO_CART: //详情页点击“加入购物车”，商品信息添加到购物车渲染数组
      return {
        ...state,
        renderList: action.payload
      };
    case HAVE_GOOD: //购物车判断渲染数组是否有商品信息
      return {
        ...state,
        haveGoods: action.payload
      };
    default:
      return state;
  }
};
