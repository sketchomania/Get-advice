import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

serviceWorkerRegistration.register();
