View at: https://cskelton77.github.io/pokedex

Upgrades

1. Use this: https://github.com/monbrey/pokeapi-typescript
    This seems like a much better fully typed API wrapper.
    Knowing that this existed made me slightly lazy on 
    typing the API responses, as ordinarily if something
    like this exists I would just use it. I typed a few
    to demonstrate what it would look like, but gave up
    after a while.

2. Add in some loading indicators
    Not every API loads at the same time, there could easily
    be some spinning loaders implemented to indicate that
    the API is returning data. The API is mostly fast enough
    that this is a lower priority issue.

3. Add better handling for failed searches
    Failed searches 404 and the app does nothing, maybe it
    should display a message that no result was found.

4. Add mobile friendly CSS
    Priority was on mimicking the "actual" device so this has
    led to a very non-responsive design that only works on
    a horizontal phone. I'm sure I could think of a way to
    represent this on a one-screen device but I have not.

5. Evolution feature does not handle non-linear evolutions.
    Eevee can evolve into multiple Pokemon, presumably some
    other pokemon also do this, and the evolution chain reader
    does not handle this well, as it is expecting an a->b->c or
    similar chain. This could be updated, but it would involve
    redesigning the screen, as the layout of the app would not
    easily display this either. 

6. The CSS needs a little cleannup.