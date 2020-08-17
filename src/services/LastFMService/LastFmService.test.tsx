import axios from "axios";
import {
  fetchSimilarArtists,
  BASE_URL,
  API_KEY,
} from "../LastFMService/LastFMService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchSimilarArtists", () => {
  it("fetches successfully similar artists from LastFM", async () => {
    const data = {
      similarartists: {
        artist: [
          {
            name: "ROT",
          },
          {
            name: "Facada",
          },
        ],
      },
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
});
