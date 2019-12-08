import { shallowMount } from "@vue/test-utils";
import Users from "@/views/Users";

describe("UserView User Render ", () => {
  it("renders the User component", () => {
    const wrapper = shallowMount(Users);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
