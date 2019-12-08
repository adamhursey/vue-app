import { shallowMount } from "@vue/test-utils";
import Users from "@/views/Users";

describe("UserView", () => {
  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(Users);

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});
