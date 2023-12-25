"use client"; // this registers <Editor> as a Client Component

import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

const customDarkTheme = {
  ...darkDefaultTheme,
  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: darkDefaultTheme.colors.editor.text,
      background: "#020817",
    },
  },
};

const editorTheme = {
  light: lightDefaultTheme,
  dark: customDarkTheme,
};

type siteTheme = "dark" | "light";

// Our <Editor> component we can reuse later
export default function Editor() {
  const { theme, systemTheme } = useTheme();
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({});

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      theme={
        editorTheme[
          theme === "system" && systemTheme ? systemTheme : (theme as siteTheme)
        ]
      }
    />
  );
}
