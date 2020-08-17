import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ArtistWidget } from "./ArtistWidget";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => {
  return {
    useLocation: () => ({
      state: {
        name: "test",
      },
    }),
    useHistory: () => ({
      location: { state: { replace: jest.fn() } },
    }),
  };
});

test("should show ArtistWidget component for similar-artist route (using memory router)", () => {
  const component = mount(
    <MemoryRouter initialentries="{['similar-artists/?q=test']}">
      <ArtistWidget />
    </MemoryRouter>
  );
  expect(component.find(ArtistWidget)).toHaveLength(1);
});
