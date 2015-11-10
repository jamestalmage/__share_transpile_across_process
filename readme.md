Proof of concept for sharing Babel transpilation across processes

```sh
$ git clone git@github.com:jamestalmage/__share_transpile_across_process.git
$ cd __share_transpile_across_process
$ node test1.js

# Output

....................................................................................................
Launched server, loaded babel, plus:
100 children forked and loaded two transpiled dependencies each in 3324ms.

```

Using a long running background server on Dev machines improves the situation more

```sh
# launch the background server
$ node server

# switch to a new terminal tab

$ node test2.js

# Output
            
....................................................................................................
Using background server:
100 children forked and loaded two transpiled dependencies each in 2918ms.
```

Further Enhancements:
Forking child processes is costly. Advanced coordination might improve efficiency further:

* Static code analysis for `require` calls, and batching with known dependencies in the same response.
* For large test suites, cache to disk and provide forks with a list.
* Caching between test runs (using last modified metadata on files).

# Debugging

If something is not working launch the server (`node server.js`) and then launch a single run of `forked-child`

```sh
$ node forked-child.js $(which curl)
```

## License

MIT © [James Talmage](http://github.com/jamestalmage)
