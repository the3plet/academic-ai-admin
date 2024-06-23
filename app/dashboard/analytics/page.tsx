'use client'
import ListAnalytics from '@/components/analytics/ListAnalytics'
import { useAnalytics } from '@/lib/query-hooks/analytics'
import { Group, TextInput, Title } from '@mantine/core'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Title order={2}>Analytics</Title>
      <Group justify="space-between" my="sm">
        <TextInput placeholder="Search courses" />

        {/* <AddCourse /> */}
      </Group>

     <ListAnalytics/>
    </div>
  )
}

export default page