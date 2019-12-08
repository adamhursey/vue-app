import { shallowMount } from "@vue/test-utils";
import User from "@/components/User";

describe("UserView User Render ", () => {
  it("renders the User component", () => {
    const wrapper = shallowMount(User);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
