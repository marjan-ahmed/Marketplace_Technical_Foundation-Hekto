import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function page() {
  return (
    <div>
        <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold"></span>
                </CardContent>
              </Card>
    </div>
  )
}

export default page