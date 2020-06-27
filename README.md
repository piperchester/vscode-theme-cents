## Cents 💰
> It just makes sense!

Dark theme that's a smart investment in productivitiy and reflects a sensible brand.

Cents is **[available in the VS Code marketplace][market]**. To install,

1. Type `cmd+shift+p` to open the command palette.
1. Type "**ext**" and select "**Extensions: Install Extensions**" to open the Extensions sidebar.
1. Type "**cents**" in the Extensions sidebar to find the theme. (_Hint: look for th\e 💰_)

### Contribute ♻️
Help improve Cents! Open an issue or pull request by tweaking `cents.json`.

<details>
<summary>How do I build this locally?</summary>

### Build

```shell
yarn
yarn build  # repackages .vsix file
yarn clean  # wipes .vsix files
```

### Install

Once we have a `.vsix` package, we're able to install the theme.

From VS Code,
1. `cmd+shift+p` to open command palette
1. Type "**ext**" and select "**Extensions: Install Extensions**"
1. Click the `...` menu in the upper right corner of the sidebar
1. Choose "**Install from VSIX**"
1. From Finder, select the `.vsix` file that we generated in `npm run build`. Once selected, it should appear in the extensions sidebar
1. Done!

To toggle the theme go to `Preferences > Color Theme > Cents`. Search for "**cents**" in the Extensions sidebar to reinstall.

### Publish

```sh
vsce publish
```

or visit https://marketplace.visualstudio.com/manage/publishers/piperchester.

</details>

### Recongition
Cents was loosely based on the awesome [`Any Dark`][ad] and [`One Dark Pro`][odp] projects.

[market]: https://marketplace.visualstudio.com/items?itemName=piperchester.vscode-cents-theme
[ad]: https://github.com/teabyii/vscode-ayu
[odp]: https://github.com/Binaryify/OneDark-Pro
