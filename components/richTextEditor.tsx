"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import {
    Bold,
    Italic,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Code,
    Quote,
    Link2,
    Image as ImageIcon,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Undo2,
    Redo2,
    Minus,
    Strikethrough,
} from "lucide-react";

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const [linkUrl, setLinkUrl] = useState("");
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [showImageModal, setShowImageModal] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
            }),
            Image.configure({
                allowBase64: true,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Subscript,
            Superscript,
            HorizontalRule,
        ],
        content: value,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    const buttonClass =
        "p-2 rounded-md hover:bg-gray-200 transition text-gray-700 disabled:opacity-50 cursor-pointer";
    const activeButtonClass =
        "p-2 rounded-md bg-blue-200 text-blue-900 font-semibold transition";

    const addLink = () => {
        if (linkUrl) {
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: linkUrl })
                .run();
            setLinkUrl("");
            setShowLinkModal(false);
        }
    };

    const addImage = () => {
        if (imageUrl) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
            setImageUrl("");
            setShowImageModal(false);
        }
    };

    return (
        <div className="border rounded-lg border-gray-300 overflow-hidden bg-white">
            <div className="flex flex-wrap gap-1 border-b border-gray-300 bg-gray-50 p-2">
                {/* Undo/Redo */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    className={buttonClass}
                    type="button"
                    title="Undo (Ctrl+Z)"
                    disabled={!editor.can().undo()}
                >
                    <Undo2 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    className={buttonClass}
                    type="button"
                    title="Redo (Ctrl+Y)"
                    disabled={!editor.can().redo()}
                >
                    <Redo2 size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Text Format */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Bold (Ctrl+B)"
                >
                    <Bold size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Italic (Ctrl+I)"
                >
                    <Italic size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Strikethrough"
                >
                    <Strikethrough size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Headings */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={
                        editor.isActive("heading", { level: 1 }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Heading 1"
                >
                    <Heading1 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={
                        editor.isActive("heading", { level: 2 }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Heading 2"
                >
                    <Heading2 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={
                        editor.isActive("heading", { level: 3 }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Heading 3"
                >
                    <Heading3 size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Lists */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Bullet List"
                >
                    <List size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Ordered List"
                >
                    <ListOrdered size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Alignment */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    className={
                        editor.isActive({ textAlign: "left" }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Align Left"
                >
                    <AlignLeft size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    className={
                        editor.isActive({ textAlign: "center" }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Align Center"
                >
                    <AlignCenter size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    className={
                        editor.isActive({ textAlign: "right" }) ? activeButtonClass : buttonClass
                    }
                    type="button"
                    title="Align Right"
                >
                    <AlignRight size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Code and Quotes */}
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive("codeBlock") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Code Block"
                >
                    <Code size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive("blockquote") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Blockquote"
                >
                    <Quote size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Link and Image */}
                <button
                    onClick={() => setShowLinkModal(true)}
                    className={editor.isActive("link") ? activeButtonClass : buttonClass}
                    type="button"
                    title="Add Link"
                >
                    <Link2 size={18} />
                </button>
                <button
                    onClick={() => setShowImageModal(true)}
                    className={buttonClass}
                    type="button"
                    title="Add Image"
                >
                    <ImageIcon size={18} />
                </button>

                <div className="w-px bg-gray-300" />

                {/* Divider */}
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={buttonClass}
                    type="button"
                    title="Horizontal Rule"
                >
                    <Minus size={18} />
                </button>
            </div>

            {/* Link Modal */}
            {showLinkModal && (
                <div className="bg-blue-50 border-b border-blue-200 p-3 flex gap-2">
                    <input
                        type="url"
                        placeholder="https://example.com"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        className="flex-1 rounded-md border border-blue-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") addLink();
                        }}
                        autoFocus
                    />
                    <button
                        onClick={addLink}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                        type="button"
                    >
                        Add Link
                    </button>
                    <button
                        onClick={() => {
                            setShowLinkModal(false);
                            setLinkUrl("");
                        }}
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 transition"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Image Modal */}
            {showImageModal && (
                <div className="bg-green-50 border-b border-green-200 p-3 flex gap-2">
                    <input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="flex-1 rounded-md border border-green-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") addImage();
                        }}
                        autoFocus
                    />
                    <button
                        onClick={addImage}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
                        type="button"
                    >
                        Add Image
                    </button>
                    <button
                        onClick={() => {
                            setShowImageModal(false);
                            setImageUrl("");
                        }}
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 transition"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Editor Content */}
            <EditorContent
                editor={editor}
                className="prose prose-sm max-w-none p-4 min-h-75 focus:outline-none"
            />
        </div>
    );
}

