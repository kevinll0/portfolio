import React from 'react'
interface TagsProps {
    tag: string, handleTagsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Tags({ tag, handleTagsChange }: TagsProps) {
    return (
        <label className="inline-flex items-center mr-4 mb-2" key={tag}>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" value={tag} onChange={handleTagsChange} />
            <span className="ml-2 font-semibold">{tag}</span>
        </label>
    )
}

export default Tags