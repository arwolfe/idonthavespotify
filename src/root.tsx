// @refresh reload
import { Suspense } from 'solid-js';
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';

import './root.css';

export default function Root() {
  const location = useLocation();

  const active = (path: string) => (path === location.pathname
    ? 'border-sky-600'
    : 'border-transparent hover:border-sky-600');

  return (
    <Html lang="en">
      <Head>
        <Title>I don't have spotify</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {
              /* <nav class="bg-sky-800">
                <ul class="container flex items-center p-3 text-gray-200">
                  <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                    <A href="/">Search</A>
                  </li>
                  <li class={`border-b-2 ${active('/stats')} mx-1.5 sm:mx-6`}>
                    <A href="/stats">Statistics</A>
                  </li>
                </ul>
              </nav> */
            }
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
        <script defer src="https://kit.fontawesome.com/f559975e2f.js" crossorigin="anonymous" />
      </Body>
    </Html>
  );
}
