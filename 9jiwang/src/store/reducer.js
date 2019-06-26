// import "./action";
import {
  REDUCE_GOOD,
  ADD_GOOD,
  REMOVE_GOOD,
  CHECK_ONE,
  CHECK_ALL,
  TOTAL_MONEY,
  INIT_TO_CART,
  EDIT_GOOD
} from "./visibility";
const defaultState = {
  isAllChecked: false,
  renderlist: [
    {
      imgUrl:
        "https://img2.ch999img.com/pic/product/440x440/20190606125524855.jpg",
      title: "TP-LINK TL-WDA6332RE信号放大器 1200M信号放大",
      isChecked: false,
      count: 1,
      price: "119"
    },
    {
      imgUrl:
        "https://img2.ch999img.com/pic/product/440x440/20181022184109706.jpg",
      title: "乐范揉捏按摩靠枕 古典灰",
      isChecked: false,
      count: 1,
      price: "369"
    },
    {
      imgUrl:
        "https://img2.ch999img.com/pic/product/440x440/20170517131241467.jpg",
      title: "Beats solo3 wireless 蓝牙耳机 黑色",
      isChecked: false,
      count: 1,
      price: "1599"
    }
  ],
  cartTotalMoney: 0,
  cartTotalCount: 0,
  isShowCartTotal: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_GOOD":
      return {
        ...state,
        renderlist: action.payload
      };
      break;
    case "REDUCE_GOOD":
      return {
        ...state,
        renderlist: action.payload
      };
      break;
    case "CHECK_ONE":
      return {
        ...state,
        renderlist: action.payload.list,
        cartTotalCount: action.payload.len
      };
      break;
    case "CHECK_ALL":
      return {
        ...state,
        isAllChecked: action.payload.allcheck,
        cartTotalCount: action.payload.len
      };
      break;
    case "TOTAL_MONEY":
      return {
        ...state,
        cartTotalMoney: action.payload.Money,
        cartTotalCount: action.payload.len
      };
      break;
    case "REMOVE_GOOD":
      return {
        ...state,
        renderlist: action.payload
        // isShowCartTotal:action.payload.show
      };
      break;
    case EDIT_GOOD:
      return {
        ...state,
        // renderlist: action.payload
        isShowCartTotal:action.payload
      };
      break;
    default:
      return state;
  }
};
