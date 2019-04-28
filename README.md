## Cents 💰
> A VS Code theme that just makes sense!

Dark theme that's a smart investment in productivitiy and reflects a sensible brand.

Cents is **[available in the VS Code marketplace][market]**. To install,

1. Type `cmd+shift+p` to open the command palette.
1. Type "**ext**" and select "**Extensions: Install Extensions**" to open the Extensions sidebar.
1. Type "**cents**" in the Extensions sidebar to find the theme. (_Hint: look for the 💰_)

### Contribute ♻️
Help improve Cents! Open an issue or pull request by tweaking `cents.json`.

<details>
<summary>How do I build this locally?</summary>

### Build

```shell
# after cloning
yarn
yarn build  # repackages .vsix file
yarn clean  # wipes .vsix files
```

### Install

Once we have a `.vsix` package (after running `npm run build`), we're able to install the theme.

From VS Code,
1. `cmd+shift+p` to open command palette
1. Type "**ext**" and select "**Extensions: Install Extensions**" to open the Extensions sidebar
1. Click the `...` menu in the upper right corner of the sidebar
1. Choose "**Install from VSIX**"
1. From Finder, select the `.vsix` file that we generated in `npm run build`. Once selected, it should appear in the extensions sidebar
1. Done!

If you need to toggle to the theme, go to `Preferences > Color Theme > Cents`. If you need to reinstall, search for "**cents**" in the Extensions sidebar.
</details>

### Recongition
Cents was loosely based on the awesome [`Any Dark`][ad] and [`One Dark Pro`][odp] projects.

[market]: https://marketplace.visualstudio.com/items?itemName=piperchester.vscode-cents-theme
[ad]: https://github.com/teabyii/vscode-ayu
[odp]: https://github.com/Binaryify/OneDark-Pro
