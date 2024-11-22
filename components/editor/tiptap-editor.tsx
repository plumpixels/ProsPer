"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { EditorToolbar } from "./editor-toolbar";

export function TipTapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Highlight,
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <EditorToolbar editor={editor} />
      <div className="min-h-[500px] w-full border rounded-lg p-4 mt-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}