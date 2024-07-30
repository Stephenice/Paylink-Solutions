// UserDetail.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { vitest, describe, it, expect, beforeEach } from "vitest";
import axios from "axios";
import UserDetail from "./UserDetail";
import { MemoryRouter, Route, Routes } from "react-router-dom";

vitest.mock("axios");
const mockedAxios = vitest.mocked(axios, { shallow: false });

describe("UserDetail Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  it("should fetch and display user details", async () => {
    const mockUser = {
      id: 1,
      name: "John Doe",
      socialMediaHandle: "@johndoe",
      profileImgSrc: "https://example.com/profile.jpg",
      bio: "Software Engineer at OpenAI",
      location: "San Francisco, CA",
      website: "https://johndoe.com",
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockUser });

    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <Routes>
          <Route path="/user/:userId" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Assert that loading indicator is shown
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the API call to complete and the component to re-render
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:3000/user/1"
      );
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });

  it("should display an error message on API failure", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <Routes>
          <Route path="/user/:userId" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Assert that loading indicator is shown
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the API call to complete and the component to re-render
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:3000/user/1"
      );
      expect(screen.getByText(/Error fetching user data/i)).toBeInTheDocument();
    });
  });

  it('should display "User not found" message when user data is null', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: null });

    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <Routes>
          <Route path="/user/:userId" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Assert that loading indicator is shown
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the API call to complete and the component to re-render
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:3000/user/1"
      );
      expect(screen.getByText("User not found")).toBeInTheDocument();
    });
  });
});
