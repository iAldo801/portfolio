'use client'

import { Toggle } from "@/components/ui/toggle"
import { type Editor } from '@tiptap/react'
import {
    Bold,
    Heading2,
    Italic,
    List,
} from "lucide-react"

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {

    if (!editor) return null

    return (

        <div className='py-3 overflow-hidden'>

            <div className='border bg-primary-foreground/50 backdrop-blur-sm rounded-md py-1 px-1'>

                <Toggle
                    size={"sm"}
                    pressed={editor.isActive('heading')}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                    <Heading2 />
                </Toggle>

                <Toggle
                    size={"sm"}
                    pressed={editor.isActive('bold')}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                >
                    <Bold />
                </Toggle>

                <Toggle
                    size={"sm"}
                    pressed={editor.isActive('italic')}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                >
                    <Italic />
                </Toggle>


                <Toggle
                    size={"sm"}
                    pressed={editor.isActive('bulletList')}
                    onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <List />
                </Toggle>

            </div>

        </div>

    )

}