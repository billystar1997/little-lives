import Faker from "faker";

const albumsReducer = (state = [], action) => {
  if(state.length == 0){
    for (let i = 0; i < 10; i++) {
      const album = {
        id: Faker.random.uuid(),
        image: Faker.image.image(),
        title: Faker.lorem.slug(),
        isLike: false
      };
        state.push(album);
    } 
  }
  switch (action.type) {
    case "ADD_ALBUM":
      return state.concat([action.album]);
    default:
      return state;
  }
};
export default albumsReducer;
