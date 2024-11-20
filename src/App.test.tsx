import React, { act } from "react";
import { createRoot } from "react-dom/client";
import AutoComplete from "./components/AutoComplete/AutoComplete";

it("renders the AutoComplete component with an input field", async () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  await act(async () => {
    const root = createRoot(div);
    root.render(<AutoComplete />);
  });

  const input = div.querySelector("[data-testid='input-box']");
  expect(input).not.toBeNull();
});
