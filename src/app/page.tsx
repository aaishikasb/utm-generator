'use client'

import { useState } from 'react'
import { Link, At, Tag, Megaphone, Copy, Check } from '@phosphor-icons/react'

export default function Home() {
  const [utmSource, setUtmSource] = useState('')
  const [utmMedium, setUtmMedium] = useState('repository')
  const [copied, setCopied] = useState(false)

  const destinationUrl = 'https://www.ngrok.com/signup'
  const utmContent = 'signup'
  const utmCampaign = 'cli_program'

  const generateUrl = () => {
    const params = new URLSearchParams()
    if (utmSource) params.append('utm_source', utmSource)
    if (utmMedium) params.append('utm_medium', utmMedium)
    params.append('utm_content', utmContent)
    params.append('utm_campaign', utmCampaign)
    return `${destinationUrl}?${params.toString()}`
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold mb-8 text-white text-center">CLI Program UTM Generator</h1>
      
      <div className="flex flex-col gap-4 w-full max-w-[55rem]">
        {/* Input Fields Row */}
        <div className="flex flex-row items-end gap-3 flex-wrap justify-center">
          {/* Destination URL */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-400 flex items-center gap-1">
              <Link size={14} />
              Destination URL
            </label>
            <input
              type="text"
              value={destinationUrl}
              disabled
              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-400 text-sm sm:w-64 cursor-not-allowed overflow-hidden text-ellipsis"
            />
          </div>

          {/* utm_source */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-400 flex items-center gap-1">
              <At size={14} />
              utm_source
            </label>
            <input
              type="text"
              value={utmSource}
              onChange={(e) => setUtmSource(e.target.value)}
              placeholder="gh username"
              className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm sm:w-40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* utm_medium */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-400 flex items-center gap-1">
              <Tag size={14} />
              utm_medium
            </label>
            <select
              value={utmMedium}
              onChange={(e) => setUtmMedium(e.target.value)}
              className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm sm:w-40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <option value="repository">repository</option>
              <option value="landing">landing</option>
            </select>
          </div>

          {/* utm_content */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-400 flex items-center gap-1">
              <Tag size={14} />
              utm_content
            </label>
            <input
              type="text"
              value={utmContent}
              disabled
              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-400 text-sm sm:w-32 cursor-not-allowed overflow-hidden text-ellipsis"
            />
          </div>

          {/* utm_campaign */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="text-xs text-gray-400 flex items-center gap-1">
              <Megaphone size={14} />
              utm_campaign
            </label>
            <input
              type="text"
              value={utmCampaign}
              disabled
              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-400 text-sm sm:w-32 cursor-not-allowed overflow-hidden text-ellipsis"
            />
          </div>
        </div>

        {/* Generated URL */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-gray-400 flex items-center gap-1">
            <Link size={14} />
            Generated URL
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-green-400 text-sm break-all overflow-wrap-anywhere">
              {generateUrl()}
            </div>
            <button
              onClick={copyToClipboard}
              className="px-3 py-2 text-white rounded-md flex items-center justify-center gap-2 transition-colors text-sm shrink-0"
              style={{ backgroundColor: '#2E54EA' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e3fba'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2E54EA'}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
