'use client'

import * as React from 'react'
import { StoryTemplate } from '@/components/templates/story-template'
import { StoryBookReader } from '@/components/organisms/story-book-reader'
import { mockLearning } from '@/lib/mock'

export default function CeritaPage() {
  const story = mockLearning.stories[0]

  return (
    <StoryTemplate>
      <div className="min-h-screen flex items-center justify-center p-4 md:p-12">
        <StoryBookReader title={story.title} pages={story.pages} />
      </div>
    </StoryTemplate>
  )
}
