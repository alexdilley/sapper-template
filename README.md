# request-scope stores

Demonstrating three different mechanisms for using stores during SSR, each with their own caveats:

* `session` store.
  * (+) The only solution that does not share state with other, concurrent requests.
  * (-) Feels like a misuse of the store: it could end-up being used for _all the things_.
* Module-level store.
  * (+) The standard/most-versatile store solution.
  * (-) Suffers from cross-contamination by concurrent requests (see `ab` test below).
* `context` store.
  * (+) Scoped to the request.
  * (-) Does not honour mutation of store by child components during SSR (bug? [#917](https://github.com/sveltejs/sapper/issues/917))

## Demo:

```sh
npm install
npm run dev
```

* 'View Page Source' to see what was rendered on the server; note context store is empty until hydrated.
* Jump between 'about' page and 'home' to install further items into the store.

To highlight concurrency issues (uses Apache Bench):

```sh
ab -n 3 -c 2 -v 2 http://localhost:3000/
```

And note that, on occasion, the module-level store contains items from other request(s).

## Weirdness

* Root index route `preload` is run twice when revisiting after navigating to 'about' page.
