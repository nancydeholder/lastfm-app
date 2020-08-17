import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ArtistInfo } from "./ArtistInfo";
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
    <MemoryRouter initialentries="{['artist/test']}">
      <ArtistInfo />
    </MemoryRouter>
  );
  expect(component.find(ArtistInfo)).toHaveLength(1);
});
