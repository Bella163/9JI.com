const defaultState = {
  author: "梁振强",
  skill: [1, 2, 3],
  bool: false,
  goodsList: [{}],
  getSearchValue: "", //输入框的值
  imgUrl: "",
  status: false,
  isShowGallery: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SETAUTHOR":
      return {
        ...state,
        author: action.author,
        goodsList: action.goodsList
      };
    default:
      return state;
  }
};
