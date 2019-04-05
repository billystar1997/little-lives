import Faker from "faker";

const imagesReducer = (state = [], action) => {
  if (state.length == 0) {
    for (let i = 0; i < 10; i++) {
      const image = {
        id: Faker.random.uuid(),
        fileSrc: Faker.image.image(),
        description: Faker.lorem.slug(),
        isLove: false
      };
      state.push(image);
    }
  }
  switch (action.type) {
    case "ADD_IMAGE":
      return state.concat([action.image]);
    default:
      return state;
  }
};
export default imagesReducer;
