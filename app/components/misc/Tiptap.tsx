'use client'

import { Heading } from '@tiptap/extension-heading'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './Toolbar'

export default function Tiptap({ content, onChange, }: { content: string, onChange: (richText: string) => void }) {

    const editor = useEditor({
        extensions: [StarterKit.configure({
            bulletList: {
                keepAttributes: true,
                keepMarks: true,
            },
            orderedList: {
                keepAttributes: true,
                keepMarks: true,
            },
        }),
        Heading.configure({
            levels: [2],
            HTMLAttributes: {
                class: 'text-3xl font-bold'
            }
        })
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'bg-primary-foreground/50 backdrop-blur-3xl rounded-md border border-input disabled:cursor-not-allowed disabled:opacity-50 focus:ring-[3px] focus:ring-amber-500 h-[30rem] overflow-y-auto p-3',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    return (

        <div className='flex flex-col justify-stretch'>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>

    )

}