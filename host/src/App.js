import React, { Suspense } from "react";
import Introduction from './Introduction';

import Heading from "remote1/Heading";
const Button = React.lazy(() => import("remote1/Button"));

export default function App() {
  return <div>
    <Introduction />
    <Suspense fallback={<></>}>
      <Heading />
    </Suspense>
    <Suspense fallback={<></>}>
      <Button />
    </Suspense>
    </div>
}