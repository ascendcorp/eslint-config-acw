# eslint-config-acw

## Installing

pnpm

```
(
  export PKG=eslint-config-acw;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs pnpm add -D "$PKG@latest"
)
```

yarn

```
(
  export PKG=eslint-config-acw;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

## Releasing a new version

```
make release
```
