---
title: Markdown Features
description: The supported markdown features in LIKO-12's website.
---

- All the standard features in the [CommonMark spec](spec.commonmark.org)

- Code highlighting is supported using [highlight.js](https://highlightjs.org/)

- Absolute links are automatically converted into relative ones.

- You can link to markdown documents,
and they'll be automatically translated into `.html` links.

- Inline HTML is allowed, but won't be processed for anything.

- Emojis tags like :grin: `:grin:` are supported.
The website uses [Twemoji](https://twemoji.twitter.com/) to display them.

- Keyboard shortcuts are supported using `[[]]`
Example: [[Ctrl-C]] `[[Ctrl-C]]`.

- There are some extended emojis: LIKO-12's icon and macOS keyboard symbol for now.

- The documents can include some metadata (and they should) in a header
formatted in YAML, example:

```yaml
---
title: It'll be inserted as a level 1 heading in the document, and used as a default window title.
window_title: Can be used when title is ommited, or to override the title, defaults to the document path.
description: The description of the document, showed in link previews in many modern chat systems.
keywords:
    - Used to boost
    - Search engines
    - Please use them
    - When possible
---

## The website content
```

> All the fields are optional. But at least try to specify the title, and the description please.

## Extended Emojis

| Name    | Emoji     | Emoji Tag   |
|:------- |:---------:|:-----------:|
| LIKO-12 | :liko-12: | `:liko-12:` |

### macOS keyboard symbols

| Name    | Symbol  | Shortcut    | Emoji Tag  |
|:------- |:-------:|:-----------:|:----------:|
| Command | :cmd:   | [[:cmd:]]   | `:cmd:`    |
| Alt     | :alt:   | [[:alt:]]   | `:alt:`    |
| Shift   | :shift: | [[:shift:]] | `:shift:`  |
| Ctrl    | :ctrl:  | [[:ctrl:]]  | `:ctrl:`   |
