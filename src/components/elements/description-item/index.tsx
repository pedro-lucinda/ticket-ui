import React from 'react'

export type IDescriptionItemProps = {
  label: string
  content: string
}

export const DescriptionItem = ({ label, content }: IDescriptionItemProps) => {
  return (
    <div className="flex md:gap-5 gap-1 max-md:flex-wrap">
      <label className="font-bold text-sm capitalize">{label}:</label>
      <p className="font-medium text-sm">{content}</p>
    </div>
  )
}
