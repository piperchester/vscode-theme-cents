## Cents 💰
Dark theme that's a smart investment in productivitiy and reflects a sensible brand.

Download from the **[VS Code marketplace][market]**, or install from VS Code,

1. Type `cmd+shift+p` to open the command palette.
1. Type "**ext**" and select "**Extensions: Install Extensions**" to open the Extensions sidebar.
1. Type "**cents**" in the Extensions sidebar to find the theme (look for the 💰).

### Build

```shell
yarn
yarn build  # repackages .vsix file
yarn clean  # wipes .vsix files
```

### Test

Once we have a `.vsix` package, we're able to install the theme.

From VS Code,
1. `cmd+shift+p` to open command palette
1. Type "**ext**" and select "**Extensions: Install Extensions**"
1. Click the `...` menu in the upper right corner of the sidebar
1. Choose "**Install from VSIX**"
1. From Finder, select the `.vsix` file that we generated in `npm run build`. Once selected, it should appear in the extensions sidebar
1. Done!

To toggle the theme go to `Preferences > Color Theme > Cents`. Search for "**cents**" in the Extensions sidebar to reinstall.

Note: if you're using the [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) extension, that will take precedence over the theme. Don't be alarmed if you don't see your changes being propagated as expected.

### Contribute ♻️
Want to improve Cents? It's super easy to.

All you need to do is replace the hex values in `cents.js`
with valid `colors` design tokens. For example,

```javascript
// cents.js
const colors = {
  blueLighter : '#9DCDFA',
}

module.exports = {
    colors: {
        "badge.background": "#2e363c",  // this should be using a color.
    }
}
```

<details><summary>How do I publish this?</summary>

### Publish

```sh
vsce publish
```

or visit https://marketplace.visualstudio.com/manage/publishers/piperchester.

</details>

---

Cents was inspired by the awesome [`Any Dark`][ad] and [`One Dark Pro`][odp] projects.

> It just makes sense!

[market]: https://marketplace.visualstudio.com/items?itemName=piperchester.vscode-cents-theme
[ad]: https://github.com/teabyii/vscode-ayu
[odp]: https://github.com/Binaryify/OneDark-Pro